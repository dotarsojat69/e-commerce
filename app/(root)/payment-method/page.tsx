/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Metadata } from "next";
import { auth } from "@/auth";
import { getUserById } from "@/lib/actions/user.action";
import { APP_NAME } from "@/lib/constant";
import PaymentMethodForm from "./payment-method-form";

export const metadata: Metadata = {
  title: `Payment Method - ${APP_NAME}`,
};
export default async function PaymentMethodPage() {
  const session = await auth();
  const user = await getUserById(session?.user.id!);
  return <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />;
}
