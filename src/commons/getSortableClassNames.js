const getSortableClassNames = ({ field, prefix, sortConditions }) => {
  let classNames = [`${prefix}__th`];
  const sortField = sortConditions.get('field');
  const directionAsc = sortConditions.get('directionAsc');
  if (field  === sortField) {
    const additionClass = directionAsc ? `${prefix}__chevron--up` : `${prefix}__chevron--down`;
    classNames.push(additionClass);
  }
  return classNames.join(' ');
}

export default getSortableClassNames;
