export const ItemName = ({ name, type }: { name: string; type: string }) => {
  return (
    <span className="item__name" data-testid="itemname">
      <span className="visuallyhidden" data-testid="itemtypesr">
        {type}:{' '}
      </span>
      {name}
    </span>
  );
};
