import {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import {commonStyles} from '../../../common/styles/styles';
import {useAppDispatch} from '../../../common/hooks/hooks';
import {signUp} from '../../../store/authSlice';
import {useAppNavigation} from '../../types';

export function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useAppDispatch()
    const navigation = useAppNavigation()

    const signUpHandler = () => {
        if (password.trim() !== '' && passwordConfirm.trim() !== '' && email.trim() !== '' && password === passwordConfirm) {
            dispatch(signUp({email, password}))
            Alert.alert('You have successfully registered')
            navigation.navigate('SignIn')
        } else {
            Alert.alert('Passwords do not match')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    style={commonStyles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={commonStyles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={commonStyles.input}
                    placeholder="Confirm password"
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    secureTextEntry
                />
                <Button title="Sign up" onPress={signUpHandler}/></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c2a8f6',
    },
    form: {
        marginTop: 145,
        height: 210,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});