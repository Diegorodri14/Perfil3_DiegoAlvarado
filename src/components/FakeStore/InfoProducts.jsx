import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Card from '../SharedComp/Card';
import Loading from '../SharedComp/Loading';
import useFetchProducts from '../../hooks/useFetchProducts';

export default function InfoProducts() {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <Loading />;
  if (error) return <Text style={styles.error}>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card 
            title={item.title} 
            image={item.image} 
            description={item.description} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  list: { padding: 20, paddingBottom: 40 },
  error: { color: 'red', textAlign: 'center', marginTop: 20, fontSize: 16 }
});