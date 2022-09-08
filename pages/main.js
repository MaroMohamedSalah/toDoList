// ############## need to edit that and make all color on array on localStorage ###############


// play with color 
let r = document.querySelector(':root');

let colors = document.getElementById("colors")
let font = document.getElementById('font');
let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let blur0 = document.getElementById('blur');
let btn = document.getElementById('btn');
let reset = document.getElementById("reset");
let changeColor = document.getElementById('changeColor');

changeColor.onclick = () =>{    
    colors.style.display = 'grid';
    setTimeout(() => {
        colors.style.opacity = '1';
    }, 500);
}

if(localStorage.getItem('toDoFontColor')){
    r.style.setProperty('--font-color', localStorage.getItem('toDoFontColor') );
}else{
    font.value = '#fdfdff';
}

if(localStorage.getItem('toDoBg1Color')){
    r.style.setProperty('--backGround', localStorage.getItem('toDoBg1Color') );
}else{
    bg1.value = '#344fa1';
}

if(localStorage.getItem('toDoBg2Color')){
    r.style.setProperty('--secondBack', localStorage.getItem('toDoBg2Color') );
}else{
    bg2.value = '#031956';
}

if(localStorage.getItem('toDoBlurColor')){
    r.style.setProperty('--blur', localStorage.getItem('toDoBlurColor') );
}else{
    blur0.value = '#819dee';
}

if(localStorage.getItem('toDoBtnColor')){
    r.style.setProperty('--secondColor', localStorage.getItem('toDoBtnColor') );
}else{
    btn.value = '#eb05fe';
}



font.oninput = () =>{
    localStorage.setItem("toDoFontColor" , font.value);
    r.style.setProperty('--font-color', font.value);
}
bg1.oninput = () =>{
    r.style.setProperty('--backGround', bg1.value);
    localStorage.setItem("toDoBg1Color" , bg1.value);
}
bg2.oninput = () =>{
    r.style.setProperty('--secondBack', bg2.value);
    localStorage.setItem("toDoBg2Color" , bg2.value);
}
blur0.oninput = () =>{
    r.style.setProperty('--blur', blur0.value);
    localStorage.setItem("toDoBlurColor" , blur0.value);
}
btn.oninput = () =>{
    r.style.setProperty('--secondColor', btn.value);
    localStorage.setItem("toDoBtnColor" , btn.value);
}

reset.onclick = () =>{
    localStorage.removeItem('toDoFontColor');
    localStorage.removeItem('toDoBg1Color');
    localStorage.removeItem('toDoBg2Color');
    localStorage.removeItem('toDoBlurColor');
    localStorage.removeItem('toDoBtnColor');

    location.reload();
}

// selection 
let nav = document.getElementById('nav');
let setting = document.getElementById('setting');
let first = document.getElementById('first');
let second = document.getElementById('second');
let username = document.getElementById('name');
let addTask = document.getElementById('addTask');
let addBtn = document.getElementById('addBtn');
let free = document.getElementById('free');
let tasksField = document.getElementById('tasksField');
let deleteAll = document.getElementById('deleteAll');
let taskValue = document.getElementById('taskValue');
let delTask = document.getElementById('delTask');
let settingBar = document.getElementById('settingBar');
// select audios 
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let audioArr = [one , two , three];
let ch = 0;
// select setting 
let changeUser = document.getElementById('changeUser');
let settingUserName = document.getElementById('settingUserName');
let onDiv = document.getElementById('onDiv');
let offDiv = document.getElementById('offDiv');
let onInput = document.getElementById('onInput');
let offInput = document.getElementById('offInput');
// nav 
// setting 
settingUserName.textContent = localStorage.getItem('toDoUsername')
let count1 = 0 ;
localStorage.setItem("soundOn" , true);
onInput.checked = true;
offInput.checked = false;
onDiv.style.color = 'var(--blur)'
offDiv.style.color = 'var(--font-color)'
if(localStorage.getItem('soundOn')){
    onInput.checked = true;
    offInput.checked = false;
    onDiv.style.color = 'var(--blur)'
    offDiv.style.color = 'var(--font-color)'
}else{
    onInput.checked = true;
    offInput.checked = false;
    onDiv.style.color = 'var(--blur)'
    offDiv.style.color = 'var(--font-color)'
}
setting.onclick = () =>{
    if(count1 === 0){
        count1 = 1 ;
        second.style.marginTop = '-16px'
        first.style.transform = 'rotate(45deg)'
        second.style.transform = 'rotate(-45deg)'
        settingBar.style.left = '0';
        settingBar.style.zIndex = '400';
        document.querySelector('body').style.cssText = `
        width: 57%;
        right: 0;
        position: absolute;
        `
        if (window.matchMedia("(max-width: 768px)").matches) {
            document.querySelector('body').style.cssText = `
            width: 100%;
            right: -260px;
            position: relative;
            `
        }
        changeUser.onclick = () =>{
            let newUser = prompt('Enter your new username .. ' , localStorage.getItem('toDoUsername'));
            if(newUser !== null){
                localStorage.setItem('toDoUsername' , newUser);
                location.reload()
            }
        }
        setInterval(() => {            
            onDiv.onclick = () =>{
                localStorage.setItem('soundOn' , true);
                onInput.checked = true;
                offInput.checked = false;
                onDiv.style.color = 'var(--blur)'
                offDiv.style.color = 'var(--font-color)'
            }
            offDiv.onclick = () =>{
                localStorage.setItem('soundOn' , false);
                offInput.checked = true;
                onInput.checked = false;
                offDiv.style.color = 'var(--secondColor)'
                onDiv.style.color = 'var(--font-color)'
            }
        }, 1000);
    }else{
        colors.style.display = "none";
        colors.style.opacity = '0';
        count1 = 0;
        second.style.marginTop = '0'
        first.style.transform = 'none'
        second.style.transform = 'none'
        settingBar.style.left = '-1000px';
        settingBar.style.zIndex = '-1';
        document.querySelector('body').style.cssText = `
        width: 100%;
        right: auto;
        position: absolute;
        `
    }
}

