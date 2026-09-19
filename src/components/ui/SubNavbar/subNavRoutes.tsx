const ACCOUNT_BASE_PATH = "/account";

export const subNavRoutes = [
  {
    id: 1,
    path: ACCOUNT_BASE_PATH,
    label: "Mi cuenta",
  },
  {
    id: 2,
    path: `${ACCOUNT_BASE_PATH}/orders`,
    label: "Mis pedidos",
  },
  {
    id: 3,
    path: `${ACCOUNT_BASE_PATH}/addresses`,
    label: "Direcciones de envío",
  },
  {
    id: 4,
    path: `${ACCOUNT_BASE_PATH}/payment-methods`,
    label: "Métodos de pago",
  },
];