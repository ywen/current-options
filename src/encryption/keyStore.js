const keyName = 'my-options-encryption-key';

const fetch = () => localStorage.getItem(keyName);

const save = ({ key }) => localStorage.setItem(keyName, key);

const publicMethods = {
  save,
  fetch,
};

export default publicMethods;
