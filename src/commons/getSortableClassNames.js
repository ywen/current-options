const getSortableClassNames = ({ field, prefix, sortConditions }) => {
  let classNames = [`${prefix}__th`];
  const { field: sortField, directionAsc } = sortConditions;
  if (field  === sortField) {
    const additionClass = directionAsc ? `${prefix}__chevron--up` : `${prefix}__chevron--down`;
    classNames.push(additionClass);
  }
  return classNames.join(' ');
}

export default getSortableClassNames;
