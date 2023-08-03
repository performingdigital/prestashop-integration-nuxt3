import { client } from '../../client';

import {
  TODO as ResetPasswordEmailRequest,
  TODO as ResetPasswordEmailResponse,
  TODO as ResetPasswordTokenRequest,
  TODO as ResetPasswordCheckResponse,
} from '@vue-storefront/prestashop-types';

export async function resetPasswordEmail(props: ResetPasswordEmailRequest) {
  const { data } = await client.post<ResetPasswordEmailResponse>('resetPasswordEmail', {
    username: props.username,
  });

  if (data.code != 200) {
    return data;
  }

  return data;
}

export async function resetPasswordCheck(props: ResetPasswordTokenRequest) {
  const { data } = await client.post<ResetPasswordCheckResponse>('resetPasswordCheck', {
    username: props.username,
    code: props.code,
  });

  if (data.code != 200) {
    return data;
  }

  return data;
}

export async function resetPasswordEnter(props: ResetPasswordTokenRequest) {
  const { data } = await client.post<ResetPasswordCheckResponse>('resetPasswordEnter', {
    username: props.username,
    code: props.code,
    password: props.password,
  });

  if (data.code != 200) {
    return data;
  }

  return data;
}
