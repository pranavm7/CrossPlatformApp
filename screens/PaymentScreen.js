import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph, RadioButton, TextInput, Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const PaymentScreen = ({navigation}) => {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      paymentMethod: 'credit_card',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  });

  const theme = {
  ...DefaultTheme,
  text: '#000000',
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    placeholder: '#000000',
  },
};

  const selectedMethod = watch("paymentMethod");

  const onSubmit = (data) => {
    console.log("Payment Data:", data);
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView style={{ padding: 16 }}>
        {/* Payment Options */}
        <Card style={{ marginBottom: 16,backgroundColor: '#8bc7f9',color:'#000000',text:'#000000' }}>
          <Card.Content>
            <Title>Payment Options</Title>
            <Paragraph>Select a payment method:</Paragraph>

            <RadioButton.Group 
              onValueChange={(value) => setValue('paymentMethod', value)} 
              value={selectedMethod}
            >
              <RadioButton.Item label="Credit Card" value="credit_card" />
              <RadioButton.Item label="PayPal" value="paypal" />
              <RadioButton.Item label="Bank Transfer" value="bank_transfer" />
            </RadioButton.Group>
          </Card.Content>
        </Card>

        {/* Payment Form */}
        {selectedMethod === 'credit_card' && (
          <Card style={{ backgroundColor: '#8bc7f9',color:'#000000',text:'#000000' }}>
            <Card.Content>
              <Title>Credit Card Details</Title>
              <Controller
                control={control}
                name="cardNumber"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    label="Card Number" 
                    value={value || ''} 
                    onChangeText={onChange} 
                    keyboardType="numeric" 
                    style={{ marginBottom: 10 }}
                  />
                )}
              />
              <Controller
                control={control}
                name="expiryDate"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    label="Expiry Date (MM/YY)" 
                    value={value || ''} 
                    onChangeText={onChange} 
                    keyboardType="numeric" 
                    style={{ marginBottom: 10 }}
                  />
                )}
              />
              <Controller
                control={control}
                name="cvv"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    label="CVV" 
                    value={value || ''} 
                    onChangeText={onChange} 
                    keyboardType="numeric" 
                    secureTextEntry
                    style={{ marginBottom: 10 }}
                  />
                )}
              />
            </Card.Content>
          </Card>
        )}

        <Card style={{ marginTop: 16,backgroundColor: '#8bc7f9',color:'#000000' }}>
          <Card.Content>
            <Title>Payment Instructions</Title>
            <Paragraph>
              - <b>Credit Card</b>: Enter your details and click "Pay Now." 
              <br></br>
              - <b>PayPal</b>: You will be redirected to PayPal for payment.  
              <br></br>
              - <b>Bank Transfer</b>: Use the provided bank details to complete your transaction.  
            </Paragraph>
          </Card.Content>
        </Card>

        {/* Submit Button */}
        <Button mode="contained" style={{ marginTop: 16,backgroundColor: '#2196f3',color:'#000000' }} onPress={handleSubmit(onSubmit)}>
          Pay Now
        </Button>
      <Button mode="contained" style={{ marginTop: 16,backgroundColor: '#2196f3',color:'#000000' }} onPress={() => navigation.goBack()}>
        Go Back
      </Button>
      </ScrollView>
    </PaperProvider>
  );
};

export default PaymentScreen;
