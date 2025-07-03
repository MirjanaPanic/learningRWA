//animacije

import { concat, delay, map, Observable, of } from "rxjs";

//da se pojavi prvo jedno, pa drugo, pa trece,..

const stablo$ = of("stablo");
const grane$ = of("grana1", "grana2", "grana3", "grana4");
const listovi$ = of("list1", "list2", "list3", "list4", "list5", "list6");

const drvo$: Observable<string> = concat(stablo$, grane$, listovi$);
drvo$.subscribe((element) => console.log(element));
