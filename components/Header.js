import { StyleSheet, Text, View } from 'react-native' ;

function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ZABIHA</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // backgroundColor: '#003314',
        backgroundColor: '#003816',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 2,
    }
  });

export default Header;