import {interval,take,map,tap,switchMap} from "rxjs"


const source$ = interval(1000)

const results$ = source$.pipe(
    take(5),
    tap(d=> console.log(`iteration ${d}`)),
    switchMap(()=>{
        const other$ = interval(200).pipe(take(4))
        return other$
    })

)

// iteration 0 1s
// subscribe 0 200ms
// subscribe 1 200ms
// subscribe 2 200ms
// subscribe 3 200ms

// iteration 1
// subscribe 0
// subscribe 1
// subscribe 2
// subscribe 3


results$.subscribe(x => console.log(`subscribe ${x}`))
