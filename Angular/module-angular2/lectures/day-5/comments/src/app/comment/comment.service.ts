import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
  comments = [];
  private commentsSubject: Subject<any> = new Subject<any>();

  commentAuthor: string;
  commentText: string;

  constructor() { }

  private updateCommentsSubject(): void {
    this.commentsSubject.next(this.comments);
  }

  getComments() {
    return this.comments;
  }

  setComments() {

  }

  addComment(comment) {
  this.comments.push(comment);
  this.updateCommentsSubject();
}


  deleteComment(removeComment) {
    this.comments = this.comments.filter((comment) => {
      return comment != removeComment
    })
  }

  editComment(editComment) {
    this.editComment = editComment;
  }

  onCommentUpdated() {
    this.commentsSubject.asObservable().subscribe(callback);
  }
}
