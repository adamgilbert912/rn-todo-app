import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import ListItem from './components/ListItem'
import TextButtonView from './components/TextButtonView'

export default function App() {
  const [enteredText, setEnteredText] = useState('')
  const [enteredGoals, setEnteredGoals] = useState([])
  const [isAddVisible, setAddVisible] = useState(false)

  const setText = (text) => { setEnteredText(text) }

  const setGoals = (isVisible) => {
    if (enteredText !== '') {
      setEnteredGoals([...enteredGoals, { key: Math.random().toString(), value: enteredText }]);
      setEnteredText('');
      setAddVisible(false);
    }
  }

  const cancelHandler = () => {
    setAddVisible(false);
    setEnteredText('');
  }

  const removeItem = key => {
    return (
      setEnteredGoals(enteredGoals.filter((goal) => goal.key !== key))
    )
  }

  return (
    <View style={styles.contatiner}>
      <View style={styles.content}>
        <Button title="Add to the List" onPress={() => setAddVisible(true)} />
        <TextButtonView onChangeText={setText} onPress={setGoals} value={enteredText} isVisible={isAddVisible} onCancel={cancelHandler} />
        <FlatList data={enteredGoals} renderItem={itemData => (
          <ListItem text={itemData.item.value} onDelete={() => removeItem(itemData.item.key)} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contatiner: {
    height: '100%',
    width: '100%',
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    borderRightColor: 'black',
    borderLeftColor: 'black',
    backgroundColor: 'lightgrey',
    borderWidth: 20,
    padding: 0,
    alignContent: 'center',
  },

  content: {
    alignContent: 'center',
  },
});
