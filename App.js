import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function App() {
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
        <LinearGradient colors={['#01b4ed', '#88ff89']}
          style={styles.proView}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}  >
            <View style={styles.prDetailsView}>
              <View><Text>Hello</Text></View>
              <View><Text>Hello2</Text></View>
            </View>



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
    width: 80,
    height: 80,
  },

  logoText: {
    fontSize: 30,
    fontWeight: "bold"

  },

  rText: {
    fontSize: 24,
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
    borderRadius: 20,
    shadowColor: "'black'",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },

  prDetailsView: {
    flex:1,
    flexDirection: "row",
    justifyContent:"flex-start",
    alignItems:"center",
  }



});
