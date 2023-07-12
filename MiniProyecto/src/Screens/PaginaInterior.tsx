import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';
import { styles } from '../Theme/paginaInterior';
export const PaginaInterior = () => {

    const images = [
        {
            source: require('../img/img1.webp'),
            title: 'Rælingen, Noruega',
            views: '3.167 visualizaciones del mes pasado',
            dates: '15 al 20 de oct.',
            price: '$444 USD',
            type: 'noche'
        },

        {
            source: require('../img/img2.webp'),
            title: 'Rælingen, Noruega',
            views: '3.247 visualizaciones del dia anterior ',
            dates: '19 al 25 de oct.',
            price: '$200 USD',
            type: 'noche'
        },

        {
            source: require('../img/img3.webp'),
            title: 'Rælingen, Noruega',
            views: '1.567  visualizaciones hace una hora',
            dates: '11 al 17 de oct.',
            price: '$100 USD',
            type: 'noche'
        },

        {
            source: require('../img/img4.webp'),
            title: 'Rælingen, Noruega',
            views: '5.167 visualizaciones hace un mes',
            dates: '8 al 15 de oct.',
            price: '$240 USD',
            type: 'noche'
        },

        {
            source: require('../img/img5.webp'),
            title: 'Rælingen, Noruega',
            views: '7.167 visualizaciones durante el dia',
            dates: '2 al 10 de oct.',
            price: '$55 USD',
            type: 'noche'
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                    <Image source={image.source} style={styles.image} />
                    <Text style={styles.title}>{image.title}</Text>
                    <Text style={styles.views}>{image.views}</Text>
                    <Text style={styles.dates}>{image.dates}</Text>
                    <Text style={styles.price}>{image.price} {image.type}</Text>
                </View>
            ))}
        </ScrollView>
    );
};



// tengo que crearme una carpeta Theme para poder exportar los estilos de PaginaINterna