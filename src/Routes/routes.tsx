import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { HomeStackRoutes, MoviesStackRoutes } from "./stackRoutes";

import Configs from "../pages/Configs/configs";
import { ThemeContext } from "../contexts/ThemeContext";

const Drawer = createDrawerNavigator();

function Routes(){

    const { colors } = useContext(ThemeContext);

    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: colors.background,
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: colors.lightBlue,
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: colors.text,
            }}
        >
            <Drawer.Screen 
            name="HomeDrawer" 
            component={HomeStackRoutes}
            options={{
                title: "Home",
                drawerIcon: ({ focused, size, color }) => (
                    <MaterialCommunityIcons 
                        name={focused ? "movie-open" : 'movie-outline'}
                        size={size}
                        color={color}
                    />
                )
            }}
            />
            
            <Drawer.Screen 
            name="Movies" 
            component={MoviesStackRoutes}
            options={{
                title: "Meus filmes",
                drawerIcon: ({ focused, size, color}) => (
                    <MaterialCommunityIcons 
                        name={focused ? 'archive' : 'archive-outline'}
                        color={color}
                        size={size}

                    />
                )
            }}
            />

            <Drawer.Screen 
            name="Configs" 
            component={Configs}
            options={{
                title: "Configurações",
                drawerIcon: ({ focused, size, color}) => (
                    <MaterialCommunityIcons 
                        name='cog'
                        color={color}
                        size={size}

                    />
                )
            }}
            />
        </Drawer.Navigator>
    )
}

export default Routes;