import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function InfoPlanets({ planet }) {
  if (!planet) return null;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: planet.image || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{planet.name}</Text>
        <Text style={styles.king}>Rey: {planet.king?.name || 'Desconocido'}</Text>
        <Text style={styles.gravity}>Gravedad: {planet.gravity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  king: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  gravity: {
    fontSize: 14,
    color: '#6200ee',
    marginTop: 4,
  },
}); 