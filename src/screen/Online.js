import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Online = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.text}>
        <Text style={styles.title}>Online Shopping</Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
          quod commodi dolorum ullam officia, consectetur porro fuga aliquam
          earum sapiente adipisci accusantium quibusdam sed ea exercitationem.
          Iure repellendus omnis enim.
        </Text>
      </View>
      <View style={styles.Image}>
        <Image
          style={styles.image}
          source={require("../../assets/window.png")}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => navigate("add")}
          style={[styles.btn, styles.btn_shadow]}
        >
          <Text style={{ fontSize: 20, padding: 10 }}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.arrows}>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
        <View style={styles.arrow_btn}>
           <View style={[styles.arrow2, 
          ]}></View>
        <View
          style={[
            styles.arrow1,
          ]}
        ></View>
        <View
          style={[
            styles.arrow2,
          ]}
        ></View>
        </View>
        <TouchableOpacity onPress={()=>navigate("payment")}>
          <Text>skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Online;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    flex: 0.5,
    fontSize: 25,
    top: 15,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  text: {
    flex: 0.8,
    top: 20,
  },
  Image: {
    flex: 0.8,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  buttons: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    alignItems: "center",
    width: 100,
    backgroundColor: "#776FC3",
    borderRadius: 20,
    marginTop: 60,
  },
  btn_shadow: {
    shadowColor: "#E9E8F7",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 2,
    shadowOpacity: 0.9,
  },
  arrows: {
   flex: 0.1,
   alignItems: "center",
   justifyContent: "space-between",
   flexDirection: "row",
  },
  arrow1: {
   borderRadius: 10,
   marginRight: 5,
   width: 20,
   height: 10,
   backgroundColor: "#776FC3"
  },
  arrow2: {
    borderRadius: 20,
    marginRight: 5,
    width: 10,
    height: 10,
    backgroundColor: "#E9E8F7",
  },
  arrow_btn: {
    justifyContent: "center",
    left: 19,
    flexDirection: "row",
  },
});
