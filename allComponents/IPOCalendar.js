import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const token = 'pk_e4777f0ef11e4349b3a3d6efc898cc61';
const apiUrl = `https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${token}`;

const IPOCalendar = () => {
  const [ipoData, setIPOData] = useState([]);

  useEffect(() => {
    const fetchIPOData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setIPOData(response.data);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
      }
    };

    fetchIPOData();
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 10 }}>
      <Text style={{ textAlign: 'center', backgroundColor: '#1890ff', padding: 10, color: 'white' }}>
        Upcoming IPO Calendar
      </Text>
      <ScrollView style={{ marginTop: 10 }}>
        {ipoData.map((ipo, index) => (
          <View key={ipo.id} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Company Name: {ipo.companyName}</Text>
            <Text>Date: {ipo.offeringDate}</Text>
            <Text>Price: {ipo.price}</Text>
            <Text>Symbol: {ipo.symbol}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default IPOCalendar;
