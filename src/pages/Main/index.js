import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SideMenu from 'react-native-side-menu';

import TeamSwitcher from '~/components/TeamSwitcher';
import Projects from '~/components/Projects';
import Members from '~/components/Members';

import styles from './styles';

export default function Main() {
  const [showTeams, setShowTeams] = useState(false);
  const [showMembers, setShowMembers] = useState(false);

  const { currentTeam } = useSelector(state => state.team);

  return (
    <View style={styles.backgroundWrapper}>
      <SideMenu
        isOpen={showTeams}
        disableGestures
        onChange={show => setShowTeams(show)}
        openMenuOffset={70}
        menu={showTeams && <TeamSwitcher />}
      >
        <SideMenu
          isOpen={showMembers}
          disableGestures
          onChange={show => setShowMembers(show)}
          openMenuOffset={285}
          menuPosition="right"
          menu={showMembers && <Members />}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
                onPress={() => setShowTeams(true)}
              >
                <Icon name="menu" size={24} color="#fff"></Icon>
              </TouchableOpacity>
              <Text style={styles.teamTitle}>
                {currentTeam ? currentTeam.name : 'Selecione um time'}
              </Text>
              <TouchableOpacity
                hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
                onPress={() => setShowMembers(true)}
              >
                <Icon name="group" size={24} color="#fff"></Icon>
              </TouchableOpacity>
            </View>
            <Projects />
          </View>
        </SideMenu>
      </SideMenu>
    </View>
  );
}
