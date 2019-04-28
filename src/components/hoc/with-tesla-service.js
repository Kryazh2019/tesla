import React from "react";
import { TeslaServiceConsumer } from "../tesla-service-context";

const withTeslaService = () => Wrapped => {
  return props => {
    return (
      <TeslaServiceConsumer>
        {teslaService => {
          return <Wrapped {...props} teslaService={teslaService} />;
        }}
      </TeslaServiceConsumer>
    );
  };
};
export default withTeslaService;
