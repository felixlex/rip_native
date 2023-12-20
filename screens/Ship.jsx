import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { resetShip, setShip } from '../store/ShipSlice';
import { axiosInstance } from '../API';
import Loading from '../components/Loading';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

export default function ShipScreen({ route }) {
    const [ loading, setLoading ] = useState(true);

    const { id } = route.params;
    const dispatch = useDispatch();
    const { ship } = useSelector((store) => store.ship);
    const [ parameters, setParameters ] = useState([]);

    const getParams = (source) => {
        let params = []
        source.units && params.push({key: "Еденицы измерения", value: source.units})
        source.env_measur &&  params.push({key: "Среда обитания", value: source.env_measur})
        return params
    }


    useEffect(() => {
        async function getship() {
            await axiosInstance.get(`/records/${id}`).then((response) => {
                dispatch(setShip(response?.data));
                setParameters(getParams(response?.data));
            });
        }

        getship().then(() => {
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });

        return () => {
            dispatch(resetShip());
        };
    }, [dispatch]);

    return (
        !loading ?
        <View style={styles.page}>
            <Image style={styles.image} resizeMode={ImageResizeMode.contain} source={{uri : `data:image/jpeg;base64,${ship.photo_record}`}}/>
            <Text style={styles.price}>{ship.rec_name}</Text>
            <Text style={styles.desr}>{ship.description}</Text>
            <Text style={styles.param_title}>Характеристики</Text>
            <View style={styles.container}>
                {parameters.map((parameter, index) => (
                    <View key={index} style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.param_text}>{parameter.key}</Text>
                            <View style={styles.param_dots}></View>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.param_text}>{parameter.value}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
        : <Loading />
    );
}

const styles = StyleSheet.create({
    desr:{
        marginLeft: 20,
        marginRight:20,
        fontSize:18
    },
    page: {
        backgroundColor: '#ffffff',
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    title: {
        color: '#006bd5',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
    },
    price: {
        fontSize: 28,
        fontWeight: '300',
        margin: 5,
        textAlign: 'center',
    },
    image: {
        height: 250,
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
    },
    param_title: {
        marginTop: 25,
        padding: 4,
        backgroundColor: '#4B53C3',
        fontWeight: '500',
        fontSize: 22,
        color: '#ffffff',
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
    },
    param_text: {
        fontSize: 16,
    },
    param_dots: {
        flex: 1,
        position: 'relative',
        marginHorizontal: 3,
        top: -3,
        height: '100%',
        borderStyle: 'dotted',
        borderBottomWidth: 2,
        borderBottomColor: '#777777',
    },
    status_green: {
        textAlign: 'center',
        marginVertical: 15,
        padding: 6,
        textTransform: 'uppercase',
        backgroundColor: '#00b90e',
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 145,
        marginRight: 145,
    },
    status_red: {
        textAlign: 'center',
        marginVertical: 15,
        padding: 6,
        textTransform: 'uppercase',
        backgroundColor: '#ff7200',
        fontWeight: 'bold',
        marginLeft: 145,
        marginRight: 145,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingBottom: 20,
    },
  });