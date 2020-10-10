let age = prompt("saisir votre age");
let solde = prompt("saisir votre solde");
let age_limite = 21;
const interditDeJeu = false;

const soft = 5;
const alcool = 8;

function age_insuffisant(age, age_limite) {
  if (age < age_limite) {
    return true;
  } else {
    return false;
  }
}

function debiter(a, b) {
  return a - b;
}

/* Vérification de l'entrée */
if (interditDeJeu) {
  alert("Désolé, vous êtes interdit de jeu. Vous ne pouvez aps entrer.");
} else if (solde < -8000) {
  alert("Vous n'avez pas un solde suffisant pour entrer. Limite -8000");
} else {
  alert("Vous pouvez entrer.");

  /* Choix de l'action */
  let action = prompt("Que souhaites-tu faire (jouer, boire ou sortir) ?");

  while (action != "sortir" && solde > -8000) {
    /* Conditions d'action */
    if (action == "jouer") {
      if (solde <= -8000) {
        alert("Le solde de votre compte est insuffisant.");
      } else if (age < 18) {
        alert("Vous pouvez jouer mais vous ne pourrez pas récupérer vos gains");
      } else {
        alert("Faites vos jeux !");
      }
    } else if (action == "boire") {
      let demande = prompt("choisir (soft) ou (alcool)");

      if (demande == "soft") {
        if (solde <= soft) {
          alert("Le solde de votre compte est insuffisant.");
        } else {
          solde = debiter(solde, soft);
          alert("Le solde de votre compte est de :" + solde);
        }
      } else if (demande == "alcool") {
        if (age_insuffisant(age, age_limite)) {
          alert("Vous ne pouvez acheter d'alcool avant 21 ans.");
        } else if (solde < alcool) {
          alert("Le solde de votre compte est insuffisant.");
        } else {
          solde = debiter(solde, alcool);
          alert("Le solde de votre compte est de :" + solde);
        }
      } else {
        alert("veuillez choisir soft ou alcool");
      }
    } else {
      alert("Veuillez choisir jouer ou boire");
    }
    action = prompt("Que souhaites-tu faire (jouer, boire ou sortir) ?");
  }
  alert("merci de votre visite");
}
