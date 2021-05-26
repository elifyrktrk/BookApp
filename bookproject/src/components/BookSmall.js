import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import colors from '../consts/colors';
import { useNavigation } from '@react-navigation/native';




function BookSmall({style, data, library}){

    const navigation = useNavigation(); 

    function onLongPressBook(){
        if(library){
            Alert.alert(
                'Uyarı',
                'Kitap favorilerden silinecek',
                [
                    {
                        text:'İptal',
                        onPress: () => Alert.alert('İptal edildi.'),
                    },
                    {
                        text:'Sil',
                        onPress: () => {
                            //kitap silme iişlemleri
                            alert('kitap silindi!')
                        }},
                ]);
        }
    }
    return (
        <TouchableOpacity 
            style={[styles.book, {...style}]}
            onPress={() => navigation.navigate('Chats')}
            onLongPress={() => onLongPressBook()}>
            <View style={styles.image} >
            <Image 
                resizeMode={'stretch'}
                style={styles.cover}
                source={{
                    uri: data.cover,
                }}
              />   
            </View>
            <View style={styles.details}>
            <Text style={styles.name} numberOfLines={3}>
                {data.name}</Text>
            <Text style={styles.description} numberOfLines={3}>
                {data.description}</Text>
            </View>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    book: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 110,
        height: 150,
        borderRadius: 5,
        backgroundColor: colors.load,
        marginRight: 20,
    },
    cover: {
        width: 110,
        height: 150,
        borderRadius: 3,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.dark,
        lineHeight: 22, 
    },
    description: {
        fontSize: 14,
        color: colors.text,
        marginTop: 10,
        letterSpacing: 0.6,
        lineHeight: 24,
    },
    details: {
        flex: 1,
    },
}); 

export default BookSmall;