import {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import {commonStyles} from '../../../common/styles/styles';
import {useAppSelector} from '../../../common/hooks/hooks';
import {useAppNavigation} from '../../types';

export function ResetPasswordScreen() {
    const [email, setEmail] = useState('');

    const password = useAppSelector(state => state.auth.password)
    const navigation = useAppNavigation()

    const resetPassHandler = () => {
        if (email.trim() !== '') {
            Alert.alert(`Your password is ${password}`)
            navigation.navigate('SignIn')
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
                <Button title="Reset password" onPress={resetPassHandler}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1bfbf',
    },
    form: {
        marginTop: 255,
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});