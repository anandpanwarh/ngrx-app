import { IAppState, IPostState } from "./post.state";
import { createSelector } from '@ngrx/store';


const selectPosts = (state: IAppState) => state.posts;

export const selectPostList = createSelector(
    selectPosts,
    (state: IPostState) => state.posts
);

export const selectPost = createSelector(
    selectPosts,
    (state: IPostState) => state.post
)