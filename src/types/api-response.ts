export interface ApiError {
  success: false;
  error: {
    code: number;
    message: string;
    details?: string[] | Record<string, unknown>;
    stack?: string;
  };
}
