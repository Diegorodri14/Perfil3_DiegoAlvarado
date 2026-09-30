import React from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import Navbar from '../components/SharedComp/Navbar';
import InfoEstudiante from '../components/PanelEstudiantes/InfoEstudiante';
import UsePanelEstudiante from '../hooks/UsePanelEstudiante';

export default function EstudiantesScreen() {
  const { estudiantes, loading, error, refetch } = UsePanelEstudiante();

  const renderEstudiante = ({ item }) => (
    <InfoEstudiante estudiante={item} />
  );

  return (
    <View style={styles.container}>
      <Navbar title="Panel de Estudiantes" />
      
      {loading && estudiantes.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#6200ee" />
          <Text style={styles.loadingText}>Cargando estudiantes...</Text>
        </View>
      ) : error ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      ) : (
        <FlatList
          data={estudiantes}
          renderItem={renderEstudiante}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refetch} />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 8,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});