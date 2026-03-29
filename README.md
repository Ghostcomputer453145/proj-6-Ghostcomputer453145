# Web Development Project 5 - *DataDash*

Submitted by: **Yumin Jang**

This web app: **DataDash is an interactive web dashboard that fetches data from public APIs—books from Open Library and breweries from Open Brewery DB—and displays it in a searchable, filterable table with dynamic summary statistics. Users can search items, filter by category, and, for books, filter by year range. The dashboard updates dynamically based on user input, providing an intuitive and visually appealing interface.**

Time spent: **43** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [X] **`useEffect` React hook and `async`/`await` are used**
- [X] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *insert details here*
- [X] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [X] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [X] Multiple filters can be applied simultaneously
- [X] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [X] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [X] Dynamic background changes based on selected theme (books vs breweries)
* [X] Two distinct themes (Books and Breweries) for users to choose from
* [X] Clean, responsive UI with table hover effects and styled stats cards
* [X] Added background images that change every time the user picks a different theme

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="datadash.gif" title="Video Walkthrough" alt="Video Walkthrough" />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
Snipping tool
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

During development, one of the main challenges was implementing a double-range slider to allow users to filter books by year effectively. Another difficulty was ensuring that the search bar, category filters, and the displayed table all stayed dynamically synchronized as the user interacted with the dashboard. Additionally, handling the different data structures for books and breweries required careful attention to maintain consistent statistics, filtering, and display logic across both themes.

## License

    Copyright 2026 Yumin Jang
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
