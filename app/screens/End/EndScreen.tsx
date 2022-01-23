import * as React from "react";
import { ScrollView, View, TouchableOpacity, TextInput,Text } from "react-native";
import { Tooltip } from 'react-native-elements';
import { DrawerActions, useNavigation ,useRoute} from "@react-navigation/native";

import { Icon } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";

import styles from "./EndScreen.styles";
import navigationOptions from "./EndScreen.navigationOptions";

const EndScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  
  return (
    <View style={styles.background}>
      <View style={styles.containerBack}>
        <Text style={[styles.guideLabel,{fontSize:22}]}>{"The End"}</Text>
        <Text style={[styles.guideLabel,{fontSize:26, color:Colors.pink}]}>{"Congratulations"}</Text>
        
      </View>
    </View>
  );
};

EndScreen.navigationOptions = navigationOptions();

export default EndScreen;
