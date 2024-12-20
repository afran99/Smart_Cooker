import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Alert, ScrollView } from 'react-native';
import { FontAwesome6 } from "@expo/vector-icons";


export default function App() {


  const showAlert = () => {
    Alert.alert("Hello!", "This is a simple alert.");
  };

  return (

    <View style={styles.view2}>

      {/* Start Header part */}

      <LinearGradient colors={['#80b4ed', '#99ffff']}
        style={styles.Linear}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}  >
        <View style={styles.view1}>
          <FontAwesome6 name={"arrow-left"} color={"white"} size={24} />
        </View >

        <View style={styles.view3}>

          <View>
            <Text style={styles.title1}>Watalappan</Text>
          </View>

          <View>
          <Text style={styles.time}>Time : 15 : 00 Min</Text>
          </View>      
        
        </View >
      </LinearGradient>

      {/* End Header part */}



      {/* start ingedient view couple*/}

      <ScrollView style={styles.scrollView1}>

        <View style={styles.imgView}>
          <Image source={require('./assets/image/watalappan.jpg')} contentFit={"contain"} style={styles.pImage} />
          <View style={styles.ingredientSite} >
            <Text style={styles.ingText}>
              First you have to add 4 eggs and crush
            </Text>
            <Pressable style={styles.checkBtn} onPress={showAlert}>
              <Text>Done</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.imgView}>
          <Image source={require('./assets/image/watalappan.jpg')} contentFit={"contain"} style={styles.pImage} />
          <View style={styles.ingredientSite} >
            <Text style={styles.ingText}>
              First you have to add 4 eggs and crush
            </Text>
            <Pressable style={styles.checkBtn} onPress={showAlert}>
              <Text>Done</Text>
            </Pressable>
          </View>
        </View>



      </ScrollView>
      {/* end ingridient view couple */}

      <View style={styles.startBtn}>
        <Pressable>
          <Text>Start</Text>
        </Pressable>
      </View>



      {/* end produc */}

    </View>




  );
}

const styles = StyleSheet.create({

  Linear: {
    height: "18%",
    width: "100%"

  },

  view1: {
    flex: 1,
    marginTop: 50,
    marginStart: 20,
    alignItems: "flex-start",
  },

  view2: {
    flex: 1,
    backgroundColor: "white",
  },

  view3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginStart: 20,


  },
  time: {
    fontSize: 15,
    marginStart: 40,
    fontWeight: "bold",

  },


  title1: {
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 5,
    alignItems:"flex-start",
    borderBottomColor: "#01b4ed"

  },



  proTitle: {
    flex: 1,
    backgroundColor: "blue"
  },



  imgView: {
    marginTop: 30,
    marginBottom: 10,
    marginStart: 20,
    marginEnd: 20,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "'black'",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  pImage: {
    width: 165,
    height: 120,
    borderRadius: 20,
  },


  pTime: {
    fontSize: 12,
    fontWeight: "bold",
    marginStart: 20,
    marginTop: 15,
  },

  ingText: {
    marginTop: 15,
    fontSize: 12,
  },

  checkBtn: {
    width: 100,
    height: 25,
    marginTop: 10,
    backgroundColor: "green",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  ingredientSite: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,

  },

  startBtn: {
    flex:1,
  },

  scrollView1:{
height:20,
  },


});
