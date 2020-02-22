import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import styles from './styles';

export default function Members() {
  const [members, setMembers] = useState([]);

  async function handleLoadMembers() {
    try {
      const response = await api.get('members');

      setMembers(response.data);
    } catch (err) {}
  }

  useEffect(() => {
    handleLoadMembers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEMBROS</Text>

      <FlatList
        style={styles.memberList}
        data={members}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.memberContainer}>
            <Text style={styles.memberName}>{item.user.name}</Text>

            <TouchableOpacity
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              onPress={() => {}}
            >
              <Icon name="settings" size={20} color="#b0b0b0" />
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Convidar</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
