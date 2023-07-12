import React from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, FlatList } from 'react-native';

const Carousel = ({ images }) => {
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={item.source} style={styles.image} />
        </View>
    );

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                snapToInterval={Dimensions.get('window').width}
                decelerationRate="fast"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    image: {
        width: '95%',
        height: 200,
        resizeMode: 'cover',
        marginTop: 19,
        borderRadius: 20,
    },
});

const CarouselContainer = () => {
    const images = [
        { id: 1, source: require('../img/img1.webp') },
        { id: 2, source: require('../img/img2.webp') },
        { id: 3, source: require('../img/img3.webp') },
        { id: 4, source: require('../img/img4.webp') },
        { id: 5, source: require('../img/img5.webp') },
    ];

    return (
        <ScrollView>
            <View style={carouselStyles.carouselContainer}>
                <Carousel images={images} />
                <Carousel images={images} />
                <Carousel images={images} />
                <Carousel images={images} />
                <Carousel images={images} />
            </View>
        </ScrollView>
    );
};

const carouselStyles = StyleSheet.create({
    carouselContainer: {
        paddingBottom: 20,
    },
});
// const styles = StyleSheet.create({
//     carouselContainer: {
//         paddingBottom: 20,
//     },
// });

export default CarouselContainer;

