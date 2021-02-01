import isSellFunc from 'position/isSell';

const getTotalAmount = ({ positions }) => {
  return positions.reduce((result, p) => {
    const isSell = isSellFunc({ position: p });
    const totalOccupied = Number(p.moneyOccupied) + result.totalOccupied;
    let totalPotential;
    if (isSell) {
      totalPotential = Number(p.potentialGain) + result.totalPotential;
    } else {
      totalPotential = p.potentialGain;
    }
    const hasProfit = p.hasOwnProperty('profit');
    const totalProfit = hasProfit ? result.totalProfit + Number(p.profit) : result.totalProfit;
    return { totalOccupied, totalPotential, totalProfit };
  }, { totalOccupied: 0, totalPotential: 0, totalProfit: 0, });
};

export default getTotalAmount;
