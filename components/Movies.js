import React from 'react';
import { Text, View, Image,ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Movie=({title, year, icon_name, poster})=>{
    return (
        <View>
            <Text>
                {title} {year}
            </Text>
            <Image source={poster} style={{width:400,height:500}}/>
            <Icon name={icon_name} size={50} color="#B23823"/>
        </View>
    )
}

const AllMovies=()=>{
    return(
        <ScrollView>
            <Movie title="Docter Sleep" year={2019} icon_name="paw" poster={require('../img/doctor-sleep.jpg')}/>
            <Movie title="Midway" year={2020} icon_name="paw" poster={require('../img/midway.jpg')}/>
            <Movie title="Midway" year={2020} icon_name="paw" poster={require('../img/midway.jpg')}/>
        </ScrollView>
    )
}
export default AllMovies;
