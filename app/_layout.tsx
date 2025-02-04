import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
;
export default function RootLayout(){
    return (
        <GestureHandlerRootView>
            <Drawer>
            {/* THB-BRL - Baht Tailandês/Real Brasileiro*/}
             <Drawer.Screen 
                    name="baht"
                    options={{title: 'Baht Tailandês (THB-BRL)'}}
                />
            {/* VEF-BRL - Bolívar Venezuelano/Real Brasileiro*/}
             <Drawer.Screen 
                    name="boliviar"
                    options={{title: 'Bolívar Venezuelano (VEF-BRL)'}}
                />
            {/* BOB-BRL - Boliviano/Real Brasileiro*/}
             <Drawer.Screen 
                    name="bob"
                    options={{title: 'Boliviano (BOB-BRL)'}}
                />
            {/* BTC-USD - Bitcoin/Dólar Americano*/}
             <Drawer.Screen 
                    name="bitcoin1"
                    options={{title: 'Bitcoin (BTC-USD)'}}
                />
               {/* BTC-BRL - Bitcoin/Real Brasileiro*/}
             <Drawer.Screen 
                    name="bitcoin"
                    options={{title: 'Bitcoin (BTC-BRL)'}}
                /> 
               {/* DKK-BRL - Coroa Dinamarquesa/Real Brasileiro*/}
             <Drawer.Screen 
                    name="coroa"
                    options={{title: 'Coroa Dinamarquesa (DKK-BRL)'}}
                /> 
            {/* NOK-BRL - Coroa Norueguesa/Real Brasileiro*/}
             <Drawer.Screen 
                    name="norueguesa"
                    options={{title: 'Coroa Norueguesa (NOK-BRL)'}}
                /> 
                {/* SEK-BRL - Coroa Sueca/Real Brasileiro*/}
             <Drawer.Screen 
                    name="sueca"
                    options={{title: 'Coroa Sueca (SEK-BRL)'}}
                /> 
                {/* AED-BRL - Dirham dos Emirados/Real Brasileiro*/}
               <Drawer.Screen 
                    name="dirham"
                    options={{title: 'Dirham dos Emirados (AED-BRL)'}}
                    
                />
                {/* DOGE-BRL - Dogecoin/Real Brasileiro*/}
             <Drawer.Screen 
                    name="dogecoin"
                    options={{title: 'Dogecoin (DOGE-BRL)'}}
                />
                {/* USD-BRL - Dólar Americano/Real Brasileiro*/}
                <Drawer.Screen 
                    name="index"
                    options={{title: 'Dólar Americano (USD-BRL)'}}
                />
               {/* USD-BRLT - Dólar Americano/Real Brasileiro Turismo/Real Brasileiro*/}
               <Drawer.Screen 
                    name="dolar_americano"
                    options={{title: 'Dólar Americano (USD-BRLT)'}}
                    
                />
               {/* AUD-BRL - Dólar Australiano/Real Brasileiro*/}
               <Drawer.Screen 
                    name="australia"
                    options={{title: 'Dólar Australiano (AUD-BRL)'}}
                    
                />
                 {/* CAD-BRL - Dólar Canadense/Real Brasileiro*/}
               <Drawer.Screen 
                    name="canadense"
                    options={{title: 'Dólar Canadense (CAD-BRL)'}}
                    
                />
                {/* SGD-BRL - Dólar de Cingapura/Real Brasileiro*/}
               <Drawer.Screen 
                    name="singapura"
                    options={{title: 'Dólar de Cingapura (SGD-BRL)'}}
                    
                />
               {/* HKD-BRL - Dólar de Hong Kong/Real Brasileiro*/}
               <Drawer.Screen 
                    name="kong"
                    options={{title: 'Dólar de Hong Kong (HKD-BRL)'}}
                    
                />
               {/* NZD-BRL - Dólar Neozelandês/Real Brasileiro*/}
               <Drawer.Screen 
                    name="dolar_nzd"
                    options={{title: 'Dólar Neozelandês (NZD-BRL)'}}
                    
                />
              {/* ETH-BRL - Ethereum/Real Brasileiro*/}
              <Drawer.Screen 
                    name="ethereum"
                    options={{title: 'Ethereum (ETH-BRL)'}}
                />
               {/* EUR-BRL - Euro/Real Brasileiro*/}
               <Drawer.Screen 
                    name="euro"
                    options={{title: 'Euro (EUR-BRL)'}}
                />
                 {/*CHF-BRL - Franco Suíço/Real Brasileiro*/}
               <Drawer.Screen 
                    name="franco"
                    options={{title: 'Franco Suíço (CHF-BRL)'}}
                    
                />
               {/*JPY-BRL - Iene Japonês/Real Brasileiro*/}
               <Drawer.Screen 
                    name="iene"
                    options={{title: 'Iene Japonês (JPY-BRL)'}}
                    
                />
               {/* GBP-BRL - Libra Esterlina/Real Brasileiro*/}
              <Drawer.Screen 
                    name="libra"
                    options={{title: 'Libra Esterlina (GBP-BRL)'}}
                />
             {/* LTC-BRL - Litecoin/Real Brasileiro*/}
              <Drawer.Screen 
                    name="litecoin"
                    options={{title: 'Litecoin (LTC-BRL)'}}
                />
                {/* XAU-USD - Ouro/Dólar Americano*/}
              <Drawer.Screen 
                    name="ouro"
                    options={{title: 'Ouro (XAU-USD)'}}
                />
                {/* ARS-BRL - Peso Argentino/Real Brasileiro*/}
              <Drawer.Screen 
                    name="argentino"
                    options={{title: 'Peso Argentino (ARS-BRL)'}}
                />
              {/* CLP-BRL - Peso Chileno/Real Brasileiro*/}
              <Drawer.Screen 
                    name="chileno"
                    options={{title: 'Peso Chileno (CLP-BRL)'}}
                />
           {/* RUB-BRL - Rublo Russo/Real Brasileiro */}
           <Drawer.Screen 
                    name="rublo"
                    options={{title: 'Rublo Russo (RUB-BRL)'}}
                />
          {/* XRP-BRL - RIPPLER XRP/Real Brasileiro */}
           <Drawer.Screen 
                    name="xrp"
                    options={{title: 'Rippler XRP (XRP-BRL)'}}
                />
           {/* CNY-BRL - Yuan Chinês/Real Brasileiro */}
           <Drawer.Screen 
                    name="yuan"
                    options={{title: 'Yuan Chinês (CNY -BRL)'}}
                />
            </Drawer>


        </GestureHandlerRootView>

    );
}