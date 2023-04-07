var weather = {

    "apikey": "2e327499267cf9252cae18c580fc824a",
    fetchWeather : function (){
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apikey}"
        )
    }

    


}







