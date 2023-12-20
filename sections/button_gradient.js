
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text  } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function ButtonGradient(){
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#FFB677', '#FF3CBD']}
        start={{x:1, y:0}}
        end={{x:0, y:1}}
        style={styles.button}
        >
        <Text style={styles.text}>SIGN IN</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create(
  {
    text:{
    fontSize: 14,
    color:'gray',fontWeight: 'bold',
    color:'white',
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius:25,
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 200,
    alignItems:'center',
    marginTop: 60,
  }
});