import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../../types';

export function DessertScreen() {

    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Dessert Screen</Text>
            <Button title={'Main course'} onPress={() => {
                navigation.navigate('MainCourse')
            }}/>
        </View>
    );
}