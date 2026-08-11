  let arr =[
    
  ];

  renderlist();

function renderlist() {
  let todolist = ''
arr.forEach(function(todoObject , index){
 const name =todoObject.name;
    const dueDate = todoObject.dueDate;
    const html =`
    <div>
    ${name}
    </div> <div>${dueDate}</div>
      <button onclick ="
      arr.splice(${index},1);
      renderlist();
      " class ='del-btn'>
      Delete
      </button>`;
    todolist += html;
})
    const item = document.querySelector('.items');
item.innerHTML = todolist;
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
        





