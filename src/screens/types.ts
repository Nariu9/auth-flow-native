import {NavigationProp, NavigatorScreenParams, useNavigation} from '@react-navigation/native';


export type BottomTabParamList = {
    Home: undefined
    Shop: NavigatorScreenParams<ShopNestedStackParamList>
    Discounts: undefined
    Profile: undefined
}

export type ShopNestedStackParamList = {
    MainCourse: undefined
    Appetizer: undefined
    Drinks: undefined
    Dessert: undefined
}

export type AuthStackParamList = {
    SignIn: undefined
    SignUp: undefined
    ResetPassword: undefined
}

type UseNavigationType = NavigationProp<ShopNestedStackParamList & AuthStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()