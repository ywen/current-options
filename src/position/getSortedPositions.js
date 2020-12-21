import { createSelector } from 'reselect';

const func = createSelector(
  (state) => state.positions,
  (state) => state.sortConditions,
  (positions, sortConditions) => {
    if(!sortConditions) return positions;
    const directionAsc = sortConditions.get('directionAsc');
    const field = sortConditions.get('field');
    if (!field) return positions;
    return positions.sort((p1, p2) => {
      const v1 = p1.get(field);
      const v2 = p2.get(field);
      const ascResult = v1.localeCompare(v2);
      if (directionAsc || ascResult === 0) {
        return ascResult;
      }
      return ascResult === 1 ? -1 : 1;
    });
  }
);

export default func;
