# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

My final project will be a 1 page portfolio with my name and nav bar on the top of the page. Flex Nav bar will include home, about, project and contact. Under the nav bar I want to have my About me section using Grid with a to be determine picture background. Under the about me section I will have some of my projects linked there. In the contact info section beneath the project portion, I will have a contact section which I will have my social media links as well as email and phone number. For the contact info section, I plan to use some animationa and a carousel so users and scroll through on a mobile platform. I also want to add a box for users to send me a message and submit it straight from the portfolio page. 

## Google Sheet

Include link to your google sheet here.  Here is the sample [Joe had used in class](https://docs.google.com/spreadsheets/d/15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk/edit#gid=0) 

Here's a [link][1] to my spreadsheet. 

[1]:https://docs.google.com/spreadsheets/d/1WV4cRpi6ixjOczGGXspA5PdM88eqwnyyz-tUAbJmOcY/edit#gid=0

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://res.cloudinary.com/lienguyen317/image/upload/v1599990482/15999904725235310510421002725840_fkcc1r.jpg)
- [Desktop](https://res.cloudinary.com/lienguyen317/image/upload/v1599990106/15999900890143036030891853422014_bia3el.jpg)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Link](https://res.cloudinary.com/lienguyen317/image/upload/v1599992626/15999926134042108751568147939277_tgalgj.jpg)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- html 
- Message box and form
- Default Css
- Mobile Css
- Desktop Css
- Hamburger Icon

#### PostMVP 

- Projects carousel
- ajax link to spreadsheet 
- animation/picture/background for about me section
- social media icon 

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 2hr | 2hr |
| HTML | H | 3hr | 4hr | 
| Adding Form | H | 3hr|  3hr | 
| Default CSS| M | 3hr | 3hr|
| Mobile CSS | H | 3hrs|  4hr | 
| Desktop CSS | H | 3hr | 2hr | 2hr|
| Total | H | 17hrs| 18hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| About carousel | L | 3hr | 2.5-hr |
| ajax link to spreadsheet | L | 2hr | 6hr |
| animation/picture/background for about me section | M | 4hr | 3hr |
| social media icon  | H | 4hr | 4hr | 
| Total | H | 13hrs| 15.5hrs |

## Additional Libraries

jquery
* ajax link to spreadsheet/render html with data retrieved from spreadsheet
* form and submission for message box
  
Bootstrap

* nav bar 
* about me carousel
* project cards

## Code Snippet

This is a part of projectCards.js that I had the most issue with. I had help from Alex and got it resolved. Am proud of it? Not really. But, I do want to put it here so that I can remember how it's written.

After using ajax to get projectArr, I passed it throught the render method to get the project cards to show on my page. I was stuck here for quite a while and was going in the right direction but wasn't so sure of how to write the syntax for assigning values from ajax to an jquery element. 

```
const render = (projectsArr) => {
    const $project = $('#projects')
    projectsArr.forEach((project, index)=>{
		<!-- assign <div class='card'> to $div variable -->
        const $div = $('<div class="card" style="width: 20rem;">')
		<!-- use the variable above to assign values to each elements(<img>, <h5>, <p>, <a>) -->
        $div.html(`<img src="${project.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.url}" class="btn btn-primary">Live Project</a>
        </div>`)
		<!-- append the project card to the variable $project that <div id='projects'> was assigned to -->
        $project.append($div)
    })
}
```

## Issues and Resolutions
 I didn't have many issues beside syntax error which was easily spotted. 

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
