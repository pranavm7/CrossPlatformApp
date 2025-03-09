import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
export default function AboutUsScreen({ navigation }) {
return (
<View style={styles.container}>
<Text style={styles.title}>About Fit Check</Text>
<Text style={styles.description}>
At Fit Check, we are dedicated to providing a seamless and personalized online shopping experience for fashion-forward individuals. 
Our mission is to offer high-quality, stylish clothing that fits every body, empowering our customers to express themselves with confidence and ease. 
By leveraging innovative technology and exceptional customer service, we aim to make finding the perfect fit effortless, one outfit at a time.
</Text>
<Text style={styles.description}>
    Key Contributors:

    Sarah Thompson - Founder & CEO: {'\n'}
    Sarah Thompson is the visionary behind Fit Check. 
    With over 10 years of experience in the fashion industry, Sarah recognized the need for an online platform that combined both style and perfect fit. 
    After working as a designer and retail strategist, she decided to create a company that would revolutionize how people shop for clothes online. 
    Her leadership and dedication to innovation have positioned Fit Check as a leader in online clothing retail.

    {'\n'} {'\n'}

    Nina Zhang - Lead Designer: {'\n'}
    Nina Zhang leads the design team at Fit Check, responsible for curating stylish collections that cater to various tastes and body types. 
    With a degree in fashion design and a passion for inclusivity, Nina ensures that Fit Check's clothing collections are diverse, flattering, and timeless. 
    She works closely with the product development team to create pieces that are both functional and fashionable.
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
