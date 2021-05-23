import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {WidgetTitle, BookSmall} from '../components';
import colors from "../consts/colors";


function ListBookVertical({style, widgetTitle, library}){
    return(
        <View style={[styles.list, {...style}]}>
            <WidgetTitle title={widgetTitle} style={styles.WidgetTitle}/>
            <BookSmall
                    library={library}
                    style={styles.bookSmall} 
                    data={{
                        name: 'Ben Kirke',
                        description: 'Goodreads okurlarına göre 2018’in En İyi Fantastik Kitabı. Bu dikkat çekici hikâye sizi, Kirke’nin yaptığı bir büyü gibi etkisi altına alacak. - Mary Doria Russell, Serçe’nin yazarı -',
                        cover: 
                            'https://i.dr.com.tr/cache/600x600-0/originals/0001836978001-1.jpg',
                    }}
                />
                <BookSmall 
                    library={library}
                    style={styles.bookSmall} 
                    data={{
                        name: 'Şeker Portakalı',
                        description: 'Acı dolu bir hayat sürdürmek ve bunu yaşamın olağan seyri gibi kabul etmek, ta ki hayattaki en gerçek ve karşı konulamaz acının ne olduğunu öğrenene kadar…',
                        cover: 
                            'https://i.dr.com.tr/cache/600x600-0/originals/0000000064031-1.jpg',
                    }}
                />
                <BookSmall
                    library={library}
                    style={styles.bookSmall} 
                    data={{
                        name: 'Bilinçaltının Gücü',
                        description: 'Zihniniz, anbean yaşadıklarınızı işleyip kendinizi gerçekleştirme yolculuğunuzda gideceğiniz yönü belirlemenizi sağlıyor. ',
                        cover: 
                            'https://i.dr.com.tr/cache/600x600-0/originals/0001831154001-1.jpg',
                    }}
                />
                <BookSmall
                    library={library}
                    style={styles.bookSmall} 
                    data={{
                        name: 'Hayır Diyebilme Sanatı',
                        description: 'Gerçekten “özgür” müsünüz? Dilediğiniz zaman dilediğiniz yemeği yiyebiliyor olmak mıdır sizce özgürlük? ',
                        cover: 
                            'https://i.dr.com.tr/cache/600x600-0/originals/0001835964001-1.jpg',
                    }}
                />
        </View>
    );
}


const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 15,
    },
    
    scroll: {
        width: '100%',
    },
    bookSmall: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E7E7E7',
    },
});

export default ListBookVertical;