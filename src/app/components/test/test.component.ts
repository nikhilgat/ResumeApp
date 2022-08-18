import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
  ngOnInit(): void {}
  
  posts: any[] = [];

  loadPosts() {
    this.http.get('http://localhost:8080/get').subscribe((posts: any) => {
      this.posts = posts;
    });
  }
}
