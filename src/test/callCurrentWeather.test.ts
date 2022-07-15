import * as request from 'supertest';

describe ('Call Current Weather Feature', () =>{
    it("Get current weather successfully",async () => {
        let respone = await request('https://api.openweathermap.org').get('data/2.5/weather')
        .query({"lat":"35",
        "lon":"139", "appId":"1b9af9f492df041d4ca1a573fa955a62"});
        console.log(JSON.stringify(request))
        console.log(JSON.stringify(respone))
    })
})