import {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {commonStyles} from '../../../common/styles/commonStyles';

export function ResetPasswordScreen() {
    const [email, setEmail] = useState('');


    const resetPass = () => {

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
                <Button title="Reset password" onPress={resetPass}/>
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
        marginTop: 250,
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});