import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FIlter(props) {
    let search = props.children[1]
    let Send = props.children[5]
    let setSearch = props.children[3]

    const handleSend = () => {
        Send((prev_count) => prev_count + 1)
    }

    return (
        <View style={styles.page}>
            <View style={styles.filter}>
                <View>
                    <Text style={styles.column_title}>Поиск</Text>
                    <TextInput style={styles.input}
                        autoComplete="off"
                        placeholder="Название"
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                    />
                </View>
            </View>
            <Button title="применить" onPress={() => handleSend()} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
    },
    filter_title: {
        marginTop: 10,
        fontSize: 22,
        textAlign: 'center',
    },
    filter: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        padding: 5,
        marginBottom: 10,
    },
    column_title: {
        marginBottom: 10,
        fontSize: 18,
    },
    price_block: {
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
    },
    input: {
        top: -7,
        paddingTop: 1,
        width:350,
        paddingBottom: 1,
        paddingLeft: 2,
        paddingRight: 2,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        borderRadius: 5,
    }
});