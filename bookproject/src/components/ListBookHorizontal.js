import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {WidgetTitle, BookLarge} from '../components';


function ListBookHorizontal({style, widgetTitle}){
    return(
        <View style={[styles.list, {...style}]}>
            <WidgetTitle title={widgetTitle} style={styles.WidgetTitle}/>
            <ScrollView horizontal={true} style={styles.scroll}>
                <BookLarge 
                    style={styles.BookLarge} 
                    data={{
                        name: 'Ben Kirke',
                        author: 'Madeline Miller',
                        cover: 
                            'https://i.dr.com.tr/cache/600x600-0/originals/0001836978001-1.jpg',
                    }}
                />
                <BookLarge 
                    style={styles.BookLarge} 
                    data={{
                        name: 'Şeker Portakalı',
                        author: 'Jose Mauro De Vasconcelos',
                        cover: 
                            'https://i.dr.com.tr/cache/600x600-0/originals/0000000064031-1.jpg',
                    }}
                />
                <BookLarge 
                    style={styles.BookLarge} 
                    data={{
                        name: 'Bilinçaltının Gücü',
                        author: 'Joseph Murphy',
                        cover: 
                            'https://i.dr.com.tr/cache/600x600-0/originals/0001831154001-1.jpg',
                    }}
                />
                <BookLarge
                    style={styles.BookLarge} 
                    data={{
                        name: 'Hayır Diyebilme Sanatı',
                        author: 'Müthiş Psikoloji',
                        cover: 
                            'https://i.dr.com.tr/cache/600x600-0/originals/0001835964001-1.jpg',
                    }}
                />
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    list: {
        paddingLeft: 15,
    },
    WidgetTitle: {
        marginBottom: 20,
    },
    BookLarge: {
        marginRight: 18,
    },
    scroll: {
        width: '100%',
    },
});

export default ListBookHorizontal;