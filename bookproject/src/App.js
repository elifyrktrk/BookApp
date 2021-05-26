import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";
import {Home,Categories,Library,CategoryDetail,Chats,Reading,Login} from './pages';
import colors from './consts/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = "home";
            } else if (route.name === 'Library') {
              iconName = "sliders";
            } else if (route.name === 'Categories') {
              iconName = "box";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.primary ,
          inactiveTintColor: colors.text ,
          style: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Anasayfa',
        }} /> 
        <Tab.Screen name="Categories" component={Categories} options={{
          tabBarLabel: 'Kategoriler',
        }} /> 
        <Tab.Screen name="Library" component={Library} options={{
          tabBarLabel: 'Kütüphane',
        }} />  
        
      </Tab.Navigator>
  );
}

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"} >
        <Stack.Screen name="Tabs" component={Tabs} /> 
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} /> 
        <Stack.Screen name="Chats" component={Chats} /> 
        <Stack.Screen name="Reading" component={Reading} /> 
        <Stack.Screen name="Login" component={Login} /> 
          
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}


export default App;