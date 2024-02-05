import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: 'Guest' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --------------------------------------------------------------------------------------------------------------

// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   FlatList,
//   ActivityIndicator,
//   TextInput,
//   Button,
// } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { api } from './api';
// import { Formik } from 'formik';

// export default function App() {
//   const [postList, setPostList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   const [isPosting, setIsPosting] = useState(false);

//   const fetchPosts = async (limit = 10) => {
//     try {
//       const { data } = await api.get(`posts?_limit=${limit}`);
//       setPostList(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRefresh = () => {
//     setRefreshing(true);
//     fetchPosts(20);
//     setRefreshing(false);
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   // useEffect(() => {
//   //   console.log(postList);
//   // }, [postList]);

//   if (isLoading) {
//     return (
//       <SafeAreaView style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="lightblue" />
//         <Text>Loading...</Text>
//       </SafeAreaView>
//     );
//   }

//   const handleSubmit = async (values) => {
//     try {
//       setIsPosting(true);
//       const { data } = await api.post('posts', values);
//       setPostList((previous) => [
//         {
//           ...data,
//           body: data.postBody,
//           title: data.postTitle,
//         },
//         ...previous,
//       ]);
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsPosting(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Formik
//         initialValues={{ postTitle: '', postBody: '' }}
//         onSubmit={handleSubmit}>
//         {({ handleChange, handleBlur, handleSubmit, values }) => (
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Post title"
//               value={values.postTitle}
//               onChangeText={handleChange('postTitle')}
//               onBlur={handleBlur('postTitle')}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Post body"
//               value={values.postBody}
//               onChangeText={handleChange('postBody')}
//               onBlur={handleBlur('postBody')}
//             />
//             <Button
//               onPress={handleSubmit}
//               title={isPosting ? 'Adding...' : 'Add Post'}
//               disabled={isPosting}
//             />
//           </View>
//         )}
//       </Formik>

//       <View style={styles.listContainer}>
//         <FlatList
//           data={postList}
//           renderItem={({ item }) => {
//             return (
//               <View style={styles.card}>
//                 <Text style={styles.titleText}>{item.title}</Text>
//                 <Text style={styles.bodyText}>{item.body}</Text>
//               </View>
//             );
//           }}
//           // keyExtractor={(item) => item.id}
//           ItemSeparatorComponent={<View style={{ height: 16 }} />}
//           ListEmptyComponent={<Text>No data</Text>}
//           ListHeaderComponent={
//             <Text style={styles.headerText}>Posts List</Text>
//           }
//           ListFooterComponent={
//             <Text style={styles.footerText}>End of list</Text>
//           }
//           refreshing={refreshing}
//           onRefresh={handleRefresh}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: StatusBar.currentHeight,
//   },
//   listContainer: {
//     flex: 1,
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//   },
//   titleText: {
//     fontSize: 30,
//   },
//   bodyText: {
//     fontSize: 24,
//     color: '#666666',
//   },
//   headerText: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   footerText: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginTop: 16,
//   },
//   loadingContainer: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: StatusBar.currentHeight,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputContainer: {
//     padding: 16,
//     backgroundColor: 'white',
//     margin: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 5,
//   },
// });

// --------------------------------------------------------------------------------------------------------------

// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Button,
//   Image,
//   Platform,
//   KeyboardAvoidingView,
// } from 'react-native';
// import React, { useState } from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// export default function App() {
//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Required'),
//   });

//   const handleSubmit = (values) => {
//     // Handle form submission
//     console.log(values);
//   };

//   return (
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchema}>
//       {({
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         values,
//         errors,
//         touched,
//       }) => (
//         <KeyboardAvoidingView
//           behavior="padding"
//           keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 150}
//           style={styles.container}>
//           <View style={styles.form}>
//             <Image
//               source={require('./assets/adaptive-icon.png')}
//               style={styles.image}
//             />
//             <Text style={styles.label}>Username</Text>

//             <TextInput
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               value={values.email}
//               style={styles.input}
//             />
//             {touched.email && errors.email && (
//               <Text style={styles.errorText}>{errors.email}</Text>
//             )}

//             <Text style={styles.label}>Password</Text>
//             <TextInput
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//               value={values.password}
//               style={styles.input}
//               secureTextEntry
//             />
//             {touched.password && errors.password && (
//               <Text style={styles.errorText}>{errors.password}</Text>
//             )}

