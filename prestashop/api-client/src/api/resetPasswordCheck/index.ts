import { Context, PrestashopResponse } from '../../types';

export type ResetPasswordCheckRequest = {
  email: string;
  'pass-code': string;
};

export type ResetPasswordCheckResponse = PrestashopResponse<string[]>;

export async function resetPasswordCheck(
  context: Context,
  params: ResetPasswordCheckRequest
): Promise<ResetPasswordCheckResponse> {
  const { data } = await context.client.post<ResetPasswordCheckResponse>('/rest/resetpasswordcheck', {
    ...params,
  });

  return data;
}
