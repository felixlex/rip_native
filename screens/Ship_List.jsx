import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../API';
import { setShips } from '../store/ShipSlice';
import Ship_Card from '../components/Ship_Card';
import FIlter from '../components/Filter';
import Loading from '../components/Loading';

export default function ShipListScreen({ navigation }) {
    const [ loading, setLoading ] = useState(true);
    const dispatch = useDispatch();
    const { ships } = useSelector((store) => store.ship);
    const [ searchValue, set_Search ] = useState("")
    const [ filterSendCount, set_Filter_Count ] = useState(0)
    useEffect(() => {
        async function getAllships() {
            await axiosInstance.get(`/records?name_filter=${searchValue}`).then((response) => dispatch(setShips(response?.data)));
        }
        getAllships().then(() => {
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        });
    }, [dispatch, filterSendCount]);

    return( 
        !loading ?
    <ScrollView>
                <FIlter>
                search={searchValue}
                setSearch={set_Search}
                Send={set_Filter_Count}
                </FIlter>
                <View>{!!ships && ships.map((ship) => <Ship_Card key={ship.rec_id} {...ship} />)}</View>
            </ScrollView>
            : <Loading />)
}