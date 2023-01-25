// export const asyncActionMiddleware = (storeAPI) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(storeAPI.dispatch, storeAPI.getState);
//   }

//   return next(action);
// };
export const asyncActionMiddleware = (storeAPI) => (next) => (action) =>
  typeof action === "function"
    ? action(storeAPI.dispatch, storeAPI.getState)
    : next(action);
