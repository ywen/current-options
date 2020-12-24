const getTotalAmount = ({ positions }) => {
  return positions.reduce((result, p) => {
    const totalOccupied = Number(p.get('moneyOccupied')) + result.totalOccupied;
    const totalPotential = Number(p.get('potentialGain')) + result.totalPotential;
    const hasProfit = p.has('profit');
    const totalProfit = hasProfit ? result.totalProfit + Number(p.get('profit')) : result.totalProfit;
    return { totalOccupied, totalPotential, totalProfit };
  }, { totalOccupied: 0, totalPotential: 0, totalProfit: 0, });
};

export default getTotalAmount;
