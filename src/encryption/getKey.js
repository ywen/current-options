import CryptoJS from 'crypto-js';

const getKey = () => CryptoJS.lib.WordArray.random(512 / 8).toString();

export default getKey;
