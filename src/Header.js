import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <header>
      <div className="GithubIconContainer">
        <a href="https://github.com/hsnice16" target="_blank" rel="noreferrer">
          <AiFillGithub className="GithubIcon" />
        </a>
      </div>
    </header>
  );
}
