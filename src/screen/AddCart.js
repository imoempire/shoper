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


export default function AddCart() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <Text style={styles.texts}>Add to cart</Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
          quod commodi dolorum ullam officia, consectetur porro fuga aliquam
          earum sapiente adipisci accusantium quibusdam sed ea exercitationem.
          Iure repellendus omnis enim.
        </Text>
      </View>
      <View style={styles.image}>
        <Image style={styles.img} source={require("../../assets/add-to.png")} />
      </View>
      <View style={styles.Buttons}>
        <TouchableOpacity onPress={()=>navigate("payment")} style={[styles.btns, styles.btns_shadow]}>
          <Text style={{ fontSize: 20, padding: 10 }}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.arrows}>
        <TouchableOpacity onPress={()=>navigate("online")}>
      <Text>Previous</Text>
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
        <Text>Skip</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  texts: {
    flex: 0.4,
    fontSize: 25,
    top: 15,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  title: {
    flex: 0.7,
    top: 20,
  },
  image: {
    flex: 0.7,
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: 300,
  },
  Buttons: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  btns: {
    alignItems: "center",
    width: 100,
    backgroundColor: "#776FC3",
    borderRadius: 20,
    marginTop: 60,
  },
  btns_shadow: {
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
    backgroundColor: '#E9E8F7',
  },
  arrow_btn: {
     justifyContent: 'center',
     right: 14,
     flexDirection: 'row',
  }
});
