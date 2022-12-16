/** @format */

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postContainer = document.getElementById("post-container");

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    //console.log(posts[i]);
    //console.log(posts[i].name);
    postContainer.innerHTML += `
  <section class="user-info">
      <img class="user-avatar, avatar" src="${posts[i].avatar}" alt="profile picture of user">
      <div class="user-data">
        <h2 class="user-name, bold">${posts[i].name}</h2>
        <h3 class="user-born">${posts[i].location}</h3>
      </div>
    </section>
    <img class="img-post" src="${posts[i].post}" alt="selfie of user">
    <div class="icon-group margin-left">
      <img class="icon" id="heart-icon" src="images/icon-heart.png" alt="heart icon">
      <img class="icon" id="comment-icon" src="images/icon-comment.png" alt="comment icon">
      <img class="icon" id="dm-icon" src="images/icon-dm.png" alt="direct message icon">
    </div>
    <h2 class="likes bold margin-left">${posts[i].likes} likes</h2>
    <p><span class="bold margin-left">${posts[i].username}</span> ${posts[i].comment}</p>
  `;
  }
}

renderPosts();
