
import { createSlice } from "@reduxjs/toolkit";


const storedValue = localStorage.getItem('cartItems');

const initialState = {
	cartItem: storedValue ? JSON.parse(storedValue) : [],
	quantity: 0,
	cartOpen: false,
	total: 0,
	shipping: 0,
	subTotal: 0,
	coupon: {},
	appliedCoupon: {
		amount:0,
		discountAmount:'',
		privateCoupon:false,
		discountType:'',
		minimumAmount:0,
	},
	isLoading: true,
	estimateDelivery: '',
	customeDeliveryDate: '',
	customeDeliveryDateType: ''
}

const cartSlice = createSlice({

	name: 'cart',
	initialState,
	reducers: {
		add(state, action) {
			const find = state.cartItem.findIndex((item:any) => item.sku === action.payload.sku)
			if (find >= 0) {
				state.cartItem[find].quantity += action.payload.quantity;
			}
			else {
				const tempvar = { ...action.payload, quantity: action.payload.quantity }
				state.cartItem.push(tempvar);
			}

		},
		applyCoupon(state, action) {
			state.appliedCoupon = action.payload;
		},

		emptyCart(state, action) {
			state.cartItem = [];
			state.quantity = 0;
			state.total = 0;
			state.shipping = 0;
			state.subTotal = 0;
		},
		cartOpen(state, action) {
			state.cartOpen = action.payload;
		},
		remove(state, action) {
			state.cartItem.map((cartItem:any) => {
				if (cartItem._id === action.payload._id) {
					const nextCartItems = state.cartItem.filter(
						(item:any) => item._id !== cartItem._id
					);

					state.cartItem = nextCartItems;
				}


				return state;
			});

		},

		increase(state, action) {

			state.quantity += 1;

			if (state.total < state.appliedCoupon.amount) {
				state.appliedCoupon = {
					amount: 0,
					discountAmount: '',
					privateCoupon: false,
					discountType: '',
					minimumAmount: 0,
				}
			}

		},
		decrease(state, action) {

			const itemIndex = state.cartItem.findIndex(
				(item:any) => item._id === action.payload._id
			);

			if (state.cartItem[itemIndex].quantity > 1) {
				state.cartItem[itemIndex].quantity -= 1;


			} else if (state.cartItem[itemIndex].quantity === 1) {
				const nextCartItems = state.cartItem.filter(
					(item:any) => item._id !== action.payload._id
				);

				state.cartItem = nextCartItems;
			}

		},
		getTotals(state, action) {
			let { total, quantity } = state?.cartItem?.reduce(
				(cartTotal: any, cartItem: any) => {
					const { price, quantity } = cartItem;
					const itemTotal = price * quantity;

					cartTotal.total += itemTotal;
					cartTotal.quantity += quantity;
					cartItem.finalPrice = price - ((price * parseInt(state.appliedCoupon.discountAmount, 10)) / 100)
					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);

			total = parseFloat(total?.toFixed(2));
			// check total is less than 500 and no private coupon thne apply shipping charges
			state.quantity = quantity;
			state.subTotal = total;

			if (total < 500 && !state.appliedCoupon.privateCoupon) {

				if (state.customeDeliveryDate && state.customeDeliveryDateType === 'same') {
					state.total = total + action.payload.shippingCharges;
					state.shipping = action.payload.shippingCharges
				} else {
					state.total = total + 39;
					state.shipping = 39;
				}

			} else if (state.total > 500 && state.customeDeliveryDate && state.customeDeliveryDateType === 'same') {
				// state.shipping = 99;

				state.total = total + action.payload.shippingCharges;
				state.shipping = action.payload.shippingCharges

			} else {
				state.total = total;
				state.shipping = 0;
			}
			let amount = 0;
			if (state?.appliedCoupon?.discountType == 'percentage') {
				const am = (parseInt(state.appliedCoupon.discountAmount) / 100) * state.subTotal;
				amount = parseFloat(am?.toFixed(2))
			} else if (state?.appliedCoupon?.discountType == 'value') {
				const am = state.appliedCoupon.discountAmount
				amount = parseFloat(parseInt(am)?.toFixed(2))
			}

			state.appliedCoupon.amount = amount
			state.total -= amount;
			if (state.total < 500 && state.total !== 0 && !state.customeDeliveryDate) {
				state.shipping = 39;
			}

			if (state.subTotal <= state.appliedCoupon.minimumAmount) {
				state.appliedCoupon = {
					amount: 0,
					discountAmount: '',
					privateCoupon: false,
					discountType: '',
					minimumAmount: 0,
				}
				state.cartItem.map((item:any, index:number) => {
					state.cartItem[index].finalPrice = 0;
				});
			}

		},
		setEstimatedDelivery(state, action) {
			state.estimateDelivery = action.payload
		},

		setCustomeDeliveryDate(state, action) {
			state.customeDeliveryDate = action.payload
		},
		setDeliveryDateType(state, action) {
			state.customeDeliveryDateType = action.payload
		}

	},

});


export const { setDeliveryDateType, add, remove, increase, decrease, getTotals, cartOpen, emptyCart, applyCoupon, setEstimatedDelivery, setCustomeDeliveryDate } = cartSlice.actions;

export default cartSlice.reducer;