import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/shared/store/post/post.state';
import { Store, select } from '@ngrx/store';
import { GetPosts } from 'src/app/shared/store/post/post.action';
import { selectPostList } from 'src/app/shared/store/post/post.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts$ = this._store.pipe(select(selectPostList));

  constructor(
    private _store: Store<IAppState>
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetPosts());
  }

}
