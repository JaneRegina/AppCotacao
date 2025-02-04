import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getSGD } from "../services/awesomeapi";
import React from "react";
export default function Screen() {
    const [loading, setLoading ] = useState(true);
    const [currency, setCurrency] = useState<number>(0);

    const updateCurrency = async () => {
        setLoading(true);
        const singapura = await getSGD();
        setLoading(false);
        setCurrency(singapura);
    }
    useEffect(() => {
        updateCurrency();
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.h3}>SGD-BRL - Dólar de Cingapura/Real Brasileiro
            </Text>
                                                 <Text></Text>
                                                 <Text></Text>
                                                 <Text></Text>
                                                 <Text></Text>
                                                 <Text></Text>
                                                 <Text></Text>
            <Image 
                source={require('../assets/singapura.png')}
                resizeMode="contain"
                style={styles.logo}
            />

            {loading && 
                <ActivityIndicator />
            }
            {!loading &&
            <> 
                <Text style={styles.h2}>O <Text style={styles.h1}>dólar de cingapura</Text> está:</Text>
                <Text style={styles.currencyText}>R$ {currency.toFixed(2)}</Text>
                <Button 
                    label= 'Atualizar'
                    onPress={updateCurrency} 
                /> 
            </>}
        </View>
    );    
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B1C2D',
        paddingHorizontal: 20,
    },
    logo: {
        width:200,
        height: 180, 
    },
    h2: {
        fontSize: 24,
        color: '#ccc',
        marginTop: 30,
    },
    h3: {
        fontSize: 24,
        color: '#fff',
        marginTop: 30,
    },
    h1: {
        color: '#fff',
        fontWeight: 'bold',
    },
    currencyText: {
        fontSize: 57,
        color: '#fff',
        marginTop: 20,
        fontWeight: 'bold',
        marginBottom: 50
    }
});