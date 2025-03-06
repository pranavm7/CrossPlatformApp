// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import screens
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import ServicesScreen from './screens/ServicesScreen';
import PaymentScreen from './screens/PaymentScreen';
const Stack = createStackNavigator();
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="About Us" component={AboutUsScreen} />
<Stack.Screen name="Contact Us" component={ContactUsScreen} />
<Stack.Screen name="Our Services" component={ServicesScreen} />
<Stack.Screen name="Payment" component={PaymentScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
