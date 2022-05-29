const showDetails = document.querySelector('.show-details');
const detailsBlock = document.querySelector('.details-block');

const res =fetch("https://randomuser.me/api/");




showDetails.onclick=function(){ 
    res
    .then(function(analysisRes){
        return analysisRes.json();
    })
    .then(function(response){
    
    
const title= response.results[0].name.title;
const firstName= response.results[0].name.first;
const lastName= response.results[0].name.last;
const userName = document.createElement('p');
userName.textContent="Full Name: "+title+" "+firstName+" "+lastName
detailsBlock.append(userName);
userName.classList.add("info-box")

const email= response.results[0].email;
const userEmail = document.createElement('p');
userEmail.textContent="Email: "+email;
detailsBlock.append(userEmail);
userEmail.classList.add("info-box")

const pic= response.results[0].picture.large;
const userPic= document.createElement('img');
userPic.src=pic;
detailsBlock.append(userPic);
userPic.classList.add("info-box")
   
    
})
.catch(function(response){
    console.log("ERROR");
    window.location.reload(true);
})

}