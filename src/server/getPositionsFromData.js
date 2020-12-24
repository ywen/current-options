const getPositionsFromData = ({ doc }) => {
  const positions = doc.data();
  if (!positions) {
    return [];
  }
  const result = [];
  Object.keys(positions).forEach((key) => {
    result.push(positions[key]);
  });
  return result;
}

export default getPositionsFromData;
