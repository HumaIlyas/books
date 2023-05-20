let field = document.querySelector('textarea');
let backUp = field.getAttribute('placeholder')
let btn = document.querySelector('.btn');
let reset = document.getElementById('reset')
let submit = document.querySelector('#submit')

// const comments = document.querySelector('#comment-box')
let comments = document.getElementById('comment-box');

// array to store the comments
let comments_arr = [];
let comment_number= 0;

// to generate html list based on comments array
let display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

reset.onclick = function(event){
  event.preventDefault();

  // reset the array  
   comments_arr.length = 0;
  // re-genrate the comment html list
  display_comments();
}

submit.onclick = function(event){
    event.preventDefault();
    let content = field.value;
    if(content.length > 0){ 
      // if there is content
      // add the comment to the array
      comments_arr.push(content);
      document.querySelector(".popup-message").innerHTML = 'Your comment has been submitted';
      // re-genrate the comment html list
      display_comments();
      comment_number++;
      document.getElementById("comment_number").innerHTML = comment_number;
      // reset the textArea content 
      resetTextArea();
    }
}

let resetTextArea = () => {

    setTimeout(() => {
        field.value = '';
        document.querySelector(".popup-message").innerHTML = "";
    }, 2000); 
}