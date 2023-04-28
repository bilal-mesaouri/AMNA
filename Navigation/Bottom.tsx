
import React from 'react'
import {View,Text,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeRoutes from '../Src/Screens/HomeRoutes';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const HomeScreen = ()=>{
        return (
        <View>
            <Text>Home screen</Text>
            <Text>Home screen</Text>
        </View>
        
    )}
    const Sales = ()=>{return <View>
        <Text>Sales screen</Text>

    </View>}
    const Credit = ()=>{return <View><Text>Credit screen</Text></View>}
    const Expenses = ()=>{return <View><Text>Expenses screen</Text></View>}
  return (
    <NavigationContainer>
              <Tab.Navigator> 
              <Tab.Screen name="Home"  component={HomeRoutes}  options={{ headerShown: false }}  />
              <Tab.Screen name="Sales"   component={Sales} options={{ headerShown: false }}  />
              <Tab.Screen name="Credit"  component={Credit}  options={{ headerShown: false }}  />
              <Tab.Screen name="Expenses"  component={Expenses}  options={{ headerShown: false }}  />

              {/* <Tab.Screen name="SeeCart" children={()=><ProfileRouter com={SeeCart}/> } options={{
            tabBarStyle: { display: "none" },
            headerShown: false
          }}/> */}
   
      </Tab.Navigator>
    </NavigationContainer>)
}