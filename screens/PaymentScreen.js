import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
export default function PaymentScreen({ navigation }) {
return (
<View style={styles.container}>
<Text style={styles.title}>Payment</Text>
<Text style={styles.description}>
Secure your order now! We accept- Credit/Debit cards - PayPal - Cryptocurrency.
</Text>
{/* <Text style={styles.description}>
We invite you to visit our booth at the SoIT 2025 IT Expo -
<Text style={{ color: 'blue' }}> https://cech.uc.edu/soitexpo.html</Text>
</Text> */}
<Button title="Proceed to payment" onPress={() => navigation.navigate('Payment')} />
<Button title="Go Back" onPress={() => navigation.navigate('Home')} />
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
