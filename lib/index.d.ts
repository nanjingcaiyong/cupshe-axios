export type createAxios = ({
 baseURL:string,
 timeout:number,
 headers: AxiosRequestHeaders,
 requestError = () => any,
 responseError = () => any
}={}) => any