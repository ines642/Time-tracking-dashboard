const add =document.querySelectorAll('.add')
const dur =document.querySelectorAll('.duration')
const preh =document.querySelectorAll('.prehours')
const pre =document.querySelectorAll('.previous')
const sel =document.querySelectorAll('.selection')
const d =document.querySelector('.daily')
const w =document.querySelector('.weekly')
const m =document.querySelector('.monthly')
const s1 =document.querySelector('.s1')
const s2 =document.querySelector('.s2')
const s3 =document.querySelector('.s3')
//confirm selection
console.log(d ,m , w );
for (let i = 0; i < add.length; i++) {
    console.log(add[i] , dur[i] , pre[i] ,preh[i] ,sel[i]);
}
// change pre and der based on time clicked
/*1st way :
make each activity an array
const play = [5 , 7 , 32 , 36 , 103 ,128 ]

*/
let day=[5 , 1 , 0 , 1 , 1 , 0]
let preday=[7 , 2 , 1 , 1 ,3 ,1]
let week =[32, 10 , 4 , 4 , 5 , 2]
let preweek=[36, 8 , 7 , 5 , 10 , 2]
let month=[103 , 23 , 13 , 11 , 21 ,7]
let premonth=[128,29,19,18,23,11]

d.addEventListener('click' , ()=>{
for (let e = 0 ; e< pre.length ; e++) {
    console.log(e);
    dur[e].innerText=day[e]+'hrs'
    pre[e].innerText='Last day '+ preday[e] +'hrs'
    
}
})
w.addEventListener('click' , ()=>{
    for (let e = 0 ; e< pre.length ; e++) {
        console.log(e);
        dur[e].innerText=week[e]+'hrs'
        pre[e].innerText='Last week '+ preweek[e]+'hrs'
        
    }
    })
    m.addEventListener('click' , ()=>{
        for (let e = 0 ; e< pre.length ; e++) {
            console.log(e);
            dur[e].innerText=month[e]+'hrs'
            pre[e].innerText='Last month '+ premonth[e]+'hrs'
            
        }
        })+'hrs'
        for (let e = 0 ; e< pre.length ; e++) {
           add[e].addEventListener('click', ()=>{
console.log(e)
sel[e].style.display='block'

s1.addEventListener('click',()=>{
    console.log(e);
    dur[e].innerText=day[e]+'hrs'
    pre[e].innerText='Last day '+ preday[e] +'hrs'
})
s2.addEventListener('click',()=>{
    dur[e].innerText=week[e]+'hrs'
    pre[e].innerText='Last week '+ preweek[e]+'hrs'
})
s3.addEventListener('click',()=>{
    dur[e].innerText=month[e]+'hrs'
    pre[e].innerText='Last month '+ premonth[e]+'hrs'
})
           })
        }