import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React, { useReducer, useEffect } from "react";

// import AuthContext from "../lib/authContext";
// import { initialState, reducer } from "../lib/authReducer";
// import { listenAuthState } from "../lib/firebase";


function MyApp({ Component, pageProps }: AppProps) {
  // const [state, dispatch] = useReducer(
  //   reducer,
  //   initialState
  // );
  // useEffect(() => {
  //   return listenAuthState(dispatch);
  // }, []);
  return (
    // <AuthContext.Provider value={state}>
      <Component {...pageProps} />
    // {/* </AuthContext.Provider> */}
  );
}

export default MyApp
