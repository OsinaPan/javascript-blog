// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log(clickedElement);
  /* [DONE]remove class 'article' from all articles */
  const activeArticles = document.querySelectorAll('.post');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);
  /* [DONE] add class 'article' to the correct article */
  targetArticle.classList.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks(){

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);

    function clearMessages(){
      document.querySelector(optTitleListSelector).innerHTML = '';
    }

    clearMessages();

    console.log(optTitleListSelector);
    /* for each article */
    const articles = document.querySelector(optArticleSelector);

    for(let article of articles){
      article.classList.remove('active');
    }
    console.log(articles);

    let html = '';

    for(let article of articles);
    /* get the article id */
    const articleId = clickedElement.getAttribute('id');

    console.log(articleId);
    /* find the title element */
    const targetArticle = document.querySelector(articleId);

    console.log(targetArticle);

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

  }

  generateTitleLinks();
