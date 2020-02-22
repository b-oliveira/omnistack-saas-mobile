import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Modal as RNModal,
} from 'react-native';

import styles from './styles';

export default function Modal({ children, visible, onRequestClose }) {
  return (
    <RNModal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onRequestClose}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View style={styles.content}>{children}</View>
      </KeyboardAvoidingView>
    </RNModal>
  );
}
