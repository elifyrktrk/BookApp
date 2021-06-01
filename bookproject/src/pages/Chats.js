import React from "react";
import {Text,TextInput, View, ScrollView, StyleSheet ,StatusBar, SafeAreaView} from "react-native";
import colors from '../consts/colors';
import {
    Book,
    BookLarge,
    Comment,
    Header, 
    ListBookHorizontal, 
    ListBookVertical,
    WidgetTitle,
} from '../components';

function Chats({data,style}){
    
                    
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle={'light-content'} 
                backgroundColor={colors.primary}
            />
            <Header title ={'Chat Sayfası'} />
            <ScrollView style={styles.container}>
            <Book 
                style={styles.BookLarge} 
                data={{
                    name: 'Bilinçaltının Gücü',
                    author: 'Joseph Murphy',
                    cover: 
                        'https://i.dr.com.tr/cache/600x600-0/originals/0001831154001-1.jpg',
                    }}
                />
            <Text>      Kitap hakkında düşüncelerini paylaş</Text>
            <TextInput
                style={styles.input}
                placeholder="kitap hakkında yorum yap"
            />
               
               
               <Comment
                style={styles.BookLarge} 
                    data={{
                        name: 'user1',
                        comment: 'joseph murphy tarafından yazılmış "sevgi içinizde, güç içinizde" * konseptli bir kişisel gelişim kitabı. bilinç kontrolü hakkında ilgili biri için yeni bir şeyler anlatmasa da yeni yeni öz kontrol konusuna merak salanlar için iyi bir giriş kitabı sayılabilir.',
                        date: '01.06.21-14:40',
                    }}
                /> 
                <Comment
                style={styles.BookLarge} 
                    data={{
                        name: 'user2',
                        comment: 'herkesin okuması gereken, insana yepyeni bir bakış açısı kazandıran kitap. insana güç veren, daha doğrusu insanın içinde ki gücü anlamasını sağlayan kitaplardan.',
                        date: '01.06.21-14:42',
                    }}
                /> 
                <Comment
                style={styles.BookLarge} 
                    data={{
                        name: 'user3',
                        comment: 'Mottosu düşüncelerinizi değiştirirseniz kaderinizi de değiştirirsiniz',
                        date: '01.06.21-14:44',
                    }}
                /> 
            </ScrollView>
            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    horizontalList: {
        marginTop: 35,
        height: 350,
    },
    verticalList: {
        marginTop: 35,
    },
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
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
});

export default Chats;