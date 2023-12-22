export const apiUrl = (url) => {

    if (url.startsWith('http://') && !isLocalEnvironment()) {
        return url.replace('http://', 'https://');

    }

    return url;

};

const isLocalEnvironment = () => {

    return window.location.protocol === 'http:' &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
        
};
