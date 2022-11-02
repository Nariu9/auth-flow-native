import {Main} from './src/screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Main/>
            </NavigationContainer>
        </Provider>
    );
}