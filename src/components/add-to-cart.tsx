import React from 'react';

export const AddToCart = () => {
	return (
		<button
			onClick={() => {
				console.log('done with pride');
			}}
			className="bg-black text-white font-bold text-lg self-start px-6 py-2 rounded-md"
		>
			Add to Cart
		</button>
	);
};
