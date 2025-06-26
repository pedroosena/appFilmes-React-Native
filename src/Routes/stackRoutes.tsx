import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home/home";
import Detail from "../pages/Detail/detail";
import Search from "../pages/Search/search";
import Movies from "../pages/Movies/movies";

const Stack = createStackNavigator();

export function HomeStackRoutes(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Search" component={Search}/>
        </Stack.Navigator>
    )
}

export function MoviesStackRoutes(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Movies" component={Movies}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}