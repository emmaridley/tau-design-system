import { Numeral } from '../../types/common';
import { DamagePercent } from './DamagePercent.tsx';
import { StyledItem } from './Item.styled.ts';
import { StackAmount } from './StackAmount.tsx';
import { GeneticallyBound } from './GeneticallyBound.tsx';
import { ItemName } from './ItemName.tsx';

export interface ItemProps {
  dimension?: string;
  image: string;
  isButton?: boolean;
  isGeneticallyBound?: boolean;
  isSoldOut?: boolean;
  name?: string;
  quantity?: number;
  repairLevel?: Numeral;
  rarity: string;
  showAmount?: boolean;
  stackSize?: number;
  type?: string;
}

export default function Item({
  dimension,
  image,
  isButton = false,
  isGeneticallyBound,
  isSoldOut,
  name,
  quantity,
  repairLevel,
  rarity,
  showAmount = false,
  stackSize,
  type,
}: ItemProps) {
  return (
    <>
      <StyledItem
        $dimension={dimension}
        $isButton={isButton}
        className={`item__framed-img--${rarity}`}
        data-testid="itemframe"
      >
        <img data-testid="itemimage" alt="" src={`/images/items/${image}`} />
        {Boolean(name) && <ItemName name={name as string} type={type as string} />}
        {isSoldOut && <img alt="Sold out" src="/images/icons/sold-out.svg" />}
        {Boolean(isGeneticallyBound) && <GeneticallyBound isButton={isButton} />}
        {repairLevel && repairLevel.exact < 1 && <DamagePercent repairLevel={repairLevel} />}
        {showAmount && Boolean(stackSize && stackSize > 1) && <StackAmount quantity={quantity as number} />}
      </StyledItem>
    </>
  );
}
