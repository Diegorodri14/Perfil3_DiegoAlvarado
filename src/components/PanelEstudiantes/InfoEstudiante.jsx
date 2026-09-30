import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InfoEstudiante({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons name="school" size={40} color="#1E3A8A" />
      </View>
      <Text style={styles.label}>Nombre Completo</Text>
      <Text style={styles.value}>{data.nombre}</Text>
      
      <View style={styles.divider} />
      
      <Text style={styles.label}>Número de Carnet</Text>
      <Text style={styles.value}>{data.carnet}</Text>
      
      <View style={styles.divider} />
      
      <Text style={styles.label}>Sección y Grupo</Text>
      <Text style={styles.value}>{data.seccion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  iconBox: {
    alignSelf: 'center',
    backgroundColor: '#DBEAFE',
    padding: 15,
    borderRadius: 50,
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: '#111827',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  }
});