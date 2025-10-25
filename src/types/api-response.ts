export interface ApiError {
  success: boolean;
  error: {
    code: number;
    message: string;
    details?: string[] | object;
    stack?: string;
  };
}
