import React, { useState } from "react";
import DataIllustration from "./assets/data.svg";
import BearMarketIllustration from "./assets/bear-market.svg";
import GrowthCurveIllustration from "./assets/growth-curve.svg";
import { calculateAmtAndPercent, hasUserGaveCorrectValue } from "./functions";

export default function Main({
  isMoreThanFiftyPercentLoss,
  setIsMoreThanFiftyPercentLoss
}) {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");

  const [showMessage, setShowMessage] = useState("");
  const [isGainProfit, setIsGainProfit] = useState(false);
  const [isLossAmt, setIsLossAmt] = useState(false);

  const handleInputChange = (event) => {
    if (showMessage) setShowMessage("");
    if (isGainProfit) setIsGainProfit(false);
    if (isLossAmt) setIsLossAmt(false);
    if (isMoreThanFiftyPercentLoss) setIsMoreThanFiftyPercentLoss(false);

    if (event.target.name === "purchasePrice")
      setPurchasePrice(event.target.value);

    if (event.target.name === "stockQuantity")
      setStockQuantity(event.target.value);

    if (event.target.name === "currentPrice")
      setCurrentPrice(event.target.value);
  };

  const handleCheckBtnClick = () => {
    if (
      !hasUserGaveCorrectValue(purchasePrice) ||
      !hasUserGaveCorrectValue(stockQuantity) ||
      !hasUserGaveCorrectValue(currentPrice)
    ) {
      setShowMessage(
        "Enter valid Purchase Price, Stock Quantity, and Current Price"
      );
      return;
    }

    const [amt, percent] = calculateAmtAndPercent(
      purchasePrice,
      stockQuantity,
      currentPrice
    );

    if (amt > 0) {
      setIsGainProfit(true);
      setShowMessage(
        `Currently you are in ${percent}% profit, And your gained amount is ₹${amt}`
      );
    } else if (amt < 0) {
      setIsLossAmt(true);
      setShowMessage(
        `Currently you are in ${Math.abs(
          percent
        )}% lost, And your lost amount is ₹${Math.abs(amt)}`
      );

      if (Math.abs(percent) > 50) setIsMoreThanFiftyPercentLoss(true);
    } else {
      setShowMessage("Nothing in gain or loss");
    }
  };

  return (
    <main>
      <section className="LeftSection">
        <img
          src={
            isGainProfit
              ? GrowthCurveIllustration
              : isLossAmt
              ? BearMarketIllustration
              : DataIllustration
          }
          alt="data illustration svg"
        />
      </section>

      <section className="RightSection">
        <h3
          style={
            isMoreThanFiftyPercentLoss ? { color: "var(--primary-color)" } : {}
          }
        >
          Check Profit/Loss on your Stock
        </h3>

        <div className="InputLabelDiv">
          <label>Purchase Price</label>
          <input
            type="number"
            min="0"
            name="purchasePrice"
            value={purchasePrice}
            onChange={handleInputChange}
          />
        </div>

        <div className="InputLabelDiv">
          <label>Stock Quantity</label>
          <input
            type="number"
            min="0"
            name="stockQuantity"
            value={stockQuantity}
            onChange={handleInputChange}
          />
        </div>

        <div className="InputLabelDiv">
          <label>Current Price</label>
          <input
            type="number"
            min="0"
            name="currentPrice"
            value={currentPrice}
            onChange={handleInputChange}
          />
        </div>

        <div className="ButtonContainer">
          <button onClick={handleCheckBtnClick}>check</button>
        </div>

        {showMessage && (
          <div
            className={`showMessageDiv ${
              showMessage.includes("lost") ||
              showMessage.includes("Enter valid")
                ? "LossBorder"
                : "GainBorder"
            }`}
          >
            {showMessage}
          </div>
        )}
      </section>
    </main>
  );
}
