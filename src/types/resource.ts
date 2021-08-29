import { ReadFn } from "../utils/wrapPromise";

export type Resource = {
  [key: number]: ReadFn
}