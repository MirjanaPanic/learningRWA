import { from, fromEvent, interval, map, take, takeUntil } from "rxjs";

//Creation observables:
// from
from([1, 2, 3, 4, 5]).subscribe((x) => console.log("from ", x));

// interval
const subscription = interval(1000)
  .pipe(
    map((x) => x + 2),
    take(10)
  )
  .subscribe((x) => console.log("interval: ", x));

const unsub = document.createElement("button");
unsub.innerHTML = "Unsubscribe";
document.body.appendChild(unsub);
/*unsub.onclick = () => {
  subscription.unsubscribe(); 
  console.log("Unsubscribed!");
};*/

//kontrolni tok i obican tok
const kontrolniTok$ = fromEvent(unsub, "click"); // klik je signal za prekid
const tok$ = interval(1000)
  .pipe(takeUntil(kontrolniTok$))
  .subscribe((value) => {
    console.log("Vrednost iz toka:", value);
  });

// HOT and COLD observables
//cold - za svakog subscribera se kreira nezavisni, privatni tok podataka (unicast 1:1)
//tok je zatvoren, sve dok se neko ne subscribe, tada pocinje da emituje podatke (ne pamti se nista pre sub)
// primer: audio snimak radija (svako od pocetak slusa snimak!!), snimci koji se pokrecu na play dugme

//hot - jedan tok podataka koji dele svi subscriberi
//emituje podatke bez da se neko subscribe
// primer: radio, dogadjaji uzivo
