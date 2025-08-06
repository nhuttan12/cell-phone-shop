import { BaseResponse } from './base.response';

export class FailureResponse extends BaseResponse<null> {
  constructor(message: string, code = 400) {
    super(code, message, null, false);
  }
}
