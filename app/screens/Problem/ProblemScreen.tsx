import * as React from "react";
import { ScrollView, View, TouchableOpacity, TextInput,Text } from "react-native";
import { Tooltip } from 'react-native-elements';
import { DrawerActions, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";

import { Icon } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";

import styles from "./ProblemScreen.styles";
import navigationOptions from "./ProblemScreen.navigationOptions";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, query } from 'firebase/database';

const ProblemScreen: NavStatelessComponent =  () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const [problem_en,setProblem_en] = useState([]);
  const [problem_de,setProblem_de] = useState([]);
  let [random_words1,setRandom_words1] = useState([]);
  let [random_words2,setRandom_words2] = useState([]);
  let [random_word_en,setRandom_word_en] = useState("");
  let [answer,setAnswer] = useState("");
  

  const db = getDatabase();
  const referenceProblem = ref(db,'/data');
  const referenceWords = ref(db,'/words');
  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const prevId = route.params?route.params.prev_id:0;
  const isFocused = useIsFocused();
  useEffect(() => {
    (async () => {
      onValue(referenceProblem, (snapshot) => {
        const data =  snapshot.val();
        const problems = data.problems;
        var temp_problem_en = [];
        var temp_problem_de = [];
        for(var i=0;i<problems.length;i++){
          if(problems[i].id==(prevId+1)){
            temp_problem_en = problems[i].english;
            temp_problem_de = problems[i].german;

            setProblem_en(problems[i].english) ;
            setProblem_de(problems[i].german);
            
          }
        }
        var words = data.words;
        var shuffled = words.sort(() => 0.5 - Math.random());
        words = shuffled.slice(0, 3);
        var random = Math.floor(Math.random() * temp_problem_en.length);
        var random_word_english = temp_problem_en[random];
        setRandom_word_en(random_word_english);
        setAnswer(temp_problem_de[random]);
        words.push(temp_problem_de[random]);
        words = words.sort(() => 0.5 - Math.random());
        setRandom_words1([words[0],words[1]]);
        setRandom_words2([words[2],words[3]]);
        onValue(referenceWords, (snapshot) => {
          
        });
      });
      
    })();
  }, [isFocused]);
  const CheckScreen = ()=>{
    var post = {problem_en:problem_en,problem_de:problem_de,random_words1:random_words1,random_words2:random_words2,random_word_en:random_word_en,answer:answer,problem_id:prevId+1};
    navigator.openCheckScreen(post);
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
              (item==answer)?(<Text key={index} style={[styles.problemPartBtn,{borderBottomColor:Colors.white,borderBottomWidth:1}]}>{"                 "}</Text>):
              (
                <Tooltip
                    key={index}
                    height={40}
                    width={80}
                    overlayColor={Colors.transparent}
                    backgroundColor={Colors.white}
                    containerStyle={{}}
                    popover={<Text style={{ fontSize: 18, color: Colors.lightblue }}>{problem_en[index]}</Text>} ModalComponent={undefined} toggleOnPress={undefined} toggleAction={undefined} onOpen={undefined} withPointer={undefined} onClose={undefined} withOverlay={undefined} highlightColor={undefined} skipAndroidStatusBar={undefined} closeOnlyOnBackdropPress={undefined}                >
                  <Text style={styles.problemPart}>{" "+item+" "}</Text>
                </Tooltip>
              )
            ))
          }
          <Text style={styles.problemPart}>{"."}</Text>
          
        </View>
        <View style={styles.options}>
          {
            random_words1.map((item,index)=>(
              <TouchableOpacity key={index} style={styles.option}>
                <Text style={styles.optionLabel}>{item}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.options}>
          {
            random_words2.map((item,index)=>(
              <TouchableOpacity key={index} style={styles.option}>
                <Text style={styles.optionLabel}>{item}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={()=>CheckScreen()}>
            <Text style={styles.button}>{"Continue"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

ProblemScreen.navigationOptions = navigationOptions();

export default ProblemScreen;
