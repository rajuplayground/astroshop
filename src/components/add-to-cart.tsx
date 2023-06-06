import React from 'react';
import { addToCart } from '../stores/cart';

interface Props {
	item: ShopItem;
}

export const AddToCart = ({ item }: Props) => {
	return (
		<button
			onClick={() => addToCart(item)}
			className="bg-black text-white font-bold text-lg self-start px-6 py-2 rounded-md"
		>
			Add to Cart
		</button>
	);
};
