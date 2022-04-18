import { Dimensions, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';
import { POSITIONSTACK_APIKEY, POSITIONSTACK_BASE_URL } from '../config';

function Search() {

    const [userSearch, setUserSearch] = useState('')
    const screenWidth = Dimensions.get('screen').width
    const screenHeight = Dimensions.get('screen').height
    const [test, setTest] = useState('testing')
    const [location, setLocation] = useState(null)

    const updateSearch = (search) => {
        const url = `${POSITIONSTACK_BASE_URL}forward?access_key=${POSITIONSTACK_APIKEY}&query=${userSearch}`

        setUserSearch(search);
    };

    const submitSearch = (search) => {
        const url = `${POSITIONSTACK_BASE_URL}forward?access_key=${POSITIONSTACK_APIKEY}&query=${userSearch}`
        fetch(url)
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result)
                setLocation(result)
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
                    onSubmitEditing={submitSearch}
                />
            </View>
        </SafeAreaView>
    );
}


export default Search;