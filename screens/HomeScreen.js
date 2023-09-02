import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet ,ScrollView, TouchableOpacity} from 'react-native';
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
        <TouchableOpacity
          key={currency}
          styles={styles.currencyItem}
          title={currency}
          onPress={() =>
            navigation.navigate('Details', { currency, data: currencyData[currency] })}
            >   
            <View style={styles.currencyContainer}> 
            <Text style={styles.currencyText}>{currency}</Text>
            </View>
        </TouchableOpacity>
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
    fontSize: 27,
    color:'lightBlue',
    fontWeight: 'bold',
    marginBottom: 9, 
  },
  currencyList: {
    width: '100%',
    maxHeight: 200,
    marginBottom: 20,
  },
  currencyText: {
    padding: 16,
    color:'gray',
  
    fontSize:24,
  },
  currencyContainer:{
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems:'center'
  },
});
