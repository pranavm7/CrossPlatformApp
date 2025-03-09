import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph, TextInput, DefaultTheme, Button, Provider as PaperProvider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const employees = [
  { name: "Thomas Hooper", position: "CEO", email: "hooperts@ucmail.uc.edu" },
  { name: "Pranav Mahajan", position: "COO", email: "mahajapp@ucmail.uc.edu" },
  { name: "Ravi Patel", position: "Lead Designer", email: "patel6rv@ucmail.uc.edu" }
];

const ContactUsScreen = ({navigation}) => {
    const { control, handleSubmit, reset } = useForm({
      defaultValues: {
        name: '',
        email: '',
        subject: ''
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
  
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        reset({
          name: '',
          email: '',
          subject: ''
        }); 
      };

    return (
    <PaperProvider theme={theme}>
      <ScrollView style={{ padding: 16 }}>
        {/* Employee Cards */}
        {employees.map((employee, index) => (
          <Card key={index} style={{ marginBottom: 16,backgroundColor: '#8bc7f9' }} >
            <Card.Content>
              <Title>{employee.name}</Title>
              <Paragraph>{employee.position}</Paragraph>
              <Paragraph>Email: {employee.email}</Paragraph>
            </Card.Content>
          </Card>
        ))}

        {/* Contact Form */}
        <Card style={{ backgroundColor: '#8bc7f9' }}>
          <Card.Content>
            <Title>Contact Us</Title>
            <Controller
              control={control}
              name="name"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextInput 
                  label="Name" 
                  value={value || ''} 
                  onChangeText={onChange} 
                  style={{ marginBottom: 10 }}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextInput 
                  label="Email" 
                  value={value || ''} 
                  onChangeText={onChange} 
                  keyboardType="email-address" 
                  style={{ marginBottom: 10 }}
                />
              )}
            />
            <Controller
              control={control}
              name="subject"
              rules={{ required: true, maxLength: 420 }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Subject"
                  value={value || ''}
                  onChangeText={onChange}
                  multiline
                  numberOfLines={4}
                  maxLength={420}
                  style={{ marginBottom: 10 }}
                />
              )}
            />
            <Button mode="contained" onPress={handleSubmit(onSubmit)} style={{ backgroundColor: '#2196f3' }}>
              Submit
            </Button>
            <Button mode="contained" style={{ marginTop: 16,backgroundColor: '#2196f3' }} onPress={() => navigation.goBack()}>
              Go Back
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </PaperProvider>
  );
};

export default ContactUsScreen;
