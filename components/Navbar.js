import Link from "next/link";
import React,{useState,useEffect} from 'react';
const Web3 = require('web3');
import navStyles from "../styles/Navbar.module.css";

const Navbar = () => {

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
