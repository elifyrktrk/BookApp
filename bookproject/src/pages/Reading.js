import React from "react";
import {View, Text, StyleSheet ,StatusBar, SafeAreaView, ScrollView} from "react-native";
import colors from '../consts/colors';
import {Header, ListBookVertical} from '../components';

function Reading({route, widgetTitle}){
    const data = route.params.data;
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary}/>
            <Header title ={data.name} />
            <ScrollView style = {styles.container}>
                <ListBookVertical widgetTitle={data.name + ' :'} style={styles.verticalList} /> 
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    verticalList: {
        marginTop: 35,
    },
});

export default Reading;