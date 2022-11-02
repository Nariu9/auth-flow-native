import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../../types';

export function MainCourseScreen() {

    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>MainCourse Screen</Text>
            <Button title={'Appetizer'} onPress={() => {
                navigation.navigate('Appetizer')
            }}/>
        </View>
    );
}