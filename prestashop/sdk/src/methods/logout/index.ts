import { client } from '../../client';

export async function logout(props: object = {}) {
  const { data } = await client.post<any>('logout', props);

  return data;
}
