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
            <WidgetTitle title={'Tüm Kategoriler'} style={styles.widgetTitle} />
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Tarih',
                    count:'10 kitap',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Roman',
                    count:'45 kitap',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Gizem',
                    count:'85 kitap',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Gezi',
                    count:'74 kitap',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Polisiye',
                    count:'32 kitap',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Korku',
                    count:'66 kitap',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Şiir',
                    count:'54 kitap',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Din',
                    count:'25 kitap',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <CategoryBox 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Bilim',
                    count:'10 kitap',
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