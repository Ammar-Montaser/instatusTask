<h1 align="center" id="title">User Activity Dashboard Task</h1>

<p id="description">This project is a simple user activity dashboard which displays the user activity performed on a specific website along side exporting the data to CSV.</p>



<h2>🚀 Demo</h2>

[https://instatus-task-eight.vercel.app/](https://instatus-task-eight.vercel.app/)

<h2>Project Screenshots:</h2>

<img src="https://i.postimg.cc/NFmnnQzr/Screenshot-2024-07-06-at-6-21-47-PM.png" alt="project-screenshot" width="100%" height="700/">

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Display all user activities within an organization with an option to load more data.
*   Uses SWR for data fetching and updating
*   Allows users to search for specific data while rendering the changes on the screen
*   The backend allows both pagination and filtering


<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repo navigate to the directory and run</p>

```
npm install npm run dev
```

<p>2. visit http://localhost:3000 to see it in action!</p>

```
http://localhost:3000 
```
<h2>🛠️ Sample JSON object to post to /api/events:</h2>

```

{
  "object": "event",
  "actorId": "user_3VG74289PUA2",
  "actorName": "Omar Ahmed",
  "group": "instatus.com",
  "actionId": "evt_action_PGTD81NCAOQ2",
  "actionName": "user.invited_teammate",
  "targetId": "user_DOKVD1U3L030",
  "targetName": "omar@instatus.com",
  "location": "105.40.62.95",
  "occurredAt": "2024-09-04T14:31:13.607Z",
  "metadata": {
    "redirect": "/setup",
    "description": "User invited teammate.",
    "x_request_id": "req_W1Y13QOHMI5H"
  }
}
```
<h2>Why I should get hired?:</h2>

```
*   Self Driven - I don't need continuous instructions or spoon feeding. I am self motivated and self critical, I know how to find and learn the things I need to complete any given task. 
*   Perfectionist - I don't settle for less, I always believe that no matter what I do there's always more room for improvement. 
*   Entrepreneurial Mindset - I have an entrepreneurial mindset which helps me see things from both technical and business perspective.
*   Determined - I am always determined to do the best I can in work and my personal life in general.
*   Team Player - My success and my team's success is OUR success especially in startups that's why I'm all about the team spirit.
*   Quick Learner - I can learn any new topic in a short period of time, just give me the key words and I'll dig through Google and do my own research. 
*   Open to Criticism - I highly encourage criticism, it drives me to get better and improve.
*   Cultural Fit - I believe that I'm a close fit to Instatus and I believe that together we can achieve great things.
```

<img src="https://i.postimg.cc/KvscbNqc/8w9kxn.jpg" alt="hire me meme" width="100%" height="700/">

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   React - Component based UI framework
*   Tailwind - CSS preprocessor for scalable styles
*   Next JS - Next gen build tool for lightning fast dev server
*   SWR -  Stale While Revalidating (SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data)
*   Prisma ORM - Database Wrapper for handling DB interactions
*   Vercel Postgres DB - A hosted Postgres DB for web applications
*   Vercel - Free Hosting

<h2>🍰 Contribution Guidelines:</h2>

Pull requests are welcome! Please open an issue first to discuss any changes or additions.

<h2>🛡️ License:</h2>

This project is licensed under the Distributed under the MIT license.
