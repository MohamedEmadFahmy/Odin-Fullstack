import orderTotal from "./order-total";

it("works", () => {
	expect(1).toBe(1);
});

it("Quantity", () => {
	const order = {
		items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
	};
	expect(orderTotal(order)).toBe(6);
});
