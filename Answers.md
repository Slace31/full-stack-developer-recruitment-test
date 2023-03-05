EVA.GG Coding test - Answers
==================================

#### How long did you spend on the backend coding test? What would you add to your solution if you had more time? What would've been your architecture choice for this kind of application without our example?

I spent around 6h coding the API. But you need to add up the project setup with Nx and the fixing of the vulnerabilities at the start of the project, it took me around 2h to do so.

Clearly we need to retreive the location from a database and not a JSON file. So I would personally add [TypeORM](https://typeorm.io/) and a [MongoDB](https://www.mongodb.com/) database to do so. But it's mainly because I used this tools and frameworks in older projects, otherwise maybe [GraphQL](https://graphql.org/) is more adapted since we use a ReactJS application as frontend. I would also add more tests because at the moment the ones that I've done does not cover all cases of each function.

#### How can you handle post midnight cases to be displayed on the same day and not the next one?
I don't really get the question, but I feel that for my implementation of the coding test, in the backend part, where saturday would be that particular use case, I just served them as it was saturday but because they are sorted you know it's past midnight.

For the frontend part I would also just show them at the end of the list, maybe with some extra data saying it's past midnight slots.

#### How long did you spend on the frontend coding test? What were your biggest difficulties?
I spent around 8h on the frontend coding test. It was quite long for two main reasons.

The first one is that I developed some ReactJS application in the past, but it was some older versions, so I was using Class Components in order to manage my state and effects. So I had to learn the new way of doing it.

The second one is that I wanted to make the Calendar a library of "dumb" component that my App would import and use freely. So that if one day we need to import it somewhere else, maybe in another app, it would be really quick and easy.

#### How would you track down a performance issue in production? Have you ever had to do this?
At the moment my way of doing it is using some monitoring tools like kubernetes dashboard, or simply `docker stats`.
But maybe you could use some tools like [Grafana](https://grafana.com/) or [Splunk](https://www.splunk.com/) to get infos quickly. 

#### How are you feeling about our game and locations?
I mean this is one but maybe the main reason why I want to work for EVA.GG. This game (After-H) is insane it will continue to grow so well. I play with my friends and co-workers usually once per week. 
I'm not a pro at the moment but doing some sports while gaming feels so good.

#### Are you a gamer? Which games do you play?
I was quite an hardcore player of League of Legends but I'm making a break for like 1 year now to play at Lost Ark. I was ranked Master on LoL, I'm quite proud of me ;) Now I'm just playing Lost Ark, After-H, Valheim or some board games with my friends.

#### Do you know livestreaming? RTMP?
Do I know livestreaming? Yeah I'm streaming on Twitch quite often ahah.

Nah to be honest I just checked up what WebRTC is but never really got into it.


