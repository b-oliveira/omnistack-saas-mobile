import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { setCurrentTeam } from '~/store/modules/team/actions';

import styles from './styles';

export default function TeamSwitcher() {
  const [teams, setTeams] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await api.get('teams');

        setTeams(response.data);
      } catch (err) {}
    }

    loadTeams();
  }, []);

  function handleCurrentTeam(team) {
    dispatch(setCurrentTeam(team));
  }

  return (
    <View style={styles.container}>
      {teams.map(team => (
        <TouchableOpacity
          key={team.id}
          style={styles.teamContainer}
          onPress={() => handleCurrentTeam(team)}
        >
          <Image
            style={styles.teamAvatar}
            source={{
              uri: `https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`,
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
