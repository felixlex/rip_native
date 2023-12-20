import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import { useNavigation } from '@react-navigation/native';

export default function Ship_Card({ navigation, ...props }) {
    const navigat = useNavigation();
    const handlePress = () => {
        navigat.navigate('Информация о рекорде', { id: props.record_id });
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={handlePress}>
                <Image style={styles.image} resizeMode={ImageResizeMode.contain} source={{uri : `data:image/jpeg;base64,${props.photo_record}`}}/>
                <Text style={styles.price}>{props.rec_name}</Text>
                <Text numberOfLines={6} style={styles.desc}>{props.description}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    desc:{
        fontSize:16,
        marginLeft:20,
        marginRight: 20,
        marginBottom:30,
        marginTop:15,
    },
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 300,
        height: 450,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 50,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        borderStyle: 'solid',
        overflow: 'hidden'
    },
    image: {
        width: 250,
        height: 180,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
    },
    title: {
        color: '#006bd5',
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    price: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginTop: 15,
    },
    status_green: {
        textAlign: 'center',
        marginTop: 15,
        padding: 6,
        textTransform: 'uppercase',
        backgroundColor: '#00b90e',
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 95,
        marginRight: 95,
    },
    status_red: {
        textAlign: 'center',
        marginTop: 15,
        padding: 6,
        textTransform: 'uppercase',
        backgroundColor: '#ff7200',
        fontWeight: 'bold',
        marginLeft: 95,
        marginRight: 95,
    },
});