const func =({ positions, sortConditions }) => {
  if(!sortConditions) return positions;
  const directionAsc = sortConditions.directionAsc;
  const field = sortConditions.field;
  if (!field) return positions;
  return positions.sort((p1, p2) => {
    const v1 = p1[field];
    const v2 = p2[field];
    let ascResult;
    if (!isNaN(v1) && Number(v1) !== 0) {
      ascResult = Number(v1) - Number(v2);
    } else {
      ascResult = String(v1).localeCompare(String(v2));
    }
    if (directionAsc || ascResult === 0) {
      return ascResult;
    }
    return ascResult > 0 ? -1 : 1;
  });
}

export default func;
