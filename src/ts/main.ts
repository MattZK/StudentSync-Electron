
function Togglepage(element:any){
  let item:any = document.getElementById(element);
  if (item.style.display === 'none'){
    item.style.display = 'block';
  }
  else{
    item.style.display = 'none';
  }
}

function changeName(user){
  let naam = document.getElementById('name');
  naam.innerText = user;
}
