import { Context, PrestashopResponse } from '../../types';

export type RegisterRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type RegisterResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function register(context: Context, params: RegisterRequest) {
  const { data } = await context.client.post<RegisterResponse>(`/rest/register`, {
    email: params.email,
    password: params.password,
    firstName: params.firstName,
    lastName: params.lastName,
  });

  return data;
}
