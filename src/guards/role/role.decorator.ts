import { SetMetadata } from "@nestjs/common";

// this is the key -----> key = 'user'
export const Role_Key = 'roles';

// this is our custom Decorator
export const Roles = (...roles: string[]) => SetMetadata(Role_Key,roles);