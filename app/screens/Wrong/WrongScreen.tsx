import * as React from "react";
import { ScrollView, View, TouchableOpacity, TextInput,Text } from "react-native";
import { Tooltip } from 'react-native-elements';
import { DrawerActions, useNavigation ,useRoute} from "@react-navigation/native";

import { Icon } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";

import styles from "./WrongScreen.styles";
import navigationOptions from "./WrongScreen.navigationOptions";

const WrongScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const selected = route.params?.selected;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [words1,setWords1] = React.useState(route.params?.words1);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [words2,setWords2] = React.useState(route.params?.words2);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [answer,setAnswer] = React.useState(route.params?.answer);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [problem_id,setProblem_id] = React.useState(route.params?.problem_id);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [problem_en,setProblem_en] = React.useState(route.params?.problem_en);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [problem_de,setProblem_de] = React.useState(route.params?.problem_de);
  // @ts-ignore

  const [random_word_en,setRandom_word_en] = React.useState(route.params?.random_word_en);
  

  const continuePlay = () => {
    
    const post = {prev_id:problem_id};
    
    if(problem_id==3)
      navigator.openEndScreen();
    else
      navigator.openProblemScreen(post);
  }
  
  return (
    <View style={styles.background}>
      <View style={styles.containerBack}>
        <Text style={styles.guideLabel}>{"Fill in the missing word"}</Text>
        <View style={styles.description}>
          {
            problem_en.map((item,index)=>(
              (item == random_word_en)? (<Text style={[styles.descriptionPart,{fontWeight:"bold", borderBottomWidth :1,borderBottomColor:Colors.white}]} key={index} >{item+" "}</Text>)
              :
              (<Text style={styles.descriptionPart} key={index}>{item+" "}</Text>)

            ))
            
          }
          <Text style={styles.descriptionPart}>{"."}</Text>
        </View>
        <View style={[styles.description,{marginBottom:20}]}>
          {
            problem_de.map((item,index)=>(
              (item==answer)?(selected!=""?(<View style={[styles.option,{paddingVertical:10,borderRadius:15,marginTop:-10,backgroundColor:Colors.pink}]} key={index}>
                <Text style={[styles.optionLabel,{color:Colors.white}]}>{selected}</Text>
              </View>):(<Text style={[styles.problemPartBtn,{borderBottomColor:Colors.white,borderBottomWidth:1}]} key={index}>{"          "}</Text>)):
              (
                <Text style={styles.problemPart} key={index}>{" "+item+" "}</Text>
              )
            ))
          }
          <Text style={styles.problemPart}>{"."}</Text>
        </View>
        <View style={styles.options}>
          {words1.map((item,index)=>(
              (selected!=item) ? (<View key={index} style={[styles.option,{backgroundColor:"#a3b5bf"}]}>
              <Text style={styles.optionLabel}>{item}</Text>
          </View>): (<View key={index} style={[styles.option,{backgroundColor:"#6d91a5"}]}><Text style={[styles.optionLabel,{color:Colors.transparent}]}>{item}</Text></View>)
              
          ))}
          
        </View>
        <View style={styles.options}>
          {words2.map((item,index)=>(
              selected!=item ? (<View key={index} style={[styles.option,{backgroundColor:"#a3b5bf"}]} >
              <Text style={styles.optionLabel}>{item}</Text>
          </View>): (<View key={index} style={[styles.option,{backgroundColor:"#6d91a5"}]}><Text style={[styles.optionLabel,{color:Colors.transparent}]}>{item}</Text></View>)
              
          ))}
        </View>
        <View style={styles.footer}>
          <Text style={{color:Colors.white, fontSize:18, fontWeight:"bold",marginBottom:20}}>{"Answer: " + answer}</Text>
          <TouchableOpacity onPress={()=>continuePlay()}>
            <Text style={[styles.button,{backgroundColor:Colors.white,color:Colors.pink}]}>{"Continue"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

WrongScreen.navigationOptions = navigationOptions();

export default WrongScreen;
