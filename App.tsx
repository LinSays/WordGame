import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { FormattedProvider } from "react-native-globalize";
import { includes } from "ramda";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
import * as Sentry from "sentry-expo";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import AppNavigator from "./app/navigation/Navigator/AppNavigator";

const firebaseConfig = {
  apiKey: "AIzaSyBPs7VSHwKzTvlagerw9wsg_KsRuhuatB0",
  authDomain: "test-6a0d9.firebaseapp.com",
  databaseURL: "https://test-6a0d9-default-rtdb.firebaseio.com",
  projectId: "test-6a0d9",
  storageBucket: "test-6a0d9.appspot.com",
  messagingSenderId: "673938079164",
  appId: "1:673938079164:web:c6026d57556158cee5bfb9",
  measurementId: "G-SBEPMSCS3V"
};
initializeApp(firebaseConfig);

const App: React.FC = () => {
  enableScreens();


  const [ready, setReady] = useState(false);


  useEffect(() => {
    Promise.all([
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialCommunityIcons.font,
        Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
      }),
    ])
      .then(() => {
        setReady(true);
      })
      .catch((error) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Sentry.captureException(error);
      });
  }, []);

  let body = <View />;

  if (ready) {
    body = (
            <AppNavigator />
    );
  }

  

  return (
    <SafeAreaProvider>
      {body}
    </SafeAreaProvider>
  );
};


export default App;
