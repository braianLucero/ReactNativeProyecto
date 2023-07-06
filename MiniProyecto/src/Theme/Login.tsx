import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#e4e4e4',
        alignSelf: 'center',
        justifyContent: 'center',
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
    ForgPassword: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 15,
        color: '#98a7b0'
    },
    touchContainer: {
        position: 'absolute',
        backgroundColor: '#F05454',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 5,
        marginTop: 65,
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'uppercase',
        marginHorizontal: 16
    },
    accout: {
        position: 'absolute',
        bottom: 14,
        right: 130,
        color: '#98a7b0'
    }
});