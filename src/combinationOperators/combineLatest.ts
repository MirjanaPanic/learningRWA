//enable/disable button

import { combineLatest, fromEvent, map, Observable } from "rxjs";

//ime, prezime, email - kad unese u svako polje bar nesto moze da se enable
//jos bolje ako se proverava sta je uneto pa tek onda enable

const labelName = document.createElement("label");
labelName.textContent = "Name: ";
document.body.appendChild(labelName);
const inputName = document.createElement("input");
document.body.appendChild(inputName);

const labelSurname = document.createElement("label");
labelSurname.textContent = "Surname: ";
document.body.appendChild(labelSurname);
const inputSurname = document.createElement("input");
document.body.appendChild(inputSurname);

const labelEmail = document.createElement("label");
labelEmail.textContent = "Email: ";
document.body.appendChild(labelEmail);
const inputEmail = document.createElement("input");
document.body.appendChild(inputEmail);

const btnSend = document.createElement("button");
btnSend.textContent = "Send";
btnSend.disabled = true;
document.body.appendChild(btnSend);

//hot obs - postoje dogadjaji nezavisno od pretplate
const names$: Observable<string> = fromEvent(inputName, "input").pipe(
  map((e: Event) => (e.target as HTMLInputElement).value)
);

const surnames$: Observable<string> = fromEvent(inputSurname, "input").pipe(
  map((e: Event) => (e.target as HTMLInputElement).value)
);

const emails$: Observable<string> = fromEvent(inputEmail, "input").pipe(
  map((e: Event) => (e.target as HTMLInputElement).value)
);

const flows$: Observable<[string, string, string]> = combineLatest([
  //hot obs
  names$,
  surnames$,
  emails$,
]);
flows$.subscribe(([name, surname, email]) => {
  //moze i neka slozenija provera pre nego da se undisable dugme
  const valid =
    name.trim() !== "" && surname.trim() !== "" && email.trim() !== "";
  btnSend.disabled = !valid;
}); //tip Subscription
