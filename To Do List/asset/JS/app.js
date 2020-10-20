// close button 
const li = document.getElementsByTagName('li');
for(let i = 0 ; i < li.length; i++){
    const span = document.createElement('span');
    const spanTxt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(spanTxt);
    li[i].appendChild(span);
}

//hide the current item when clicking  close button 
const closeBtn  = document.getElementsByClassName('close');
for(let i = 0; i < closeBtn.length ; i++){
    closeBtn[i].addEventListener('click',function(){
        const list = this.parentElement;
        list.style.display = 'none';
    });
};
//add button 
const addBtn = document.querySelector('.add-button');
addBtn.addEventListener('click',function(){
    const inputTxt = document.querySelector('.input-text').value;
    const newItem = document.createElement('li');
    const itemTxt = document.createTextNode(inputTxt);
    newItem.appendChild(itemTxt);
    if(inputTxt === " "){
        alert('you must write something');
    }else{
        document.querySelector('.list').appendChild(newItem);
    }
    const span = document.createElement('span');
    const spanTxt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(spanTxt);
    newItem.appendChild(span);

    const close = document.getElementsByClassName('close');
    for(let i = 0; i < close.length ; i ++){
        close[i].addEventListener('click' ,function(){
            const li = this.parentElement;
            li.style.display = 'none';
        });
    }
});