import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24,
  },
  greeting: {
    color: 'white',
    marginTop: 50,
    marginBottom: 30,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    color: '#4EA8DE',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subTitle: {
    color: 'lightgray',
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    flex: 1,
    marginRight: 4,
    color: '#fff',
    marginBottom: 24,
  },
  formInput:{
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  formTasks: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  criadas: {
    fontWeight: 'bold',
    color: '#4EA8DE',
    marginBottom: 16,
    padding: 8,
  },
  concluidas: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#8284FA',
    padding: 8,

  },
  listEmptyTask: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },
  taskCount: {
    backgroundColor: '#262626',
    width: 35,
    height: 30,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  taskCountText: {
    color: '#D9D9D9',
    fontWeight: 'bold',
  },
})