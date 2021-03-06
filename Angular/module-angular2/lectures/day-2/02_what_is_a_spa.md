# What is a Single-Page Application?

## Lesson Objectives
*By the end of this lesson, you will be able to:*

- Define a single-page application (SPA).
- List some advantages of an SPA versus a traditional website.
- Demonstrate an SPA.

## Define a Single-Page Application (SPA) 

A **single-page application** (SPA) is a web application or website that fits on a single web page, with the goal of providing a faster, more intuitive user experience. In a SPA, either all of the necessary code — HTML, JavaScript, and CSS — is retrieved with a single page load or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page. Interaction with the single-page application often involves dynamic communication with the web server behind the scenes.

## List Some Advantages of an SPA Versus a Traditional Website

- Load time is slower up front but faster with each interaction.
    - The server sends one large file up front but then just sends tiny chunks of data to the user for each request, rather than an entirely new page.
    - Making one request for a large file takes less time than making many requests to smaller files.
    (Show an animated race between two users.  One user downloads a file slowly at the beginning but then views many pages quickly after that.  At the same time, the other user downloads a file more quickly than the first user's initial page, but then downloads other pages at the same speed, which is slower than the first user's subsequent pages.  Very quickly, the first user should overtake the second one in terms of number of pages viewed.)
    - The HTTP request/response cycle is slow compared to the time it takes to download the response to the client computer.
            - It's like moving. Would you take a bunch of small boxes out to the truck one by one, or would you stack them up and take a bunch all at once?
        - This lightens the amount of traffic to and from the server.
    - Users are usually willing to wait a little up front but get impatient if they have to wait after each interaction.
- The server doesn't have to do as much work and therefore can be less powerful (and less expensive).
    - The client (browser) does the heavy lifting of rendering the site on the user's computer.
    - In traditional, server-side rendering, the server does the heavy lifting.
        - This isn't our best option because it requires one computer to do a lot of work for many users.
        - It's better to have many computers do this work on their own.
            - It's a great example of distributed computing.
            - Personal computers are now fast enough to handle this.

## Demonstrate an SPA

1. Go to [Google Maps](https://www.google.com/maps/).
    - Pan/zoom around.
    - Observe how the tiles update as you interact.
    - This is one of the first websites that popularized SPAs.
1. Go to a public [Trello](https://trello.com/) board.
    - Interact with the cards/lists.
    - Note that creating, moving, editing, and deleting cards does not cause the page to refresh even though the data are saved.
    - Have a student go to the same board and interact with it. Note that changes appear for the instructor in real time.
