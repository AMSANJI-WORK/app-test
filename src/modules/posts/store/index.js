import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const PostSclice = createSlice({
  name: "post",
  initialState: {
    data: [],
    item: {
      albumId: -1,
      id: -1,
      title: "",
      url: "",
      thumbnailUrl: "",
    },
    loading: false,
  },
  reducers: {
    setUser(state, action) {
      Object.assign(state.item, action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
export function fetchPost(id) {
  return async (dispatch, getState) => {
    try {
      const state = getState().post;
      if (state.loading) return;
      dispatch(setLoading(true));
      const user = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export const { setUser, setLoading } = PostSclice.actions;
export default PostSclice.reducer;
