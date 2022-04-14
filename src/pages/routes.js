import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home';
import New from './New';
import Notification from './Notification';
import Profile from './Profile';
import Search from './Search';

import { Entypo, Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator 
        tabBarOptions={{
            style:{
            backgroundColor:'red',
            borderTopColor:'transparent'
        },
            activeTintColor:'#FFF',
            tabStyle:{
                paddingBottom: 5,
                paddingTop:5,
            }

        }}>
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon:({size,color})=> (
                <Entypo name="home" size={size} color={color}/>
            )}}
            />
            <Tab.Screen 
            name="Search" 
            component={Search}
            options={{
                tabBarIcon:({size,color})=> (
                <Feather name="search" size={size} color={color}/>
            )}}
            />
            <Tab.Screen 
            name="New"
             component={New}
             options={{
                tabBarIcon:({size,color})=> (
                    <Entypo name="notification" size={size} color={color}/>
            )}}
             />
            <Tab.Screen 
            name="Notification" 
            component={Notification}
            options={{
                tabBarIcon:({size,color})=> (
                <Entypo name="notification" size={size} color={color}/>
            )}}
            />
            <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarIcon:({size,color})=> (
                <Feather name="user" size={size} color={color}/>
            )}}
            />
        </Tab.Navigator>
    );
}
