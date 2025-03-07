import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
export default function HomeScreen({ navigation }) {
return (
<View style={styles.container}>
<Text style={styles.title}>Welcome to Fit Check</Text>
<Text style={styles.description}>
Discover and purhase the latest and fashion trends and clothes to upgrade your looks. {'\n'}
Fit Check is an online retailer where you can meet all your clothing needs. {'\n'}
Our products include hoodies, pants, shirts, shoes, and more. {'\n'}
</Text>
<Button title="About Us" onPress={() => navigation.navigate('About Us')} />
<Button title="Contact Us" onPress={() => navigation.navigate('Contact Us')} />
<Button title="Our Services" onPress={() => navigation.navigate('Our Services')} />
<Button title="Make a Payment" onPress={() => navigation.navigate('Payment')} />
</View>
);
} // **Close the component function before defining styles**
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
padding: 20,
},
image: {
width: 200,
height: 200,
marginBottom: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
textAlign: 'center',
},
description: {
fontSize: 16,
textAlign: 'center',
marginBottom: 20,
},
});
