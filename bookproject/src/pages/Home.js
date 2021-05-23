import React from "react";
import {View, ScrollView, StyleSheet ,StatusBar, SafeAreaView} from "react-native";
import colors from '../consts/colors';
import {
    Header, 
    ListBookHorizontal, 
    ListBookVertical,
    WidgetTitle,
} from '../components';

function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle={'light-content'} 
                backgroundColor={colors.primary}
            />
            <Header title ={'Anasayfa'} />
            <ScrollView style={styles.container}>
                <ListBookHorizontal widgetTitle={'Öne çıkanlar'} style={styles.horizontalList} /> 
                <ListBookVertical widgetTitle={'Son eklenenler'} style={styles.verticalList} /> 
            </ScrollView>
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

export default Home;