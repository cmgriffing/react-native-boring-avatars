import * as React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Avatar from '../src';

const names = [
  'Sacagawea',
  'Banicio Del Toro',
  'Steve Miller Banned',
  'Bandy Warhol',
  'Idris Elban',
  'Bannedict Cumberbatch',
  'Ban Halen',
];

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>testing</Text>
        <Avatar
          size={50}
          name="Sacagawea"
          variant="sunset"
          colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
        />
        <Avatar
          size={50}
          name="Sacagawea"
          variant="bauhaus"
          colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
        />
        <Avatar
          size={50}
          name="Sacagawea"
          variant="pixel"
          colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
        />
        <Avatar
          size={50}
          name="Sacagawea"
          variant="ring"
          colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
        />
        <Avatar
          size={50}
          name="Sacagawea"
          variant="marble"
          colors={['#A3A948', '#EDB92E', '#F85931', '#CE1836', '#009989']}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
