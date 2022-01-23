import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackNavigator from "./AppStackNavigator";

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default App;
