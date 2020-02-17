import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { signInRequest } from '~/store/modules/auth/actions';

import styles from './styles';

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const refPassword = useRef();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <View>
        <Text style={styles.title}>Entrar</Text>

        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => refPassword.current.focus()}
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          ref={refPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
