import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import InviteMember from '~/components/InviteMember';

import styles from './styles';

export default function Members() {
  const [members, setMembers] = useState([]);
  const [newInviteMember, setNewInviteMember] = useState(false);

  async function handleLoadMembers() {
    try {
      const response = await api.get('members');

      setMembers(response.data);
    } catch (err) {
      Alert.alert('Membros', err.message);
    }
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => setNewInviteMember(true)}
          >
            <Text style={styles.buttonText}>Convidar</Text>
          </TouchableOpacity>
        )}
      />

      <InviteMember
        visible={newInviteMember}
        onRequestClose={() => setNewInviteMember(false)}
      />
    </View>
  );
}
