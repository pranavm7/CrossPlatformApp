import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
export default function ServicesScreen({ navigation }) {
return (
<View style={styles.container}>
<Text style={styles.title}>Our Services</Text>
<Text style={styles.description}>
Free shipping on orders over $50! {"\n"}
24/7 customer support! {"\n"}
Free returns up to 30 days after date of purchase! {"\n"}
Free order tracking! Simply use the order tracking number provided with every order.
</Text>

<Button title="Go Back" onPress={() => navigation.goBack()} />
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
