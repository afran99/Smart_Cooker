import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function App() {
  return (

    <View style={styles.view2}>

      <LinearGradient colors={['#58b4ed', '#ffffff']}
        style={styles.Linear}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y:  1}}  >
        <View style={styles.view1}>
          <Image source={require('./assets/image/logo.png')} contentFit={"contain"} style={styles.logo} />
          <Text style={styles.logoText}>Smart Cooker</Text>
        </View >
      </LinearGradient>

      <View style={styles.view3}>
        <Text style={styles.rText}>Recipies</Text>
      </View>

      <View style={styles.}></View>

    </View>




  );
}

const styles = StyleSheet.create({
  Linear: {
    height: "20%",
    width: "100%"

  },

  view1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  view2: {
    flex: 1,
    backgroundColor: "white",
  },

  view3: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },

  logo: {
    width: 80,
    height: 80,
  },

  logoText: {
    fontSize: 30,
    fontWeight: "bold"
    fon
  },

  rText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginStart: 30,
    marginTop: 20,
  }


});
