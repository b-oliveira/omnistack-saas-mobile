import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import NewProject from '~/components/NewProject';

import styles from './styles';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);

  const { currentTeam } = useSelector(state => state.team);

  useEffect(() => {
    async function loadProjects() {
      try {
        if (currentTeam) {
          const response = await api.get('projects');

          setProjects(response.data);
        }
      } catch (err) {
        Alert.alert('Projetos', err.message);
      }
    }

    loadProjects();
  }, [currentTeam]);

  function handleCloseModal(project) {
    if (project) setProjects([...projects, project]);

    setNewProject(false);
  }

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

        <TouchableOpacity
          style={styles.newProjectButton}
          onPress={() => setNewProject(true)}
        >
          <Icon name="add" size={28} color="#fff" />
        </TouchableOpacity>

        <NewProject visible={newProject} onRequestClose={handleCloseModal} />
      </View>
    )
  );
}
