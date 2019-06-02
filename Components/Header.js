import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <StatusBar backgroundColor="lightseagreen" barStyle="light-content"/>
        <Image
          source={require('../Resources/Images/avatar.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'lightseagreen',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  avatar: {
    alignSelf: 'flex-start',
    borderRadius: 30,
    width: 40,
    height: 40,
    marginBottom: 0,
    marginTop: 40,
  }
});