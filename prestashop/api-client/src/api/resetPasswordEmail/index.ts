import { Context, PrestashopResponse } from '../../types';

export type ResetPasswordEmailRequest = {
  email: string;
};

export type ResetPasswordEmailResponse = PrestashopResponse<string[]>;

export async function resetPasswordEmail(
  context: Context,
  params: ResetPasswordEmailRequest
): Promise<ResetPasswordEmailResponse> {
  const { data } = await context.client.post<ResetPasswordEmailResponse>('/rest/resetpasswordemail', {
    email: params.email,
  });

  return data;
}
