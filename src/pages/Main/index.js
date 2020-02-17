import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function Main() {
  return (
    <View style={styles.backgroundWrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
            onPress={() => {}}
          >
            <Icon name="menu" size={24} color="#fff"></Icon>
          </TouchableOpacity>
          <Text style={styles.teamTitle}>Rocketseat</Text>
          <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
            onPress={() => {}}
          >
            <Icon name="group" size={24} color="#fff"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
