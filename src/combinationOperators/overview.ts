import { combineLatest, concat, Observable, Subject, zip } from "rxjs";

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

// concat - moraju da se izvrsavaju u zadatom redu, zgodno ako su medjusobno zavisni
//kompletira se tok, pa onda drugi i tako redom

const concatFlow$: Observable<string | number> = concat(
  flowStrings$,
  flowNumbers$
);
concatFlow$.subscribe((value) => console.log("concat ", value));

// merge - emituje paralelno iz oba toka

flowStrings$.next("jedan");
flowStrings$.next("dva");
flowStrings$.next("tri");
flowStrings$.complete(); //mora da se eksplicitno kaze da je prvi tok zavrsio, da krene sledeci
flowNumbers$.next(1);
flowNumbers$.next(2);
flowNumbers$.next(3);
flowNumbers$.complete(); //dobra praksa

// withLatestFrom
//npr pozicija misa da bude u toku iz kojeg se uzima poslednja vrednost
//a da osnovni tok bude pritisak nekog tastera
//da pritisak tastera potvrdi poslednju vrednost iz toka pozicije misa(mozda cak klik)
