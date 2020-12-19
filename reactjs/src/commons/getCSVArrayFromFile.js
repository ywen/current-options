// name: 0
// quantity: 1
// purchasePrice: 6
// purchaseDate: 8
const getCSVArrayFromFile = ({ file }) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const array = event.target.result.split('\r\n');
      const result = array.map(a => a.split(','));
      const data = [];
      for (let i=1; i < result.length; i++) {
        if (result[i][0].length > 0) {
          const object = {
            symbol: result[i][0],
            quantity: result[i][1],
            purchasePrice: result[i][6],
            openDate: result[i][8],
          }
          data.push(object);
        }
      }
      resolve(data);
    }
    reader.readAsText(file)
  });
};

export default getCSVArrayFromFile;
