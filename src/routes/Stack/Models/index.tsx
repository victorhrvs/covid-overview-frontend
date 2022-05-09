import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home: undefined
    Chart: {
        date: string,
        uf: string
    }
}
export type propsStack = NativeStackNavigationProp<propsNavigationStack>