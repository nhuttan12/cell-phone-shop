export class BaseResponse<T = unknown> {
  constructor(
    public readonly code: number,
    public readonly message: string,
    public readonly data?: T,
    public readonly success?: boolean,
  ) {}
}
