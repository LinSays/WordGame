import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ComponentsStyle } from "style";

import ProblemScreen from "../../screens/Problem";
import CheckScreen from "../../screens/Check";
import CorrectScreen from "../../screens/Correct";
import WrongScreen from "../../screens/Wrong";
import EndScreen from "../../screens/End";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  ...ComponentsStyle.transitionBetweenScreenPresets,
};

const RootNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="Problem" component={ProblemScreen} options={screenOptions} />
      <Stack.Screen name="CheckScreen" component={CheckScreen} options={screenOptions} />
      <Stack.Screen name="CorrectScreen" component={CorrectScreen} options={screenOptions} />
      <Stack.Screen name="WrongScreen" component={WrongScreen} options={screenOptions} />
      <Stack.Screen name="EndScreen" component={EndScreen} options={screenOptions} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
