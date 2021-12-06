function getParameter(parameterName) {
  var parameters = new URLSearchParams(window.location.search);
  return parameters.get(parameterName);
}

var user1 = {
  userName: "@elonmusk",
  displayName: "Elon Musk",
  joinedDate: "June 2009",
  followingCount: 103,
  followerCount: 47900000,
  avatarURL: "assets/elonmusk.jpg",
  coverPhotoURL: "assets/elonmusk-cover.jpeg",
  tweets: [
    {
      text: "I admit to judging books by their cover",
      timestamp: "2/10/2021 00:01:20",
    },
    {
      text: "Starship to the moon",
      timestamp: "2/09/2021 18:37:12",
    },
    {
      text: "Out on launch pad, engine swap underway",
      timestamp: "2/09/2021 12:11:51",
    },
  ],
};

var user2 = {
  userName: "@BillGates",
  displayName: "Bill Gates",
  joinedDate: "June 2009",
  followingCount: 274,
  followerCount: 53800000,
  avatarURL: "assets/billgates.jpg",
  coverPhotoURL: "assets/billgates-cover.jpeg",
  tweets: [
    {
      text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
      timestamp: "2/10/2021 00:01:20",
    },
    {
      text: "Should I start tweeting memes? Let me know in a comment.",
      timestamp: "2/09/2021 18:37:12",
    },
    {
      text: "In 2020, I read a book every hour.",
      timestamp: "2/09/2021 12:11:52",
    },
  ],
};

// HEADER TITLE
var header = document.getElementsByClassName("header-text")[0];

var user = document.createElement("h3");
user.classList.add("main-user");
user.innerHTML = `
<div class="flex-title">
<i class="fas fa-arrow-left"></i>
<header class="title">${user1.displayName} <i class="fas fa-check-circle"></i>
<p class="tweetCount"> ${user1.tweets.length} Tweets </p>
</header>
<div>

<div class="main-bill-gates">
<img class = "Bill-Gates-suggestion" src="${user2.avatarURL}" alt=""> <span class="view-account">view account</span>
<div>
`;
header.appendChild(user);
//-------------
var billGatesDiv = document.querySelector(".Bill-Gates-suggestion");
// ELON MUSK PROFILE
var mainContent = document.querySelector(".content-column");
var otherContent = document.querySelector(".second-content-column");
var clickOn = document.querySelector(".view-account");
//
var tweetMainSelector = document.querySelector(".tweet-selector");

// CLickable PROFILE
clickOn.addEventListener("click", function () {
  if (mainContent === document.querySelector(".content-column")) {
    mainContent.classList.add("hidden");
    otherContent.classList.remove("hidden");
  }
});

secHeader = document.querySelector(".second-header-container");

// Background and profile
var photoContainer = document.getElementsByClassName(
  "cover-photo-container"
)[0];
var photo = document.createElement("div");
photo.innerHTML = `
<img class="background" src="./assets/elonmusk-cover.jpeg" alt="">
<div class="photo-flex">
<img class = "elon-musk" src="/assets/elonmusk.jpg" alt="">
<button class="following">Following</button>
</div>
`;
photoContainer.appendChild(photo);

// profile details
var profileDetails = document.getElementsByClassName("profile-details")[0];

var details = document.createElement("div");
details.classList.add("main-profile");
details.innerHTML = `<header class="profile-name">${user1.displayName} <i class="fas fa-check-circle"></i></header>
<p class="username" > ${user1.userName}</p>
<p class="join-date"> <i class="far fa-calendar-alt"></i> Joined ${user1.joinedDate} </p>
<div class="following-flex">
<p class="following-count"> ${user1.followingCount} <span class="non-bold">Following</span> </p>
<p class="follower-count"> ${user1.followerCount} <span class="non-bold">Followers</span> </p>
</div>
`;
profileDetails.appendChild(details);

// TAB Tweet Selector

var tabContainer = document.getElementsByClassName("tweets-container")[0];
var tab = document.createElement("div");
tab.classList.add("tweet-selector");
tab.innerHTML = `
<div class="selector active-tweet"> Tweets </div>
<p class="big-selector selector"> Tweets & replies </p>
<div class="selector"> Media </div>
<div class="selector"> Likes </div>
`;
tabContainer.appendChild(tab);

var selector = document.querySelectorAll(".selector");
// loop through each selector
for (let select of selector) {
  //  when clicked
  select.addEventListener("click", function () {
    // will loop through ALL each select tweet and remove ('active-tweet)
    for (let select of selector) {
      select.classList.remove("active-tweet");
    }
    // when clicked will add the  "active-tweet" to which ever one is clicked on
    select.classList.add("active-tweet");
  });
}

// TWEET SECTION
let tweetContainer = document.body.querySelector(".tweets-container");
for (let i = 0; i < user1.tweets.length; i++) {
  let tweetContainer =
    document.body.getElementsByClassName("tweets-container")[0];

  let tweet = document.createElement("div");
  tweet.classList.add("tweets");
  tweet.innerHTML = `
<div class="tweet-div">

<div class="tweet-div-flex">
<div class="tweet-div-profile-container">
<img class = "tweet-div-profile" src="/assets/elonmusk.jpg" alt="">
</div>
<div class="details">

<div class="flex-details">
<p class="tweet-displayName"> ${user1.displayName}</p> <i class="fas fa-check-circle detail-check"></i> 
<p class="tweet-user"> ${user1.userName} </p> 
<p class="tweet-timestamp">${user1.tweets[i].timestamp}</p>
</div>
<p class="tweet-text"> ${user1.tweets[i].text}</p>

<div class="click-ons">
<i class="far fa-comment"> <span class="numbers"> 5.2k</span></i> 
<i class="fas fa-retweet"><span class="numbers non-bold-number"> 7.7k</span></i> </i>
<i class="far fa-heart"><span class="numbers"> 65.2k</span></i> </i>
<i class="fas fa-upload"></i>
</div>



</div> 
<i class="fas fa-ellipsis-h"></i>
 
</div>
</div>
`;
  tweetContainer.appendChild(tweet);
}

