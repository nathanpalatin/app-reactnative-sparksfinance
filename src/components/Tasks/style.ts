import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  card: {
    width: '100%',
    backgroundColor: '#262626',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: '#333333',
    borderWidth: 1,
    marginBottom: 10,
 
  },
  task: {
    color: '#F2F2F2',
    fontWeight: '400',
    fontSize: 14,
    flex: 1,
    paddingLeft: 0
  },
  buttonDel: {
    marginRight: 10,
    width: 15,
    height: 15,
  },
  btnTaskCheck: {
    marginLeft: 10,
    width: 15,
    height: 5
  }
  
})