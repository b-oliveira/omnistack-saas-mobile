import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';

import api from '~/services/api';

import Modal from '~/components/Modal';

import styles from './styles';

export default function InviteMember({ visible, onRequestClose }) {
  const [email, setEmail] = useState();

  async function handleSubmit() {
    try {
      await api.post('invites', { invites: [email] });

      onRequestClose();

      setEmail();
    } catch (err) {}
  }

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        style={styles.input}
        autoFocus
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CONVIDAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancel} onPress={() => onRequestClose()}>
        <Text style={styles.cancelText}>CANCELAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}
