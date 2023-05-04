import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet, Text, View} from 'react-native'
import Manuel from '../screens/Manuel';
import Video from '../screens/Video';
import { Colors } from '../constants/Colors';
import { withDecay } from 'react-native-reanimated';


const Tab = createMaterialTopTabNavigator();

function TopNav() {
  return (
    <>
        <View style={styles.headerStyle}>
        <Text style={styles.headerTitleStyle}>شكاية قضائية</Text>
        </View>
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle:styles.tabBarStyle,
            tabBarIndicatorStyle:styles.tabBarIndicatorStyle,
            tabBarItemStyle:styles.tabBarItemStyle,
            tabBarPressColor: null
        }}>
        <Tab.Screen name="دليل الإستعمال" component={Manuel} />
        <Tab.Screen name="الموقع الرسمي" component={Video} />
        </Tab.Navigator>
    </>
  )
}

const styles = StyleSheet.create({
    tabBarStyle:{
        top:10,
        backgroundColor:'transparent',
        elevation:0,
        marginBottom:20,
        borderWidth:0,
        marginHorizontal:5,
    },
    tabBarIndicatorStyle:{
        backgroundColor:'transparent'
    },
    tabBarItemStyle:{
        backgroundColor:'#FECBAA',
        borderRadius:10,
        marginHorizontal:5,
    },
    headerStyle:{
    backgroundColor: Colors.primaryColor,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  headerTitleStyle:{
    color:'white',
    fontWeight:'bold',
    fontSize:30 
  }
  });

export default TopNav