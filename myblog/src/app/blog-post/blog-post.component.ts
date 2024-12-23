import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedPostComponent } from "../featured-post/featured-post.component";
import { Router } from '@angular/router';
import { RecommendedTopicsComponent } from '../recommended-topics/recommended-topics.component';
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
}
@Component({
    selector: 'app-blog-post',
    standalone: true,
    templateUrl: './blog-post.component.html',
    styleUrl: './blog-post.component.css',
    imports: [CommonModule, FeaturedPostComponent,RecommendedTopicsComponent]
})
export class BlogPostComponent {
[x: string]: any;
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Netflix Technology Blog',
      description: 'Investigation of a Cross-regional Network Performance Issue',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minus quae ut distinctio at excepturi ex magni fugit provident quasi, repellendus perferendis explicabo eaque magnam ratione veritatis illum harum a aut unde dicta dolor alias iste autem. Quibusdam tenetur at quam explicabo, minima dolorem. Unde ea aperiam quaerat iste. Atque at labore qui nobis fugit sed necessitatibus id eos quibusdam eligendi. Cupiditate illum minus distinctio nihil veritatis. Molestiae fuga nesciunt non ullam, cumque minima corporis a atque beatae aspernatur pariatur impedit, vel cum omnis odit? Nesciunt provident ex assumenda exercitationem fugiat, tempore minima quas dicta non. Aliquam necessitatibus soluta repellendus doloremque rem. Veniam, sapiente maxime eum adipisci nihil beatae. Sed voluptatum hic ipsum voluptate quisquam quidem quis iusto beatae adipisci sapiente fugit quaerat eos, at vero natus perspiciatis cum corporis officiis ad recusandae accusantium. Deleniti esse sint labore asperiores expedita repellat quam magni nam aliquam est eaque facere at harum, eveniet quibusdam sed debitis minima laborum alias. Molestiae nobis, quo aliquid error placeat enim dolorem earum officia nisi pariatur soluta dolor expedita aspernatur totam nihil alias sed quis adipisci natus deserunt dolorum cum. Enim tempora alias, quia eos molestiae impedit ad laudantium numquam et perferendis accusantium officia aliquid voluptatem, praesentium, similique odio animi quas! Reprehenderit iste animi recusandae dolorum, minima praesentium ex, odio aspernatur et ipsum cum non corrupti dolor commodi? Earum ut vel a dolorum veritatis sint aut unde. Nam tempore cumque maxime odit tenetur harum veritatis perferendis recusandae dolorem! Officia tempore impedit dignissimos temporibus nobis aspernatur iste necessitatibus, quos aperiam illum provident suscipit dolore, et, praesentium ea facilis minima natus illo saepe consequatur. Consequatur, corporis. Nulla magnam earum iusto? Fuga facilis libero aliquam dolores, suscipit molestias id voluptas ipsam beatae sint quo ex dicta laudantium, repudiandae quibusdam odio alias voluptatibus nihil eligendi explicabo in! Obcaecati exercitationem eveniet error architecto nesciunt molestias perspiciatis inventore officia debitis nam. Ipsa repudiandae doloribus quas quasi aut, delectus culpa cumque autem similique sint quae iste. Facere reiciendis dolore quibusdam similique. Officiis suscipit laboriosam ex doloremque provident? Quod, eum! Atque nobis aut dolores autem, ad distinctio reiciendis maiores voluptas nam reprehenderit non laboriosam, obcaecati sequi unde eveniet asperiores. Maiores harum asperiores praesentium aliquam recusandae? Voluptatem nesciunt ratione et accusamus, quas quaerat, magni rerum quibusdam error perferendis, soluta laudantium ipsa quidem. Cum aut nulla odio quaerat ea minima officia tempora quos, deleniti harum repellendus quis est unde voluptatum provident mollitia quod, sed, quam delectus aperiam in ipsa ex! Dicta quaerat natus libero at non dolor ad sequi quibusdam eaque, tempore facilis laudantium voluptates qui asperiores culpa rem. Vitae nihil magnam quos tenetur, consequuntur porro magni saepe similique voluptate quod exercitationem odio vero perferendis, illum reprehenderit laudantium! Provident deleniti ipsam sapiente explicabo dolor aliquid, iusto ducimus quibusdam a harum, numquam, suscipit sunt ipsum dicta assumenda nulla odio velit excepturi perferendis nobis quas adipisci quod! Dolore placeat tempora tempore aliquid necessitatibus quos doloremque, deserunt at qui fuga ipsam officiis molestias? Corporis, esse veniam odio aut voluptatibus amet obcaecati dolorem nihil placeat possimus impedit nulla magni facere officia!',
      date: 'April 1, 2024'
    },
    {
      id: 2,
      title: 'Stop designing chat-based AI tools.',
      description: 'It is time to evolve AI tools beyond prompt-based interfaces and consider new mental models.',
      content: 'A Shift in Interaction As highlighted by the Nielsen Group, AI is ushering in a new era of user interface design. It is moving us away from traditional command-based interactions to intention-based ones. This means users no longer have to issue specific commands to achieve tasks. Instead, they can express their desired outcome, allowing the AI to handle the necessary steps.Similar to the early days of the Internet or the advent of mobile phones, we’re entering uncharted territory. I have been designing digital experiences for nearly two decades. Every time, these moments required us as an industry to reevaluate our status quo. We must innovate once again. We must reimagine our mental models, patterns, and guidelines to ensure that AI tools feel as intuitive as websites or mobile apps. Image of a one-on-one conversation      Generate with Midjourney Challenges with Chat-Based Models      Many leading AI tools, like Chat GPT, MS Copilot, and Midjourney, rely on a chat-based interface. These interfaces mirror a one-on-one conversation. Two people sit opposite each other, asking and answering questions. This works well for simple questions like searching for details on a term. In contrast, it falls short of achieving more sophisticated tasks. Even when speaking to someone, it is hard to describe what we want in a few words. We often need to have a longer conversation before we are aligned.     You might recognize this kind of complexity when using Midjourney. Unless you’ve studied prompt engineering, getting it to create an image that shows a specific subject in the right frame using the right style requires a lot of trial and error. Creating a video using Sora is probably doubling the challenge. The same goes for anything more sophisticated using Chat GPT. It could be a day-by-day vacation itinerary, website code, or even a prompt for other AI tools. It is difficult to be specific enough in just one query, especially for more deliberate outputs. We know that since the invention of the command line. And we have seen those challenges with Alexa, Google Assistant, and Siri again in recent years.',
      date: 'june 26, 2024'
    },
    {
      id: 3,
      title: 'HOow life works........',
      description: 'By Deepak Chopra, MD, FACP, FRCP',
      content: 'One thing that no one can tolerate is a meaningless life. You might even say that the entire purpose of our lives is a search for meaning, and we hope to find it in work, family, religion, politics, practically anything you can name. When meaning and purpose fail — after being fired, getting a divorce, or losing a beloved family member — people get anxious and depressed.  This aspect of the human condition is a mystery. Other creatures are satisfied to be lions, whales, rabbits, or shrews, guided by their nature. Humans alone question whether life makes sense. Does it? War is senseless but has endured for millennia. To an atheist, God doesn’t make sense, while to the religiously devout the absence of God doesn’t make sense. Yet few people ask why life makes sense at all.   There are really only two answers to this question. If life makes sense, we are justified in seeking deeper and higher meaning. If life doesn’t make sense — in other words, if existence is random, accidental, indifferent, and simply a mechanical biological process — then seeking more meaning is just escapism. We are fooling ourselves in the hope that things matter.  To me, this is a fascinating question, not a gloomy one. There is actually a third answer: we don’t know why life makes sense. Putting all assumptions aside, being uncertain takes you to a creative place. There is always the possibility that human beings are creators of meaning, and existence provides us with the colors we use to paint reality.     If that is true, then human evolution is itself a creative project. Despite the senselessness that surrounds us from war, violence,hatred, racism, sexism, etc. — the creative process we call civilization endures age after age. Is there actual proof that this perspective is true? The countless people who are weighed down by suffering, not to mention those who have died needlessly and tragically, make it easy to argue that truth belongs on the other side. No less than Freud believed that civilization was a fragile veneer protecting us from our inner drive toward self-destruction.  But proof in a scientific age needs to be objective. Here’s a credible argument for why life makes total sense, not just human life but all life, down to single-celled organisms. If you consider the human brain, it either creates meaning out of raw sensory input or it processes that input as an agent of the mind. We don’t need to go into the intricacies of mind versus brain here. It is enough that the brain allows us to make sense of life.  That wouldn’t be possible if brain cells were not perfectly organized to do all of this processing, turning invisible photons into a world of sight and air vibrations into intelligible sounds like language and music. For a cell to be this organized, either it is doing the organization itself or there is a higher overseer. Every cell biologist would affirm that the cell is organizing itself, thanks to DNA. But what organizes DNA? Again the answer is that it is doing the whole thing itself. ',
      date: 'november 20, 2024'
    },
    {
      id: 4,
      title: 'The April of Poppies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'April 1, 2024'
    },
    {
      id: 5,
      title: 'The April of Poppies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'April 1, 2024'
    },
    {
      id: 6,
      title: 'The April of Poppies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'April 1, 2024'
    },
    {
      id: 7,
      title: 'The April of Poppies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'April 1, 2024'
    },
    {
      id: 8,
      title: 'The April of Poppies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'April 1, 2024'
    },
    {
      id: 9,
      title: 'The April of Poppies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'April 1, 2024'
    },
    // Add more blog posts as needed
  ];

  constructor(private router: Router) {} // Inject Router for navigation

  navigateToArticle(id: number) {
    this.router.navigate(['/article', id]); // Navigate to article page with article ID
  }
}