import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';

import Header from '../../components/Header/Header';
import ConfigButton from '../../components/ConfigButton/configButton';

import getstyles from './style';
import { ThemeContext } from '../../contexts/ThemeContext';




export default function Config() {

    const { currentTheme, toggleTheme, colors } = useContext(ThemeContext)

    const styles = getstyles(colors)

  return (
     <View style={[styles.container]}>
        <Header title='Configurações' />

        <Text style={styles.title}>Tema</Text>
        <TouchableOpacity style={styles.button} 
                          onPress={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}>
            <Text style={{color: '#fff'}}>Modo escuro</Text>
            <Switch value={currentTheme === 'dark'}
                    onValueChange={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}/>
        </TouchableOpacity>

        <Text style={styles.title}>Configurações do tema</Text>

        <ConfigButton title='Claro' icon='lightbulb-on' onPress={() => toggleTheme('light')} isActive={currentTheme === 'light'} />
        <ConfigButton title='Escuro' icon='weather-night' onPress={() => toggleTheme('dark')} isActive={currentTheme === 'dark'} />
     </View>
    )
}