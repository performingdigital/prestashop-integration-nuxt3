import { Context } from '../../types';
import { 
  TODO as ResetPasswordEmailResponse, 
  TODO as ResetPasswordEmailRequest 
} from '@vue-storefront/prestashop-types';

export default async function sendResetPasswordEmail(
  context: Context,
  params: ResetPasswordEmailRequest
): Promise<ResetPasswordEmailResponse> {
  const { data } = await context.client.post<ResetPasswordEmailResponse>('/rest/resetpasswordemail', {
    email: params.username,
  });

  return data;
}
