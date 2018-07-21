import * as httpMethods from './httpMethods';

const signin = (data) => {

    if (data.email === 'alon' && data.password === '123')
        return {
            success: true
        };

    return {
        success: false
    }

}

const signup = (data) => {

    return {
        success: true
    };

}

const urls = [
    {
        httpMethod: httpMethods.GET,
        method: signin,
        url: '/signin'
    },
    {
        httpMethod: httpMethods.GET,
        method: signup,
        url: '/signup'
    }
]

export default urls;