// intro 
if(localStorage.getItem('toDoUsername')){
    username.textContent = localStorage.getItem('toDoUsername').split(" ")[0];
}else{
    location.href = '../welcom.html'
}
// add tasks 
let tasksOption = ['Check emails' , 'Meditation' , 'Coding'];
let index = 0;
setInterval(() => {
    if (index === tasksOption.length) {
        index = 0;
    }else{
        addTask.placeholder = tasksOption[index];
        index++;
    }
}, 1500);
// add data to array 
let tasks = [];
if(localStorage.getItem('tasksArray')){
    tasks = JSON.parse(localStorage.getItem('tasksArray'))
    console.log(tasks)
    addTasksFrom(tasks);
}
// let index2 = 0;
addTask.oninput = () =>{
    if(addTask.value !== ''){
        addBtn.onclick = () =>{
            if(addTask.value !== ''){
                // index2++;
                const task = {
                    id: Date.now(),
                    title: addTask.value,
                    status: false
                }
                tasks.push(task);
                addTasksFrom(tasks);
                addTask.value = '';
                addToLocalStorage(tasks);
                console.log(tasks)
                
                // check(tasks)
                let deleteTask = document.querySelectorAll('.tasks .container .tasksField .taskLi button');
                deleteTask.forEach(element => {
                    // delete task 
                    element.onclick = () =>{
                        let getNum = element.id.match(/(\d+)/);
                        document.getElementById(`task${getNum[0]}`).remove();
                        deleteTaskWith(getNum[0]);
                        // add tasks to localStorage
                        addToLocalStorage(tasks); 
                    }
                });
            }
        }
    }else{
        addTask.placeholder = 'Write your task here!'
    }
}
deleteAll.onclick = () =>{
    tasksField.innerHTML = '<h1 id="free">You are free now!</h1>'
    tasksField.style.backgroundColor = 'var(--secondBack)'
    tasks = [];
    // add tasks to localStorage
    addToLocalStorage(tasks); 
}
let ch2 = 0;
function addTasksFrom(params) {
    tasksField.innerHTML = '';
    tasksField.style.background = 'none'
    params.forEach(task => {
        let taskLi = document.createElement('li');
        taskLi.innerHTML = 
        `
        <label class="container2" id="task${task.id}">
        <input id=done${task.id} type="checkbox">
        <span class="taskValue" id="taskValue${task.id}">${task.title}</span> 
        <span class="checkmark"></span>
        <button id="delTask${task.id}">Delete</button>
        </label>
        `
        
        taskLi.className = `taskLi`;
        taskLi.id = `task${task.id}`
        tasksField.appendChild(taskLi);
        if (task.status) {
            document.getElementById(`done${task.id}`).checked = true;
        }
        document.getElementById(`done${task.id}`).onclick = () =>{
            if(document.getElementById(`done${task.id}`).checked){
                task.status = true ;
            }else{
                task.status = false ;
            }
            addToLocalStorage(tasks)
            if(localStorage.getItem('soundOn') === 'true'){
                if(ch === 0){
                    ch++;
                    if(ch > audioArr.length){
                        ch = 0;
                    }
                    audioArr[0].play();
                }else if(ch === 1){
                    ch++;
                    if(ch > audioArr.length){
                        ch = 0;
                    }
                    audioArr[1].play();
                }else{
                    ch++;
                    if(ch > audioArr.length){
                        ch = 0;
                    }
                    audioArr[2].play();
                }
            }
        }
    });
    addTask.value = '';
}

// add to localStorage 
function addToLocalStorage(tasks) {
    localStorage.setItem("tasksArray" , JSON.stringify(tasks) );
}

function deleteTaskWith(taskId) {
    console.log(`taskId : ${taskId}`);
    tasks = tasks.filter((el) => el.id != taskId);
    addToLocalStorage(tasks)
}  
