import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import colors from '../consts/colors';
import { useNavigation } from '@react-navigation/native';
import { Colors } from "react-native/Libraries/NewAppScreen";

function Header({title, activeGoBack}) {
    const navigation = useNavigation();
    return(
        <View style={styles.header}>
        

            <TouchableOpacity style={styles.button} > 
                <Icon name={'menu'} color={colors.header} size={24}/>
            </TouchableOpacity>

            <Text style={styles.title}>{title}</Text>

          
            <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
            style={styles.login}> 
                <Text>Kaydol</Text>
            </TouchableOpacity>

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
    login:{
        color: colors.header,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: 'flex-end',
    },
});

export default Header;