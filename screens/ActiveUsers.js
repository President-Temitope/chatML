import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../assets/splash.png';
import {db} from '../config/Fire';

export default function App({ navigation }) {
  const [userdata,setUserdata] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection('users')
      // .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const userdata = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            username: '',
            ...documentSnapshot.data()
          };
        });
// console.log("userdata01" + userdata)
//         var userToRemove = Fire.auth().currentUser.uid
// console.log("02"+ userToRemove)
//         userdata = userdata.filter(item => item !== userToRemove)
// console.log("03"+userdata)
        setUserdata(userdata);
      });

    /**
     * unsubscribe listener var user = firebase.auth().currentUser
     */
    return () => unsubscribe();
  }, []);

  
  return (
    //   Parent view
    <ScrollView>
    <View style={styles.container}>
<Image source={logo}/>
        <Text
        style={styles.logo}
        >
            ChatWithMeInYourLang

        </Text>
        </View>
<View>
   
<FlatList 
style={styles.listed}
data={userdata}
keyExtractor={item => item._id}
        renderItem={({ item }) => (
          
          <TouchableOpacity
          style={styles.loginBtn}
            onPress={() => navigation.navigate('Chat', { userdata: item })}
          >
            <Text style={styles.loginText}> {item.username} </Text>
          </TouchableOpacity>
        )}

/>

</View>
</ScrollView>  
 
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
        width:"50%",
        backgroundColor:"#fb5b5a",
        borderRadius:5,
        height:20,
       // alignItems:"left",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
      },
      loginText:{
        color: "white",
        alignItems:"center",
      },
     
});
