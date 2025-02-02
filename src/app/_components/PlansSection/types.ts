export interface AdmingUserType {
  result: string;
  requestId: string;
  transactionId: string;
  title: string;
  posId: string;
  status: string;
  date: AdmingUserTypeDate;
  amount: number;
  currency: string;
  description: string;
  hiddenDescription: string;
  payer: Payer;
  payments: Payments;
  transactionPaymentUrl: string;
}

export interface AdmingUserTypeDate {
  creation: Date;
  realization: null;
}

export interface Payer {
  payerId: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface Payments {
  status: string;
  method: string;
  amountPaid: number;
  date: PaymentsDate;
}

export interface PaymentsDate {
  realization: null;
}

export interface PlanType {
  name: string;
  price: number;
  features: { name: string; description: string; included: boolean }[];
  possibleEarnings: string;
}

export interface ResponseType {
  error?: string;
  ok?: boolean;
  tr?: string;
}
