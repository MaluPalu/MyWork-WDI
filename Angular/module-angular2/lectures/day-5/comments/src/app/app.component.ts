import { Component } from '@angular/core';

import { CommentService } from './comment/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string;
  author: string;

  comments = [];

  editComment;

  constructor(private cs: CommentService) {}

  ngOnInit() {
    this.comments = this.cs.getComments();
    this.cs.onCommentUpdated((myNewComments) => {
      this.comments = myNewComments
    });
  }

  clearForm() {
    this.text = "";
    this.author = "";
  }

  addComment() {
    this.cs.addComment({
      text: this.text, author: this.author
    })

    this.clearForm();
  }

  removeComment(remove) {
    this.cs.deleteComment(this.removeComment);
  }

  makeCommentEditable(editComment) {
    this.editComment = editComment;
  }

  edited() {
    this.editComment = null
  }

}
