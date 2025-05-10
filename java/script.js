var main = document.getElementById('main')
var div1 = document.getElementById('div1')
var div2 = document.getElementById('div2')
var div3 = document.getElementById('div3')
// var div1 = document.querySelectorAll('div1')
// var div2 = document.querySelectorAll('div2')
// var div3 = document.querySelectorAll('div3')
var target1 = document.getElementById('target1')
var target2 = document.getElementById('target2')
var target3 = document.getElementById('target3')

// div1.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'div1'))  
// div2.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'div2'))
// div3.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'div3'))

// div1.forEach(div1 =>{
//     div1.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'div1'))  
// })
target1.addEventListener('dragover' , (e) => e.preventDefault())
target1.addEventListener('drop' , () =>{
    target1.appendChild(div1)
//    var id = e.dataTransfer.getData('text')
//    var element = document.getElementById(id)
//    target1.appendChild(element)
})
div1.addEventListener('dblclick' , ()=>{ 
    box1.appendChild(div1)
})


target2.addEventListener('dragover' , (e) => e.preventDefault())
target2.addEventListener('drop' , () =>{
    target2.appendChild(div2)
    // var id = e.dataTransfer.getData('text')
    // var element = document.getElementById(id)
    // target2.appendChild(element)
})
div2.addEventListener('dblclick' , ()=>{ 
    box1.appendChild(div2)
})


target3.addEventListener('dragover' , (e) => e.preventDefault())
target3.addEventListener('drop' , () =>{
    target3.appendChild(div3)
    // var id = e.dataTransfer.getData('text')
    // var element = document.getElementById(id)
    // target3.appendChild(element)
})
div3.addEventListener('dblclick' , ()=>{ 
    box1.appendChild(div3)
})