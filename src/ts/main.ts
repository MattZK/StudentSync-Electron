//pagina toggle
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
  let naam:any = document.getElementById('name');
  naam.innerText = user;
}

const groups = [
  {
    name: 'Matthias',
    hasNotification: false
  },
  {
    name: 'Jonas',
    hasNotification: false
  },
  {
    name: 'Web Technology',
    hasNotification: true
  },
  {
    name: 'System Administration',
    hasNotification: false
  }
];
