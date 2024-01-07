import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useAuth } from './AuthContext';

const Home = ({ theme, navigation }) => {
  const { isAuthenticated, logout } = useAuth();

  const keyFeatures = [
    'Display upcoming IPOs using an external API endpoint',
    'Show the latest currency rates via an external API endpoint',
    'Implement periodic data refresh or user-triggered updates',
    'Leverage mobile features for an enhanced user experience on the app',
  ];

  const styles = {
    light: {
      textColor: '#000000',
      headerColor: '#1890ff',
      // backgroundImage: require('../assets/ipo34.png'),
    },
  };

  const selectedStyles = styles[theme] || styles.light;

  const handleExploreNow = () => {
    if (isAuthenticated) {
      navigation.navigate('IPO Calendar');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <ImageBackground source={selectedStyles.backgroundImage} style={{ flex: 1, resizeMode: 'cover' }}>
      <View style={{ backgroundColor: selectedStyles.headerColor, paddingVertical: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 24 }}>Welcome to IPO Tracker & Currency Pulse</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20, alignItems: 'center' }}>
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 18 }}>
          IPO Tracker & Currency Pulse is an all-in-one platform providing real-time stock market data and comprehensive tools for analysis.
        </Text>
        <Text style={{ color: selectedStyles.textColor, fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Key Features:</Text>
        <View style={{ marginTop: 10, borderWidth: 1, borderColor: selectedStyles.headerColor, borderRadius: 5 }}>
          {keyFeatures.map((feature, index) => (
            <View key={index} style={{ flexDirection: 'row', marginBottom: 5, paddingHorizontal: 10, paddingVertical: 5 }}>
              <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>{feature}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={handleExploreNow} style={{ marginTop: 10, backgroundColor: selectedStyles.headerColor, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Explore Now</Text>
        </TouchableOpacity>
        <Text style={{ color: selectedStyles.textColor, fontSize: 16, marginTop: 10 }}>Begin exploring our feature-rich platform today!</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;
