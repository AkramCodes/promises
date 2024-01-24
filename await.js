



// https://dummyjson.com/users
// https://dummyjson.com/posts

async function fetchMyData(url) {
    let data = await fetch(url)
    let done = await data.json()
    return new Promise(function(resolve,reject){
        resolve(done)
    })

}

fetchMyData('https://dummyjson.com/users').then(function(success){
    console.log(success)

},function(error){

})


