// var axios = require('axios')
// var body ={
// 	email:"higor@gmail.com",
// 	password:"5f4dcc3b5aa765d61d8327deb882cf99",
// 	name:"Filho1",
//     parentId:"5da19d72060763058729f7c5"
// }

// axios.post('http://172.16.0.188:7010/api/user/child', body)
//     .then(r => console.log(r.data))
//     .catch(err => console.log(err));

// var axios = require('axios')
// var criar ={
//         email:"teste@gmail.com",
//         password:"5f4dcc3b5aa765d61d8327deb882cf99",
//         name:"Nome do pai aqui",
// }    

const submitUser = async (criar) =>{
    try {
        const r = await axios.post('http://104.154.99.179:7010/api/user/parent', criar);
        return [r.data, null];
    } catch (error){
        return [null, error];
    }
}

const acesso = async (acessar) =>{
    try {
        const r = await axios.post('http://104.154.99.179:7010/api/auth/login', acessar);
        return [r.data, null];
    } catch (error){
        return [null, error];
    }
}

// axios.post('http://172.16.0.188:7010/api/user/parent', criar)
//     .then(r => console.log(r.data))
//     .catch(err => console.log(err));
// console.log(2)


// var axios = require('axios')
// var login ={
//     email:"teste@gmail.com",
// 	password:"5f4dcc3b5aa765d61d8327deb882cf99",
// 	name:"Nome do pai aqui",
// }
// axios.post('http://172.16.0.188:7010/api/auth/login', login)
//     .then(r => console.log(r.data))
//     .catch(err => console.log(err));


