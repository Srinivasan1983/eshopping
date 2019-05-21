import React from "react";
import { ToyStoreConsumer } from "../toystore-service-context";

const WithToyStoreService = () => WrappedView => {
  
  return props => {
    return (
      <ToyStoreConsumer>
        {toystoreService => (
          <WrappedView {...props} toystoreService={toystoreService} />
        )}
      </ToyStoreConsumer>
    );
  };
};

export default WithToyStoreService;
