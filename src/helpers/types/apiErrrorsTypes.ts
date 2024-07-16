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

// Union of all possible error types
export type ApiError = ValidationError | ServerError | NetworkError;
