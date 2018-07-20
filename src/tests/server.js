import * as httpMethods from './httpMethods';

const signin = (data) => {

    if (data.email === 'alon' && data.password === '123')
        return true;

    return false;

}

const urls = [
    {
        httpMethod: httpMethods.GET,
        method: signin,
        url: '/signin'
    }
]

export default urls;