export const GeneticallyBound = ({ isButton }: { isButton: boolean }) => {
  return (
    <span {...(isButton && { 'aria-hidden': true })} className="item__genetically-bound">
      <span className="item__genetically-bound__icon">
        <svg>
          <use xlinkHref="/images/icons/icons.svg#icon-genetically-bound"></use>
        </svg>
      </span>
      <span className="visuallyhidden">Genetically Bound</span>
    </span>
  );
};
