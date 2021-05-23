import React from "react";
import {View, Text, StyleSheet ,StatusBar, SafeAreaView, ScrollView} from "react-native";
import colors from '../consts/colors';
import {Header, CategoryBox, WidgetTitle, ListBookVertical, ListBookHorizontal} from '../components';

function Library(){
    return( 
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary}/>
            <Header title ={'Kütüphanem'} />
            <ScrollView style={styles.scroll}>
            
            <ListBookVertical 
            library={true}
            widgetTitle={'Favorilerim'} 
            style={styles.verticalList} 
            />     
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    box: {
        marginBottom: 12,
    },
    horizontalList: {
        marginTop: 35,
        height: 350,
    },
    verticalList: {
        marginTop: 35,
    },

});

export default Library;