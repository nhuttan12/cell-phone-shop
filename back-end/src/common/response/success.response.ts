import { BaseResponse } from './base.response';

export class SuccessResponse<T = unknown> extends BaseResponse<T> {
  constructor(data: T, message = 'Success', code = 200) {
    super(code, message, data, true);
  }
}
