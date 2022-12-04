import express from 'express';
import path from 'path';
import cors from 'cors';





const app = express()
const port = process.env.PORT || 3001

app.use(cors());

app.get('/weather/:cityName', (req, res) => {

  console.log('parameter: ' , req.params.cityName);


  res.send({
    location: req.params.cityName ,
    icon: "https://cdn.weatherapi.com/weather/64x64/night/122.png" ,
    temperature: 20 ,
    text: "Overcast" ,
    fahrenheit: 68 ,
    feelslike: 19 ,
    humidity: 49 ,
    visibility: 5 ,
    wind: 3.6
  })
})
const __dirname = path.resolve()

app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})