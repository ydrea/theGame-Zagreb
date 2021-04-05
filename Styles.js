import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 40,
  },
  textStyle: {
    fontSize: 18,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
  },
  textinput: {
    borderColor: "royalblue",
    marginVertical: 10,
    backgroundColor: "lightblue",
    height: 40,
    borderWidth: 1,
  },
  containerMap: {
    flex: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
