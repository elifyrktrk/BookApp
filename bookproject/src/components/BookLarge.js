import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {TouchableNativeFeedback, TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../consts/colors';
import { useNavigation } from '@react-navigation/native';

function BookLarge({style, data}){

    const navigation = useNavigation(); 

    return (
        <View style={[styles.book, {...style}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
            <View style={styles.image} >
            <Image 
                resizeMode={'stretch'}
                style={styles.cover}
                source={{
                    uri: data.cover,
                }}
                />   
            </View>
            <Text style={styles.name} numberOfLines={1}>
                {data.name}</Text>
            <Text style={styles.author} numberOfLines={1}>
                {data.author}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    book: {
        borderRadius: 3,
        width: 180,
        height: 310,
        
    },
    image: {
        width: 180,
        height: 250,
        borderRadius: 5,
        backgroundColor: colors.load,
    },
    cover: {
        width: 180,
        height: 250,
        borderRadius: 3,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.dark,
        marginTop: 12,
    },
    author: {
        fontSize: 14,
        color: colors.text,
        marginTop: 3,
    },
}); 

export default BookLarge;