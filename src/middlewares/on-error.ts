/**
 * Node modules
 */
import { StatusCodes } from 'http-status-codes';

/**
 * Custom modules
 */
import { env } from '@/configs/env';

/**
 * Types
 */
import { type ErrorHandler } from 'hono';
import { type ContentfulStatusCode } from 'hono/utils/http-status';
import type { ApiError } from '@/types/api-response';

const onError: ErrorHandler = (error, c) => {
  const currentStatus =
    'status' in error ? error.status : c.newResponse(null).status;
  const statusCode =
    currentStatus !== StatusCodes.OK
      ? (currentStatus as ContentfulStatusCode)
      : StatusCodes.INTERNAL_SERVER_ERROR;

  return c.json<ApiError>(
    {
      success: false,
      error: {
        code: statusCode,
        message: `${error.message}`,
        details: {
          cause: error.cause,
          path: c.req.path,
          method: c.req.method,
        },
        stack: env.NODE_ENV === 'development' ? error.stack : undefined,
      },
    },
    statusCode
  );
};

export default onError;
