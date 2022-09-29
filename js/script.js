// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });

const titleClickHandler = function(){
    console.log('Link was clicked!');
    console.log('click', titleClickHandler);

  /* remove class 'active' from all article links */
  /* add class 'active' to the clocked link */
  /* remove class 'article' from all articles */
  /* get 'href' attribute from the clicked link */
  /* find the correct article using the selector (value of 'href' attribute) */
  /* add class 'article' to the correct article */

}
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }