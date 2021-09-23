import { useEthers } from "@usedapp/core";
import React, { useContext } from "react";
import Head from "./Head";
import networkMatches from "../lib/networkMatches";
import NetworkErrorMessage  from "./NetworkErrorMessage";
import WalletInfo from "./WalletInfo";
import WalletModalContext from "../lib/walletModalContext";

export const Layout = ({ children, ...customMeta }) => {
  const { account } = useEthers();
  const incorrectNetwork = !networkMatches();
  const modalContext = useContext(WalletModalContext);

  return (
    <>
      <Head {...customMeta} />
      {account ? (
        <WalletInfo />
        ) : (
        <div className="header-button">
          <a href="#" onClick={modalContext.onOpen}>Connect wallet</a>
        </div>
      )}
      {/* <NetworkErrorMessage /> */}
      
      <div className="header-v1-wrapper">
        <div className="logo"> 
            <a href="#">
              <img className="big-logo" src="assets/img/logo/logo.svg" alt="Rewilder logo" />
              <img className="small-logo" src="assets/img/logo/small-logo.svg" alt="Rewilder logo" />
            </a>
            {/* <NetworkErrorMessage />
            {
            !incorrectNetwork &&
              <a href="#">
                <img className="big-logo" src="assets/img/logo/logo.svg" alt="logo" />
                <img className="small-logo" src="assets/img/logo/small-logo.svg" alt="logo" />
              </a>
            } */}
        </div>
        {children}
        <div className="footer text-center">
          <p>© Rewilder Foundation, Inc.  -  Terms of use  -  Privacy</p>
        </div>
      </div>
      
      {modalContext.modalComponent}

    </>
  );
};
