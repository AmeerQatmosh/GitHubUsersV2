import React, { useEffect, useState } from "react";
import {Text,View,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App (){

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      {loading ? (<Text>loading</Text>) : (
        data.map((user)=>
        <View>
          <Image source={user.avatar_url} style={styles.image} />
          <Text style={styles.text}>{user.login}</Text> 
          <Text style={styles.text}>{user.id}</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#e0e0e0',
    padding: 25,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'black',
    width: '70%',
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

// export default App;
