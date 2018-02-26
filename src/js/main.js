let people = [
  {
    uid: 1,
    name: {
      first: 'Matthias',
      last: 'Willemsen'
    }
  },{
    uid: 2,
    name: {
      first: 'Jonas',
      last: 'Van Hoof'
    }
  },{
    uid: 3,
    name: {
      first: 'Michiel',
      last: 'Meurs'
    }
  }
];

let app = new Vue({
  el: '#app',
  data: {
    currentPage: 'home',
    people: people
  },
  methods: {
    showPrivateChat: (uid) => {
      
    }
  }
});

/*
function Togglepage(element){
  let item = document.getElementById(element);
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
*/