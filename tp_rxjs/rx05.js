import {interval,take,map,tap,switchMap,merge} from "rxjs"


const source01$ = interval(1000).pipe(map(d => `source 01 ${d}`))
const source02$ = interval(500).pipe(map(d => `source 02 ${d}`))

const m$ = merge(source01$,source02$)

m$.subscribe(d => console.log(d))