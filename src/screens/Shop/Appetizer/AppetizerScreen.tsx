import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../../types';

export function AppetizerScreen() {

    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Appetizer Screen</Text>
            <Button title={'Drinks'} onPress={() => {
                navigation.navigate('Drinks')
            }}/>
        </View>
    );
}