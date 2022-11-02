import {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {commonStyles} from '../../../common/styles/commonStyles';

export function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // const { signIn } = React.useContext(AuthContext);
    const signUp = () => {

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
                <Button title="Sign up" onPress={signUp}/></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c2a8f6',
    },
    form: {
        marginTop: 200,
        height: 210,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});