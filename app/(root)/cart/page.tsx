import { getMyCart } from "@/lib/actions/cart.action";
import CartForm from "./cart-form";
import { APP_NAME } from "@/lib/constant";

export const metadata = {
  title: `Shopping Cart - ${APP_NAME}`,
};
export default async function CartPage() {
  const cart = await getMyCart();
  return <CartForm cart={cart} />;
}
