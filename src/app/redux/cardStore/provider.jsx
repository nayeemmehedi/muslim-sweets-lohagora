"use client";

import React from "react";
import { Provider } from "react-redux";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../store";
// import Loading from "../loading";

function ReduxProvider({ children }) {
  let persistor = persistStore(store);

  return (
    <div>
      <PersistGate  persistor={persistor}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </div>
  );
}

export default ReduxProvider;
