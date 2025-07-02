import { combineLatest, Observable, Subject, zip } from "rxjs";

const flowNumbers$ = new Subject<number>();
const flowStrings$ = new Subject<string>();

// zip

const zipFlow$: Observable<[number, string]> = zip([
  flowNumbers$,
  flowStrings$,
]);
zipFlow$.subscribe((tuple) => console.log("zip ", tuple));
//flowNumbers$.subscribe((x) => console.log("numbers", x));

// combineLatest
//enable/disable logika(npr forma za vise polja, slusaju se sva polja i kad se ispuni uslov enable-uje se dugme)

const combineLatestFlow$: Observable<[number, string]> = combineLatest([
  flowNumbers$,
  flowStrings$,
]);
combineLatestFlow$.subscribe((tuple) => console.log("combineLatest ", tuple));

flowStrings$.next("jedan");
flowStrings$.next("dva");
flowStrings$.next("tri");
flowNumbers$.next(1);
flowNumbers$.next(2);
flowNumbers$.next(3);

// withLatestFrom
//npr pozicija misa da bude u toku iz kojeg se uzima poslednja vrednost
//a da osnovni tok bude pritisak nekog tastera
//da pritisak tastera potvrdi poslednju vrednost iz toka pozicije misa(mozda cak klik)
