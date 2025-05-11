export type BaseApiResponse<T> = {
  additional: {
    [key: string]: string | number | boolean | null;
  };
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
  };
  success: boolean;
  status: number;
  message: string | null;
  error_code: number;
  data: T;
};
