import Link from "next/link";
import React, { useState, useEffect } from "react";
const Web3 = require("web3");
import navStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [walletAddress, setwalletAddress] = useState(null);

  setwalletAddress("0xaE9526a118dB2A81B3933b8F07A713137f910bFc");
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