//             <Button onPress={handleSubmit} title="Submit" />
//           </View>
//         </KeyboardAvoidingView>
//       )}
//     </Formik>
//     // <KeyboardAvoidingView
//     //   behavior="padding"
//     //   keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 150}
//     //   style={styles.container}>
//     //   <View style={styles.form}>
//     //     <Image
//     //       source={require('./assets/adaptive-icon.png')}
//     //       style={styles.image}
//     //     />
//     //     <Text style={styles.label}>Username</Text>
//     //     <TextInput
//     //       style={styles.input}
//     //       value={username}
//     //       onChangeText={setUsername}
//     //       placeholder="Enter your username"
//     //     />
//     //     <Text style={styles.label}>Password</Text>
//     //     <TextInput
//     //       style={styles.input}
//     //       placeholder="Enter your password"
//     //       secureTextEntry
//     //       value={password}
//     //       onChangeText={setPassword}
//     //     />
//     //     <Button title="Login" onPress={() => {}} />
//     //   </View>
//     // </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   form: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 5,
//   },
//   image: {
//     width: 200,
//     height: 400,
//     alignSelf: 'center',
//     marginBottom: 50,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 5,
//     marginTop: -5,
//     fontSize: 12,
//   },
// });

// --------------------------------------------------------------------------------------------------------------

// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   SafeAreaView,
//   TextInput,
//   Switch,
// } from 'react-native';
// import React, { useState } from 'react';

// export default function App() {
//   const [name, setName] = useState('');
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder="email@example.com"
//         autoCorrect={false}
//         autoCapitalize="none"
//         // secureTextEntry
//         // keyboardType="numeric"
//       />
//       <TextInput
//         style={[styles.input, styles.multilineText]}
//         multiline
//         placeholder="message"
//       />
//       <Text style={styles.text}>My name is {name}</Text>
//       <View style={styles.switchComponent}>
//         <Text style={styles.text}>Dark Mode</Text>
//         <Switch
//           value={isDarkMode}
//           onValueChange={() => setIsDarkMode((previous) => !previous)}
//           trackColor={{ false: '#767577', true: 'lightblue' }}
//           thumbColor="#f4f3f4"
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: StatusBar.currentHeight,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     padding: 10,
//     borderWidth: 1,
//   },
//   text: {
//     fontSize: 30,
//     padding: 10,
//   },
//   multilineText: {
//     minHeight: 100,
//     textAlignVertical: 'top',
//   },
//   switchComponent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//   },
// });

// --------------------------------------------------------------------------------------------------------------

// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   SafeAreaView,
//   StatusBar,
//   FlatList,
//   SectionList,
// } from 'react-native';
// import React from 'react';
// import pokemonList from './data/data.json';
// import groupedPokemonList from './data/groupedData.json';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <ScrollView style={styles.scrollView}>
//         {pokemonList.map((pokemon) => (
//           <View style={styles.card} key={pokemon.id}>
//             <Text style={styles.cardText}>{pokemon.name}</Text>
//             <Text style={styles.cardText}>{pokemon.type}</Text>
//           </View>
//         ))}
//       </ScrollView> */}
//       <View style={styles.scrollView}>
//         {/* <FlatList
//           data={pokemonList}
//           renderItem={({ item }) => {
//             return (
//               <View style={styles.card} key={item.id}>
//                 <Text style={styles.cardText}>{item.name}</Text>
//                 <Text style={styles.cardText}>{item.type}</Text>
//               </View>
//             );
//           }}
//           keyExtractor={(item) => item.id}
//           ItemSeparatorComponent={<View style={{ height: 16 }} />}
//           ListEmptyComponent={<Text>No data</Text>}
//           ListHeaderComponent={
//             <Text style={styles.headerText}>Pokemon List</Text>
//           }
//           ListFooterComponent={
//             <Text style={styles.footerText}>End of list</Text>
//           }
//           // horizontal
//         /> */}
//         <SectionList
//           sections={groupedPokemonList}
//           renderItem={({ item }) => {
//             return (
//               <View style={styles.card}>
//                 <Text style={styles.cardText}>{item}</Text>
//               </View>
//             );
//           }}
//           renderSectionHeader={({ section }) => (
//             <Text style={styles.sectionHeaderText}>{section.type}</Text>
//           )}
//           ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
//           SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 1,
//     // marginBottom: 16,
//   },
//   cardText: {
//     fontSize: 30,
//   },
//   headerText: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   footerText: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginTop: 16,
//   },
//   sectionHeaderText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// --------------------------------------------------------------------------------------------------------------

