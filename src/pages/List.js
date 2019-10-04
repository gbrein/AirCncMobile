import React, {useState, useEffect} from 'react';
import {
    View,
    SafeAreaView,
    Image,
    ScrollView,
    StyleSheet,
    AsyncStorage,
    TouchableOpacity,
    Alert,
    Text
} from 'react-native';
import SpotList from '../components/SpotList'

import logo from '../assets/logo.png';

export default function List({navigation}) {
    const [techs,
        setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage
            .getItem('techs')
            .then(Storagestechs => {
                const techsArray = Storagestechs
                    .split(',')
                    .map(tech => tech.trim());
                setTechs(techsArray)
            });
    }, []);

    function handleLogOut() {
        AsyncStorage
            .removeItem('user')
            .then(response => {
                Alert.alert('Você fez Logout!')
            })
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.logo} source={logo}/>

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
            </ScrollView>

            <TouchableOpacity onPress={handleLogOut} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20
    },

    button: {
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
});