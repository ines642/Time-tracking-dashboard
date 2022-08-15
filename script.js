const add =document.querySelectorAll('.add')
const dur =document.querySelectorAll('.duration')
const preh =document.querySelectorAll('.prehours')
const pre =document.querySelectorAll('.previous')
const sel =document.querySelectorAll('.selection')
const s1 =document.querySelectorAll('.s1')
const s2 =document.querySelectorAll('.s2')
const s3 =document.querySelectorAll('.s3')
const exotime =document.querySelector('.exotime')
const d =document.querySelector('.daily')
const w =document.querySelector('.weekly')
const m =document.querySelector('.monthly')
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
    w.style.color='var(--dblue)'
    d.style.color='white'
    m.style.color='var(--dblue)'
for (let e = 0 ; e< pre.length ; e++) {
    console.log(e);
    dur[e].innerText=day[e]+'hrs'
    pre[e].innerText='Last day '+ preday[e] +'hrs'
    
}
})
w.addEventListener('click' , ()=>{
    w.style.color='white'
    d.style.color='var(--dblue)'
    m.style.color='var(--dblue)'
    for (let e = 0 ; e< pre.length ; e++) {
        console.log(e);
        dur[e].innerText=week[e]+'hrs'
        pre[e].innerText='Last week '+ preweek[e]+'hrs'
        
    }
    })
    m.addEventListener('click' , ()=>{
        w.style.color='var(--dblue)'
        d.style.color='var(--dblue)'
        m.style.color='white'
        for (let e = 0 ; e< pre.length ; e++) {
            console.log(e);
            dur[e].innerText=month[e]+'hrs'
            pre[e].innerText='Last month '+ premonth[e]+'hrs'
            
        }
        })+'hrs'
        for (let e = 0 ; e< pre.length ; e++) {
           add[e].addEventListener('mouseover', ()=>{
console.log(e)
sel[e].style.display='block'
dur[e].style.bottom='20%'

s1[e].addEventListener('click',()=>{
    console.log(e);
    dur[e].innerText=day[e]+'hrs'
    pre[e].innerText='Last day '+ preday[e] +'hrs'
})
s2[e].addEventListener('click',()=>{
    dur[e].innerText=week[e]+'hrs'
    pre[e].innerText='Last week '+ preweek[e]+'hrs'
})
s3[e].addEventListener('click',()=>{
    dur[e].innerText=month[e]+'hrs'
    pre[e].innerText='Last month '+ premonth[e]+'hrs'
})
           })
        } 

        for (let e = 0 ; e< pre.length ; e++) {
            add[e].addEventListener('mouseout', ()=>{
 console.log(e)
 sel[e].style.display='none'
 dur[e].style.bottom='0%'})}