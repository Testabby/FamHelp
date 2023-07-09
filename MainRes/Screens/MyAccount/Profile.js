
import React from 'react'
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { myHeight, myWidth } from '../../theme/AppScaling';

const Profile = () => {
//   return (
//     <View>
//     <View
//       style={styles.greenHeader}
//     >
// <Text>Profile</Text>
//     </View>
    
//   </View>
//   )
// }




// import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
// import { Nunito_700Bold } from "@expo-google-fonts/nunito";
// import AppLoading from "expo-app-loading";
// import { myHeight } from "../component/AppScaling";

// const About = () => {
//   let [fontsLoaded] = useFonts({
//     WorkSans_400Regular,
//     Nunito_700Bold,
//   });

//   if (!fontsLoaded) {
//     <AppLoading />;
//   }

  return (
    <View style={styles.aboutContainer}>
      <View
       style={{
       position: 'absolute', backgroundColor: 'rgb(7,201,109)',
       Top: 0, height: myHeight / 4, width: myWidth,
       alignSelf: 'center',
       borderBottomEndRadius: 30,
       borderBottomStartRadius: 30,}}
    >
    </View>

      <Text style={styles.mainHeader}> Home Helpers </Text>
      <Text style={styles.paraStyle}>Abhilash Kumar Soni</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
         I am fascinated towards physics applied to our daily life and try to spread the same curiosity and fascination about physics in students. I have 5 years of experience as a physics teacher in various institutions.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/thapatechnical/")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://discord.gg/AN8ThRBXtY")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
 };

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    height:myHeight
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 24,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "800",
    // marginTop: 50,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Nunito_700Bold",
  },
  paraStyle: {
    fontSize: 22,
    color: "#fff",
    paddingBottom: 30,
    fontFamily: "WorkSans_400Regular",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    // marginVertical: 30,
    marginTop: 20,
    borderRadius:25,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Nunito_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 26,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Profile