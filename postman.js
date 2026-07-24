// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>response.json())
// .then(data => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:"POST",
//     headers:{
//         'content-Type':'application/json'
//     },

// body: JSON.stringify({
//     title:'My Post',
//     body:'learning fetch',
//     userId:1
// })
// })
// .then(response=>response.json())
// .then(data => console.log(data));

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:"PUT",
//     headers:{
//         'content-Type':'application/json'
//     },

// body: JSON.stringify({
//     title:'My Post',
//     body:'learning fetch',
//     userId:2
// })
// })
// .then(response=>response.json())
// .then(data => console.log(data));



// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:"PATCH",
//     headers:{
//         'content-Type':'application/json'
//     },

// body: JSON.stringify({
//     title:'My Post',
//     // body:'learning fetch',
//     // userId:2
// })
// })
// .then(response=>response.json())
// .then(data => console.log(data));



fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:"DELETE",
})
.then(response=>response.json())
.then(data => console.log(data));

