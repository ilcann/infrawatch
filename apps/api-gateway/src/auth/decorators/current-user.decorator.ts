import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { JwtPayload } from '@repo/types';

export const CurrentUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, ctx: ExecutionContext): JwtPayload | any => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);