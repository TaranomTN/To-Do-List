
// Geting date from user

alert('please enter the date .for example:day 1 , 2 , ... , 31')
let a = prompt('day')
let b= prompt('month')
let c= prompt(' year')
let body = document.querySelector('body')
let time = document.getElementById('time')
body.addEventListener('mouseover' , function(){
    if(a!='' && b!='' && c!=''  ) {
        time.innerHTML= `${c}/${b}/${a}`
    }
})

// Geting  day number from system


// let time = document.getElementById('time')
// let body = document.querySelector('body')
// body.addEventListener('mouseover' , function(){
//     let d = new Date()
//     let Day = d.getDate()
//     time.innerHTML= Day
// })


// Active add btn
 
let input = document.querySelector('input')
let Add = document.querySelector('.add')
let OKDel = document.querySelector('.OK-Del')

input.addEventListener('keyup',function(){
    if(input.value.trim() !=0){
        Add.classList.add('active')
    } else{
        Add.classList.remove('active')
    }
})

// Add new item

Add.addEventListener('click', function(){
    if(input.value.trim() != 0){
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `<p>${input.value}</p>
                        <div class="btn">
                            <button class="btnDown">OK</button>
                            <button class="btnDel">Del</button>
                        </div>`
    OKDel.appendChild(newItem) ;
    input.value = '' ;
    }
    else{
        alert('Please enter your list')
    }
})

// Down item

OKDel.addEventListener('click', (item)=>{
    if (item.target.classList.contains('btnDown')){
        item.target.parentElement.parentElement.classList.toggle('down')
    }
})

// Delete item 

OKDel.addEventListener('click', (item)=>{
    if (item.target.classList.contains('btnDel')){
        item.target.parentElement.parentElement.remove()
    }
})