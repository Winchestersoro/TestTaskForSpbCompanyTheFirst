export type Payment = {
  id: number;
  createdAt: string;
  type: 'электронный' | 'наличный';
  amount: number;
  customer: string;
  customerInn: string;
  contractor: string;
  contractorInn: string;
  examineeName: string;
  paymentComment: string;
  accountantComment: string;
};

export type Invoice = {
  id: number;
  type: 'обучение' | 'пошлина';
  examineeName: string;
  qualification: string;
  amount: number;
  customer: string;
  customerInn: string;
  contractor: string;
  contractorInn: string;
  paymentPurpose: string;
};
