
//Grab elements from index.html with queryselectors
var webSiteTitle = document.querySelector('#website-title-input');
var webSiteUrl = document.querySelector('#website-url-input'); 
var enterTitleAndUrlData = document.querySelector('#enter-button');
var markAsReadButton = document.querySelector('.read-button');
var removeBookmarkButton = document.querySelector('.delete-button'); 
var bookmarkUl = document.querySelector('ul');


//put list of bookmarks on array 
var bookmarks = [];

function addBookmark() {
    bookmarks.push({
      webSiteTitle: webSiteTitle.value,
      webSiteUrl: webSiteUrl.value,
    });
};
function displayBookmark() {
  var newBookmarkLi = document.createElement('li');
  newBookmarkLi.innerHTML = 
    `<li class="saved-url-boxes"> 
      <h1 class="website-title-header">${webSiteTitle.value}
      </h1> 
      <hr>
      <a href= webSiteUrl.value>${webSiteUrl.value}</a>
      <hr>
        <button class="read-button">
          Read
        </button>
        <button class="delete-button">
          Delete 
        </button> 
      </li>`;
  bookmarkUl.appendChild(newBookmarkLi);
  // markAsReadButton.addEventListener('click', function() {
  //       console.log('hey');
  //     });
};
  
  enterTitleAndUrlData.addEventListener('click', function(event) {
    event.preventDefault();
    addBookmark();
    displayBookmark();
    console.log(bookmarks);
  });

  bookmarkUl.addEventListener('click', deleteBookmark);
    



  function deleteBookmark () {
    console.log(this);
    //id li to be removed 
    // var bookmark = event.target.parentNode;
    // bookmark.remove();
    // //trigger event listener on delete button
    // removeBookmarkButton.addEventListener('click', function() {
    //   bookmark.remove();
    // });
    //use .remove method to delete selected li from HTML
  };

  // document.querySelector('.container-right').addEventListener('click', function(event) {
  //   console.log('hey');
  //   event.currentTarget.closest('button').style.color = '#F05A28';
  // });

//     for (var i = 0; bookmarks.length; i++) {
//       var bookmarkUl = document.createElement('li');
//       var bookmark = bookmarks[i];

//     bookmarkUl.appendChild.innertext = bookmark(webSiteTitle, webSiteUrl)
//     };
 

  
//   //create method to remove li bookmark from page
//   var deleteBookmark = function(webSiteTitle, webSiteUrl) {
//     bookmarks.splice({
//       webSiteTitle: webSiteTitle,
//       webSiteUrl: webSiteUrl
//     });
//   },
//   //pass bookmarks array into
//   // createListItems: function(bookmarks) {
//   //   //iterate through array
//   //   //push 
//   // }

// //create function to toggle (to use on read button)
// //will use event listener on markAsReadButton to activate/call
// toggleReadButtonOnOff function() {

// }

// //create method to mark bookmark as read
// markAsReadButton.addEventListener('click', function(event) {
//   event.preventDefault()'';
//   //change CSS background to #F2F4F4
//   // change markAsReadButton color to #F05A28
//   // change CSS to underline and color to #CFD8DC
//   // add toggle()
// })