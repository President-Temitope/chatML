import React , {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,Picker} from 'react-native';
import Fire, {db} from '../config/Fire';
import logo from '../assets/splash.png';


export default function App({ navigation }) {
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const[cpassword,setCpassword]= useState('');
  const[error,setError] = useState('');
  const [language, setLanguage] = useState('');
 
  //const[button,setButton] = useState('true')

  handleSignUp = () => {
if (password != cpassword) {
  setError('Password not matched')
} else {
   // setButton ('false')
  Fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) =>{ 
        const userdata = {
            uid : user.user.uid,
            email : email,
            password : password,
            username : username,
            language : language
            }
        db.collection('users')
          .doc(user.user.uid)
          .set(userdata)
          
          alert(username + ', your registration was successful.')
        //navigation.navigate('ActiveUsers')
        
        }).then(navigation.navigate('ActiveUsers'))
        .catch(error => alert(error))
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

<View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setUsername(text)}
            />
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

<View style={styles.inputView}>
     <Picker
  selectedValue={language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}>
  <Picker.Item label="English" value="English" />
  <Picker.Item label="French" value="French" />
  <Picker.Item label="Spanish" value="Spanish" />
</Picker>
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
