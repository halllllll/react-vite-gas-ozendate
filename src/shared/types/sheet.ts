type BaseResponse<T> =
  | {
      success: false;
      name: string;
      message?: string;
      details?: any;
    }
  | {
      success: true;
      data: T;
    };

export type SheetNameResponse = BaseResponse<string>;
export type SheetUrlResponse = BaseResponse<string>;

export type AffectCountRequest = number;
export type AffectCountResponse = BaseResponse<null>;
