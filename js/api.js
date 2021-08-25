const jsonOne = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data.userId,data.id,data.title,data.completed))
};

const dataTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(rep => rep.json())
    .then(data => datatodes(data))

};

const datatodes = (data) =>{
    const ul = document.getElementById('user');
    for(const todose of data){
        const li = document.createElement('li');
       
        li.innerText = `Id: ${todose.id}`


        ul.appendChild(li);

    }

}

const dataUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(rep => rep.json())
    .then(user => dataUserAll(user))

};


const dataUserAll = (user) => {
    const ul = document.getElementById('user');
    for(const data of user){
        const li = document.createElement('li');
        
        li.innerText = ` Name: ${data.name}
        E-Mail:  ${data.email} 
        Address: ${data.address.city}
        Company: ${data.company.name}
        Websit:  ${data.website}
        Mobile:  ${data.phone}

        
        `;
    
        ul.appendChild(li);
    } 
};



