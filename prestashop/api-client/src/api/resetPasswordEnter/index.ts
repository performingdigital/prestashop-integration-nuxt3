import { Context, PrestashopResponse } from '../../types';

export type ResetPasswordEnterRequest = {
  email: string;
  'pass-code': string;
  passwd: string;
  confirmation: string;
};

export type ResetPasswordEnterResponse = PrestashopResponse<string[]>;

export default async function resetPasswordEnter(
  context: Context,
  params: ResetPasswordEnterRequest
): Promise<ResetPasswordEnterResponse> {
  const { data } = await context.client.post<ResetPasswordEnterResponse>('/rest/resetpasswordenter', {
    ...params,
  });

  return data;
}
