/**
 * Node modules
 */
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

/**
 * Types
 */
import { type NotFoundHandler } from 'hono';
import type { ApiError } from '@/types/api-response';

const notFound: NotFoundHandler = c => {
  return c.json<ApiError>(
    {
      success: false,
      error: {
        code: StatusCodes.NOT_FOUND,
        message: `${ReasonPhrases.NOT_FOUND} - ${c.req.path}`,
        details: {
          url: c.req.url,
          path: c.req.path,
          method: c.req.method,
        },
      },
    },
    StatusCodes.NOT_FOUND
  );
};

export default notFound;
