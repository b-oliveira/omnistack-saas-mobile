import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SideMenu from 'react-native-side-menu';

import TeamSwitcher from '~/components/TeamSwitcher';

import styles from './styles';

export default function Main() {
  const [showTeams, setShowTeams] = useState(false);

  return (
    <View style={styles.backgroundWrapper}>
      <SideMenu
        isOpen={showTeams}
        disableGestures
        onChange={show => setShowTeams(show)}
        openMenuOffset={70}
        menu={showTeams && <TeamSwitcher />}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
              onPress={() => setShowTeams(true)}
            >
              <Icon name="menu" size={24} color="#fff"></Icon>
            </TouchableOpacity>
            <Text style={styles.teamTitle}>Selecione um time</Text>
            <TouchableOpacity
              hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
              onPress={() => {}}
            >
              <Icon name="group" size={24} color="#fff"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </SideMenu>
    </View>
  );
}
