import React, { useState, useRef } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appThem';
import { BotonCalc } from '../Components/BotonCalc';



enum Operadores {
    sumar, resta, multiplicar, dividir
}

export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }


    const armarNumero = (numeroTexto: string) => {
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            //punto decimal 
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                //evalua si es otro cero , y hay un punto 
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                //evalua si es diferente de cero y no tiene un punto 
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)

                // evitar el 0000.0
            } else if (numeroTexto === '0 ' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }


        } else {
            setNumero(numero + numeroTexto)
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero);
        }
    }




    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substr(1);
        }
        if (numeroTemp.length > 1) {
            setNumero(numeroTemp.slice(0, -1));
        } else {
            setNumero('0')
        }


        // if (numero.length === 1) {
        //     setNumero('0');
        // } else {                                          <----- otra forma de hacerlo 
        //     setNumero(numero.slice(0, -1));
        // }

    }



    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {

            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0')
    }


    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }


    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnResta = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.resta;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>
                )
            }

            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>


            {/** fila de botones  */}
            <View style={styles.fila}>
                <BotonCalc texto='C' color='#9B9B9B' accion={limpiar} />
                <BotonCalc texto='+/-' color='#9B9B9B' accion={positivoNegativo} />
                <BotonCalc texto='del' color='#9B9B9B' accion={btnDelete} />
                <BotonCalc texto='/' color='#FF9427' accion={btnDividir} />
            </View>


            <View style={styles.fila}>
                <BotonCalc texto='7' accion={armarNumero} />
                <BotonCalc texto='8' accion={armarNumero} />
                <BotonCalc texto='9' accion={armarNumero} />
                <BotonCalc texto='x' color='#FF9427' accion={btnMultiplicar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto='4' accion={armarNumero} />
                <BotonCalc texto='5' accion={armarNumero} />
                <BotonCalc texto='6' accion={armarNumero} />
                <BotonCalc texto='-' color='#FF9427' accion={btnResta} />
            </View>


            <View style={styles.fila}>
                <BotonCalc texto='1' accion={armarNumero} />
                <BotonCalc texto='2' accion={armarNumero} />
                <BotonCalc texto='3' accion={armarNumero} />
                <BotonCalc texto='+' color='#FF9427' accion={btnSumar} />
            </View>


            <View style={styles.fila}>
                <BotonCalc texto='0' accion={armarNumero} ancho />
                <BotonCalc texto='.' accion={armarNumero} />
                <BotonCalc texto='=' color='#FF9427' accion={limpiar} />
            </View>

        </View>
    )
}
