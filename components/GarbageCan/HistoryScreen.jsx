import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const HistoryScreen = () => {
  const [history, setHistory] = useState([]); // State to store history
  const [input, setInput] = useState(''); // State for user input

  // Function to add new history item
  const addHistoryItem = () => {
    if (input.trim()) {
      setHistory((prevHistory) => [
        { id: Date.now().toString(), value: input },
        ...prevHistory,
      ]);
      setInput(''); // Clear the input
    }
  };

  // Render each history item
  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyText}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History Tracker</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter action"
          value={input}
          onChangeText={setInput}
        />
        <Button title="Add" onPress={addHistoryItem} />
      </View>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No history yet. Start adding!</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  historyItem: {
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  historyText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#aaa',
    marginTop: 32,
  },
});

export default HistoryScreen;
