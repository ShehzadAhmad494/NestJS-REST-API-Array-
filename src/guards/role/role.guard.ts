import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enum';
import { Role_Key } from './role.decorator';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      Role_Key,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) return true;

    const request = context
      .switchToHttp()
      .getRequest<{ headers: Record<string, string> }>();

    const userRole = request.headers['x-user-role'] as Role;

    return requiredRoles.includes(userRole);
  }
}