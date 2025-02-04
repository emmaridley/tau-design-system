interface RepairLevelProps {
  repairLevel: {
    formatted: string;
  };
}

export const DamagePercent = ({ repairLevel }: RepairLevelProps) => {
  return (
    <span className="item__condition">
      <span className="visuallyhidden" data-testid="itemconditionsr">
        Damage percent:{' '}
      </span>
      {repairLevel.formatted}%
    </span>
  );
};
