import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import colors from '../consts/colors';
import { useNavigation } from '@react-navigation/native';

function Header({title, activeGoBack}) {
    const navigation = useNavigation();
    return(
        <View style={styles.header}>
        {
            activeGoBack ? (
                <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.goBack}> 
                <Icon name={'chevron-left'} color={colors.header} size={24}/>
            </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.button} > 
                <Icon name={'menu'} color={colors.header} size={24}/>
            </TouchableOpacity>
            )
        }
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button}> 
                <Icon name={'search'} color={colors.header} size={24}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: colors.header,
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Header;