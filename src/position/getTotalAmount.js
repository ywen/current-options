const getTotalAmount = ({ positions }) => {
  return positions.reduce((result, p) => {
    const totalOccupied = Number(p.get('moneyOccupied')) + result.totalOccupied;
    const totalPotential = Number(p.get('potentialGain')) + result.totalPotential;
    let totalProfit = result.totalProfit;
    if (p.get('profit')) {
      totalProfit = Number(p.get('profit')) + result.totalPotential;
    }
    return { totalOccupied, totalPotential, totalProfit };
  }, { totalOccupied: 0, totalPotential: 0, totalProfit: 0, });
};

export default getTotalAmount;
