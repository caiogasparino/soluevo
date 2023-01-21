import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ViewButton() {
  const navigation = useNavigation();
  const [input, setInput] = useState('');

  const handlePress = () => {
    navigation.navigate('ViewResults', { input: input });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TESTE SOLUEVO</Text>
      </View>
      <TextInput
        placeholderTextColor={'#000'}
        style={styles.input}
        placeholder='TEXT:'
        value={input}
        onChangeText={e => {
          setInput(e);
        }}
      />
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>SEND</Text>
      </TouchableOpacity>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  title: { fontSize: 24 },
  input: {
    width: '70%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 10,
    color: '#000',
    fontSize: 18,
    margin: 10,
    padding: 10
  },
  button: {
    width: '20%',
    color: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  text: {
    fontSize: 18
  }
});
