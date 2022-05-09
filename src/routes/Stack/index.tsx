import React from "react";
import HomeScreen from "../../screens/home/home_screen";
import ChartScreen from "../../screens/chart/chart_screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName='Home'>
            <Screen name='Home' component={HomeScreen}/>
            <Screen name='Chart' component={ChartScreen}/>
        </Navigator>
    )
}


