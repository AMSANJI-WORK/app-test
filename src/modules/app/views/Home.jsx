import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPost } from "../../posts/store";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost(1));
  }, []);

  return (
    <h1 className="font-extrabold underline underline-offset-8">Home Page</h1>
  );
}
