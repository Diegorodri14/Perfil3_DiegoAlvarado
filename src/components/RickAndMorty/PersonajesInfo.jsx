import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PersonajesInfo({ character }) {
  if (!character) return null;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: character.image }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.status}>
          Estado: {character.status} - {character.species}
        </Text>
        <Text style={styles.gender}>Género: {character.gender}</Text>
        <Text style={styles.origin}>Origen: {character.origin?.name}</Text>
        <Text style={styles.location}>Ubicación: {character.location?.name}</Text>
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
    width: 80,
    height: 80,
    borderRadius: 40,
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
  status: {
    fontSize: 14,
    color: '#4caf50',
    marginTop: 4,
  },
  gender: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  origin: {
    fontSize: 14,
    color: '#6200ee',
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});