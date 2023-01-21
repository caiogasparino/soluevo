import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ViewResults() {
  const route = useRoute();
  const phrase = route.params?.input;
  const [state, setState] = useState([]);

  const words = phrase.split(' ');

  const removeDuplicates = () => {
    return setState(
      words.filter((item, index) => words.indexOf(item) === index)
    );
  };

  useEffect(() => {
    removeDuplicates();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Results</Text>
      </View>
      <StatusBar style='auto' />
      <View style={styles.resultsContainer}>
        {state.map((item, index) => (
          <View key={index} style={styles.resultsContent}>
            <View style={styles.phraseContainer}>
              <Text style={styles.text}>{'Words: '}</Text>
              <Text style={styles.phrase}>{item}</Text>
            </View>
            <View style={styles.phraseContainer}>
              <Text style={styles.text}>{'Number: '}</Text>
              <Text style={styles.phrase}>
                {words.filter(x => x === item).length}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  resultsContainer: {
    width: '100%',
    padding: 10,
    height: 400,
    borderRadius: 10,
    backgroundColor: '#dddd'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  title: { fontSize: 24 },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  phraseContainer: {
    width: '85%',
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  resultsContent: {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#000'
  },
  phrase: {
    fontSize: 14
  }
});
