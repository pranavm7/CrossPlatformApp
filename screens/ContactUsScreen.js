import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph, TextInput, Button, Provider as PaperProvider } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const employees = [
  { name: "Pranav Mahajan", position: "CTO", email: "hooperts@ucmail.uc.ed" },
  { name: "Thomas Hooper", position: "CEO", email: "mahajapp@ucmail.uc.edu" },
  { name: "Ravi Patel", position: "COO", email: "patel6rv@ucmail.uc.edu" }
];

const ContactUsScreen = () => {
    const { control, handleSubmit, reset } = useForm({
      defaultValues: {
        name: '',
        email: '',
        subject: ''
      }
    });
  
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        reset({
          name: '',
          email: '',
          subject: ''
        }); 
      };

    return (
    <PaperProvider>
      <ScrollView style={{ padding: 16 }}>
        {/* Employee Cards */}
        {employees.map((employee, index) => (
          <Card key={index} style={{ marginBottom: 16 }}>
            <Card.Content>
              <Title>{employee.name}</Title>
              <Paragraph>{employee.position}</Paragraph>
              <Paragraph>Email: {employee.email}</Paragraph>
            </Card.Content>
          </Card>
        ))}

        {/* Contact Form */}
        <Card>
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
            <Button mode="contained" onPress={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </PaperProvider>
  );
};

export default ContactUsScreen;
