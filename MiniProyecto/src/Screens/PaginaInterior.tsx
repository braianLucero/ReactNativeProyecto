import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { images } from '../Components/Images';
import { styles } from '../Theme/paginaInterior';

export const PaginaInterior = () => {
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


