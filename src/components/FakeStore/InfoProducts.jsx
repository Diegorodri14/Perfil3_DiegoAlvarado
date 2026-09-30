import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function InfoProducts({ product }) {
  if (!product) return null;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}>
          ⭐ {product.rating?.rate} ({product.rating?.count} reseñas)
        </Text>
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
    marginRight: 16,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  category: {
    fontSize: 12,
    color: '#6200ee',
    marginTop: 4,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
    marginTop: 4,
  },
  rating: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});