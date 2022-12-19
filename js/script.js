const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optCloudClassCount = 3,
  optCloudClassPrefix = 'tag-size-',
  optTagsListSelector = '.tags.list',
  optAuthorsListSelector = '.authors.list';

const titleClickHandler = function (event) {

  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log(clickedElement);
  /* [DONE]remove class 'article' from all articles */
  const activeArticles = document.querySelectorAll('.post');

  for (let activeArticle of activeArticles) {
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
};

function generateTitleLinks() {

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* [DONE] for each article */
  let html = '';
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');
    /* [DONE] get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* [DONE] create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    /* [DONE] insert link into titleList */
    html = html + linkHTML;
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

const calculateTagsParams = function (tags) {
  const params = {
    max: 0,
    min: 999999,
  };

  for (let tag in tags) {
    params.max = Math.max(tags[tag], params.max);
    params.min = Math.min(tags[tag], params.min);

    console.log(tag + ' is used ' + tags[tag] + ' times');
  }

  return params;
};



const calculateTagsClass = function (count, params) {
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);

  return optCloudClassPrefix + classNumber;
};

function generateTags() {
  /* [NEW DONE] create a new variable allTags with an empty object */
  let allTags = {};
  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles', articles);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* [DONE] find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    console.log(titleList);
    /* [DONE] make html variable with empty string */
    let html = '';
    console.log(html);
    /* [DONE] get tags from data-tags attribute */
    const tagsString = article.getAttribute('data-tags'); //"cat sport test"
    /* [DONE] split tags into array */
    const articleTagsArray = tagsString.split(' '); //"cat sport test" -> ["cat", "sport", "test"]
    /* [DONE] START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* [DONE] generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log(linkHTML);
      /* [DONE] add generated code to html variable */
      html = html + linkHTML;
      console.log(html);
      /* [NEW DONE] check if this link is NOT already in allTags */
      if (!allTags[tag]) {
        /* [NEW DONE] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      /* [DONE] END LOOP: for each tag */
    }
    /* [DONE] insert HTML of all the links into the tags wrapper */
    titleList.innerHTML = html;
    /* [DONE] END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);

  /* [NEW] create variable for all links HTML code */
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams);

  let allTagsHTML = '';
  /* [NEW] START LOOP: for each tag in allTags: */
  for (let tag in allTags) {
    /* [NEW] generate code of a link and add it to allTagsHTML */
    const linkHTML = '<li><a href="#tag-' + tag + '" class="' + calculateTagsClass(allTags[tag], tagsParams) + '">' + tag + '</a></li>';
    /* [NEW] END LOOP: for each tag in allTags: */
    allTagsHTML += linkHTML;
  }
  /*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
}
generateTags();

function tagClickHandler(event) {
  /* [DONE] prevent default action for this event */
  event.preventDefault();
  console.log(event);
  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);
  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);
  /* [DONE] find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(activeTags);
  /* [DONE] START LOOP: for each active tag link */
  for (let activeTag of activeTags) {
    /* [DONE] remove class active */
    activeTag.classList.remove('active');
    /* [DONE] END LOOP: for each active tag link */
  }
  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log(tagLinks);
  /* [DONE] START LOOP: for each found tag link */
  for (let tagLink of tagLinks) {
    /* [DONE] add class active */
    tagLink.classList.add('active');
    /* [DONE] END LOOP: for each found tag link */
  }
  /* [DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* [DONE] find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
  /* [DONE] START LOOP: for each link */
  for (let tagLink of tagLinks) {
    /* [DONE] add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
    /* [DONE] END LOOP: for each link */
  }
}
addClickListenersToTags();

function generateAuthors() {
  /* [NEW] create a new variable allAuthors with an empty array */
  let allAuthors = {};
  /* [DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* [DONE] START LOOP: for every article: */
  for (let article of articles) {
    /* [DONE] find Author wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    console.log(authorWrapper);
    /* [DONE] make html variable with empty string */
    let html = '';
    console.log(html);
    /* [DONE] get Author from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
    console.log(articleAuthor);
    /* [DONE] generate HTML of the link */
    const linkHTML = '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a></li>';
    console.log(linkHTML);
    /* [DONE] add generated code to html variable */
    html = html + linkHTML;
    console.log(html);

    if (!allAuthors[articleAuthor]) {
      /* [NEW DONE] add authors to allAuthors object */
      allAuthors[articleAuthor] = true;
    }
    authorWrapper.innerHTML = html;
    /* [DONE] END LOOP: for every article: */
  }
  /* [NEW] find list of authors in right column */
  const authorsList = document.querySelector(optAuthorsListSelector);
  let allAuthorsHTML = '';
  /* [NEW] START LOOP: for each tag in allAuthors */
  for (let author in allAuthors) {
    /* [NEW] generate code of a link and add it to allAuthorsData  */
    const linkHTML = '<li><a href="#author-' + author + '">' + author + '</a></li>';
    /* [NEW] END LOOP: for each tag in allAuthors: */
    allAuthorsHTML += linkHTML;
  }
  /* [NEW] add HTML from allAuthorsHTML to AuthorsList */
  authorsList.innerHTML = allAuthorsHTML;
}

generateAuthors();