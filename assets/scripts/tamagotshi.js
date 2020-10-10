let en = 10;
let faim = 0;
let joie = 5;
alert("Energie:" + en);
alert("Faim:" + faim);
alert("Joie:" + joie);

function jouer(en, faim, joie) {
  en -= 2;
  faim += 1;
  joie += 1;
  return [en, faim, joie];
}

function nourrir(en, faim, joie) {
  faim -= 1;
  joie -= 1;
  en += 2;
  return [en, faim, joie];
}

let action = prompt(
  "Que souhaites-tu faire (jouer) ou (nourrir) ou (arreter)?"
);

while (action != "arreter") {
  /* Conditions d'action */
  if (action == "jouer") {
    let valeurs = jouer(en, faim, joie);
    en = valeurs[0];
    faim = valeurs[1];
    joie = valeurs[2];

    alert("Energie:" + en);
    alert("Faim:" + faim);
    alert("Joie:" + joie);
  } else if (action == "nourrir") {
    let valeurs = nourrir(en, faim, joie);
    en = valeurs[0];
    faim = valeurs[1];
    joie = valeurs[2];

    alert("Energie:" + en);
    alert("Faim:" + faim);
    alert("Joie:" + joie);
  } else {
    alert("veuillez choisir jouer ou nourrir");
  }

  if (faim > 5 || joie < 0 || en < 0) {
    alert("Vous avez perdu");
    action = "arreter";
  } else {
    action = prompt(
      "Que souhaites-tu faire (jouer) ou (nourrir) ou (arreter)?"
    );
  }
}
