/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Fontisto,MaterialCommunityIcons,MaterialIcons    } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import MyOrders from '../screens/MyOrders';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ReceipesList from '../screens/Receipes/ReceipesList';
import UserProfile from '../screens/UserProfile';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}


const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Receipes"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel:false
      }}>
      <BottomTab.Screen
        name="Receipes"
        component={ReceipesList}
        options={({ navigation }: RootTabScreenProps<'Receipes'>) => ({
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="food-takeout-box-outline" size={24} color={color} />
        })}
      />
      <BottomTab.Screen
        name="Favorites"
        component={MyOrders}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards-heart-outline" size={24}  color={color} />,
        }}
      />
     <BottomTab.Screen
        name="MyOrders"  
        component={MyOrders}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="basket-check-outline" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="UserProfile"  
        component={UserProfile}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
