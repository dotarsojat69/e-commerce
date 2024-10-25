/* eslint-disable @typescript-eslint/no-unused-expressions */
import { getOrderById } from "@/lib/actions/order.actions";
import { APP_NAME } from "@/lib/constant";
import { notFound } from "next/navigation";
import OrderDetailsForm from "./order-details-form";

export const metadata = {
  title: `Order Details - ${APP_NAME}`,
};
const OrderDetailsPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const order = await getOrderById(id);
  if (!order) notFound();
  order.user;
  return <OrderDetailsForm order={order} />;
};
export default OrderDetailsPage;
