import { StyleSheet } from "react-native";
import { vw, vh } from "react-native-css-vh-vw";
import { Layout, Font, Colors } from "style";

export default StyleSheet.create({
  container: {
    ...Layout.containerWithGradient,
  },
  background:{
    flex:1,
    backgroundColor:Colors.skyblue
  },
  containerBack:{
    position:"absolute",
    height:vh(85),
    bottom:0,
    width:vw(100),
    backgroundColor:Colors.lightblue,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingTop:80,
    paddingHorizontal:20
  },
  guideLabel:{
    fontSize:18,
    color:Colors.white,
    textAlign:"center",
    marginBottom:40,
  },
  description:{
    display:"flex",
    flexDirection:"row",
    alignSelf:"center",
    marginBottom:50,
  },
  descriptionPart:{
    fontSize:28,
    color:Colors.white,
    textAlign:"center",
    fontWeight:"500"
  },
  problemPart:{
    fontSize:22,
    color:Colors.white,
    textAlign:"center",
    fontWeight:"500",
    borderBottomWidth:0
  },
  problemPartBtn:{
  },
  view:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  options:{
    marginVertical:8,
    display:"flex",
    flexDirection:"row",
    alignSelf:"center"
  },
  option:{
    backgroundColor:Colors.white,
    padding:20,
    borderWidth:1,
    borderColor:Colors.transparent,
    borderRadius:20,
    marginHorizontal:10
  },
  optionLabel:{
    color:Colors.lightblue,
    fontSize:22,
    fontWeight:"800"
  },
  footer:{
    position:"absolute",
    bottom:0,
    height:vh(20),
    backgroundColor:Colors.whiteblue,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    width:vw(100),
    paddingVertical:20,
    paddingHorizontal:20
  },
  button:{
    width:"100%",
    backgroundColor:"#6d91a5",
    borderRadius:50,
    paddingVertical:15,
    color:Colors.white,
    fontSize:22,
    fontWeight:"800",
    textAlign:"center"
  }
});
