<h1 align="center">
  <a href="https://facebook.github.io/react-native/">
    React Native
  </a>
</h1>

<p align="center">
  <strong>Learn once, write anywhere:</strong><br>
  Build mobile apps with React.
</p>

<h3 align="center">
  <a href="https://facebook.github.io/react-native/docs/getting-started">Getting Started</a>
  <span> · </span>
  <a href="https://facebook.github.io/react-native/docs/tutorial">Learn the Basics</a>
  <span> · </span>
  <a href="https://facebook.github.io/react-native/showcase.html">Showcase</a>
  <span> · </span>
  <a href="https://facebook.github.io/react-native/docs/contributing">Contribute</a>
  <span> · </span>
  <a href="https://facebook.github.io/react-native/en/help">Community</a>
  <span> · </span>
  <a href="https://github.com/facebook/react-native/blob/master/.github/SUPPORT.md">Support</a>
</h3>

# United Remote Mobile Coding Challenge
## Trending Repos

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. 
The sorted JSON data is directly fetched from the Github API.

* As a User I should be able to list the most starred Github repos that were created in the last 30 days.
* As a User I should see the results as a list. One repository per row.
* As a User I should be able to see for each repo/row the following details :
  * Repository name
  * Repository description
  * Numbers of stars for the repo.
  * Username and avatar of the owner.

* [BONUS] As a User I should be able to keep scrolling and new results should appear (pagination).
* [EXTRA]Implemented the dark mode on a side note ... ^^

## Installing

*App tested on Adroid only (I don't own a Mac)* 

After downloading/cloning the project, navigate to the root folder run *npm install* to instale all necessary node_modules for the app

## Running

To run your app:

 * If you have the [`@react-native-community/cli`](https://github.com/react-native-community/cli)  you could run *reat-native run-android* (run-ios if you wanna test on ios).
 * If not : you can run it using *npx react-native run-android*.
 
For both cases, you need a device in order to proced either an actual device, or a virtual device. 
You can learn more about it : [`Run App on device`](https://facebook.github.io/react-native/docs/running-on-device)  

### Demo

The app grabs data from the github Api, each page returns a max of 100 repositories. 
for our case, we chode to recieve 20 items per page (max items = 1000)

The app implements Infinite Scrolling, it means more data is loaded the more the user scrolls down instead of the old fashioned pagination buttons.

The app is responsive with all sorts of display resolutions. 

THe app uses a WebView to showacase the repo in app once you tap on the wanted card.

![demo](https://user-images.githubusercontent.com/46220740/71452719-9f9a9e00-2787-11ea-9f13-4229c5d39a19.gif)

## Author

**Youssef NACIRI** - [LinkedIn](https://www.linkedin.com/in/naciriyosf/) 
