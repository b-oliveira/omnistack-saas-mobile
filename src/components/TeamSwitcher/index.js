import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import styles from './styles';

export default function TeamSwitcher() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await api.get('teams');

        setTeams(response.data);
      } catch (err) {}
    }

    loadTeams();
  }, []);

  return (
    <View style={styles.container}>
      {teams.map(team => (
        <TouchableOpacity
          key={team.id}
          style={styles.teamContainer}
          onPress={() => {}}
        >
          <Image
            style={styles.teamAvatar}
            source={{
              uri: `https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.title}`,
            }}
          ></Image>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.newTeam} onPress={() => {}}>
        <Icon name="add" size={24} color="#999" />
      </TouchableOpacity>
    </View>
  );
}
