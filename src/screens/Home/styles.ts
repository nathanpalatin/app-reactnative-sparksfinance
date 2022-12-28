import { StyleSheet } from "react-native";
//import { useFonts } from 'expo-font';

//const [loaded] = useFonts({
 // Inter: require('./assets/fonts/Yatra-One.ttf'),
//});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
  },
  topBG: {
    height: 190,
    width: '900%',
    backgroundColor: '#0D0D0D',
    alignItems: 'center', 
  },
  logoTodo: {
    marginTop: 60,
    width: 160,
    resizeMode: 'contain',
  },
  inputAdd: {
    marginTop: -30,
    flex: 1,
    backgroundColor: '#262626',
    height: 56,
    padding: 20,
    fontSize: 16,
    borderRadius: 5,
    color: '#FFFFFF',
    marginRight: 4,
    borderColor: '#0D0D0D',
    borderWidth: 1
  },
  btnAdd: {
    marginTop: -30,
    backgroundColor: '#1E6F9F',
    width: 56,
    height: 56,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: '#FFFFFF',
    fontSize: 30,
  },
 
  tag: {
    borderRadius: 10,
    borderColor: "#999",
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    padding: 5,
   
    fontWeight: "400",
    color: "#999"
},
  formAdd: {
    width: '90%',
    flexDirection: 'row',
    marginBottom: 40,
  },
  boxTasks: {
    flexDirection: 'row',
    width: '90%',
  },
  textTotalTasks: {
    color: '#4EA8DE',
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold',
  },
  textTasksDone: {
    color: '#8284FA',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noList: {
    width: 180,
    flexDirection: 'column',
    height: 200
  },
  myTasks: {
    marginTop: 20,
    paddingTop: 20,
    borderTopColor: '#333333',
    borderTopWidth: 0.9,
    width: '90%',
    
    alignItems: 'center',
  },
  noneTask: {

    color: '#808080',
    marginTop: 40,
    textAlign: 'center',
  },
  noneTaskBold: {
    fontWeight: 'bold',
  }, 
  IMGnoTask: {
    width: 70,
    resizeMode: 'contain',
  }

});
