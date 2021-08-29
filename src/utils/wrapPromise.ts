import { User } from "../types/userType";

export type WrapPromise = (promise: Promise<User>) => { read(): User }
export type ReadFn = { read(): User }

export const wrapPromise = (promise: Promise<User>): { read(): User } => {
  let status = "pending";
  let result: User;

  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;    
      if (status === "error") throw result;
      if (status === 'success') return result
      
      throw new Error('This should be impossible')
    }
  };
}

