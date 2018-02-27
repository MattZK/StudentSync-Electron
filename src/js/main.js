let app = new Vue({
  el: '#app',
  data: {
    page: 'home',
    people: people,
    workspaces: workspaces,
    active: {
      person: null,
      workspace: null
    }
  },
  methods: {
    showPrivateChat: (person) => {
      app.active.person = person;
      app.page = 'pmchat';
    },
    showWorkspace: (workspace) => {
      app.active.workspace = workspace;
      app.page = 'workspace';
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