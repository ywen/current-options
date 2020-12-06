import crypto from 'crypto-random-string';

const getKey = () => crypto({length: 20, type: 'base64'});

export default getKey;
