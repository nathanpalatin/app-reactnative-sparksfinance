import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  card: {
    width: '100%',
    backgroundColor: '#262626',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#333333',
    borderWidth: 1,
    marginBottom: 10
  },
  task: {
    color: '#F2F2F2',
    fontWeight: '400',
    fontSize: 14,
    flex: 1,
    paddingLeft: 10,
    paddingTop: 2,
  },
  taskDone: {
    fontWeight: '400',
    fontSize: 14,
    flex: 1,
    paddingLeft: 10,
    paddingTop: 2,
    textDecorationLine: 'line-through',
    color: '#808080'
  },
  buttonActs: {
    alignItems: 'center', 
  }
})
