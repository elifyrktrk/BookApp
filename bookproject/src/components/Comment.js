import React from "react";
import {View, Text, StyleSheet, Image, TextInput, SafeAreaView} from "react-native";
import colors from '../consts/colors';

    
function Comment({style, data}){
        return (
        <SafeAreaView>
       
        <View style={styles.inputView} >
        <Text style={styles.date} numberOfLines={2}>
                {data.date}</Text>
        <Text style={styles.commentname} numberOfLines={2}>
                {data.name}</Text>
        <Text style={styles.comment} numberOfLines={8}>
                {data.comment}</Text>
        
        </View>

      
     
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:25,
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
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:150,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      commentname:{
        
        color:"white",
        position: "absolute",
        left: 10,
        top: 8,
        right: 10,
      },
      comment:{
        height:100,
        color:"white",
        position: "absolute",
        left: 10,
        top: 40,
        right: 10,
      },
      date:{
          
        color:"white",
        position: "absolute",
        left: 220,
        top: 8,
        right: 10,
      },
}); 

export default Comment;
