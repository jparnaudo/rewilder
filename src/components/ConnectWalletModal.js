import { useEthers } from "@usedapp/core";
import { useEffect, useCallback } from "react";
import { walletconnect } from "../lib/connectors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function ConnectWalletModal({ onOpen, isOpen, onClose }) {
  const { activate, activateBrowserWallet, error } = useEthers();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overlay');
    } else {
      document.body.classList.remove('overlay');
    }
  }, [isOpen]);

  useEffect(() => {
    if (error) {
      if (error.name == 'UserRejectedRequestError') {
        onOpen();
      } else {
        console.log(`Unexpected error!! fix this:`, error);
      }
    }
  }, [error]);

  const clickMetamask = async () => {
    await activateBrowserWallet();
    if (error) {
      if (error.name == 'UserRejectedRequestError') {
        // user rejected connection, we want to leave modal open
        return;
      }
      console.log("Unexpected MetaMask error:", error);
    }
    onClose();
  };

  const clickWalletConnect = async () => {
    await activate(walletconnect);
    onClose();
  };

  // ESC key closes
  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div>
    { 
      <div className={"connect-wallet-popup"+(isOpen?" active":"")}>
        <div className="connect-wallet-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <h4>Connect to a wallet</h4>
        <div className="connect-option">
          <a href="#" onClick={clickMetamask}>
            <img src="assets/img/icon/metamask-icon.svg" alt="Metamask" />
            <span>Metamask</span>
          </a>
          <a href="#" onClick={clickWalletConnect}>
            <img src="assets/img/icon/wallet-connect-icon.svg" alt="WalletConnect" />
            <span>WalletConnect</span>
          </a>
        </div>
        <p>
          By connecting a wallet, you agree to Rewilder’s 
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
        </p>
      </div>
    }
    </div>
  );
}

export default ConnectWalletModal;
