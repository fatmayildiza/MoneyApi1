import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { currency, data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.text}>Currency Code: {currency}</Text>
      <Text style={styles.text}>Currency Symbol: {data.symbol}</Text>
      <Text style={styles.text}>Currency Rate: {data.rate}</Text>
      <Text style={styles.text}>Currency Description: {data.description}</Text>
      <Text style={styles.text}>Currency Rate Float: {data.rate_float}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Arka plan rengi
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Başlığın altındaki boşluk
  },
  text: {
    fontSize: 18,
    marginBottom: 10, // Metinler arası boşluk
  },
});
