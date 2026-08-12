  let arr =[
    
  ];

  renderlist();




document.querySelector('.add-btn')
.addEventListener('click', () =>{
   listinput();
})


function renderlist() {
  let todolist = ''
arr.forEach(function(todoObject , index){
 const name =todoObject.name;
    const dueDate = todoObject.dueDate;
    const html =`
    <div>
    ${name}
    </div> <div>${dueDate}</div>
      <button class ='del-btn'>
      Delete
      </button>`;
    todolist += html;  
})
    const item = document.querySelector('.items');
item.innerHTML = todolist;

  document.querySelectorAll('.del-btn')
    .forEach((deleteButton , index) => {
      deleteButton.addEventListener('click', ()=>{
        arr.splice(index,1);
      renderlist();
      })
    })
        };
function listinput(){
    const box = document.querySelector('.todo-input');
    const name = box.value;


    const dateInputElement = document.querySelector('.js-date-select');
    const dueDate = dateInputElement.value;
        arr.push({name,dueDate});
         box.value='';
         dueDate.value=''
         renderlist();
}
        





