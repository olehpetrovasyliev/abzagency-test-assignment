export type TokenResponse = {
  success: boolean;
  token: string;
};

export type Token = string | null;

export type AuthState = {
  token: Token;
  loading: boolean;
  error: string | null;
};
