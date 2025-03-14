import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { fetchUsers, addUser } from './services/api';

export default function App() {
  const [name, setName] = useState('');
  const [transport, setTransport] = useState('');
  const [alimentation, setAlimentation] = useState('');
  const [energie, setEnergie] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const sendData = async () => {
    await addUser(name, transport, alimentation, energie);
    fetchUsers().then(setUsers);
    alert('Données enregistrées avec succès !');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EcoTrack - Suivi Empreinte Carbone</Text>
      <Text>Nom :</Text>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <Text>Transport (kg CO2/jour) :</Text>
      <TextInput style={styles.input} onChangeText={setTransport} value={transport} keyboardType='numeric' />
      <Text>Alimentation (kg CO2/jour) :</Text>
      <TextInput style={styles.input} onChangeText={setAlimentation} value={alimentation} keyboardType='numeric' />
      <Text>Énergie (kg CO2/jour) :</Text>
      <TextInput style={styles.input} onChangeText={setEnergie} value={energie} keyboardType='numeric' />
      <Button title='Soumettre' onPress={sendData} />
      
      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text>👤 {item.name}</Text>
            <Text>Total CO₂: {item.totalCO2} kg/jour</Text>
            <Text>🔍 {item.recommendations}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f4f4f4' },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  input: { borderWidth: 1, padding: 8, marginVertical: 10, backgroundColor: 'white' },
  userCard: { padding: 10, marginVertical: 5, backgroundColor: 'white', borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 2 },
});
