import { StyleSheet, Text, FlatList, SafeAreaView, View } from 'react-native'
import { useState } from 'react'
import { API_BASE_URL, BEARER_TOKEN} from '../config'
import queryString from 'query-string'

// const styles = StyleSheet.create({
//     view: {
//         height: '100%',
//         width: '100%',
//         zIndex: -1,
//         marginTop: 180,
//     },

//     item: {
//         borderTopWidth: 2,
//         borderBottomWidth: 2,
//         marginTop: 5,
//         marginBottom: 5,
//     }
// });

// const renderItem = ({ item }) => (
//     <Item title={item.name} description={item.address} />
//   );

// const Item = ({ title, description }) => (
//     <View style={styles.item}>
//         <Text>{title} </Text>
//         <Text>{description} </Text>
//     </View>
// );

function getRestaurants(path, queryParams) {
    const query = queryString.stringify(queryParams)

    return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}


export default Restaurants;