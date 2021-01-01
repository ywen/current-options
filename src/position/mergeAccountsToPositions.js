const mergeAccountsToPositions = ({ accounts, positions }) => {
  return positions.map((v, k) => {
    const account = accounts.get(v.get('accountId'));
    return account ? v.set('account', account.get('name')) : v;
  });
};

export default mergeAccountsToPositions;
