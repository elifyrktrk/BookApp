import React from "react";
import {View, Text, StyleSheet ,StatusBar, SafeAreaView} from "react-native";
import colors from '../consts/colors';
import {Header} from '../components';

function Home(){
    return(
        <SafeAreaView>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary}/>
            <Header title ={'Anasayfa'} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;