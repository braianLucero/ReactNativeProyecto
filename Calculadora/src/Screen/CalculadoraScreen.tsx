import React, { useState, useRef } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appThem';
import { BotonCalc } from '../Components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {

    const { numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnResta,
        btnSumar,
        calcular,
        BotonCalc } = useCalculadora()

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
                <BotonCalc texto='=' color='#FF9427' accion={calcular} />
            </View>

        </View>
    )
}
