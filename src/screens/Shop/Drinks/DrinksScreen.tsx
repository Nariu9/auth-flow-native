import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../../types';

export function DrinksScreen() {

    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Drinks Screen</Text>
            <Button title={'Dessert'} onPress={() => {
                navigation.navigate('Dessert')
            }}/>
        </View>
    );
}