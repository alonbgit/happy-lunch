import server from './server';

const TIMEOUT_INTERVAL = 500;

const post = (url, data) => {

    return new Promise((resolve, reject) => {

        try {

            setTimeout(() => {

                const serverMethod = server.find(c => c.url === url);
                if (!serverMethod)
                    throw new Error(`the url ${url} doesn't exist`);
    
                const result = serverMethod.method(data);
                const response = {
                    data: result
                }
                resolve(response);

            }, TIMEOUT_INTERVAL);

        }
        catch(ex) {
            reject(ex);
        }

    });

}

export default {
    post
}