let NavBar = document.getElementById("NavBar");
let LogoTap = document.getElementById("LogoTap");
let searchByWord = document.getElementById("searchByWord");
let search = document.getElementById("search");
let movieSection = document.getElementById("movieSection");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPhone = document.getElementById("userPhone");
let userAge = document.getElementById("userAge");
let userPass = document.getElementById("userPass");
// let cuurntPlaye=""
let RePass = document.getElementById("RePass");
let cartona = "";
let submitButton = document.getElementById("submit");
// let listIcon= document.getElementById("");
submitButton.addEventListener("click", function () {
    getDatta(clearDatta);

});
$("#listIcon").click(function (e) {
    let offsetEle = $(e.target).offset().left;
    console.log(offsetEle);
    let NavBarWidth = $("#NavBar").innerWidth();
    console.log(NavBarWidth);
    if (offsetEle > NavBarWidth) {
        $("#NavBar").hide(1000);
    } else {
        $("#NavBar").show(1000);
    }

}
);


// console.log(submit);

function getDatta(x) {
    let userData = {
        name: userName.value,
        Email: userEmail.value,
        phone: userPhone.value,
        age: userAge.value,
        password: userPass.value,
        RePassword: RePass.value,
    }
    console.log(userData);
    checkName();
    checkEmail();

    x();
};

function clearDatta() {
    userName.value = "";
    userEmail.value = "";
    userPhone.value = "";
    userAge.value = "";
    userPass.value = "";
    RePass.value = "";
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

async function getMsovie(curruntPlay) {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/movie/${curruntPlay}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2cQUJ6EVe-NJhou9Y_jA85Sq9iE5QDumtPsdJufNL5hAesbq3uMu8Fij8&language=en-US`)
    let apiResult = await apiResponse.json();
    let movieList = apiResult.results;
    console.log(movieList);
    for (let i = 0; i < movieList.length; i++) {
        cartona += `
        <div class="col-sm-10 col-md-6 col-lg-4" id="movieSection">
        <div class="iteam position-relative">
            <img src="https://image.tmdb.org/t/p/w500${movieList[i].backdrop_path}" class="img-fluid">
            <div class="layer">
                <div class="layer-inner text-center mx-auto py-4">
                 <h4>${movieList[i].title}</h4>
                 <p>${movieList[i].overview}</p>
                 <h5> rate: ${movieList[i].vote_average}}</h5>
                 <p>${movieList[i].release_date}</p>
                </div>
            </div>
        </div>
    </div>
        `

    }
    document.getElementById("myData").innerHTML = cartona;
}

getMsovie("upcoming");

searchByWord.addEventListener("keyup",function(){
    getMsovie("search")
})
$("#one").click(function(){
    getMsovie("now_playing");
});
$("#two").click(function(){
    getMsovie("popular" )
});


function checkName(){
   let chechedName= userName.value;
   let regex=/^[A-Z][a-z]{5,12}$/
   if (regex.test(chechedName)) {
    console.log(trueName);   
   }else{
    alert("invalid Name")
   }
}
function checkEmail(){
    let chechedEmail= userEmail.value;
    let regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test(chechedEmail)) {
     console.log(trueName);   
    }else{
     alert("invalid email")
    }
 }

// searchByWord.addEventListener("keyup", function () {
//     curruntPlay = search;
//     getMsovie();
// });



    // function checkEmail(x) {
    //     var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if (!filter.test(x.value)) {
    //         alert('Please provide a valid email address');
    //         email.focus;
    //         return false;
    //     }
    // }

    // userEmail.addEventListener("keydown",function(){
    //     checkEmail(userEmail)
    // })

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false