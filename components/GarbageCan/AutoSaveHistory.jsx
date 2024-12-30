import { useState } from "react";


const AutoSaveHistory = () => {
    const [level, setLevel] = useState(0); // State for level
    const [gase, setGase] = useState(0); // State for gase
    const [history, setHistory] = useState([]); // State to store history


    // Function to add history automatically
    useEffect(() => {
        const newHistoryItem = `Level: ${level}, Gase: ${gase}`;
        setHistory((prevHistory) => [
            { id: Date.now().toString(), value: newHistoryItem },
            ...prevHistory,
        ]);
    }, [level, gase]); // Triggered whenever level or gase changes
    

    // Handlers to change level and gase
    const increaseLevel = () => setLevel((prev) => prev + 1);
    const decreaseLevel = () => setLevel((prev) => Math.max(0, prev - 1));
    const increaseGase = () => setGase((prev) => prev + 1);
    const decreaseGase = () => setGase((prev) => Math.max(0, prev - 1));

    // Render each history item
    const renderItem = ({ item }) => (
        <View style={styles.historyItem}>
            <Text style={styles.historyText}>{item.value}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Level and Gase Tracker</Text>
            <View style={styles.statusContainer}>
                <Text style={styles.status}>Level: {level}</Text>
                <Text style={styles.status}>Gase: {gase}</Text>
            </View>
            <View style={styles.buttonRow}>
                <Button title="Increase Level" onPress={increaseLevel} />
                <Button title="Decrease Level" onPress={decreaseLevel} />
            </View>
            <View style={styles.buttonRow}>
                <Button title="Increase Gase" onPress={increaseGase} />
                <Button title="Decrease Gase" onPress={decreaseGase} />
            </View>
            <FlatList
                data={history}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No history yet. Start adjusting!</Text>
                }
            />
        </View>
    );
}

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
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    status: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
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

export default AutoSaveHistory;