// Handle responsiveness for nav bar toggle
$(function () {
    $(".toggle").on("click", function () {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});

// display form
function toggleInputForm(){
	var inputForm = document.getElementById("inputForm");
	
	if(inputForm.style.display === "block"){
		inputForm.style.display = "none";
	} else {
		inputForm.style.display = "block";
	}
}

/*
 Submit feedback, if no feedback then button pressed the page will focus back to the textarea.
 If feedback then button updates to say "feedback submitted"
*/
function submitFeedback() {
    var feedbackText = document.getElementById("feedbackText").value;
    var feedbackButton = document.getElementById("feedbackButton");

    if(feedbackText === ""){
        document.getElementById("feedbackText").focus();
    } else {
        feedbackButton.innerHTML = "Submitted Feedback!"
    }
}
/* 
	Products Array is used to create book info, then display it (displyed by calling getPostDetails()). 
	This array can be manipulated to add new book posts (call createBookPost()) using the HTML form and user Input.
*/
var productsArray = [
    {
        bookName: "Moby Dick or the Whale",
        bookImage: "https://www.deburcararebooks.com/wp-content/uploads/2019/08/moby-175x260.jpg",
        price: 325,
        author: "Herman Melvin",
        genre: "Fiction",
        info: "Franklin Library, Franklin Center, Pennsylvania, 1974. Hardcover. First Edition; First Printing. Fine. Leather bound, Accented in 22kt gold. Printed on archival paper with gilded edges. The endsheets are of moire fabric with a silk ribbon page marker. Smyth sewing and concealed muslin joints."
    },
    {
        bookName: "The Bible",
        bookImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dwUpPxN6Ujof7nv_Rx_klfRdRKFwPqDAdi7BJMradcBFaY26&s",
        price: 375,
        author: "God",
        genre: "Religious",
        info: "The word of TRUTH."
    },
    {
        bookName: "The Homosapiens",
        bookImage: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Origin_of_Species_title_page.jpg",
        price: 500,
        author: "Charles Darwin",
        genre: "Scientific",
        info: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology. Darwin's book introduced the scientific theory that populations evolve over the course of generations through a process of natural selection"
    },
	{
        bookName: "The Homosapiens",
        bookImage: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Origin_of_Species_title_page.jpg",
        price: 500,
        author: "Charles Darwin",
        genre: "Scientific",
        info: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology. Darwin's book introduced the scientific theory that populations evolve over the course of generations through a process of natural selection"
    },
	{
        bookName: "The Homosapiens",
        bookImage: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Origin_of_Species_title_page.jpg",
        price: 500,
        author: "Charles Darwin",
        genre: "Scientific",
        info: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology. Darwin's book introduced the scientific theory that populations evolve over the course of generations through a process of natural selection"
    },
	{
        bookName: "The Homosapiens",
        bookImage: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Origin_of_Species_title_page.jpg",
        price: 500,
        author: "Charles Darwin",
        genre: "Scientific",
        info: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology. Darwin's book introduced the scientific theory that populations evolve over the course of generations through a process of natural selection"
    },
	{
        bookName: "The Homosapiens",
        bookImage: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Origin_of_Species_title_page.jpg",
        price: 500,
        author: "Charles Darwin",
        genre: "Scientific",
        info: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology. Darwin's book introduced the scientific theory that populations evolve over the course of generations through a process of natural selection"
    },
	{
        bookName: "The Homosapiens",
        bookImage: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Origin_of_Species_title_page.jpg",
        price: 500,
        author: "Charles Darwin",
        genre: "Scientific",
        info: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology. Darwin's book introduced the scientific theory that populations evolve over the course of generations through a process of natural selection"
    },
	{
        bookName: "The Homosapiens",
        bookImage: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Origin_of_Species_title_page.jpg",
        price: 500,
        author: "Charles Darwin",
        genre: "Scientific",
        info: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology. Darwin's book introduced the scientific theory that populations evolve over the course of generations through a process of natural selection"
    },
	{
        bookName: "The Homosapiens",
        bookImage: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Origin_of_Species_title_page.jpg",
        price: 500,
        author: "Charles Darwin",
        genre: "Scientific",
        info: "On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology. Darwin's book introduced the scientific theory that populations evolve over the course of generations through a process of natural selection"
    }
];
var favoriteBooks = [];

function getPostDetails() {
    var leftColCard = document.getElementById("productsInfo");
    for (var i = 0; i < productsArray.length; i++) {
        leftColCard.innerHTML += "<div class='bookCard'> </div>";
        leftColCard.innerHTML += "<h2 class='bookName'>" + productsArray[i].bookName + "</h2>" + "<br>"
        leftColCard.innerHTML += "<img class='bookImage' src='" + productsArray[i].bookImage + "'/> <br>";
        leftColCard.innerHTML += "<h4>" + "Price: </h4>" + "<p> €" + productsArray[i].price + "</p> <br>";
        leftColCard.innerHTML += "<h4>" + "Author: </h4>" + "<p>" + productsArray[i].author + "</p> <br>";
        leftColCard.innerHTML += "<h4>" + "Genre: </h4>" + "<p>" + productsArray[i].genre + "</p> <br>";
        leftColCard.innerHTML += "<h4>" + "Description:  </h4>" + "<p>" + productsArray[i].info + "</p> <br>";
        leftColCard.innerHTML += "<button class='favoriteButton' value='" + i + "' onclick='addToFavorites(this)'>Add to Favorites</button>";
        leftColCard.innerHTML += " <button class='buyButton' value='" + i + "' onclick='buyBook(this)'>Buy Book</button>";
    }
}
window.onload = getPostDetails();

//add to favoriteBooks array
function addToFavorites(object) {
    if (object.innerHTML != "Added"){
        object.innerHTML = "Added";
        favoriteBooks.unshift(
            {
                bookImage: productsArray[object.value].bookImage,
                bookName: productsArray[object.value].bookName
            }
        );
        updateFavoriteBooks();
    } 
}

//update favorites section on right column
function updateFavoriteBooks(){
    var rightColCard = document.getElementById("favoriteBooks");
    rightColCard.innerHTML += "<img class='popularPostImages' src='" + favoriteBooks[0].bookImage + "' />" + "<br>";
    rightColCard.innerHTML += "<p>" + favoriteBooks[0].bookName + "</p> <br>";

}

//Buy Book when button is clicked
function buyBook(object) {
    object.innerHTML = "Bought!!";
    
}

//Create a book post by getting the user input from the html form
function createBookPost() {
    var leftColCard = document.getElementById("productsInfo");
	var postName = document.getElementById("postBookName").value;
	var postImage = document.getElementById("postBookImage").value;
	var postPrice = document.getElementById("postBookPrice").value;
	var postAuthor = document.getElementById("postBookAuthor").value;
	var postGenre = document.getElementById("postBookGenre").value;
	var postText = document.getElementById("postText").value;
	
	//use regex functions to check name, image url, author name, price  and textarea
	if (!checkName(postName)) {
		//if false then focus user back to that input box (used various times)
		document.getElementById("postBookName").focus();
	} else if(!checkImage(postImage)) {
		document.getElementById("postBookImage").focus();
	} else if (!checkAuthorName(postAuthor)){
		document.getElementById("postBookAuthor").focus();	
	} else if (!checkPrice(postPrice)){
		document.getElementById("postBookPrice").focus();		
	} else if (!checkName(postText)){
		document.getElementById("postText").focus();		
	} else {
        productsArray.unshift(
            {
                bookName: postName,
                bookImage: postImage,
                price: postPrice,
                author: postAuthor,
                genre: postGenre,
                info: postText  
            }
        );
    }
    updateProductsList();   
}

//update products list when user adds a new book
function updateProductsList() {
    var leftColCard = document.getElementById("productsInfo");
    leftColCard.innerHTML += "<div class='bookCard'> </div>";
    leftColCard.innerHTML += "<h2 class='bookName'>" + productsArray[0].bookName + "</h2>" + "<br>"
    leftColCard.innerHTML += "<img class='bookImage' src='" + productsArray[0].bookImage + "'/> <br>";
    leftColCard.innerHTML += "<h4>" + "Price: </h4>" + "<p> €" + productsArray[0].price + "</p> <br>";
    leftColCard.innerHTML += "<h4>" + "Author: </h4>" + "<p>" + productsArray[0].author + "</p> <br>";
    leftColCard.innerHTML += "<h4>" + "Genre: </h4>" + "<p>" + productsArray[0].genre + "</p> <br>";
    leftColCard.innerHTML += "<h4>" + "Description:  </h4>" + "<p>" + productsArray[0].info + "</p> <br>";
}
//regex to check book name is valid
function checkName(postName){
    //any Uppercase/Lowercase letters & numbers, between 1-50 characters
    var nameRegex = /^[A-Za-z\d]{1,50}$/;
    //get input from the user
    if(postName !== "" && nameRegex.test(postName)){
        return true;
    } else {
        return false;
    }
}
//regex to check link is to an image
function checkImage(imageURL){
    //any Uppercase/Lowercase letters & numbers, between 6-10 characters
    var imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    //get input from the user
    if(imageURL !== "" && imageRegex.test(imageURL)){
        return true;
    } else {
        return false;
    }
}
//regex to check name format
function checkAuthorName(authorName){
    //any Uppercase/Lowercase letters & numbers, between 6-10 characters
    var authorRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    //get input from the user
    if(authorName !== "" && authorRegex.test(authorName)){
        return true;
    } else {
        return false;
    }
}
//regex to check price format
function checkPrice(price){
    //get input from the user
    if(price !== "" && !isNaN(price)){
        return true;
    } else {
        return false;
    }
}

// Initialize and add the map
function initMap() {
    var bookShop = {lat: 53.33306, lng: -6.24889};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: bookShop});
    var marker = new google.maps.Marker({position: bookShop, map: map});
  }