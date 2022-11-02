import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './Home/HomeScreen';
import {AuthStackParamList, BottomTabParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShopScreen} from './Shop/ShopScreen';
import {DiscountsScreen} from './Discounts/DiscountsScreen';
import {ProfileScreen} from './Profile/ProfileScreen';
import {SignInScreen} from './Auth/SignIn/SignInScreen';
import {SignUpScreen} from './Auth/SignUp/SignUpScreen';
import {ResetPasswordScreen} from './Auth/ResetPassword/ResetPasswordScreen';
import {useAppSelector} from '../common/hooks/hooks';


const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<AuthStackParamList>();

export const Main = () => {

    const isSignedIn = useAppSelector(state => state.auth.isSignedIn)

    return (
        <View style={styles.container}>
            {isSignedIn
                ? <Tab.Navigator>
                    <Tab.Screen name={'Home'} component={HomeScreen}/>
                    <Tab.Screen name={'Shop'} component={ShopScreen}/>
                    <Tab.Screen name={'Discounts'} component={DiscountsScreen}/>
                    <Tab.Screen name={'Profile'} component={ProfileScreen}/>
                </Tab.Navigator>
                : <Stack.Navigator>
                    <Stack.Screen name={'SignIn'} component={SignInScreen}/>
                    <Stack.Screen name={'SignUp'} component={SignUpScreen}/>
                    <Stack.Screen name={'ResetPassword'} component={ResetPasswordScreen}/>
                </Stack.Navigator>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});