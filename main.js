const acc_items = document.querySelectorAll('.acc-item');

let j = 0;

setTimeout(function closeAndOpen(){
    for(let i = 0;i < acc_items.length;i++){
        acc_items[i].style.cssText = 'height: 60px'
    }

    acc_items[j].style.cssText = 'height:350px'
    j++;
    if(j == acc_items.length){
        j = 0;
    }
    setTimeout(closeAndOpen,2000)

},1000)

