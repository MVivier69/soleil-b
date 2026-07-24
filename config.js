/* =========================================================================
   SOLEIL BEAUJOLAIS — FICHIER DE CONTENU
   =========================================================================
   C'est le SEUL fichier à modifier pour faire vivre l'application.
   Le fichier index.html est le moteur : il n'a pas à être touché.

   Règles d'écriture :
     - chaque valeur texte est entre guillemets droits : "comme ceci"
     - une apostrophe dans un texte ne pose aucun problème : "l'association"
     - chaque ligne se termine par une virgule, sauf la dernière d'un bloc
     - les chemins d'images commencent toujours par ./images/
     - pour masquer une section entière : afficher: false

   Après modification : enregistrer le fichier, le renvoyer sur GitHub,
   puis recharger l'application. Aucune autre manipulation n'est nécessaire
   (config.js et images/ sont rechargés depuis le réseau à chaque ouverture).
   ========================================================================= */

window.SB_CONFIG = {

  /* -----------------------------------------------------------------------
     1. IDENTITÉ
     Le nom s'affiche sous la bannière et sert de titre à l'onglet.
     ----------------------------------------------------------------------- */
  identite: {
    nom: "Soleil Beaujolais",
    baseline: "Énergie citoyenne en Beaujolais",
    logo: "./images/logo.png",
    lienLogo: "https://soleilbeaujolais.fr/"
  },

  /* -----------------------------------------------------------------------
     2. BANNIÈRE
     Image pleine largeur en haut de l'écran.
     hauteur : hauteur en pixels de la bande affichée (l'image est recadrée).
     ----------------------------------------------------------------------- */
  banniere: {
    afficher: true,
    image: "./images/banniere.jpg",
    texteAlternatif: "Champ de panneaux photovoltaïques sous un ciel bleu",
    hauteur: 130,
    lien: "https://soleilbeaujolais.fr/"
  },

  /* -----------------------------------------------------------------------
     3. À LA UNE
     Un encart unique et large, mis en avant en haut de page.
     ----------------------------------------------------------------------- */
  alaune: {
    afficher: true,
    titreSection: "À la une",
    texte: "Devenir actionnaire",
    image: "./images/alaune.jpg",
    lien: "https://soleilbeaujolais.fr/devenir-actionnaire/"
  },

  /* -----------------------------------------------------------------------
     4. PAVÉS — ASSOCIATION SOLEIL BEAUJOLAIS
     Grille de raccourcis. Ajouter ou retirer un pavé = ajouter ou retirer
     un bloc { ... } dans la liste ci-dessous ; la grille se réorganise seule.
     ----------------------------------------------------------------------- */
  paves: {
    afficher: true,
    titreSection: "Association Soleil Beaujolais",
    liste: [
      {
        texte: "Simulation financière Photovoltaïque",
        image: "./images/pave/pv.jpg",
        lien: "https://mvivier69.github.io/Repository-Perso/Index_Panneau.html"
      },
      {
        texte: "Simulation financière Batteries",
        image: "./images/pave/batteries.jpg",
        lien: "https://mvivier69.github.io/Repository-Perso/Index_Batterie.html"
      },
      {
        texte: "Missions",
        image: "./images/pave/missions.jpg",
        lien: "https://soleilbeaujolais.fr/nos-missions/"
      },
      {
        texte: "ACC",
        image: "./images/pave/acc.jpg",
        lien: "https://soleilbeaujolais.fr/nos-missions/"
      },
      {
        texte: "Agenda",
        image: "./images/pave/agenda.jpg",
        lien: "https://soleilbeaujolais.fr/actualites/"
      },
      {
        texte: "Contact",
        image: "./images/pave/contact.jpg",
        lien: "https://soleilbeaujolais.fr/contact/"
      }
    ]
  },

  /* -----------------------------------------------------------------------
     5. GALERIE PHOTOS
     Les photos s'affichent en vignettes carrées, trois par ligne.
     Ajouter une photo = ajouter un bloc { legende, image, lien } ;
     la grille se remplit et passe à la ligne toute seule.
     ----------------------------------------------------------------------- */
  galerie: {
    afficher: true,
    titreSection: "Galerie photos",
    liste: [
      {
        legende: "",
        image: "./images/galerie/photo-1.jpg",
        lien: "https://soleilbeaujolais.fr/"
      },
      {
        legende: "",
        image: "./images/galerie/photo-2.jpg",
        lien: "https://soleilbeaujolais.fr/"
      },
      {
        legende: "",
        image: "./images/galerie/photo-3.jpg",
        lien: "https://soleilbeaujolais.fr/"
      }
    ]
  },

  /* -----------------------------------------------------------------------
     5 bis. WATTS NEWS
     Section dédiée, présentée en encart large comme « À la une ».
     Elle accepte plusieurs entrées : ajouter un bloc
     { texte, image, lien } dans la liste et elles s'empilent.
     ----------------------------------------------------------------------- */
  wattsnews: {
    afficher: true,
    titreSection: "Watts News",
    liste: [
      {
        texte: "Veille photovoltaïque",
        image: "./images/wattsnews/wattsnews.jpg",
        lien: "https://mvivier69.github.io/Curation/veille-pv.html"
      }
    ]
  },

  /* -----------------------------------------------------------------------
     6. INFOS PRATIQUES
     Chaque ligne est cliquable : l'adresse ouvre le plan, le téléphone
     déclenche l'appel, l'adresse mail ouvre le logiciel de messagerie.
     ----------------------------------------------------------------------- */
  infos: {
    afficher: true,
    titreSection: "Infos pratiques",
    adresse: {
      afficher: true,
      intitule: "",
      lignes: [
        "Soleil Beaujolais",
        "105 rue de la République",
        "69220 Belleville-en-Beaujolais"
      ]
    },
    /* Les espaces saisis ci-dessous sont affichés tels quels.
       Pour décaler davantage, ajouter des espaces ; pour supprimer
       le décalage, les retirer. Rien d'autre à modifier. */
    telephone: {
      afficher: true,
      intitule: "",
      numero: "   06 42 87 46 32"
    },
    mail: {
      afficher: true,
      adresse: "   contact@soleilbeaujolais.fr"
    }
  },

  /* -----------------------------------------------------------------------
     7. LIENS
     Réseaux sociaux et sites partenaires.
     ATTENTION : au 24/07/2026, l'adresse LinkedIn ci-dessous renvoie une
     erreur 404. Elle est conservée telle que fournie ; remplacer la valeur
     par l'adresse exacte de la page dès qu'elle est connue, ou passer
     afficher: false sur cette entrée pour la masquer.
     ----------------------------------------------------------------------- */
  liens: {
    afficher: true,
    titreSection: "Liens",
    liste: [
      { texte: "Facebook",             lien: "https://www.facebook.com/SoleilBeaujolais/", afficher: true },
      { texte: "LinkedIn",             lien: "https://www.linkedin.com/",                  afficher: true },
      { texte: "Bowatts",              lien: "https://www.bowatts-beaujolais.fr/",         afficher: true },
      { texte: "Coopawatt",            lien: "https://coopawatt.fr/",                      afficher: true },
      { texte: "CCSB",                 lien: "https://ccsb-saonebeaujolais.fr/",           afficher: true },
      { texte: "Centrales villageoises", lien: "https://www.centralesvillageoises.fr/",    afficher: true }
    ]
  },

  /* -----------------------------------------------------------------------
     8. CARTE D'INSTALLATION
     Invite à installer l'application sur l'écran d'accueil.
     Elle ne s'affiche que si l'installation peut réellement aboutir :
     rien sur un ordinateur sans invite, rien si l'application est déjà
     installée, marche à suivre dédiée sur iPhone, message spécifique
     dans le navigateur intégré de Facebook.

     titre           : sert aussi de repère de mémorisation. Si l'utilisateur
                       ferme la carte, elle ne réapparaît plus — sauf si l'on
                       change ce titre (nouveau repère = carte réaffichée).
     position        : "haut" ou "bas"
     permettreFermeture : false pour empêcher la fermeture définitive
     ----------------------------------------------------------------------- */
  installation: {
    afficher: true,
    titre: "Installer l'application",
    texte: "Ajoutez Soleil Beaujolais à votre écran d'accueil pour y accéder en un geste.",
    libelleBouton: "Installer",
    position: "bas",
    permettreFermeture: true
  },

  /* -----------------------------------------------------------------------
     9. PIED DE PAGE
     ----------------------------------------------------------------------- */
  piedDePage: {
    afficher: true,
    texte: "Soleil Beaujolais",
    lien: "https://soleilbeaujolais.fr/"
  },

  /* -----------------------------------------------------------------------
     10. COULEURS
     Les trois premières valeurs sont relevées directement sur le logo
     fourni : cyan dominant, jaune du soleil, bleu ardoise des pictogrammes.
     ----------------------------------------------------------------------- */
  couleurs: {
    principale: "#12C4EE",   /* cyan du logo          */
    accent:     "#FAC800",   /* jaune du soleil       */
    encre:      "#3F5570",   /* bleu ardoise, textes  */
    fond:       "#F2FAFD",   /* fond général          */
    carte:      "#FFFFFF"    /* fond des pavés        */
  }

};
