import { status } from 'nprogress';

const createOption = (methodReq, data) => {
  return {
    method: methodReq,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
}

export const methodGetPost = async (url = '', methodReq = methodReq.toUpperCase(), data = '') => {
  const URL = url;
  let res = '';
  try {
    if (URL === '') {
      throw new Error ('не указан путь фетчу');
    }
    if (typeof methodReq !== "string") {
      throw new Error ('неверно указан метод отправки');
    }
    if (methodReq === 'GET') {
      res = await fetch(URL);
    } else {
      res = await fetch(URL, createOption(methodReq, data));
    }
    if (res.ok) {
      const response = await res.json();
      return response;
    }
  } catch (e) {
    return e.message;
  }
}
