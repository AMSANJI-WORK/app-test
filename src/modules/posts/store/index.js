import { createSlice } from "@reduxjs/toolkit";
import { PostRepository } from "./repository";

export const defaultPostItem = {
  albumId: -1,
  id: -1,
  title: "",
  url: "",
  thumbnailUrl: "",
};

const PostSclice = createSlice({
  name: "post",
  initialState: {
    data: [],
    item: {
      ...defaultPostItem,
    },
    loading: false,
  },
  reducers: {
    setPost(state, action) {
      Object.assign(state.item, action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const fetchPost = (id) => async (dispatch, getState) => {
  try {
    const state = getState().post;
    if (state.loading) return;
    dispatch(setLoading(true));
    const { data = defaultPostItem } = await PostRepository.getOne(id);
    dispatch(setPost(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const { setPost, setLoading } = PostSclice.actions;
export default PostSclice.reducer;
