import { IPostState, initialPostState, IAppState } from './post.state';
import { PostActions } from './post.action';
import { EPostActionConstants } from './post.constants';
import { ActionReducerMap } from '@ngrx/store';


export const postReducers = function (state = initialPostState, action: PostActions): IPostState {
    switch(action.type) {

        case EPostActionConstants.GetPostsSuccess:
            return { ...state, posts: action.payload };

        case EPostActionConstants.GetPostSuccess:
            return { ...state, post: action.payload };

        default:
            return state;
    }
}

export const appReducers: ActionReducerMap<IAppState, any> = {
    posts: postReducers
}