import {interval} from "rxjs"
// Cold observable
const obs$ = interval(1500)

obs$.subscribe(i=>console.log(`obs1 ${i}`))
obs$.subscribe(i=>console.log(`obs2 ${i}`))



setTimeout(()=>{
    obs$.subscribe(i=>console.log(`obs3 ${i}`))
},4000)