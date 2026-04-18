import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./cartContext";

export default function CartPage() {
  const { cart, addToCart, decreaseQty, removeFromCart, total } =
    useCart();

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      <AnimatePresence>
        {cart.length === 0 && (
          <p className="text-gray-600">Cart is empty</p>
        )}

        {cart.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="bg-white p-4 mb-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>${item.price} x {item.qty}</p>
            </div>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 bg-gray-300 rounded"
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => addToCart(item)}
                className="px-2 bg-gray-300 rounded"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-2 text-red-500"
              >
                Remove
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="mt-6 text-xl font-bold">
        Total: ${total}
      </div>

      <button className="mt-4 bg-green-600 text-white w-full py-3 rounded-lg">
        Checkout
      </button>
    </div>
  );
}