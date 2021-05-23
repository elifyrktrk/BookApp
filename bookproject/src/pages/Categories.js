import React from "react";
import {View, Text, StyleSheet ,StatusBar, SafeAreaView, ScrollView} from "react-native";
import colors from '../consts/colors';
import {CategoryBox, Header, WidgetTitle} from '../components';

function Categories(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary}/>
            <Header title ={'Kategoriler'} />
            <ScrollView style={styles.scroll}>
            <WidgetTitle title={'Öne Çıkanlar'} style={styles.widgetTitle} />
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Tarih',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'7465465153333157',
                    name:'Roman',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scroll: {
        paddingHorizontal: 15,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    box: {
        marginBottom: 12,
    },
    widgetTitle: {
        marginTop: 35,
        marginBottom: 18,

    },

});

export default Categories;