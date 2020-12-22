const getTotalAmount = ({ positions }) => {
  return positions.reduce((result, p) => {
    const totalOccupied = Number(p.get('moneyOccupied')) + result.totalOccupied;
    const totalPotential = Number(p.get('potentialGain')) + result.totalPotential;
    return { totalOccupied, totalPotential };
  }, { totalOccupied: 0, totalPotential: 0 });
};

export default getTotalAmount;
