import { Context, PrestashopResponse } from '../../types';

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = PrestashopResponse<
  | string
  | {
      cart_count: number;
      customer_id: number;
      message: string;
      session_data: string;
      status: string;
      user: any;
    }
>;

export async function login(context: Context, params: LoginRequest): Promise<LoginResponse> {
  const { data } = await context.client.post<LoginResponse>('/rest/login', {
    email: params.email,
    password: params.password,
  });

  return data;
}
