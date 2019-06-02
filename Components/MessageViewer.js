import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry, FlatList, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

export default class MessageViewer extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FlatList
            data={this.props.messageList}
            style={styles.messageList}
            ref = "flatList"
            onContentSizeChange={()=> this.refs.flatList.scrollToEnd()}
            renderItem={({item}) =>  
                <View style={(item.type == 'user')? styles.rowRev : styles.row}>
                    <View>
                        <Text style={styles.message}>
                            {item.text}
                        </Text>
                        <Text style={styles.time}>
                            {item.time+ '     '}
                        </Text>
                    </View>
                </View>
            }
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row',
        height: 'auto',
        width: 'auto',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: 'skyblue',
        borderRadius: 20,
        maxWidth : 250    
    },
    rowRev: {
        flexDirection: 'row-reverse',
        height: 'auto',
        width: 'auto',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: 'skyblue',
        borderRadius: 20,
        maxWidth : 250   ,
        alignSelf: 'flex-end' 
    },
    messageList: {
        display: 'flex',
        flexDirection: 'column'
    },
    message: {
      fontSize: 18,
      flex: 10
    },
    time: {
        fontSize: 10,
        flex: 1
    }
  });
  