import { client } from '../../client';

import {
  ResetPasswordEmailRequest,
  ResetPasswordEmailResponse,
  ResetPasswordCheckRequest,
  ResetPasswordCheckResponse,
  ResetPasswordEnterRequest,
  ResetPasswordEnterResponse,
} from '@vue-storefront/prestashop-api';

export async function resetPasswordEmail(props: ResetPasswordEmailRequest) {
  const { data } = await client.post<ResetPasswordEmailResponse>('resetPasswordEmail', {
    email: props.email,
  });

  if (data.code != 200) {
    return data;
  }

  return data;
}

export async function resetPasswordCheck(props: ResetPasswordCheckRequest) {
  const { data } = await client.post<ResetPasswordCheckResponse>('resetPasswordCheck', {
    ...props
  });

  if (data.code != 200) {
    return data;
  }

  return data;
}

export async function resetPasswordEnter(props: ResetPasswordEnterRequest) {
  const { data } = await client.post<ResetPasswordEnterResponse>('resetPasswordEnter', {
    ...props
  });

  if (data.code != 200) {
    return data;
  }

  return data;
}
