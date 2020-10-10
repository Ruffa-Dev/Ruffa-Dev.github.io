/**
 * Contact
 */
//creation de la class contact comprenant plusieurs parametres dont nom prenom etc..
class Contact {
  constructor(lastname, firstname, email, phone) {
    this.nom = lastname;
    this.prenom = firstname;
    this.email = email;
    this.phone = phone;
  }
}
/*function Contact(lastname, firstname, email, phone) {
  this.nom = lastname;
  this.prenom = firstname;
  this.email = email;
  this.phone = phone;
}*/

/**
 * Contact Pro
 */
/*creation d' une classe Contactpro héritant de sa classe mère (contact) comprenant
plusieurs parametres dont nom prenom etc..*/
class ContactPro extends Contact {
  constructor(lastname, firstname, email, phone, address) {
    super(lastname, firstname, email, phone);
    this.addresseProfessionnelle = address;
  }
}
/*function ContactPro(lastname, firstname, email, phone, address) {
  Contact.call(this, lastname, firstname, email, phone);

  this.addresseProfessionnelle = address;
}*/

/**
 * Contact Perso
 */
/*creation d'une classe Contactperso héritant de sa classe mère (contact) comprenant
plusieurs parametres dont nom prenom etc..*/
class ContactPerso extends Contact {
  constructor(lastname, firstname, email, phone, address) {
    super(lastname, firstname, email, phone);
    this.addressePersonnelle = address;
  }
}
/*function ContactPerso(lastname, firstname, email, phone, address) {
  Contact.call(this, lastname, firstname, email, phone);

  this.addressePersonnelle = address;
}*/

/**
 * Ajout d'un contact
 */
document.querySelector(".button").addEventListener("click", function (e) {
  //empecher le rafraichissement de la page
  e.preventDefault();
  //on sauvegarde en local dans un boite nommé "contacts"
  let contactList = localStorage.getItem("contacts");
  //creation de tableau si inexsistant
  //transformation chaine de character en tableau / objet
  //partie possible en function ?
  if (!contactList) {
    contactList = [];
  } else {
    contactList = JSON.parse(contactList);
  }

  let form = document.querySelector(".form");
  //recupere les données du formulaire
  let data = new FormData(form);

  let contact;
  // à revoir !!!
  if (data.get("type") == "perso") {
    contact = new ContactPerso(
      data.get("name"),
      data.get("fname"),
      data.get("email"),
      data.get("phone"),
      data.get("address")
    );
  } else {
    contact = new ContactPro(
      data.get("name"),
      data.get("fname"),
      data.get("email"),
      data.get("phone"),
      data.get("address")
    );
  }
  //on ajoute les données de contact dans contactlist
  contactList.push(contact);
  //on transforme le tableau en chaine de character
  localStorage.setItem("contacts", JSON.stringify(contactList));
});

/**
 * Recherche d'un contact
 */
document
  .querySelector(".submit-search")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // recuperer la valeur du champ de recherche en minuscule et effacer l'ancienne recuperation
    let search = document.querySelector("#search").value.toLowerCase();
    let contactsDisplay = document.querySelector(".contacts");
    contactsDisplay.innerText = "";
    //on sauvegarde en local dans une boite nommé "contacts"
    let contactList = localStorage.getItem("contacts");
    //creation de tableau si inexsistant
    //transformation chaine de character en tableau / objet
    //partie possible en function ?
    if (!contactList) {
      contactList = [];
    } else {
      contactList = JSON.parse(contactList);
    }
    //creation d'une boucle de recherche  en precisant de chercher uniquement nom et prenom
    contactList.forEach(function (contact) {
      if (!contact.nom || !contact.prenom) {
        return;
      }
      // recherche des lettres dans un mot (minuscule)
      if (
        contact.nom.toLowerCase().includes(search) ||
        contact.prenom.toLowerCase().includes(search)
      ) {
        let li = document.createElement("li");
        //Object.keys() renvoie un tableau contenant les noms des propriétés propres à un objet

        /*reduce() applique une fonction qui est un « accumulateur » et qui traite
        chaque valeur d'une liste
         (de la gauche vers la droite) afin de la réduire à une seule valeur.
         const array1 = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        */

        /*html, property == parametre */
        li.innerHTML = Object.keys(contact).reduce(function (html, property) {
          return html + property + " : " + contact[property] + "<br />";
        }, "");

        contactsDisplay.appendChild(li);
      } else {
        let p = document.createElement("p");
        p.innerHTML = "No Contact found!";
        contactsDisplay.appendChild(p);
      }
    });
  });