// import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
// import React from 'react';
// import PokemonCard from './components/PokemonCard';
// import { pokemonData } from './data/pokemonData';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {pokemonData.map((pokemon) => (
//           <PokemonCard
//             key={pokemon.name}
//             name={pokemon.name}
//             image={pokemon.image}
//             type={pokemon.type}
//             hp={pokemon.hp}
//             moves={pokemon.moves}
//             weaknesses={pokemon.weaknesses}
//           />
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: Platform.OS === 'android' ? 50 : 0,
//   },
// });

// --------------------------------------------------------------------------------------------------------------

// import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';
// import CustomButton from './components/CustomButton/CustomButton';
// import React from 'react';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safeContainer}>
//       <View style={styles.container}>
//         <View style={styles.box}>
//           <Text style={styles.text}>Welcome</Text>
//           <CustomButton
//             title="Press me"
//             onPress={() => {
//               alert('Button pressed!');
//             }}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeContainer: {
//     flex: 1,
//     backgroundColor: 'plum',
//   },
//   container: {
//     backgroundColor: 'plum',
//     flex: 1,
//     paddingTop: Platform.OS === 'android' ? 25 : 0,
//   },
//   box: {
//     padding: 20,
//   },
//   text: {
//     ...Platform.select({
//       ios: {
//         color: 'red',
//         fontSize: 20,
//         fontStyle: 'italic',
//       },
//       android: {
//         color: 'blue',
//         fontSize: 30,
//         fontWeight: 'bold',
//       },
//     }),
//     textAlign: 'center',
//   },
// });

// --------------------------------------------------------------------------------------------------------------

// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   useWindowDimensions,
// } from 'react-native';
// import React, { useEffect, useState } from 'react';

// export default function App() {
//   // const [dimensions, setDimensions] = useState({
//   //   window: Dimensions.get('window'),
//   // });

//   // useEffect(() => {
//   //   const subscription = Dimensions.addEventListener('change', ({ window }) => {
//   //     setDimensions({ window });
//   //   });
//   //   return () => subscription?.remove();
//   // }, []);

//   // const { window } = dimensions;
//   const windowWidth = useWindowDimensions().width;
//   const windowHeight = useWindowDimensions().height;

//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.box,
//           {
//             width: windowWidth > 500 ? '70%' : '90%',
//             height: windowHeight > 600 ? '60%' : '90%',
//           },
//         ]}>
//         <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome</Text>
//       </View>
//     </View>
//   );
// }

// // const windowWidth = Dimensions.get('window').width;
// // const windowHeight = Dimensions.get('window').height;
// // console.log({ windowWidth, windowHeight });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'plum',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     // width: windowWidth > 500 ? '70%' : '90%',
//     // height: windowHeight > 600 ? '60%' : '90%',
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   // text: {
//   //   fontSize: windowWidth > 500 ? 50 : 24,
//   // },
// });

// --------------------------------------------------------------------------------------------------------------

// import { View, StyleSheet } from 'react-native';
// import React from 'react';
// import Box from './components/Box';

// export default function App() {
//   return (
//     // <View style={{ backgroundColor: 'plum', flex: 1 }}></View>
//     <View style={styles.container}>
//       <Box style={{ backgroundColor: '#8e9b00', top: 75, left: 75 }}>Box 1</Box>
//       <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
//       <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
//       <Box
//         style={{
//           backgroundColor: '#ab9156',
//           top: 100,
//           left: 100,
//           position: 'absolute',
//         }}>
//         Box 4
//       </Box>
//       <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
//       <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
//       <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: 'row',
//     // alignItems: 'flex-start',
//     // width: 300,
//     // rowGap: 10,
//     // columnGap: 10,
//     // gap: 10,
//     marginTop: 64,
//     borderWidth: 6,
//     borderColor: 'red',
//   },
// });

// --------------------------------------------------------------------------------------------------------------

