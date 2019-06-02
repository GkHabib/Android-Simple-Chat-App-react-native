import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Button, Alert, AppRegistry, FlatList, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
 
export default class InputHandler extends React.Component {

  constructor(props) {
    super(props);
    //define state!
    this.textInputRef = React.createRef();
    this.state = {
      inputText : ''
    }    
  }

  sendMessage() {
    this.textInputRef.current.clear();
    this.setState({inputText : ''})
    this.props.api.addMessage(this.state.inputText);
  }

  render() {
    return (
      <>
        <KeyboardAvoidingView>
          <View style={styles.footer}>
            <TextInput
              ref={this.textInputRef}
              value={this.state.inputText}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Type Here"
              onChangeText={(text) => this.setState({ inputText : text })}
            />
            <TouchableOpacity onPress={()=>{ this.sendMessage(); }}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </>
    )
  }
}


const styles = StyleSheet.create({
  sender: {
    fontWeight: 'bold',
    paddingRight: 10
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee'
  },
  input: {
    // paddingHorizontal: 20,
    fontSize: 18,
    flex: 1
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20
  }
});
