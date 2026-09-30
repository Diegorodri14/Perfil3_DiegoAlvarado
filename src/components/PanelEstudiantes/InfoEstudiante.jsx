import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function InfoEstudiante({ estudiante }) {
  if (!estudiante) return null;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: estudiante.avatar || 'https://via.placeholder.com/100' }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{estudiante.nombre}</Text>
        <Text style={styles.carnet}>{estudiante.carnet}</Text>
        <Text style={styles.grado}>{estudiante.grado}</Text>

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
  avatar: {
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
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  career: {
    fontSize: 14,
    color: '#6200ee',
    marginTop: 4,
  },
  grade: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
    fontWeight: '600',
  },
});