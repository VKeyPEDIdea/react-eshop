import React from 'react';
import Button from '../Button';
import Counter from '../Counter';

const CartButton = props => {
	const {
		isAvailable,
		count,
		id,
		onRemove,
		onAdd
	} = props;

	return(
		<>
			{isAvailable
				? <Counter
						count={count}
						remove={onRemove}
						add={onAdd}/>
				: <Button
						id={id}
						click={onAdd}
						name={'В корзину'}/>}
		</>
	);
}

export default CartButton;