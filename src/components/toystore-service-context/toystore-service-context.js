import React from "react";
const {
  Provider: ToyStoreProvider,
  Consumer: ToyStoreConsumer
} = React.createContext();

export { ToyStoreConsumer, ToyStoreProvider };
