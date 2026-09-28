interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UpdateUser = Partial<User>;
type UserProfile = Pick<User, 'name' | 'email'>;
type PublicUser = Omit<User, 'password'>;
