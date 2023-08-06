import { Context, PrestashopResponse } from '../../types';

export type LogoutRequest = {
  // empty
};

export type LogoutResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function logout(context: Context, params: LogoutRequest) {
  const { data } = await context.client.get<LogoutResponse>('/rest/logout', {
    params,
  });

  return data;
}
