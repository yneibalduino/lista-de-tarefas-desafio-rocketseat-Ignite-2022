import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({ 
  container: {
    width: '100%',
    backgroundColor: '#262626',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 5,
    padding: 12,
    borderColor: '#333333',
    borderWidth: 1,
  },
  tasks: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 6,
  },
  button: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  colorText: {
    color: '#F2F2F2',
  },
  buttonAdd: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAddText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
})