import {interval,take,map,tap} from "rxjs"
// Cold observable

const obs$ = interval(500).pipe(
    take(5),
    tap(i => console.log('avant',i)),
    map(i => i*2),
    tap(i => console.log('après',i)),

)

obs$.subscribe(i=>console.log(`obs1 ${i}`))


// const a = [1,2,3]

// const b = a.map(i => i*2)
// const c = a.map(function(i){return i*2})

// console.log(a)
// console.log(b)
// console.log(c)