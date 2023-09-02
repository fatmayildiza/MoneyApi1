import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // CoinDesk API'den verileri almak için Axios kullanalım
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        setData(Object.entries(response.data.bpi));
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Kripto Para Fiyatları</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item[0]}
          renderItem={({ item }) => (
            <View style={styles.currencyContainer}>
              <Text style={styles.currency}>{item[0]}</Text>
              <Text style={styles.price}>{item[1].rate} {item[1].description}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    padding: 20,
    alignItems:'center',
    justifyContent:'center',
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    marginTop:73,
  },
  currencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  currency: {
    fontSize: 18,
    color: 'white',
  },
  price: {
    fontSize: 18,
    color: 'white',
  },
});
