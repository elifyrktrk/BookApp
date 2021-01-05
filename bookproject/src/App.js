import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";
import {Home,Categories,Library} from './pages';
import colors from './consts/colors';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Anasayfa') {
              iconName = "home"
            } else if (route.name === 'Kütüphane') {
              iconName = "sliders";
            } else if (route.name === 'Kategoriler') {
              iconName = "box";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.primary ,
          inactiveTintColor: colors.text ,
        }}
      >
        <Tab.Screen name="Anasayfa" component={Home} /> 
        <Tab.Screen name="Kategoriler" component={Categories} /> 
        <Tab.Screen name="Kütüphane" component={Library} /> 
        
      </Tab.Navigator>
  );
}

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"} >
        <Stack.Screen name="Tabs" component={Tabs} /> 
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}


export default App;