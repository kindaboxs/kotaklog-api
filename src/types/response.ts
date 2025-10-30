export type ErrorResponse = {
  success: false;
  message: string;
  details?: Record<string, unknown>;
  stack?: string;
};
