
import { Effect, Actions, ofType } from '@ngrx/effects'
import { EPostActionConstants } from './post.constants';
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators'
import { GetPosts, GetPostsSuccess, GetPostSuccess } from './post.action';
import { PostService } from './post.service';
import { of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './post.state';
import { selectPostList } from './post.selectors';

@Injectable()

export class PostEffects {

    constructor(
        private _actions$: Actions,
        private _postSvc: PostService,
        private _store: Store<IAppState>
    ) { }

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType(EPostActionConstants.GetPost),
        map((action: any) => action.payload),
        withLatestFrom(this._store.pipe(select(selectPostList))),
        switchMap(([id, posts]) => {
            console.log(posts, 'posts')
            const selectedPost = posts.find(post => post.id === +id);
            return of(new GetPostSuccess(selectedPost));
        })
    )

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetPosts>(EPostActionConstants.GetPosts),
        switchMap(() => this._postSvc.getPosts().pipe(

            map(posts => new GetPostsSuccess(posts))
        )),
        // map((item) => console.log(item, 'item'))
        // switchMap((postHttp: any) => of(new GetPostsSuccess(postHttp.posts))),
    )

}