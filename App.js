import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
export default function App() {

  const showAlert = () => {
    Alert.alert("Hello!", "This is a simple alert.");
  };

  return (

    <View style={styles.view2}>

      {/* Start Header part */}

      <LinearGradient colors={['#58b4ed', '#ffffff']}
        style={styles.Linear}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}  >
        <View style={styles.view1}>
          <Image source={require('./assets/image/logo.png')} contentFit={"contain"} style={styles.logo} />
          <Text style={styles.logoText}>Smart Cooker</Text>
        </View >
      </LinearGradient>
      {/* End Header part */}

      {/* start recipies text view */}
      <View style={styles.view3}>
        <Text style={styles.rText}>Recipies</Text>
      </View>
      {/* end recipies text view */}


      {/* Start recipi view */}
      <View style={styles.reView}>

        {/* start producy*/}
        <Pressable style={styles.proView}
          onPress={showAlert}>
          <View style={styles.prDetailsView}>
            <View style={styles.imgView}>
              <Image source={require('./assets/image/watalappan.jpg')} contentFit={"contain"} style={styles.pImage} />
            </View>
            <View style={styles.pdView}>
              <Text style={styles.pTitle}>Watalappan</Text>
              <Text style={styles.pDiscription}>
              Watalappan is a creamy Sri Lankan dessert with jaggery, 
              coconut milk, and spices, enjoyed at festivals.
                </Text>
              <Text style={styles.pTime}>Time : 15 : 00 Min</Text>

            </View>
          </View>



        </Pressable>

        <LinearGradient colors={['#01b4ed', '#88ff89']}
          style={styles.proView}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}  >



        </LinearGradient>

        <LinearGradient colors={['#01b4ed', '#88ff89']}
          style={styles.proView}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}  >




        </LinearGradient>

        <LinearGradient colors={['#01b4ed', '#88ff89']}
          style={styles.proView}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}  >



        </LinearGradient>

        <View >

        </View>
        {/* end produc */}

      </View>

      {/* Start recipi view */}


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
    backgroundColor: "white",
    justifyContent: "flex-start",
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoText: {
    fontSize: 30,
    fontWeight: "bold"

  },

  rText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginStart: 30,
    marginTop: 20,
  },

  reView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",

  },

  proView: {
    marginTop: 20,
    height: "20%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "'black'",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  prDetailsView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",

  },

  imgView: {

    width: "40%",
    borderRadius: 20,
    backgroundColor: "red",
  },

  pImage: {
    width: 135,
    height: 120,
    borderRadius: 20
  },

  pdView: {
    flex: 1,

  },

  pTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginStart: 20,
    marginTop: 10,

  },

  pDiscription: {
    fontSize: 10,
    marginStart: 20,
    marginTop: 10,
  },

  pTime: {
    fontSize: 12,
    fontWeight: "bold",
    marginStart: 20,
    marginTop: 15,
  },



});
