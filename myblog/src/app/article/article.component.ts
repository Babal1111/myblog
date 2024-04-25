import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blog-post/blog-post.component'; // Import the BlogPost interface or model

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: BlogPost | undefined; // Define article property to hold the blog post data

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null && !isNaN(Number(id))) { // Check if id is not null and is a valid number
      const postId = Number(id);
      this.article = this.getBlogPostById(postId); // Fetch the blog post data based on the ID
    }
  }

  // Function to fetch the blog post data based on ID (Replace this with your actual logic)
  getBlogPostById(id: number): BlogPost | undefined {
    // Assuming blog post data is available in an array
    const blogPosts: BlogPost[] = [
      {
        id: 1, title: 'Investigation of a Cross-regional Network Performance Issue', date: 'April 1, 2024',
        description: '',
        content: 'Cloud Networking Topology Netflix operates a highly efficient cloud computing infrastructure that supports a wide array of applications essential for our SVOD (Subscription Video on Demand), live streaming and gaming services. Utilizing Amazon AWS, our infrastructure is hosted across multiple geographic regions worldwide. This global distribution allows our applications to deliver content more effectively by serving traffic closer to our customers. Like any distributed system, our applications occasionally require data synchronization between regions to maintain seamless service delivery The following diagram shows a simplified cloud network topology for cross-region traffic.'
      },
      // Add more blog posts as needed
    ];
    
    // Find the blog post with the matching ID
    return blogPosts.find(post => post.id === id);
  }
}
