import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { SIZES , FONTS} from '../../constants'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // You can replace the console.log with your actual signup logic
  };

  return (
    <View style={styles.container}>
      <LottieView source={require("../../assets/json/aninSignup.json")}
        autoPlay
        loop
        style={{
          width: SIZES.width * 0.7,
          height: SIZES.width * 0.7,
          marginVertical: 48,
        }}
      />

      <Text
        style={{
          ...(SIZES.width <= 360
            ? { ...FONTS.h2 }
            : { ...FONTS.h1 }),
          textAlign: 'center',
          marginHorizontal: SIZES.padding * 0.8,
        }}
      >
        Open WeMail account
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Signup;
