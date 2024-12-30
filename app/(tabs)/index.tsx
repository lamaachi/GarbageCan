import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import { ProgressBar, IconButton } from 'react-native-paper';

type HistoryItem = {
  id: string;
  value: string;
};

export default function HomeScreen() {
  const [fillLevel, setFillLevel] = useState<number>(0);
  const [gasLevel, setGasLevel] = useState<'safe' | 'warning' | 'alert'>('safe');
  const [gasValue, setGasValue] = useState<number>(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Round to 2 decimal places to avoid precision errors
      const randomFill = Math.floor(Math.random() * 100) / 100;
      setFillLevel(randomFill);

      const newGasValue = Math.floor(Math.random() * 100);
      setGasValue(newGasValue);


      if (newGasValue < 30) {
        setGasLevel('safe');
      } else if (newGasValue < 70) {
        setGasLevel('warning');
      } else {
        setGasLevel('alert');
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const roundedFillLevel = Math.round(fillLevel * 100);
    const newHistoryItem = {
      id: Date.now().toString(),
      value: `Fill Level: ${roundedFillLevel}%, Gas Level: ${gasLevel.toUpperCase()} (${gasValue} ppm)`
    };
    
    setHistory(prev => [newHistoryItem, ...prev]);
  }, [fillLevel, gasLevel, gasValue]);

  const getFillLevelColor = (): string => {
    const thresholds = [
      { limit: 0.1, color: 'green' },
      { limit: 0.2, color: 'lightgreen' },
      { limit: 0.3, color: 'yellow' },
      { limit: 0.4, color: 'gold' },
      { limit: 0.5, color: 'orange' },
      { limit: 0.6, color: 'darkorange' },
      { limit: 0.7, color: 'red' },
      { limit: 0.8, color: 'darkred' },
      { limit: 0.9, color: 'purple' },
      { limit: 1.0, color: 'black' },
    ] as const;
  
    const matchingThreshold = thresholds.find(t => fillLevel <= t.limit);
    return matchingThreshold?.color || '#FFFFFF';
  };

  const getGasLevelProps = () => {
    const props: Record<typeof gasLevel, { icon: string; color: string }> = {
      safe: { icon: 'check-circle', color: 'green' },
      warning: { icon: 'alert-circle', color: 'orange' },
      alert: { icon: 'alert-octagon', color: 'red' }
    };
    return props[gasLevel];
  };

  const renderHistoryItem = ({ item }: { item: HistoryItem }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyText}>{item.value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Garbage Can Monitor</Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.label}>Fill Level:</Text>
        <ProgressBar
          progress={fillLevel}
          color={getFillLevelColor()}
          style={styles.progressBar}
        />
        <Text style={styles.value}>{`${Math.round(fillLevel * 100)}%`}</Text>

        <Text style={styles.label}>Gas Level:</Text>
        <View style={styles.gasIndicator}>
          <IconButton
            icon={getGasLevelProps().icon}
            iconColor={getGasLevelProps().color}
            size={24}
          />
          <Text style={[styles.value, { marginLeft: 10 }]}>
            {gasLevel.toUpperCase()} - {gasValue} ppm
          </Text>
        </View>
      </View>

      <FlatList
        data={history}
        keyExtractor={item => item.id}
        renderItem={renderHistoryItem}
        ListHeaderComponent={<Text style={styles.historyHeader}>History</Text>}
        ListEmptyComponent={<Text style={styles.emptyText}>No history yet.</Text>}
        style={styles.historyContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dataContainer: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
  gasIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  historyHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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