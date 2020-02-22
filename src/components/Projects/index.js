import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import styles from './styles';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const { currentTeam } = useSelector(state => state.team);

  useEffect(() => {
    async function loadProjects() {
      try {
        if (currentTeam) {
          const response = await api.get('projects');

          setProjects(response.data);
        }
      } catch (err) {}
    }

    loadProjects();
  }, [currentTeam]);

  return (
    currentTeam && (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.projectsList}
          data={projects}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.projectContainer}>
              <Text style={styles.projectTitle}>{item.title}</Text>
            </View>
          )}
        />

        <TouchableOpacity style={styles.newProjectButton} onPress={() => {}}>
          <Icon name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    )
  );
}
