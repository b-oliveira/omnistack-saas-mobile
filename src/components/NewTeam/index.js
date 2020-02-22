import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import api from '~/services/api';

import Modal from '~/components/Modal';

import styles from './styles';

export default function NewTeam({ visible, onRequestClose }) {
  const [name, setName] = useState();

  async function handleSubmit() {
    try {
      const response = await api.post('teams', { name });

      onRequestClose(response.data);

      Alert.alert('Novo Time', 'Time criado com sucesso!');
    } catch (err) {
      Alert.alert('Novo Time', err.message);
    }
  }

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Text style={styles.label}>NOME</Text>
      <TextInput
        style={styles.input}
        autoFocus
        underlineColorAndroid="transparent"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={name}
        onChangeText={text => setName(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CRIAR TIME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancel} onPress={() => onRequestClose()}>
        <Text style={styles.cancelText}>CANCELAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}
