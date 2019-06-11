function getFirstSelector(selector){
   return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function deepestChild(){
    let deepestNode = document.querySelectorAll('#grand-node div')
    return deepestNode[deepestNode.length-1];
}

function increaseRankBy(n){
    let increaser = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < increaser.length; i++) {
      increaser[i].innerHTML = parseInt(increaser[i].innerHTML) + n
    }    
}