import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import colors from '../consts/colors';
import { useNavigation } from '@react-navigation/native';

function BookList({style, data}){
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Reading', {data})}
        style={[styles.box, {...style}]} 
        activeOpacity={0.6}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.count}>15 kitap</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: colors.box,
        padding: 16, 
        borderRadius: 10,
    }, 
    name: {
        color: colors.dark,
        fontSize: 12,
        letterSpacing: 1,
        lineHeight: 16,
    },
    count: {
        marginTop: 3,
        fontSize: 12,
        letterSpacing: 1,
        lineHeight: 16,
        color: colors.text,
    },    
}); 

export default BookList;