import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../../models/post.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PostService {
    readonly ROOT_URL: string = "https://jsonplaceholder.typicode.com/posts";

    constructor(
        private _http: HttpClient
    ) {}

    getPosts(): Observable<IPost[]> {
        return this._http.get<IPost[]>(this.ROOT_URL);
    }
}