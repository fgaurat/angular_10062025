

function getTodo(id){

    const p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const o = {
                id,
                title: `Todo id: ${id}`,
                completed:true
            }
        
            resolve(o)
        
        },500)
    })

    return p
}



// const pTodo = getTodo(1)

// pTodo
// .then((todo)=>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// })
// .then((todo)=>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// })
// .then((todo)=>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// })


// t1 = getTodo(1)
// t2 = getTodo(2)
// t3 = getTodo(3)

// Promise.all([t1,t2,t3]).then(arr=>console.log(arr))



async function main() {
    t1 = await getTodo(1)
    console.log(t1)

    t2 = await getTodo(2)
    console.log(t2)

    t3 = await getTodo(3)
    console.log(t3)
}

main()