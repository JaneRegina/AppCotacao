

const baseUrl =  'https://economia.awesomeapi.com.br/json/';

export const getUSD = async () => {
    try{
        const url = baseUrl + '/last/USD-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.USDBRL){
            return parseFloat(json.USDBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getUSD1 = async () => {
    try{
        const url = baseUrl + '/last/USD-BRLT';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.USDBRLT){
            return parseFloat(json.USDBRLT.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getDOGE = async () => {
    try{
        const url = baseUrl + '/last/DOGE-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.DOGEBRL){
            return parseFloat(json.DOGEBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}

export const getEUR = async () => {
    try{
        const url = baseUrl + '/last/EUR-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.EURBRL){
            return parseFloat(json.EURBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getBTC = async () => {
    try{
        const url = baseUrl + '/last/BTC-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.BTCBRL){
            return parseFloat(json.BTCBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getBTC1 = async () => {
    try{
        const url = baseUrl + '/last/BTC-USD';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.BTCUSD){
            return parseFloat(json.BTCUSD.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getGBP = async () => {
    try{
        const url = baseUrl + '/last/GBP-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.GBPBRL){
            return parseFloat(json.GBPBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getETH = async () => {
    try{
        const url = baseUrl + '/last/ETH-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.ETHBRL){
            return parseFloat(json.ETHBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getLTC = async () => {
    try{
        const url = baseUrl + '/last/LTC-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.LTCBRL){
            return parseFloat(json.LTCBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getAUD = async () => {
    try{
        const url = baseUrl + '/last/AUD-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.AUDBRL){
            return parseFloat(json.AUDBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getCAD = async () => {
    try{
        const url = baseUrl + '/last/CAD-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.CADBRL){
            return parseFloat(json.CADBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getAED = async () => {
    try{
        const url = baseUrl + '/last/AED-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.AEDBRL){
            return parseFloat(json.AEDBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getSGD = async () => {
    try{
        const url = baseUrl + '/last/SGD-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.SGDBRL){
            return parseFloat(json.SGDBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getHKD = async () => {
    try{
        const url = baseUrl + '/last/HKD-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.HKDBRL){
            return parseFloat(json.HKDBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getJPY = async () => {
    try{
        const url = baseUrl + '/last/JPY-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.JPYBRL){
            return parseFloat(json.JPYBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getXAU = async () => {
    try{
        const url = baseUrl + '/last/XAU-USD';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.XAUUSD){
            return parseFloat(json.XAUUSD.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getARS = async () => {
    try{
        const url = baseUrl + '/last/ARS-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.ARSBRL){
            return parseFloat(json.ARSBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getCLP = async () => {
    try{
        const url = baseUrl + '/last/CLP-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.CLPBRL){
            return parseFloat(json.CLPBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getRUB = async () => {
    try{
        const url = baseUrl + '/last/RUB-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.RUBBRL){
            return parseFloat(json.RUBBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getXRP = async () => {
    try{
        const url = baseUrl + '/last/XRP-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.XRPBRL){
            return parseFloat(json.XRPBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getCNY = async () => {
    try{
        const url = baseUrl + '/last/CNY-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.CNYBRL){
            return parseFloat(json.CNYBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getCHF = async () => {
    try{
        const url = baseUrl + '/last/CHF-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.CHFBRL){
            return parseFloat(json.CHFBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getTHB = async () => {
    try{
        const url = baseUrl + '/last/THB-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.THBBRL){
            return parseFloat(json.THBBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getVEF = async () => {
    try{
        const url = baseUrl + '/last/VEF-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.VEFBRL){
            return parseFloat(json.VEFBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getBOB = async () => {
    try{
        const url = baseUrl + '/last/BOB-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.BOBBRL){
            return parseFloat(json.BOBBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getDKK = async () => {
    try{
        const url = baseUrl + '/last/DKK-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.DKKBRL){
            return parseFloat(json.DKKBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getNOK = async () => {
    try{
        const url = baseUrl + '/last/NOK-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.NOKBRL){
            return parseFloat(json.NOKBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getSEK = async () => {
    try{
        const url = baseUrl + '/last/SEK-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.SEKBRL){
            return parseFloat(json.SEKBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}
export const getNZD = async () => {
    try{
        const url = baseUrl + '/last/NZD-BRL';
        const request = await fetch(url);
        const json = await request.json();
    
        if(json.NZDBRL){
            return parseFloat(json.NZDBRL.ask);
        }
    
        return 0;
    } catch (error) {
        return 0;
    }
}