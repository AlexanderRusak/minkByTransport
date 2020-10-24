import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";


export const AppRenderDirectionItem=({transportRoute})=>{


    return(
        <View>
            <FlatList
                data={transportRoute.direction}
            />
        </View>
    )
}