export const hasUserGaveCorrectValue = (state) => {
  return state.length !== 0 && Number(state) > 0;
};

export const calculateAmtAndPercent = (
  purchasePrice,
  stockQuantity,
  currentPrice
) => {
  purchasePrice = Number(purchasePrice);
  stockQuantity = Number(stockQuantity);
  currentPrice = Number(currentPrice);

  const amt = (currentPrice - purchasePrice) * stockQuantity;
  const percent = (amt * 100) / (purchasePrice * stockQuantity);

  return [amt.toFixed(2), percent.toFixed(2)];
};
