import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RootNavigator from "./RootNavigator";

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "red" },
        headerShown: false,
      }}
    >
      <AppStack.Screen name="AppStack" options={{ headerShown: false }} component={RootNavigator} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
