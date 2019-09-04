# <img src="https://github.com/jjdelacruz1/Phase1Project/blob/master/img/logo-dark.png" alt="alt text" width="400">

[![Build Status](https://travis-ci.org/jjdelacruz1/Phase1Project.svg?branch=master)](https://travis-ci.org/jjdelacruz1/Phase1Project)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

- [General Information & Project Goals](https://github.com/jjdelacruz1/Phase1Project/blob/master/README.md#general-information--project-goals)
- [Available Scripts](https://github.com/jjdelacruz1/Phase1Project/blob/master/README.md#available-scripts)
- [Technologies Used](https://github.com/jjdelacruz1/Phase1Project/blob/master/README.md#technologies-used)
- [Features](https://github.com/jjdelacruz1/Phase1Project/blob/master/README.md#features)
- [Our Process](https://github.com/jjdelacruz1/Phase1Project/blob/master/README.md#our-process)
- [Status](https://github.com/jjdelacruz1/Phase1Project/blob/master/README.md#status)
- [What We Learned & Challenges](https://github.com/jjdelacruz1/Phase1Project/blob/master/README.md#what-we-learned)
- [Team](https://github.com/jjdelacruz1/Phase1Project/blob/master/README.md#our-team)

# General Information & Project Goals

For our phase one project, we decided to build a simple web application as a team of three, called Happy Hour Finder. The premise of the web app is to help users find local happy hours by searching with either their zip code or city. Here is the link to our site: http://happyhourfinder.surge.sh

**Project Goals**
- Integrate two remote APIs using AJAX
- Use another JS library that is not jQuery
- Deploy our project elsewhere besides Github pages
- Learn how to break code into different files or modules

## Available Scripts

In the project directory, you can run:
`npm run deploy`
in your terminal which deploys the application to Surge. 

## Languages Used
- HTML, CSS & JavaScript

## Technologies Used

| Name | Description |
| --- | --- |
| [jQuery](https://jquery.com/) | JS library that simplifies HTML DOM tree traversal and manipulation, event handling, CSS animation, and AJAX |
| [Bootstrap](https://getbootstrap.com/) | CSS framework template for typography, forms, buttons, navigation and other interface components |
| [Mapbox](https://docs.mapbox.com/api/) | Live location |
| [Yelp Fusion](https://www.yelp.com/fusion) | xxx |
| [Travis CI](https://travis-ci.org/) | Sync Github projects to continually test and deploy your projects |
| [Bideo](https://rishabhp.github.io/bideo.js/) | JS library for responsive background video |
| [Random Chuck Norris](https://api.chucknorris.io/) | API for generating random Chuck Norris jokes |

## Features

- Search for happy hours by city or zip
- Browse through top happy hour results
- Swipe through interactive map that marks the location for each result
- Easter egg if you are under 21 :wink:

## Our Process

- Brainstorm of initial app concept
- Research APIs needed to achieve two objectives: acccess a database of bars searchable by location and mapping markers
- Read API documentation

## Status

- WIP

## What We Learned

- Breaking up our code into different files/modules so that they're easier to reuse as well helping to decrease the chance of merge conflicts
- Integrating APIs that require authentication
- Don't be afraid to refactor code!
- Modularize functions
- Trello is your friend

**Challenges We Came Across**

Many of the challenges we encountered pertained to the app's search feature such as:
- Saving the user's search term on one page and rendering the results on another
- Looking into why the search wasn't working on the results page, while it works fine on the homepage
- Assign the submit button to the user's enter key
- Lock in 'happy hour' parameter

Mapbox:
- Returning to cleared state for map markers
- Removing default behaviors like zooming on scroll
- Map markers reactive to mouse hovers

Yelp:
- Ignoring undefined values from JSON data
- Offseting results to apply next/previous page
- Pinpointing which business values we need to render

## Our Team

- [Jerome Dela Cruz](https://github.com/jjdelacruz1)
- [Alvin Ng](https://github.com/ngalvin93)
- [Sue Park](https://github.com/suepark09)
