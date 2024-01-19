const toDoList=[];
print();
function print()
{
let toDoListHTML=``;
for(let i=0;i<toDoList.length;i++)
{
    const toDoObject= toDoList[i];
    const name=toDoObject.name;
    const date=toDoObject.date;
    const html=`
    <div>${name}</div>
    <div> ${date} </div>
    <button onclick="
        toDoList.splice(${i},1);
        print();
    " class="deletebutton">delete</button>
    `;
    toDoListHTML+=html;
}
document.querySelector('.jstodo').innerHTML = toDoListHTML;
}
function addToDo()
{
   const inputElement= document.querySelector('.jsname');
   const name=inputElement.value;
   const inputElementdate=document.querySelector('.jsdate');
   const date=inputElementdate.value;
   toDoList.push({name,date});
   inputElement.value='';
   print();
}
