import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/shared/store/post/post.state';
import { Observable } from 'rxjs';
import { selectPost } from 'src/app/shared/store/post/post.selectors';
import { GetPost } from 'src/app/shared/store/post/post.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  post$ = this._store.pipe(select(selectPost));

  constructor(
    private _store: Store<IAppState>,
    private _actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetPost(this._actRoute.snapshot.params.id));
  }

}
