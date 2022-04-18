import { Dimensions, Keyboard, StyleSheet, SafeAreaView, Text, View, TouchableHighlight } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';
import { POSITIONSTACK_APIKEY, POSITIONSTACK_BASE_URL } from '../config';

function Search() {

    const screenWidth = Dimensions.get('screen').width
    const [userSearch, setUserSearch] = useState('')
    const [locations, setLocations] = useState(null)
    const [selected, setSelected] = useState(null)
    

    const updateSearch = (search) => {
        if(search.length >= 2) {
            setUserSearch(search);
            getLocations()
            console.log(locations)
        } else {
            setLocations(null)
            setUserSearch(null);
        }
    };

    const getLocations = () => {
        const url = `${POSITIONSTACK_BASE_URL}forward?access_key=${POSITIONSTACK_APIKEY}&query=${userSearch}&limit=5&country=US&region=NYC`
        fetch(url)
        .then((res) => res.json())
        .then(
            (result) => {
                setLocations(result.data)
            }
        )
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <SafeAreaView>
            <View>
                <SearchBar 
                    placeholder="Search a location"
                    lightTheme
                    autoCorrect={false}
                    onChangeText={updateSearch}
                    value={userSearch}
                    containerStyle={{width: screenWidth, backgroundColor: 'white'}}
                    inputContainerStyle={{backgroundColor: 'white', height: 30}}
                    inputStyle={{height:20, fontSize: 18}}
                />
                {locations && (
                    <View>
                        {locations.map((item, index) => (
                            <TouchableHighlight onPress = {() => {
                                    setSelected(item)
                                    setLocations(null)
                                    setUserSearch(null)
                                    Keyboard.dismiss()
                                }}>
                                <View style={styles.searchOptionContainer}>
                                    <Text key={index.toString()} style={styles.searchOptionText}> 
                                        {item.label}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        ))}
                    </View>
                )}
                {!locations && selected && (
                    <View>
                        <Text>{selected.label}</Text>
                        <Text>Longitude: {selected.longitude}</Text>
                        <Text>Latitude: {selected.latitude}</Text>
                    </View>
                )}
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    searchOptionContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    searchOptionText: {
        fontSize: 18,
        paddingVertical: 5,
        color: 'gray',
    },
})

export default Search;