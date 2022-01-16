import React, { useEffect, useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { getEnvironmentsAsync } from "../app/modules/GetEnvironment/getEnvironmentApi";
import { Layout, LayoutSplashScreen } from "../_metronic/layout";
import {
  loadWeb3,
  loadBlockChainData,
  listenAccountChange,
  listenNetworkChange,
} from "../web3/functions/web3";
import { ToastContainer, toast } from "react-toastify";
import { Web3Provider } from "../web3/contexts/web3Context";
import "react-toastify/dist/ReactToastify.css";

export function Routes() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [networkDetails, setNetworkDetails] = useState({
    address: "",
    web3: "",
    connected: "",
    connectTag: "",
    chainData: "",
    wallet: "",
    chainId: "",
    networkId: "",
    balance: "",
  });

  const resetApp = async () => {
    setNetworkDetails({
      address: "",
      web3: "",
      connected: false,
      connectTag: "",
      chainData: "",
      wallet: "",
      chainId: "",
      networkId: "",
      balance: "",
    });
    const web3 = window.web3;
    // localStorage.clear();
    //close -> disconnect
    if (web3 && web3.currentProvider && web3.currentProvider.disconnect) {
      await web3.currentProvider.disconnect();
    }
  };
  
  const handleConnect = async () => {
    const metaMaskInstalled = typeof window.web3 !== "undefined";
    if (metaMaskInstalled) {
      setLoading(true);
      await loadWeb3(setLoading);
      await loadBlockChainData(setNetworkDetails, networkDetails, setLoading);
      await listenAccountChange(
        setNetworkDetails,
        networkDetails,
        setLoading,
        resetApp
      );
      await listenNetworkChange(
        setNetworkDetails,
        networkDetails,
        setLoading,
        resetApp
      );
    } else {
      toast.info(
        "Metamask Extension Not Found ! Please Install Metamask to Connect"
      );
    }
  };

  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.authToken && auth.user,
      // tokenVerified: auth.tokenVerified,
    }),
    shallowEqual
  );

  useEffect(() => {
    let injected = localStorage.getItem("injected");
    if (injected && injected !== undefined) {
      let walletName = localStorage.getItem("wallet_name");
      if (walletName && walletName !== undefined && isAuthorized) {
        if (walletName === "metamask") {
          handleConnect();
        }
      }
    }
  }, []);
  
  const { envLoading } = useSelector((state) => state.environnment);

  // useEffect(() => {
  //     if (!tokenVerified) {
  //         dispatch(verifyAuthTokenAsync());
  //     }
  // }, [tokenVerified])

  useEffect(() => {
    dispatch(getEnvironmentsAsync());
  }, []);

  if (envLoading) {
    return <LayoutSplashScreen />;
  }

  // if (!tokenVerified) {
  //     return <LayoutSplashScreen />
  // }

  return (
    <Web3Provider
      value={{
        loadWeb3,
        loading,
        setLoading,
        networkDetails,
        setNetworkDetails,
        loadBlockChainData,
        listenAccountChange,
        listenNetworkChange,
        handleConnect,
        resetApp,
      }}
    >
      <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={Logout} />
      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </Switch>
    <ToastContainer autoClose={3000} />
    </Web3Provider>
  );
}
