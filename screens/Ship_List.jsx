import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../API';
import { setRecords } from '../store/RecordSlice';
import Record_Card from '../components/Record_Card';
import FIlter from '../components/Filter';
import Loading from '../components/Loading';

export default function RecordListScreen({ navigation }) {
    const [ loading, setLoading ] = useState(true);
    const dispatch = useDispatch();
    const { records } = useSelector((store) => store.record);
    const [ searchValue, set_Search ] = useState("")
    const [ filterSendCount, set_Filter_Count ] = useState(0)
    useEffect(() => {
        async function getAllrecords() {
            await axiosInstance.get(`/records?name_filter=${searchValue}`).then((response) => dispatch(setRecords(response?.data)));
        }
        getAllrecords().then(() => {
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
                <View>{!!records && records.map((record) => <Record_Card key={record.rec_id} {...record} />)}</View>
            </ScrollView>
            : <Loading />)
}