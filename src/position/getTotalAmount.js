const getTotalAmount = ({ positions }) => {
  return positions.reduce((result, p) => {
    const totalOccupied = Number(p.moneyOccupied) + result.totalOccupied;
    const totalPotential = Number(p.potentialGain) + result.totalPotential;
    const hasProfit = p.hasOwnProperty('profit');
    const totalProfit = hasProfit ? result.totalProfit + Number(p.profit) : result.totalProfit;
    return { totalOccupied, totalPotential, totalProfit };
  }, { totalOccupied: 0, totalPotential: 0, totalProfit: 0, });
};

export default getTotalAmount;
