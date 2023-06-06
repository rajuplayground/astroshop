import { computed, map } from 'nanostores';

export const $cart = map<Record<number, CartItem>>({});

export const addToCart = (item: ShopItem) => {
	const cartItem = $cart.get()[item.id];
	const quantity = cartItem ? cartItem.quantity : 0;

	$cart.setKey(item.id, { item, quantity: quantity + 1 });
};

export const removeFromCart = (itemID: number) => {
	$cart.setKey(itemID, undefined);
};

export const subtotal = computed($cart, (entries) => {
	let subtotal = Object.values(entries).reduce((acc, item) => {
		if (!item) {
			return acc;
		}
		const itemtotal = item.item.price * item.quantity;
		return acc + itemtotal;
	}, 0);

	return subtotal;
});
