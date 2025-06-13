import {interval, share} from "rxjs"


const obs$ = interval(1500).pipe(share()) // Hold observable
obs$.subscribe(i=>console.log(`obs1 ${i}`))
obs$.subscribe(i=>console.log(`obs2 ${i}`))



setTimeout(()=>{
    obs$.subscribe(i=>console.log(`obs3 ${i}`))
},4000)