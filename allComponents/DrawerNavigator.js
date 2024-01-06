import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native';
import Home from './Home';
import ContactUs from './ContactUs';
import Login from './Login';
import AboutUs from './AboutUs';
import Register from './Register';
import { useAuth } from './AuthContext';
import ExchangeRate from './ExchangeRate';
import IPOCalendar from './IPOCalendar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {isAuthenticated && (
        <View style={{ marginHorizontal: 16, marginTop: 10 }}>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      )}
    </DrawerContentScrollView>
  );
};


const DrawerNavigator = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Drawer.Navigator initialRouteName="Home" >

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {!isAuthenticated && (
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-add-outline" size={size} color={color} />
            ),
          }}
        />
      )}

      {isAuthenticated && (
        <Drawer.Screen
          name="IPO Calendar"
          component={IPOCalendar}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar" size={size} color={color} />
            ),
          }}
        />
      )}

      {isAuthenticated && (
        <Drawer.Screen
          name="Exchange Rates"
          component={ExchangeRate}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="currency-usd" size={size} color={color} />
            ),
          }}
        />
      )}

      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" size={size} color={color} />
          ),
        }}
      />

      {!isAuthenticated &&
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" size={size} color={color} />
            ),
          }}
        />}

      {isAuthenticated && (
        <Drawer.Screen
          name="Logout"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-out-outline" size={size} color={color} />
            ),
          }}
          component={() => <Button title="Logout" onPress={handleLogout} />}
        />
      )}

      <Drawer.Screen
        name="IPO Calender"
        component={IPOCalendar} 
        options={{ drawerLabel: () => null }} 
      />
    </Drawer.Navigator>

  );
};

export default DrawerNavigator;
