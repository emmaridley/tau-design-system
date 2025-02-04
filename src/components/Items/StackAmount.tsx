export const  StackAmount = ({quantity}: { quantity: number} ) => {
    return (
        <span className="item__amount" data-testid="itemstack">
            <span className="visuallyhidden" data-testid="itemstackamountsr">
                Stack Amount:{' '}
            </span>
            {quantity}
        </span>
    );
};
 
