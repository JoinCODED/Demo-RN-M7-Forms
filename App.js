import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
} from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import * as yup from 'yup';

export default function App() {
  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  let schema = yup.object().shape({
    fullname: yup.string().min(3).required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  });

  const validate = async () => {
    Keyboard.dismiss();
    for (const field in inputs) {
      try {
        await schema.validateAt(field, inputs);
      } catch (error) {
        handleError(error.errors[0], field);
      }
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Signup</Text>

        <View style={styles.view}>
          <Input
            onChangeText={(text) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="envelope"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="user"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="key"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Register" onPress={validate} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: { paddingTop: 50, paddingHorizontal: 20 },
  title: { color: '#EF9F9F', fontSize: 40, fontWeight: 'bold' },
  view: { marginVertical: 20 },
});
