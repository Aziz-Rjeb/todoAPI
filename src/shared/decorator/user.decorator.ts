/* ************************************************************************** */
/*                                Dependencies                                */
/* ************************************************************************** */

import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';

/* ************************************************************************** */
/*                                  Decorator                                 */
/* ************************************************************************** */

/**
 * Decorator to extract the authenticated user from the request.
 * This decorator retrieves the `user` object from the request, which is typically
 * set by the authentication middleware or guard.
 *
 * @returns {ParameterDecorator} - A parameter decorator that injects the authenticated user.
 *
 * @example
 * getUserProfile(@AuthenticatedUser() user: UserEntity) {
 *   return user;
 * }
 */
const AuthenticatedUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.user.userId;
  },
);

export { AuthenticatedUser };