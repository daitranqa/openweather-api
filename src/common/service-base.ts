import {environment} from '../../index'
import axios from 'axios'
const env: environment = process.env.ENVIRONMENT || "prod";

function getOption(): any {
    return {
        "lat" = ""
    }
}

export async function GET() {
    return await axios.get(env.host + env.uri,)
}