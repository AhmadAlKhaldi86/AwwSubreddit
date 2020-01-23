import { Component, OnInit } from '@angular/core';
import { redditService } from '../reddit.service';


@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css'],
  providers: [redditService]
})
export class RedditFeedComponent implements OnInit {
  public errMsg;
  public redditData;
  constructor(private __redditService: redditService) { }

  ngOnInit() {
    this.__redditService.fetchAwwSubreddit()
    .subscribe(resp => this.redditData = resp)
  }

}
