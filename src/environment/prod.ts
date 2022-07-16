import { environment } from "../..";
const HOST = "https://api.openweathermap.org";
const TOKEN_APPID = "1b9af9f492df041d4ca1a573fa955a62"; 
const prodEnvironment: environment = {
    host : HOST,
    token: TOKEN_APPID,
    uri:"data/2.5/weather"
}


export default prodEnvironment;