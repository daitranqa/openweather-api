import { GET } from '../common/service-base'
import prodEnvironment from '../environment/prod'

describe ('Call Current Weather Feature', () =>{
    // it("Get current weather successfully",async () => {
    //     let {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=1b9af9f492df041d4ca1a573fa955a62');
    //     console.log(JSON.stringify(data))
    // })


    it("Get current weather successfully",async () => {
        let {data} = await GET("?lat=35&lon=139");
        console.log(JSON.stringify(data))
    })
})