import React, { useEffect, useState } from "react";
import {Text,StyleSheet,ScrollView,Image,SafeAreaView} from 'react-native';

export default function ShowUserProfile (props){
  const [state, setState] = useState({ showDefault: true, error: false })
  const {id,login,avatar_url,node_id,gravatar_id,type,site_admin,events_url,followers_url,
    following_url,gists_url,html_url,organizations_url,received_events_url,repos_url,starred_url,subscriptions_url,url} = props.route.params.user
  var image = state.showDefault ? require('./assets/avater-placeholder.png') : ({uri: avatar_url });

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.image}
          source={image}
          onLoadEnd={() => setState({showDefault: false})}
        />  
        <Text style={{textAlign: 'center',fontSize: 20,fontFamily: 'monospace',color: 'black'}} > {login}</Text>
        
        <Text style={styles.text} > <Text style={styles.bold}>ID:</Text> {id}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Login: </Text>{login}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Node ID: </Text>{node_id}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Gravatar ID:</Text> {gravatar_id}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Type:</Text> {type}</Text>
        <Text style={styles.text} > <Text style={styles.bold}>Site Admin:</Text> {site_admin.toString()}</Text>
        <Text style={styles.bold} > Events URL:</Text>
        <Text style={styles.text} > {events_url}</Text>
        <Text style={styles.bold} > Followers URL:</Text> 
        <Text style={styles.text} > {followers_url}</Text>
        <Text style={styles.bold} > Following URL: </Text>
        <Text style={styles.text} > {following_url}</Text>
        <Text style={styles.bold} > Gists URL:</Text>
        <Text style={styles.text} > {gists_url}</Text>
        <Text style={styles.bold} > HTML URL:</Text>
        <Text style={styles.text} > {html_url}</Text>
        <Text style={styles.bold} > Organizations URL:</Text>
        <Text style={styles.text} > {organizations_url}</Text>
        <Text style={styles.bold} > Received Events URL:</Text>
        <Text style={styles.text} > {received_events_url}</Text>
        <Text style={styles.bold} > Repos URL:</Text>
        <Text style={styles.text} > {repos_url}</Text>
        <Text style={styles.bold} > Starred URL: </Text>
        <Text style={styles.text} > {starred_url}</Text>
        <Text style={styles.bold} > Subscriptions URL:</Text>
        <Text style={styles.text} > {subscriptions_url}</Text>
        <Text style={styles.bold} > URL:</Text>
        <Text style={styles.text} > {url}</Text>
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