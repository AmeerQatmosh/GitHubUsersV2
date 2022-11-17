import React, { useEffect, useState } from "react";
import {Text,View,StyleSheet,ScrollView,Image,Button} from 'react-native';

export default function ShowUserList ({ navigation, route },props){

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({ showDefault: true, error: false })
  const url = "https://api.github.com/users";

  useEffect(()=> {
    fetch(url)
    .then((responce)=>responce.json())
    .then((json) => setData(json))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false));
  },[])
  return(
    <ScrollView>
        <View style={styles.container}>
          {loading ? (<Text>loading</Text>) : (data.map((user)=> 
          <View key={user.id} style={styles.item}>
          <Image 
          source={state.showDefault ? require('./assets/avater-placeholder.png') : ({uri: user.avatar_url})} 
          style={styles.image} 
          onLoadEnd={() => setState({showDefault: false})}/>
          <Text style={styles.text}>{user.login}</Text> 
          <Button title='more Info' style={styles.card} onPress={() => navigation.navigate('Profile', {user})} />
        </View>
        )
      )}
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 50,
  },
  item: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#e0e0e0',
    padding: 25,
    marginVertical: 12,
    marginHorizontal: 16,
    marginTop: 30,
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    width: '80%',
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'black',
    textAlign: 'center',
  },
})