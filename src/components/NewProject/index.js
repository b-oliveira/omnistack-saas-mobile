import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';

import api from '~/services/api';

import Modal from '~/components/Modal';

import styles from './styles';

export default function NewProject({ visible, onRequestClose }) {
  const [title, setTitle] = useState();

  async function handleSubmit() {
    try {
      const response = await api.post('projects', { title });

      onRequestClose(response.data);
    } catch (err) {}
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
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CRIAR PROJETO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancel} onPress={() => onRequestClose()}>
        <Text style={styles.cancelText}>CANCELAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}
