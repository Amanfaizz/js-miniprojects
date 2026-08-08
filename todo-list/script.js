  let arr =['do dsa','study js'];

  renderlist();

function renderlist() {
  let todolist = ''

 for(let i =0;i<arr.length;i++){
    const todo = arr[i];
    const html =`<p>${todo}</p>`;
    todolist += html;
         }

    const item = document.querySelector('.items');
item.innerHTML = todolist;
        };
function listinput(){
    const box = document.querySelector('.todo-input');
    const boxinput = box.value;
        arr.push(boxinput);
         console.log(arr);
         box.value='';
         renderlist();
}
        





