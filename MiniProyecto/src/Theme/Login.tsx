import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f1f1f1',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 80,
        color: '#34434D',
        fontWeight: 'bold',
        textAlign: 'center'

    },
    subTitle: {
        fontSize: 20,
        color: 'gray',
        textAlign: 'center'


    },
    textInput: {
        padding: 10,
        paddingStart: 30,
        width: '90%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginHorizontal: 19
    },
    img: {
        width: '100%',
        height: '40%',
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 5

    },

});