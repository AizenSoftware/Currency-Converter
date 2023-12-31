export default class Currency{
    constructor(){
        this.url = 'https://api.freecurrencyapi.com/v1/latest?apikey=BwYNURY6USNwcpGwVIaMO0HKIKLJiayJhdQ4esOU&base_currency=';
    }

   async exchange(amount,firstCurrency,secondCurrency){
     const response = await fetch(`${this.url}${firstCurrency}`)
     const result = await response.json();
     const exchangeResult = amount * result.data[secondCurrency];
     
     return exchangeResult;
     
    }

}