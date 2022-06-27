export enum METHOD_TYPES {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

interface IOptions {
  headers?: Record<string, string>,
  method: METHOD_TYPES,
  data?: Document | XMLHttpRequestBodyInit;
}

function queryStringify(data: Record<string, unknown>): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}

export class HTTPTransport {
  get = (url: string, options: IOptions = { method: METHOD_TYPES.GET }) => {
    this.request(url, { ...options, method: METHOD_TYPES.GET });
  };

  put = (url: string, options: IOptions = { method: METHOD_TYPES.GET }) => {
    this.request(url, { ...options, method: METHOD_TYPES.PUT });
  };

  post = (url: string, options: IOptions = { method: METHOD_TYPES.GET }) => {
    this.request(url, { ...options, method: METHOD_TYPES.POST });
  };

  delete = (url: string, options: IOptions = { method: METHOD_TYPES.GET }) => {
    this.request(url, { ...options, method: METHOD_TYPES.DELETE });
  };

  request = (url: string, options: IOptions, queryData: Record<string, unknown> = {}) => {
    const {
      headers = {}, method, data,
    } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      let urlGet = url;
      if (method === METHOD_TYPES.GET && queryData) {
        urlGet += `${queryStringify(queryData)}`;
      }

      xhr.open(method, urlGet);

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onload = resolve;
      xhr.onabort = reject;
      xhr.onerror = reject;

      if (method === METHOD_TYPES.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
