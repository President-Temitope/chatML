import React , {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Fire from '../config/Fire';
import logo from '../assets/fpi.png';


export default function App({ navigation }) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const[cpassword,setCpassword]= useState('');
  const[error,setError] = useState('');
  //const[button,setButton] = useState('true')

  handleSignUp = () => {
if (password != cpassword) {
  setError('Password not matched')
} else {
   // setButton ('false')
  Fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('ActiveUsers'))
        .catch(error => setError(error))
}
    
}
  return (
    //   Parent view
    <View style={styles.container}>
<Image source={logo}/>
        <Text
        style={styles.logo}
        >
            ChatWithMeInYourLang

        </Text>

        {/* Login input field */}
     <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}
            textContentType={"emailAddress"}/>
</View>
<View style={styles.inputView}>
            <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}/>
</View>

<View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Confirm Password..." 
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={text => setCpassword(text)}/>
</View>

        <TouchableOpacity 
        style={styles.loginBtn}
        // disabled={button}
        onPress={()=>handleSignUp()}
        >
          <Text style={styles.loginText}
          >SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText}
          onPress={() => navigation.navigate('Login')}
          >Login</Text>
        </TouchableOpacity>
        
        <Text style={styles.loginText}>
{error} {password} {cpassword}
</Text>
        </View>

  );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:20,
        color:"#fb5b5a",
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color: "white"
      }
});
