const get = async ({ symbol, strike, fromDate, toDate }) => {
  const headers = new Headers({
    'Authorization': 'Bearer UAOpZwyh68F0yRIHz+QlfvM7/vB68fX/AAcfdwcOQ3Y36SaOQ2AOTFqfpdZIGba2N64P7j96yCNOGss0zUMgrhgS4kLT7aaJ2G/eBfTmOMm2psVTy5JL8cKI5QGtjYFYg2JqxRCXqN0mb5wxykmOJsP3M5SSkRYr9HKeZeHuxtmfKjPfMuXqIWOoXF5CKCKmNo6YB6bONTD1YgUe0MDRN00hRkIoFd3XR286Ji04Kc8y3zXGcC618FDc4ObOmv1k9JGoNqgO4NHkMlYozmfp6Ox5ChrxQtMLP5irHaFB2aK8MRHzLqjEp7LvPuDyfOLJ3BqjQgT8ga8KcFtZQ6HZ+qXnt8QbO0mqoMTN6aDPuwPwlAKn7FVkFf3E0ZdHsEXY6MReyHktbHwD4gdGs9Q3vcJriXs2H+RDoBvhiBMQN0OAwMDYHAFhZhx8tt1tJukbsUF09YKjgTgml6r7bEESFfsaehKMKyKJFspm4lO3moY+rqcrHRk8OnY0yYbZu5DKeTPUgF1ucIRgHaoJlXNXmhmgYtTeJ99WqBXz5100MQuG4LYrgoVi/JHHvl6z9UkmB3HTEgLUvXtmYsEPc0YVBTUtNcezMG7rFrm/mCL1KsXt+6ncZmmlWWCYC/xOL3+bRiGMjWldFe7In5xA94h+P7ZBh57WTJUcYHqLvhgUWkmMgD6UCQk/9+O4+1kK0ue4xg7yQdWU39s0/4N1sRtpkFYs6o2EBQiXu8qqllRD7KEoLJImgU4r+TYJUIHSFD0siN0ayfsZqfu9v0gON8DcgMYBpPThVTUosWAr0JsYRmZuRmUeB0whePF8Mkzmoy8FW1mkRJCrb+lj7Q4CSDEVDydjF0aPQnCGNo+mA4W7UhlcRpd3RIV19gwdEMArI9o5oJZhpHMCZH4FpYFWvYpYXguzSZXxKTCxv4UjJrP37F1iE1W+QQpRAFddufavVKz7qMb8WfApzES3rnu90xxV679ZRYyQI6tl70uxIzki2f8+zQ3m73tNAPdjwOurpDQSSD4PiP3E+pMNuXzk4ITludsZbV3O8KXi7IaBTyUjvhYfyYPHysV3sgwSyk5UJr+CpxI8UZGHYuyBTp7TwaJ1YAKMoHUUiAM9212FD3x19z9sWBHDJACbC00B75E',
  });
  const url = `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${apiKey}&symbol=${symbol}&contractType=PUT&strike=${strike}&fromDate=${fromDate}&toDate=${toDate}`;
  const response = await fetch(url, {
    headers,
  });
  const reader = response.body.getReader();
  let result = '';
  reader.read().then(({ done, value }) => {
    const str = new TextDecoder("utf-8").decode(value);
    console.log(str);
    result += str;
    console.log(result);
    if (done) {
      return;
    }
  });
  return result;
};

export default get;
