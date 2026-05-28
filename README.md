# Web Development Project 6 - *Multi Data Dashboard*

Submitted by: **Yumin Jang**

This web app: **is an interactive dashboard that allows users to explore data about books and breweries. The app features dynamic charts, filtering options, and data displays, with unique themes for books and breweries. Users can filter the data by category (author or brewery type), search for specific items, and view detailed information on each entry. The dashboard also offers interactive charts, such as line charts and bar charts, to visualize trends and distributions.**

Time spent: **77** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [X] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [X] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [X] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [X] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  
The following **additional** features are implemented:

* [X] Theme Toggle: Users can toggle between two different themes (Books and Breweries) that change the background and data being displayed.
* [X] Search and Filter: The app allows users to filter the data by author (for books) or type (for breweries), and a search function enables the user to find specific items by name.
* [X] Year Range Filter: For books, users can filter the data based on the publication year using a slider to adjust the year range.
* [X] Responsive Design: The app has been designed to work smoothly on both desktop and mobile devices with appropriate layout adjustments for smaller screens.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="datadashboard.gif" title="Video Walkthrough" alt="Video Walkthrough" />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
Snipping tools

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

While building the app, I encountered a few challenges. One was handling the dynamic background change based on the selected theme (Books or Brewery). I needed to ensure that the user interface remained consistent while swapping between themes, and that the background image dynamically adjusted accordingly. Another challenge was implementing the interactive charts. The datasets for books and breweries have different structures, so I had to tailor the visualizations to work seamlessly with each. Additionally, filtering and search functionality required a bit of work to ensure that it was both intuitive and efficient, especially for large datasets. Lastly, ensuring the layout worked well across different screen sizes presented its own set of difficulties, but I was able to implement a responsive design that adjusts based on screen size.

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
