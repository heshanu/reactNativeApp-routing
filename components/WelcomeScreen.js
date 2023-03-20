import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../img/logo.png")} />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("MenuItems")}
      >
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
      <br />
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  logo: {
    flex: 0.5,
  },
  container: {
    flex: 1,
    color: "red",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