// following button
var followButton = document.getElementsByClassName("following")[0];
followButton.addEventListener("click", function () {
  if (followButton.textContent === "Following") {
    followButton.classList.remove("following");
    followButton.classList.add("follow");
    followButton.textContent = "Follow";
  } else {
    followButton.textContent = "Following";
    followButton.classList.remove("follow");
    followButton.classList.add("following");
  }
});

// BILL GATES PROFILE

var secondHeader = document.getElementsByClassName("second-header-text")[0];

var secondUser = document.createElement("h3");
secondUser.innerHTML = `
<div class="flex-title">
<i class="fas fa-arrow-left"></i>
<header class="second-title">${user2.displayName} <i class="fas fa-check-circle"></i>
<p class="tweetCount"> ${user2.tweets.length} Tweets </p>
</header>
<div>


<img class = "Bill-Gates-suggestion" src="${user2.avatarURL}" alt=""> <span class="view-account">view account</span
`;
secondHeader.appendChild(secondUser);
// CLICK ON
var title = document.querySelector(".second-title");

var mainContent = document.querySelector(".content-column");
var otherContent = document.querySelector(".second-content-column");
var clickOn = document.querySelector(".view-account");

title.addEventListener("click", function () {
  otherContent.classList.add("hidden");
  mainContent.classList.remove("hidden");
});

// Background and profile
var secondPhotoContainer = document.getElementsByClassName(
  "second-cover-photo-container"
)[0];
var secondPhoto = document.createElement("div");
secondPhoto.innerHTML = `
<img class="background" src="./assets/billgates-cover.jpeg" alt="">
<div class="photo-flex">
<img class = "elon-musk" src="/assets/billgates.jpg" alt="">
<button class="following">Following</button>
</div>
`;
secondPhotoContainer.appendChild(secondPhoto);

// profile details
var secondProfileDetails = document.getElementsByClassName(
  "second-profile-details"
)[0];

var secondDetails = document.createElement("div");
secondDetails.classList.add("main-profile");
secondDetails.innerHTML = `<header class="profile-name">${user2.displayName} <i class="fas fa-check-circle"></i></header>
<p class="username" > ${user2.userName}</p>
<p class="join-date"> <i class="far fa-calendar-alt"></i> Joined ${user2.joinedDate} </p>
<div class="following-flex">
<p class="following-count"> ${user2.followingCount} <span class="non-bold">Following</span> </p>
<p class="follower-count"> ${user2.followerCount} <span class="non-bold">Followers</span> </p>
</div>
`;
secondProfileDetails.appendChild(secondDetails);

// TAB Tweet Selector
var secondTabContainer = document.querySelector(".second-tweets-container");
var secondTab = document.createElement("div");
secondTab.classList.add("tweet-selector");
secondTab.innerHTML = `
<div class="selector active-tweet"> Tweets </div>
<p class="big-selector selector"> Tweets & replies </p>
<div class="selector"> Media </div>
<div class="selector"> Likes </div>
`;
secondTabContainer.appendChild(secondTab);

var selector = document.querySelectorAll(".selector");
// loop through each selector
for (let select of selector) {
  //  when clicked
  select.addEventListener("click", function () {
    // will loop through ALL each select tweet and remove ('active-tweet)
    for (let select of selector) {
      select.classList.remove("active-tweet");
    }
    // when clicked will add the  "active-tweet" to which ever one is clicked on
    select.classList.add("active-tweet");
  });
}

// TWEET SECTION
let secondTweetContainer = document.body.querySelector(
  ".second-tweets-container"
);
for (let i = 0; i < user2.tweets.length; i++) {
  let secondTweetContainer = document.body.querySelector(
    ".second-tweets-container"
  );

  let secondTweet = document.createElement("div");
  secondTweet.classList.add("tweets");
  secondTweet.innerHTML = `
<div class="tweet-div">

<div class="tweet-div-flex">

<div class="tweet-div-profile-container">
<img class = "tweet-div-profile" src="/assets/billgates.jpg" alt="">
</div>

<div class="details">

<div class="flex-details">
<p class="tweet-displayName"> ${user2.displayName}</p> <i class="fas fa-check-circle detail-check"></i>
<p class="tweet-user"> ${user2.userName} </p>
<p class="tweet-timestamp">${user2.tweets[i].timestamp}</p>
</div>
<p class="tweet-text"> ${user2.tweets[i].text} </p>

<div class="click-ons">
<i class="far fa-comment"> <span class="numbers"> 5.2k</span></i>
<i class="fas fa-retweet"><span class="numbers non-bold-number"> 7.7k</span></i> </i>
<i class="far fa-heart"><span class="numbers"> 65.2k</span></i> </i>
<i class="fas fa-upload"></i>
</div>

</div>
<i class="fas fa-ellipsis-h"></i> 
</div>
</div>
`;
  secondTweetContainer.appendChild(secondTweet);
}

// following button
var followButton = document.getElementsByClassName("following")[0];
followButton.addEventListener("click", function () {
  if (followButton.textContent === "Following") {
    followButton.classList.remove("following");
    followButton.classList.add("follow");
    followButton.textContent = "Follow";
  } else {
    followButton.textContent = "Following";
    followButton.classList.remove("follow");
    followButton.classList.add("following");
  }
});
