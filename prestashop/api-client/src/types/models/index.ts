export type PrestashopResponse<T> = {
  code: number,
  success: boolean;
  psdata: T;
}