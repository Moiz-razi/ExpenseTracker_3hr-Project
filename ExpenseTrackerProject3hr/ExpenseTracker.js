function saveTolocalStorage(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const choose = event.target.choose.value;
  
    const obj ={
         amount,
         description,
         choose
    };

    localStorage.setItem(obj.amount,JSON.stringify(obj));

    showUserOnScreen(obj);

}

function showUserOnScreen(obj){

    const parentElem = document.getElementById('listofItems');
    const childElem = document.createElement('li')
    childElem.textContent = obj.amount+"-"+obj.description+"-"+obj.choose;

    // parentElem.appendChild(childElem);
    
    const delBtn = document.createElement('input');
    delBtn.type ='button';
    delBtn.value = 'Delete expense';
    
    delBtn.onclick = ()=>{
         localStorage.removeItem(obj.amount);
         parentElem.removeChild(childElem);
    };

    const editBtn = document.createElement('input');
    editBtn.type = "button";
    editBtn.value = "Edit expense";
    
    editBtn.onclick = ()=>{
        localStorage.removeItem(obj.amount);
        parentElem.removeChild(childElem);
        document.getElementById('amount').value = obj.amount;
        document.getElementById('description').value = obj.description;
        document.getElementById('category').value  = obj.choose;
    }
    

    childElem.appendChild(editBtn);
    childElem.appendChild(delBtn);
    parentElem.appendChild(childElem);


}
