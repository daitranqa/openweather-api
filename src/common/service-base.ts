import {environment} from '../../index'
import { get } from 'lodash';
import env from '../environment/indext'
import axios from 'axios'
import {AxiosRequestConfig} from 'axios';
const envName: string = process.env.TEST_ENVIRONMENT || "prod";
let defaultOption: AxiosRequestConfig;
const testEnvironment = get(env,envName,{} )


function getOption(): AxiosRequestConfig{
    return {
       params: { 
        "appid": testEnvironment.token
       }
    }
}

export async function GET(sample: string) {
    console.log(JSON.stringify(testEnvironment))
    const fullUrl = testEnvironment.host + testEnvironment.uri + sample;
    console.log(fullUrl)
    if (defaultOption === null) {
        defaultOption = getOption();
    }
    return await axios.get(fullUrl, defaultOption)
}