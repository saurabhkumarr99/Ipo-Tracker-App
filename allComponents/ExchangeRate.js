import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const token = 'pk_e4777f0ef11e4349b3a3d6efc898cc61';
const apiUrl = `https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${token}`;

const ExchangeRate = () => {
  const [exchangeData, setExchangeData] = useState([]);

  useEffect(() => {
    const fetchExchangeData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setExchangeData(response.data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeData();
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 10 }}>
      <Text style={{ textAlign: 'center', backgroundColor: '#1890ff', padding: 10, color: 'white' }}>
        Latest Currency Exchange Rates
      </Text>
      <ScrollView style={{ marginTop: 10 }}>
        {exchangeData.map(({ symbol, rate, timestamp, isDerived }, index) => (
          <View key={symbol} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{index + 1}</Text>
            <Text>Currency Pair: {symbol}</Text>
            <Text>Rate: {rate}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ExchangeRate;

