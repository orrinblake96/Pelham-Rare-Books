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
        document.getElementById("feedbackText").style.display = "none";
        feedbackButton.innerHTML = "Submitted Feedback!";
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
        bookName: "Nineteen Eighty-Four",
        bookImage: "https://www.deburcararebooks.com/wp-content/uploads/2019/08/1984-768x1024.jpg",
        price: 425,
        author: "George Orwell",
        genre: "Fiction",
        info: "Easton Press, Norwalk, Connecticut, 1992. Hardcover. First Edition; First Printing. Fine, Leather Bound. Book accented in 22kt gold. Printed on archival paper with gilded edges. The endsheets are of moire fabric with a silk ribbon page marker. Smyth sewing and concealed muslin joints to ensure the highest quality binding. The novel is set in an imagined future, the year 1984, when much of the world has fallen victim to perpetual war, omnipresent government surveillance, historical negationism and propaganda. Eric Arthur Blair (25 June 1903 – 21 January 1950), better known by his pen name George Orwell, was an English novelist and essayist, journalist and critic, whose work is characterised by lucid prose, awareness of social injustice, opposition to totalitarianism, and outspoken support of democratic socialism."
    },
	{
        bookName: "Dracula: STOKER, Bram, True First Edition",
        bookImage: "https://www.deburcararebooks.com/wp-content/uploads/2019/01/Stoker110-687x1024.jpg",
        price: 6500,
        author: "Bram Stroker",
        genre: "Fiction",
        info: "Dracula is an 1897 Gothic horror novel by Irish author Bram Stoker. It introduced the character of Count Dracula, and established many conventions of subsequent vampire fantasy"
    },
	{
        bookName: "Hamlet",
        bookImage: "https://cdn.usborne.com/catalogue/covers/eng/max_covers/9780746096116.JPG?width=760&quality=60",
        price: 500,
        author: "William Shakespeare",
        genre: "Tragedy",
        info: "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1602."
    },
	{
        bookName: "Whammond’s Illustrated Guide to Dublin and Wicklow",
        bookImage: "https://www.deburcararebooks.com/wp-content/uploads/2018/12/Whammond018-681x1024.jpg",
        price: 185,
        author: "G.K. Whammond’s",
        genre: "Travel",
        info: "WHAMMOND, G.K. Whammond’s Illustrated Guide to Dublin and Wicklow. With an historical sketch of the city. Original Comments, Anecdotes, &c. A Book of Reference for Residents and Visitors. Illustrated with views of the Exhibition Palace, Kingstown Harbour, Sackville Street, Bank of Ireland (Old Irish Parliament Houses), Trinity College, Custom House, St. Patrick’s Cathedral and a map of the city. Dublin: Robert S. Magee, 1869. 12mo. pp. [10], 187, 69 (adverts). Pictorial wrappers. Spine professionally rebacked. A very good copy."
    },
	{
        bookName: "Middle English translation of John Bradmore's (d. 1412), surgical-medical treatise, Philomena.",
        bookImage: "https://www.maggs.com/media/3971502/223251_04.jpg",
        price: 250000,
        author: "John Bradmore",
        genre: "Scientific",
        info: "A second, previously unidentified, manuscript of the 1446 Middle English version of the Philomena of John Bradmore, a surgical-medical treatise by one of the most English famous surgeons of the early 15th Century. The only other example is in the British Library MS Harley 1736 and it is largely unpublished. It includes the famous account of how Bradmore saved the life of the young Prince of Wales (Prince Hal, the future King Henry V), after the Battle of Shrewsbury in 1403. It was owned and perhaps written by an early Tudor Barber-Surgeon Charles Whyte (d. 1545) and is presumably one of the two manuscript volumes described in his Will, the other being in the British Library (MS Sloane 776). The manuscript also includes an apparently unique late Middle English “Tretys of mynd” that may be the earliest English work on the subject of the mind and memory."
    },
	{
        bookName: "Ulysses",
        bookImage: "https://d3525k1ryd2155.cloudfront.net/h/184/525/601525184.0.x.1.jpg",
        price: 5000,
        author: "James Joyce",
        genre: "Fiction",
        info: "Ulysses is a modernist novel by Irish writer James Joyce. It was first serialised in parts in the American journal The Little Review from March 1918 to December 1920 and then published in its entirety in Paris by Sylvia Beach on 2 February 1922, Joyce's 40th birthday."
    },
	{
        bookName: "Don Quixote",
        bookImage: "https://images.penguinrandomhouse.com/cover/9780679602866",
        price: 15000,
        author: "Miguel de Cervantes",
        genre: "Satire",
        info: "The Ingenious Gentleman Don Quixote of La Mancha, or just Don Quixote, is a Spanish novel by Miguel de Cervantes. Published in two parts, in 1605 and 1615, Don Quixote is the most influential work of literature from the Spanish Golden Age and the entire Spanish literary canon."
    },
    {
        bookName: "The Great Gatsby",
        bookImage: "https://almabooks.com/wp-content/uploads/2016/10/9781847496140.jpg",
        price: 200,
        author: "F. Scott Fitzgerald",
        genre: "Tragedy",
        info: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922."
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

// called when genre selection is changed
function genreSelection(){
    var genreList = document.getElementById("postBookGenre");
    var genreName = genreList.options[genreList.selectedIndex].value;
    alert(genreName);
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