import { User } from '@user/domain/user.entity';

export interface UserRepository {
  create(
    user: Pick<User['props'], 'email' | 'name' | 'password'>
  ): Promise<User>;

  deleteOneByEmail(email: User['props']['email']): Promise<void>;

  findOneByEmail(email: User['props']['email']): Promise<User>;

  updateOneByEmail(
    user: Pick<User['props'], 'email'> &
      Partial<Pick<User['props'], 'address' | 'name' | 'password'>>
  ): Promise<User>;
}
