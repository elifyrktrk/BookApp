import React from "react";
import {View, Text, StyleSheet} from "react-native";
import colors from '../consts/colors';

function WidgetTitle({style, title}){
    return <Text style={[styles.title, {...style}]}>{title}</Text>
}

const styles = StyleSheet.create({
    title: {
        color: colors.dark,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});

export default WidgetTitle;