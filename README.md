# CPSC 481 – Human-Computer Interaction I – Fall 2023

**By Tutorial 3, Group 3:** Cedric Acierto, Agam Aulakh, Heba Barahim, Eyram Ekpe, Jason Kee

#### Introducing: CodeConnect!

Coding is a skill that is easy to learn, but hard to master. It does, however, get easier through collaboration. Learning is hindered by the lack of a central, social platform where post-secondary students in computer science and software engineering could interact with each other.

By studying computer-human interactions, we designed a website to tackle this problem.

CodeConnect, our website, is deployed on github pages. Use [this link](https://jvsonkee.github.io/CodeConnect/) to access the finished horizontal and vertical prototype.

## Implemented Features

We have implemented the core functionality necessary for our system to achieve its goal, specifically:

- [x] Reading, Drafting, Adding New Posts
- [x] Replying to Posts at Various Nested Levels
- [x] Exploring Topics
- [x] Searching for Posts using Topics and Keywords
- [x] Direct Messaging Known Users
- [x] Profile Creation and Account Management
- [x] Basic Error Handling

The following features are still under development:

- [ ] Sorting Posts by Trending or Recent
- [ ] Direct Messaging New Users
- [ ] Customizing Profiles
- [ ] Sharing files through posts

## Walkthroughs

Here are three walkthroughs that will help you get a feel for our entire system.
As a potential user in the **Observer** user class, let's see what you can do on CodeConnect!

1.  Starting from the welcome page, click on the Continue As Guest button
2.  Scroll through the feed to get a feel for our system
3.  Click on a post to see the full thread
4.  Click on the Reply button and try to add a reply to the thread
5.  Manage the dialog by clicking Close or Create New Account
6.  Click on the Explore button on the navigation bar
7.  Search for posts using the search bar, clicking on the trending carousel of images, or clicking on a topic listed below
8.  Click on search results or refine search by adding keywords

---

As a potential user in the **Student** user class, let's see what you can do on CodeConnect!

1.  Starting from the welcome page, click on the Create New Account button
2.  Try creating a new account by entering the following details and notice how our system responds:
    > { Email: Kirby, Username: PixelPioneer, Password: 123, Password: 123}
3.  Hmm... maybe try entering this instead:
    > { Email: Kirby, Username: Kirby, Password: password, Password: password}
4.  Okay, one last try:
    > { Email: Kirby, Username: Kirby, Password: password1!, Password: password1!}
5.  Click on the Agree to Terms and Conditions to see the full popup
6.  Click on the check mark beside the Terms and Conditions and then click Create Account
7.  Excellent! Now you have a new user account
8.  Click on the Post button to create a new post
9.  Start typing whatever is on your mind. Maybe something like this:
    > { Title: Why do we have network Layers?, Topic: Networks, Description: Can anyone tell me what a network layer is? Why did my professor call it a stack? }
10. Click on the Save Form for Later button and exit the post form using the X on the top righthand side
11. Scroll around the system or click to other buttons
12. Click on the Post button again to see your saved post!
13. Once you are confident with you're writing, click on the Post button and see the new post added to the top of your home feed
14. Click on the Heart icon to like your post
15. Click on the post and add a new reply using the reply button. We suggest writing something like this:
    > { Reply: Oh by the way, this was an introductory networks class so please explain like im five haha. }
16. Notice your new reply on the post thread!

---

As a potential user in the **Mentor** user class, let's see what you can do on CodeConnect!

1.  Starting from the welcome page, log into our system using this existing mentor account:

> { Username: PixelPioneer, Password: 123 } 2. Scroll around the home page and click on the options in the navigation bar to get a feel for the sytem. 3. Click on the Profile option on the navigation bar. 4. Scroll through the account's post history. 5. Click on the Direct Message option on the navigation bar. 6. Click on the different DMs currently open, say maybe the Boo account. 7. Write a message to Boo using the bottom text bar. Maybe something like this:
> { Message: Hey Boo! Remember, it never hurts to follow up, but be respectful } 8. Scroll downt o see your new message 9. Click on other accounts on the righthand side preview bar 10. Click on the top X button to leave the DM page

## Instructions

- Ensure node.js is installed on your system.
- Then run the following commands:

```bash
    npm install
    npm run dev
```
