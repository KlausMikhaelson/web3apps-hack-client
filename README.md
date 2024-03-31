## Inspiration
**What inspired us**
When we think about the process of asking a question in university it felt daunting due to the amount of sources one would have to go through to find a satisfactory one, from joining multiple discord servers to asking around only for your question to be buried, this is our solution to that
**Why did we go with StuQ as our project name?**
It is a shortened handle for Student Questions as that was the foundational issue we were trying to address with this application. Throughout developing the application we started calling it StuQ to shorten it, but it ended up sticking after one of our developers said "Stuck? Use StuQ" and as its namesake suggests it StuQ with us.


## What it does
The site offers you a range of uses. It serves as a forum/thread for students to access and find answers to their questions since as of now at the University of Regina it is very difficult to do so, let's say you want to know something about a course you'd have to navigate through multiple discords, asking people and look everywhere for that piece of information but with this, we hope to centralize the information allowing people to more easily find the answers. It can also help you find roommates/tutors through the use of the community that would be established through it, helping you sort out through the student body to find who you feel strongly about and giving you the resources to find tutors to help assist you in your academic success.   

## How we built it
We used Mongodb to implement a custom recommendation algorithm for students to find roommates with similar interests using MongoDB aggregation, we used NextJs with Typescript and tailwindcss for the frontend and used dynamic xyz for wallet generation with university email id, we used NodeJs and ExpressJs to create the backend APIs

## Challenges we ran into
- Since more than half of our team consisted of beginners so we were learning and building at the same time.
- We had a lot of merge conflicts for both our frontend and backend repositories which held us back by a lot.
- Initially, we were not able to send the email verification otp on time.
- We were trying to implement push protocol for a decentralized chat feature but then came across a bug which is there in their library for NextJs which was a huge hurdle.

## Accomplishments that we're proud of
We are proud that we made a fully integrated web3 application. Whilst not all the discussed front end is fully developed we established all the needed API in the back end, given an extra day we can fully implement it. These accomplishments are:
- Built a custom recommendation algorithm with MongoDB aggregate.
- Built multiple apis that helped us to let students create forums, ask questions, find roommates

## What we learned
- We learned how MongoDB aggregation works.
- We learned how we can use web2 socials to generate web3 wallets and make the user onboarding easier for everyone.
- We learned how to work in a team and solve merge conflicts.

## What's next for StuQ
**Road map for StuQ**
So our hope with StuQ is that we can build it to be used Inter-University and implement the remaining discussed frontend features.
