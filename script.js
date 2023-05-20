let field = document.querySelector('textarea');
let backUp = field.getAttribute('placeholder');
let btn = document.querySelector('.btn');
let submit = document.querySelector('#submit');

// const comments = document.querySelector('#comment-box')
let comments = document.getElementById('comment-box');

// array to store the comments
let comments_arr = [];
let comment_count= 0;

// to generate html list based on comments array
let display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

submit.onclick = function(event){
    event.preventDefault();
    let content = field.value;
    if(content.length > 0){ 
      // if there is content
      // add the comment to the array
      comments_arr.push(content);
      document.querySelector(".popup-message").innerHTML = 'Your comment has been submitted and displayed';
      // re-genrate the comment html list
      display_comments();
      comment_count++;
      document.getElementById("comment_count").innerHTML = comment_count;
      // reset the textArea content 
      resetTextArea();
    }
}

let resetTextArea = () => {

    setTimeout(() => {
        field.value = '';
        document.querySelector(".popup-message").innerHTML = "";
    }, 2500); 
}