// withLatestFrom
//npr pozicija misa da bude u toku iz kojeg se uzima poslednja vrednost
//a da osnovni tok bude pritisak nekog tastera
//da pritisak tastera potvrdi poslednju vrednost iz toka pozicije misa(mozda cak klik)

import { map, Observable, Subject, zip } from "rxjs";

// zip
const flowNumbers$ = new Subject<number>();
const flowStrings$ = new Subject<string>();

const zipFlow$: Observable<[number, string]> = zip([
  flowNumbers$,
  flowStrings$,
]);
zipFlow$.subscribe((tuple) => console.log(tuple));

flowNumbers$.next(1);
flowNumbers$.next(2);
flowNumbers$.next(3);
flowStrings$.next("jedan");
flowStrings$.next("dva");
flowStrings$.next("tri");
