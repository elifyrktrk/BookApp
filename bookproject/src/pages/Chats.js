import React from "react";
import {View, ScrollView, StyleSheet ,StatusBar, SafeAreaView} from "react-native";
import colors from '../consts/colors';
import {
    Header, 
    ListBookHorizontal, 
    ListBookVertical,
    WidgetTitle,
} from '../components';

function Chats(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle={'light-content'} 
                backgroundColor={colors.primary}
            />
            <Header title ={'Chat Sayfası'} />
            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    horizontalList: {
        marginTop: 35,
        height: 350,
    },
    verticalList: {
        marginTop: 35,
    },
});

export default Chats;