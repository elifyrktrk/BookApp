import React from "react";
import {View, Text, StyleSheet ,StatusBar, SafeAreaView, ScrollView} from "react-native";
import colors from '../consts/colors';
import {Header, WidgetTitle, ListBookVertical, ListBookHorizontal, CategoryBox, ChallengeBox, BookList} from '../components';

function Library(){
    return( 
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary}/>
            <Header title ={'Kütüphanem'} />
            <ScrollView style={styles.scroll}>
            

            <WidgetTitle title={'Okuma Hedefim'} style={styles.widgetTitle} />
                <ChallengeBox
                style={styles.box} 
                data={{
                    name:'Bu yıl daha fazlasını okumak için kendinize meydan okuyun!',
                    count:'50',
                }}/>
            <WidgetTitle title={'Kitap listelerim'} style={styles.widgetTitle} />
                <BookList
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Okuyorum',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <BookList 
                style={styles.box} 
                data={{
                    _id:'644546464645456',
                    name:'Okuduklarım',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
                <BookList 
                style={styles.box} 
                data={{
                    _id:'9846ssadfasf4154',
                    name:'Okumak istediklerim',
                    description: 'asadsdklfah dshkjaf dasjhjfds djashgkds dasjda',
                }}/>
    

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
    scroll: {
        paddingHorizontal: 15,
    },
    widgetTitle: {
        marginTop: 35,
        marginBottom: 18,
    },
    
   
});

export default Library;
