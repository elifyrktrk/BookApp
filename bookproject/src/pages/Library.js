import React from "react";
import {View, Text, StyleSheet ,StatusBar, SafeAreaView} from "react-native";
import colors from '../consts/colors';
import {Header} from '../components';

function Library(){
    return(
        <SafeAreaView>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary}/>
            <Header title ={'Kütüphane'} />
        </SafeAreaView>
    );
}

export default Library;