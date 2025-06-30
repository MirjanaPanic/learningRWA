import { from, interval, map, Subscription, take } from "rxjs";

//Creation observables
from([1, 2, 3, 4, 5]).subscribe((x) => console.log("from ", x));

const subscription = interval(1000)
  .pipe(
    map((x) => x + 2),
    take(10)
  )
  .subscribe((x) => console.log("interval: ", x));

function handleClick() {
  subscription.unsubscribe(); // ispravno
  console.log("Unsubscribed!");
}

const unsub = document.createElement("button");
unsub.innerHTML = "Unsubscribe";
document.body.appendChild(unsub);
unsub.onclick=handleClick;
