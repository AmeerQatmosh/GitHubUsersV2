import React, { useEffect, useState } from "react";
import {Text,StyleSheet,ScrollView,Image,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowUserList from "./HomePage";

export default function ShowUserProfile (props){
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.image}
          source={{uri: props.route.params.item.user.avatar_url}}
        />  
        <Text style={{textAlign: 'center',fontSize: 20,fontFamily: 'monospace',color: 'black'}} > {props.route.params.item.user.login}</Text>
        
        <Text style={styles.text} > <Text style={styles.bold}>ID:</Text> {props.route.params.item.user.id}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Login: </Text>{props.route.params.item.user.login}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Node ID: </Text>{props.route.params.item.user.node_id}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Gravatar ID:</Text> {props.route.params.item.user.gravatar_id}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Type:</Text> {props.route.params.item.user.type}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Site Admin:</Text> {props.route.params.item.user.site_admin.toString()}</Text>
        <Text style={styles.bold}>Events URL:</Text>
        <Text style={styles.text} >{props.route.params.item.user.events_url}</Text>
        <Text style={styles.bold}>Followers URL:</Text> 
        <Text style={styles.text} >{props.route.params.item.user.followers_url}</Text>
        <Text style={styles.bold}>Following URL: </Text>
        <Text style={styles.text} >{props.route.params.item.user.following_url}</Text>
        <Text style={styles.bold}>Gists URL:</Text>
        <Text style={styles.text} >{props.route.params.item.user.gists_url}</Text>
        <Text style={styles.bold}>HTML URL:</Text>
        <Text style={styles.text} >{props.route.params.item.user.html_url}</Text>
        <Text style={styles.bold}>Organizations URL:</Text>
        <Text style={styles.text} >{props.route.params.item.user.organizations_url}</Text>
        <Text style={styles.bold}>Received Events URL:</Text>
        <Text style={styles.text} >{props.route.params.item.user.received_events_url}</Text>
        <Text style={styles.bold}>Repos URL:</Text>
        <Text style={styles.text} >{props.route.params.item.user.repos_url}</Text>
        <Text style={styles.bold}>Starred URL: </Text>
        <Text style={styles.text} >{props.route.params.item.user.starred_url}</Text>
        <Text style={styles.bold}>Subscriptions URL:</Text>
        <Text style={styles.text} >{props.route.params.item.user.subscriptions_url}</Text>
        <Text style={styles.bold}>URL:</Text>
        <Text style={styles.text} >{props.route.params.item.user.url}</Text>
    </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'monospace',
    color: 'black',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 10,
    alignSelf: 'center',
  },
  bold: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 19,
    fontFamily: 'monospace',
    color: 'black',
    padding: 10,
    fontWeight: "bold",
  }

})