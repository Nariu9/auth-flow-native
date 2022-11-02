import {View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ShopNestedStackParamList} from '../types';
import {MainCourseScreen} from './MainCourse/MainCourseScreen';
import {AppetizerScreen} from './Appetizer/AppetizerScreen';
import {DrinksScreen} from './Drinks/DrinksScreen';
import {DessertScreen} from './Dessert/DessertScreen';


const Stack = createNativeStackNavigator<ShopNestedStackParamList>();

export function ShopScreen() {

    return (
        <View style={{flex: 1}}>
            <Stack.Navigator>
                <Stack.Screen name={'MainCourse'} component={MainCourseScreen}/>
                <Stack.Screen name={'Appetizer'} component={AppetizerScreen}/>
                <Stack.Screen name={'Drinks'} component={DrinksScreen}/>
                <Stack.Screen name={'Dessert'} component={DessertScreen}/>
            </Stack.Navigator>
        </View>
    );
}