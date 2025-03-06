import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
export default function AboutUsScreen({ navigation }) {
return (
<View style={styles.container}>
<Text style={styles.title}>Welcome to SmartGadget Hub</Text>
<Text style={styles.description}>
Discover the latest and most innovative gadgets that enhance your daily life.
Our products include smart home devices, wearable tech, and AI-powered assistants.
</Text>
<Text style={styles.description}>
We invite you to visit our booth at the SoIT 2025 IT Expo -
<Text style={{ color: 'blue' }}> https://cech.uc.edu/soitexpo.html</Text>
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
