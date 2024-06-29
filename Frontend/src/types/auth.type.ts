export type LoginPayload = {
  username: string;
  password: string;
};
export type RegisterFormValue = LoginPayload & {
  fullName: string;
  address?: string;
  password: string;
  phone: string;
  dob?: string;
  confirmPassword: string;
};
export type Authenticate = {
  id: string;
  username: string;
  fullName: string;
  dob: string;
  address: string;
  phone: string;
  accessToken: string;
  tokenType: string;
};

export type RegisterPayload = Omit<RegisterFormValue, "confirmPassword">;
