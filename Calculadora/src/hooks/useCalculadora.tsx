import { useState, useRef } from 'react'
import { BotonCalc } from '../Components/BotonCalc';


enum Operadores {
    sumar, resta, multiplicar, dividir
}

export const useCalculadora = () => {

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


    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);


        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.resta:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;

        }
        setNumeroAnterior('0');

    }

    return {
        numero,
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
        BotonCalc

    }
}
