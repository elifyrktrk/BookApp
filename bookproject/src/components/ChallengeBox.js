import React from "react";
import {View, Text, StyleSheet, Image, TextInput, SafeAreaView} from "react-native";
import colors from '../consts/colors';

    const ChallengeBox = () => {
        const [number, onChangeNumber] = React.useState(null);
    return (
        <SafeAreaView>
        <Text>Bu yıl daha fazlasını okumak için kendinize meydan okuyun!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="yıllık kitap okuma hedefinizi giriniz"
        keyboardType="numeric"
      />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
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

export default ChallengeBox;
