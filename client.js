
var webSiteTitle = document.querySelector('#website-title-input');
var webSiteUrl = document.querySelector('#website-url-input'); 
var enterTitleAndUrlData = document.querySelector('#enter-button');
var markAsReadButton = document.querySelector('.read-button');
var removeBookmarkButton = document.querySelector('.delete-button'); 
var bookmarkUl = document.querySelector('ul');


 
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
    `<li class="saved-url-boxes" aria-label="bookmark"> 
      <h1 class="website-title-header">${webSiteTitle.value}
      </h1> 
      <hr>
      <a href= webSiteUrl.value>${webSiteUrl.value}</a>
      <hr>
        <button class="read-button" aria-label="read">
          Read
        </button>
        <button class="delete-button" aria-label="delete">
          Delete 
        </button> 
      </li>`;
  bookmarkUl.appendChild(newBookmarkLi);
};
  
  enterTitleAndUrlData.addEventListener('click', function(event) {
    event.preventDefault();
    addBookmark();
    displayBookmark();
    console.log(bookmarks);
  });

  bookmarkUl.addEventListener('click', function(event) {
    console.log(event.target.parentNode);

    var elementClicked = event.target;
    var bookmark = event.target.parentNode;

    if (elementClicked.className === 'delete-button') {
      bookmark.remove();
    }
    if (elementClicked.className === 'read-button') {
      markAsRead();
    }
  });

  function markAsRead() {
    var elementClicked = event.target;

    var bookmark = event.target.parentNode;
    

    if (bookmark.className === 'read-background') {
      bookmark.classList.remove('read-background');
    } else {
      bookmark.classList.add('read-background');
      elementClicked.classList.add('read-red');
    };

  };


 