import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet ,ScrollView} from 'react-native';
import { getCurrencyData } from '../services/CurrencyService';

export default function HomeScreen({ navigation }) {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    async function fetchCurrencyData() {
      const data = await getCurrencyData();
      setCurrencyData(data);
    }
    fetchCurrencyData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency List</Text>
      <ScrollView style={styles.currencyList}>

      {Object.keys(currencyData).map((currency) => (
        <Button
          key={currency}
          styles={styles.currencyItem}
          title={currency}
          onPress={() =>
            navigation.navigate('Details', { currency, data: currencyData[currency] })
          }
        />
      ))}
      </ScrollView>
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
  currencyList: {
    width: '100%',
    maxHeight: 200,
    marginBottom: 20,
  },
  currencyItem: {
    padding: 16,
    borderBottomWidth: 10,
    borderBottomColor: '#ccc',
  },
});