// import { View, Text, StyleSheet } from 'react-native';
// import React from 'react';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.darkMode}>
//         <Text style={styles.darkModeText}>
//           Style Inheritance
//           <Text style={styles.boldText}>in Bold</Text>
//         </Text>
//       </View>
//       <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
//         <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>
//           Lightblue box
//         </Text>
//       </View>
//       <View style={[styles.box, styles.lightgreenBg, styles.androidBoxShadow]}>
//         <Text>Lightgreen box</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'plum',
//     padding: 60,
//   },
//   darkMode: {
//     backgroundColor: 'black',
//   },
//   darkModeText: {
//     color: 'white',
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
//   box: {
//     width: 250,
//     height: 250,
//     //padding: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     marginVertical: 10,
//     borderWidth: 2,
//     borderColor: 'purple',
//     borderRadius: 5,
//   },
//   lightblueBg: {
//     backgroundColor: 'lightblue',
//   },
//   lightgreenBg: {
//     backgroundColor: 'lightgreen',
//   },
//   boxShadow: {
//     shadowColor: '#333333',
//     shadowOffset: { width: 6, height: 6 },
//     shadowOpacity: 0.6,
//     shadowRadius: 4,
//   },
//   androidBoxShadow: {
//     elevation: 10,
//     shadowColor: 'blue',
//   },
// });

// --------------------------------------------------------------------------------------------------------------

// import {
//   View,
//   Text,
//   Image,
//   Button,
//   Pressable,
//   Modal,
//   StatusBar,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// import { useState } from 'react';
// import Greet from './components/Greet';

// const logoImg = require('./assets/adaptive-icon.png');

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
//       <Greet name={'Dhia'} />
//       {/* <Button
//         title="Alert"
//         onPress={() => {
//           Alert.alert('invalid data!');
//         }}
//       />
//       <Button
//         title="Alert 2"
//         onPress={() => {
//           Alert.alert('invalid data!', 'DB incorrect');
//         }}
//       />
//       <Button
//         title="Alert 3"
//         onPress={() => {
//           Alert.alert('invalid data!', 'DB incorrect', [
//             {
//               text: 'Cancel',
//               onPress: () => console.log('cancel pressed'),
//             },
//             {
//               text: 'OK',
//               onPress: () => console.log('ok pressed'),
//             },
//           ]);
//         }}
//       /> */}
//       {/* <ActivityIndicator size="large" />
//       <ActivityIndicator size="large" color="midnightblue" animating={false} /> */}
//       {/* <StatusBar backgroundColor="lightgreen" barStyle="light-content" /> */}
//       {/* <Button
//         title="press"
//         onPress={() => {
//           setModalVisible(true);
//         }}
//         color="midnightblue"
//       />
//       <Modal
//         visible={modalVisible}
//         animationType="slide"
//         presentationStyle="pageSheet" //only works on ios
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}>
//         <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
//           <Text>Modal content</Text>
//           <Button
//             title="close"
//             color="midnightblue"
//             onPress={() => {
//               setModalVisible(false);
//             }}
//           />
//         </View>
//       </Modal> */}
//       {/* <Pressable
//         onPress={() => {
//           console.log('image pressed');
//         }}>
//         <Image source={logoImg} style={{ width: 300, height: 300 }} />
//       </Pressable>
//       <Pressable
//         onPress={() => {
//           console.log('text pressed');
//         }}>
//         <Text>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
//           nec dui vel condimentum. Donec ultricies suscipit nisi non iaculis. In
//           consectetur aliquet augue, quis lacinia justo imperdiet ut. Nullam a
//           nisi ac odio venenatis accumsan id non massa. Phasellus quis mauris
//           sed diam interdum auctor ut in diam. Quisque turpis est, cursus eget
//           malesuada nec, tempus ac felis. Fusce libero magna, lobortis vitae
//           felis eu, dignissim efficitur odio. Mauris viverra vestibulum eros, a
//           egestas quam accumsan id. Donec at erat et enim dignissim condimentum.
//           Nam laoreet neque nec eros ultrices viverra vel sit amet est. Quisque
//           elementum mauris ac ante elementum, et auctor ante blandit. Aliquam ut
//           ante augue. Quisque ultricies lacinia tincidunt. Fusce sed velit vitae
//           orci tempus ultricies. Orci varius natoque penatibus et magnis dis
//           parturient montes, nascetur ridiculus mus.
//         </Text>
//       </Pressable> */}
//     </View>
//   );
// }
