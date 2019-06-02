import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Button, Alert, AppRegistry, FlatList, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import InputHandler from './Components/InputHandler'
import Header from './Components/Header'
import MessageViewer from './Components/MessageViewer'

export default class App extends React.Component {

  addMessage(inputText) {
    if (inputText == '') return;
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    this.setState({ messageList : [...this.state.messageList, {text : inputText, type : 'user', time :hours + ':' + min}]} );
    this.addReplyMessage();
  }

  async addReplyMessage() {
    setTimeout(() => {
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      this.setState({ messageList : [...this.state.messageList, {
        text : "It's been " + this.time + " seconds since you've started chatting!", 
        type : 'root', 
        time :hours + ':' + min}]} );
    }, 2000);
  }

  async startCounter() {
    setInterval(() => {
      this.time += 1;
    }, 1000);
  }

  constructor(props) {
    super(props);
    this.time = 0;
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    this.state = {
      messageList : [{text:'Hi, Wellcome To the Chat App', type:'root', time:hours + ':' + min}],
      username : 'Let\'s chat',
    }
    this.startCounter();
  }

  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={this.state.username} />
        <MessageViewer messageList={this.state.messageList} />
        <InputHandler api={this}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('App', () => App);