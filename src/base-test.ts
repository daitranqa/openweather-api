export class BaseServices {
    
    
    async function GET(params:requestObject) {
        return axios.get(params.url, params.options)
    }
}