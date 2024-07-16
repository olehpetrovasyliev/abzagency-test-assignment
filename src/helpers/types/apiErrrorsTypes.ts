type ValidationError = {
  success: false;
  message: string;
  fails: Record<string, string[]>;
};

type ServerError = {
  success: false;
  message: string;
};

type NetworkError = {
  success: false;
  message: string;
};

export type ApiError = ValidationError | ServerError | NetworkError;
