import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Switch, Alert } from 'react-native';

import api from '~/services/api';

import Modal from '~/components/Modal';

import styles from './styles';

export default function RoleUpdater({ member, onRequestClose }) {
  const [roles, setRoles] = useState([]);
  const [rolesMember, setRolesMember] = useState(member.roles);

  useEffect(() => {
    async function loadRoles() {
      try {
        const response = await api.get('roles');

        setRoles(response.data);
      } catch (err) {
        Alert.alert('Permissões', err.message);
      }
    }

    loadRoles();
  }, []);

  async function handleRoleChange(selectedRole, value) {
    try {
      const data = value
        ? [...rolesMember, selectedRole]
        : rolesMember.filter(role => role.id !== selectedRole.id);

      setRolesMember(data);

      await api.put(`members/${member.id}`, {
        roles: data.map(role => role.id),
      });

      Alert.alert('Permissão atualizada com sucesso!');
    } catch (err) {
      setRolesMember(member.roles);

      Alert.alert('Permissões', err.message);
    }
  }

  return (
    roles && (
      <Modal visible={member !== null} onRequestClose={onRequestClose}>
        <View>
          {roles.map(role => (
            <View key={role.id} style={styles.roleContainer}>
              <Text style={styles.roleText}>{role.name}</Text>

              <Switch
                value={
                  !!rolesMember.find(memberRole => memberRole.id === role.id)
                }
                onValueChange={value => handleRoleChange(role, value)}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.cancel} onPress={onRequestClose}>
          <Text style={styles.cancelText}>Voltar</Text>
        </TouchableOpacity>
      </Modal>
    )
  );
}
