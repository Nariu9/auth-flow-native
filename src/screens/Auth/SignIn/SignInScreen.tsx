import {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useAppNavigation} from '../../types';
import {commonStyles} from '../../../common/styles/commonStyles';

export function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const { signIn } = React.useContext(AuthContext);
    const signIn = () => {

    }

    const navigation = useAppNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.btnWrapper}>
                <Button title={'Sign up'} onPress={() => {
                    navigation.navigate('SignUp')
                }}/>
                <Button title={'Reset password'} onPress={() => {
                    navigation.navigate('ResetPassword')
                }}/>
            </View>
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
                <Button title="Sign in" onPress={signIn}/></View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4f6bd',
    },
    btnWrapper: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    form: {
        marginTop: 175,
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});