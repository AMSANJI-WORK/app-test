import { defaultClient } from "../../app/constants/client";

export const PostRepository = {
  resource: "/posts",
  getOne(id) {
    return defaultClient.get(`${this.resource}/${id}`);
  },
};
