import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../common/hooks/hooks';
import {signOut} from '../../store/authSlice';

export function ProfileScreen() {

    const dispatch = useAppDispatch()

    const signOutHandler = () => {
        dispatch(signOut())
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile Screen</Text>
            <Button title={'Sign out'} onPress={signOutHandler}/>
        </View>
    );
}