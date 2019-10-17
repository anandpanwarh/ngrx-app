import { Action } from '@ngrx/store';
import { EPostActionConstants } from './post.constants';
import { IPost } from '../../models/post.interface';


export class GetPosts implements Action {
    public readonly type = EPostActionConstants.GetPosts;
}


export class GetPostsSuccess implements Action {
    public readonly type = EPostActionConstants.GetPostsSuccess;
    constructor(public payload: IPost[]) {}
}


export class GetPost implements Action {
    public readonly type = EPostActionConstants.GetPost;
    constructor(public payload: number){}
}


export class GetPostSuccess implements Action {
    public readonly type = EPostActionConstants.GetPostSuccess;
    constructor(public payload: IPost) {}
}

export type PostActions = GetPosts | GetPostsSuccess | GetPost | GetPostSuccess;