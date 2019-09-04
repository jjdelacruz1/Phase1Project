# <img src="https://github.com/jjdelacruz1/Phase1Project/blob/master/img/logo-dark.png" alt="alt text" width="400">

[![Build Status](https://travis-ci.org/jjdelacruz1/Phase1Project.svg?branch=master)](https://travis-ci.org/jjdelacruz1/Phase1Project)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Background

Simple web application called Happy Hour Finder. The premise of the web app is to help users find local happy hours by searching with either their zip code or city. Here is the link to our site: http://happyhourfinder.surge.sh

**Goals**
- Integrate two remote APIs using AJAX
- Use another JS library that is not jQuery
- Deploy our project elsewhere besides Github pages
- Learn how to break code into different files or modules

**Features**
- Search for happy hours by city or zip
- Browse through top happy hour results
- Swipe through interactive map that marks the location for each result
- Easter egg if you are under 21 :wink:

**Languages Used**
- HTML
- CSS
- JavaScript

**Technologies Used**

| Name | Description |
| --- | --- |
| [jQuery](https://jquery.com/) | Simplifies DOM tree traversal and manipulation, event handling, CSS animation, and AJAX |
| [Bootstrap](https://getbootstrap.com/) | Framework for typography, forms, buttons, navigation and other interface components |
| [Mapbox](https://docs.mapbox.com/api/) | Extensible mapping platform for customizable maps, location search and live location data |
| [Yelp Fusion](https://www.yelp.com/fusion) | Utilize Yelp's database of business data, content and information |
| [Travis CI](https://travis-ci.org/) | Sync Github projects to continually test and deploy projects |
| [Bideo](https://rishabhp.github.io/bideo.js/) | Responsive background video |
| [Random Chuck Norris](https://api.chucknorris.io/) | Generate random Chuck Norris jokes |

**Available Scripts**

In the project directory, you can run:
`npm run deploy`
in your terminal which deploys the application to Surge. 

## Development Process

1. Brainstorm app concept
2. Research APIs needed to achieve project objectives: acccess a database of bars searchable by location and mapping custom location markers
3. Read API documentation for Mapbox, Yelp, and Chuck Norris
4. Read library documentation for Bideo, Bootstrap and jQuery
5. Breakdown of objectives into smaller, simpler tasks
6. Division of code resposiblities to team members
7. Daily scrum meetings to discuss progress and next steps
8. Debug and testing on desktop and mobile

## What We Learned

- Breaking up our code into different files/modules so that they're easier to reuse as well helping to decrease the chance of merge conflicts
- Integrating APIs that require authentication
- Don't be afraid to refactor code!
- Modularize functions
- Trello is your friend
- Merge conflicts are not that scary

**Challenges We Came Across**

Most of the challenges we encountered pertained to the app's search feature such as:
- Saving the user's search term on one page and rendering the results on another
- Looking into why the search wasn't working on the results page, while it works fine on the homepage
- Assign the submit button to the user's enter key
- Lock in 'happy hour' parameter

Customizing the Mapbox API required clever thinking:
- Returning to cleared state for map markers
- Removing default behaviors like zooming on scroll
- Map markers reactive to mouse hovers

and the Yelp Fusion API had its fair share of problems:
- Ignoring undefined values from JSON data
- Offseting results to apply next/previous page
- Pinpointing which business values we need to render

## Our Team

- [Jerome Dela Cruz](https://github.com/jjdelacruz1)
- [Alvin Ng](https://github.com/ngalvin93)
- [Sue Park](https://github.com/suepark09)
