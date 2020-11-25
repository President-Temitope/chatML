import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat,Bubble } from 'react-native-gifted-chat'
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import {db} from '../config/Fire';
export default function Chat({route}) {
    const [messages, setMessages] = useState([]);
    const {thread} = route.params;
    function renderBubble(props) {
      return (
        // Step 3: return the component
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              // Here is the color change
              backgroundColor: '#6646ee'
            }
          }}
          textStyle={{
            right: {
              color: '#fff'
            }
          }}
        />
      );
    }

    function renderLoading() {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#6646ee" />
        </View>
      );
    }
    
  useEffect(() => {

  fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "google-translate1.p.rapidapi.com",
		"x-rapidapi-key": "adda044e88msh6827a5d0da1d847p1c35ebjsn4b45e752b1e7",
		"accept-encoding": "application/gzip",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {
		"source": "en",
		"q": "Hello, world!",
		"target": "es"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

    setMessages([
      {
        
          _id: 0,
          text: 'Conversation created.',
          createdAt: new Date().getTime(),
          system: true
        },
        {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          //avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  // helper method that is sends a message
  async function handleSend( messages) {
    const text = messages[0].text;
    db.collection('message')
      .add({
        text,
        createdAt: new Date().getTime(),
        user:{
          _id : firebase.auth().currentUser.uid,
          username : firebase.auth().currentUser.username
        }
      })
    setMessages(GiftedChat.append(messages, newMessage));
  }
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

    return (
 
    
        <GiftedChat
          messages={messages}
          onSend={newMessages => onSend(newMessages)}
          user={{
            _id: 1,
            name: 'User Test'
          }}
          renderBubble={renderBubble}
          showUserAvatar
          scrollToBottom
          renderLoading={renderLoading}
        /> 
       
      )
}
const styles = StyleSheet.create({
  // rest remains same
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});