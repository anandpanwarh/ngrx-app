import { IPost } from '../../models/post.interface';

// post states
export interface IPostState {
    posts: IPost[];
    post: IPost
};

export const initialPostState: IPostState = {
    posts: null,
    post: null
};


// application states
export interface IAppState {
    posts: IPostState;
}

export const initialAppState: IAppState = {
    posts: initialPostState
}


// initialise all states
export const getInitialState = function (): IAppState {
    return initialAppState;
}