import React, { useEffect, useState } from "react";
import {Text,View,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowUserList from "./src/component/HomePage";
import ShowUserProfile from "./src/component/UserProfile";

const Stack = createNativeStackNavigator();
export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ShowUserList} />
        <Stack.Screen name="Profile" component={ShowUserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const url = "https://api.github.com/users";

//   useEffect(()=> {
//     fetch(url)
//     .then((responce)=>responce.json())
//     .then((json) => setData(json))
//     .catch((error)=>console.log(error))
//     .finally(()=>setLoading(false));
//   },[])
  
//   return(
//     <ScrollView>
//     <View style={styles.container}>
//       {loading ? (<Text>loading</Text>) : (
//         data.map((user)=>
//         <View key={user.id}>
//           <Image source={{uri: user.avatar_url}} style={styles.image} />
//           <Text style={styles.text}>{user.login}</Text> 
//         </View>
//         )
//       )}
//     </View>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     backgroundColor: '#e0e0e0',
//     padding: 25,
//     marginVertical: 12,
//     marginHorizontal: 16,
//     borderRadius: 20,
//     elevation: 10,
//     shadowColor: 'black',
//     width: '70%',
//     alignSelf: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 100,
//     alignSelf: 'center',
//   },
//   text: {
//     fontSize: 20,
//     fontFamily: 'monospace',
//     color: 'black',
//     textAlign: 'center',
//   },
// })

// // export default App;

// function App() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     fetch("https://api.github.com/users")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <View>
//       {items.map(item => (
//         <Text key={item.id}>
//           {item.login} {item.type}
//         </Text>
//       ))}
//     </View>
//     );
//   }
// }
// export default App;