const backup = async ({ docFunc, doc }) => {
  const data = doc.data();
  if ( !data ) return;
  await docFunc().set(data);
};

export default backup;
