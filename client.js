//Grab elements from index.html with queryselectors
var webSiteTitle = document.queryselector('#website-title-input');
console.log(webSiteTitle)
var webSiteUrl = document.queryselector('#website-url-input'); 
var enterTitleAndUrlData = document.queryselector('#enter-button');
console.log(enterTitleAndUrlData);
var markAsReadButton = document.queryselector('.read-button');
var removeBookmarkButton = document.queryselector('.delete-button'); 


//create object for and put list of bookmarks on array 

  var bookmarks = [];

//create method to add new website Title and URL data
// remember to use .value 
// createElement method to do new li
  var addBookmark = function(webSiteTitle, webSiteUrl) {
    bookmarks.push({
      webSiteTitle: webSiteTitle.value,
      webSiteUrl: webSiteUrl.value,
    });
    for (var i = 0; bookmarks.length; i++) {
      var bookmarkUl = document.appendChild('ul');
      var bookmark = bookmarks[i];

    bookmarkUl.appendChild.innertext = bookmark(webSiteTitle, webSiteUrl)
    };
  },

  //create function to run addBookMark when enterTitleAndUrlData enter button is clicked
  enterTitleAndUrlData.addEventListener('click', function() {
    addBookMark();
  });
  //create method to remove li bookmark from page
  var deleteBookmark = function(webSiteTitle, webSiteUrl) {
    bookmarks.splice({
      webSiteTitle: webSiteTitle,
      webSiteUrl: webSiteUrl
    });
  },
  //pass bookmarks array into
  // createListItems: function(bookmarks) {
  //   //iterate through array
  //   //push 
  // }

//create function to toggle (to use on read button)
//will use event listener on markAsReadButton to activate/call
toggleReadButtonOnOff function() {

}

//create method to mark bookmark as read
markAsReadButton.addEventListener('click', function(event) {
  event.preventDefault()'';
  //change CSS background to #F2F4F4
  // change markAsReadButton color to #F05A28
  // change CSS to underline and color to #CFD8DC
  // add toggle()
})