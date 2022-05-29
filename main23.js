const showDetails = document.querySelector(".show-details");
const detailsBlock = document.querySelector(".details-block");

showDetails.onclick = function () {
  const res = fetch("https://randomuser.me/api/");
  res
    .then(function (analysisRes) {
      return analysisRes.json();
    })
    .then(function (response) {
      const results = response.results[0];
      const title = results.name.title;
      const firstName = results.name.first;
      const lastName = results.name.last;
      const email = results.email;
      const pic = results.picture.large;
      displayUser(title, firstName, lastName, email, pic);
    })
    .catch(function (response) {
      console.log("ERROR");
    });
};

function displayUser(title, firstName, lastName, email, pic) {
  detailsBlock.innerHTML = "";

  const userName = document.createElement("p");
  userName.textContent = `Full Name: ${title} ${firstName} ${lastName}`;
  detailsBlock.append(userName);
  userName.classList.add("info-box");

  const userEmail = document.createElement("p");
  userEmail.textContent = "Email: " + email;
  detailsBlock.append(userEmail);
  userEmail.classList.add("info-box");

  const userPic = document.createElement("img");
  userPic.src = pic;
  detailsBlock.append(userPic);
  userPic.classList.add("info-box");
}
