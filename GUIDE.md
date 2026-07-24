# Soleil Beaujolais — application smartphone

Application web installable (PWA), construite sur la même architecture que
`usine-asso` : un moteur figé, un fichier de contenu, un dossier d'images.

---

## 1. Ce que contient l'archive

| Fichier / dossier | Rôle | À modifier ? |
|---|---|---|
| `config.js` | **Tout le contenu** : textes, images, liens, couleurs | **Oui, c'est le seul** |
| `images/` | Les images, rangées par section | Oui |
| `index.html` | Le moteur : structure, styles, logique d'affichage | Non |
| `sw.js` | Service worker : cache et fonctionnement hors ligne | Non, sauf § 5 |
| `manifest.json` | Nom, icône et couleurs de l'application installée | Rarement |
| `GUIDE.md` | Ce document | — |

Arborescence des images :

```
images/
  logo.png              logo rond, en-tête
  banniere.jpg          bandeau pleine largeur
  alaune.jpg            encart « Devenir actionnaire »
  icone-192.png         icône de l'application installée
  icone-512.png         icône haute définition
  pave/                 pv · batteries · missions · acc · agenda · contact
  galerie/              photo-1 · photo-2 · photo-3
  wattsnews/            wattsnews
```

Sections affichées, dans l'ordre : bannière et identité · **À la une** ·
**Association Soleil Beaujolais** (6 pavés) · **Galerie photos** (3 photos) ·
**Watts News** · **Infos pratiques** · **Liens** · pied de page.

---

## 2. Mise en ligne sur GitHub Pages

Tout se fait depuis l'interface web de GitHub, sans ligne de commande.

1. Créer un dépôt **public**, par exemple `soleil-beaujolais`.
2. `Add file` → `Upload files` : déposer le **contenu** du dossier
   (`index.html`, `config.js`, `sw.js`, `manifest.json`, `GUIDE.md` et le
   dossier `images`), et non le dossier lui-même.
3. `Settings` → `Pages` → *Source* : **Deploy from a branch**,
   branche `main`, dossier `/ (root)` → `Save`.
4. Au bout d'une à deux minutes, l'adresse est :
   `https://mvivier69.github.io/soleil-beaujolais/`

Tous les chemins internes sont relatifs (`./`), l'application fonctionne donc
aussi bien à la racine d'un domaine que dans un sous-dossier de GitHub Pages.

> HTTPS est indispensable : sans lui, ni l'installation sur l'écran d'accueil
> ni le fonctionnement hors ligne ne sont possibles. GitHub Pages fournit
> HTTPS d'origine.

---

## 3. Modifier le contenu

Ouvrir `config.js` sur GitHub, cliquer sur le crayon, modifier, `Commit changes`.

| Objectif | Où intervenir |
|---|---|
| Changer un texte ou un lien | la valeur correspondante dans `config.js` |
| Remplacer une image | déposer le nouveau fichier dans `images/…` **sous le même nom** |
| Ajouter un pavé | ajouter un bloc `{ texte, image, lien }` dans `paves.liste` |
| Ajouter une photo | ajouter un bloc dans `galerie.liste` (la grille passe à la ligne seule) |
| Ajouter une entrée Watts News | ajouter un bloc `{ texte, image, lien }` dans `wattsnews.liste` |
| Retirer un pavé sans le supprimer | ajouter `afficher: false` dans son bloc |
| Masquer une section entière | `afficher: false` en tête de la section |
| Changer les couleurs | bloc `couleurs` en fin de fichier |
| Décaler un texte | ajouter des espaces directement devant la valeur dans `config.js` |

`config.js` et le dossier `images/` sont récupérés **depuis le réseau à chaque
ouverture** : une modification apparaît dès le rechargement suivant, sans
manipulation supplémentaire.

---

## 4. Installer l'application sur un téléphone

La carte d'installation est **contextuelle** : elle ne s'affiche que si
l'installation peut réellement aboutir sur l'appareil utilisé.

| Situation | Ce qui s'affiche |
|---|---|
| Android / Chrome | un bouton **Installer** déclenchant l'invite du système |
| iPhone / iPad (Safari) | la marche à suivre : *Partager* → *Sur l'écran d'accueil* |
| Navigateur intégré Facebook ou Instagram | une invitation à rouvrir la page dans Safari ou Chrome |
| Application déjà installée | rien — la carte disparaît d'elle-même |
| Ordinateur sans invite | rien |

Le cas Facebook mérite un mot : l'installation échoue depuis le navigateur
intégré d'une application sociale, il faut ouvrir le lien dans le navigateur
du téléphone. Comme la page Facebook de l'association est une porte d'entrée
naturelle, un message dédié est prévu.

Si la personne ferme la carte, celle-ci ne réapparaît plus. Pour la réafficher
à tout le monde, changer la valeur de `installation.titre` dans `config.js`
(le titre sert de repère de mémorisation), ou passer
`permettreFermeture: false`.

---

## 5. Quand faut-il incrémenter la version du cache ?

| Fichier modifié | Action |
|---|---|
| `config.js` ou `images/` | **rien** — repris depuis le réseau à chaque ouverture |
| `index.html` ou `sw.js` | incrémenter la version dans `sw.js` : `sb-v4` → `sb-v5` |

---

## 6. Contrôles effectués sur cette version

**Liens** — les 14 adresses fournies ont été appelées le 24 juillet 2026.
Treize répondent `200`. Une seule échoue :
`https://www.linkedin.com/SoleilBeaujolais` répond **404**. Elle est
conservée telle que fournie dans `config.js`, avec un commentaire, et reste à
corriger ou à masquer (`afficher: false`).

**Rendu** — mesures au pixel dans un navigateur réel (Chromium via Playwright,
`device_scale_factor: 2`) sur neuf largeurs d'écran : 300, 320, 360, 390, 414,
430, 480, 560 et 768 px. Aucun débordement horizontal, aucune image manquante,
aucune erreur JavaScript, aucun contenu ne touche le bord de l'écran.

**Espacement** — 11 contrôles dédiés : trois espaces exactement devant le
numéro et devant le courriel, cinq espaces saisis rendant cinq espaces, aucun
espace saisi ne rendant aucun espace, adresse postale intacte, liens `tel:` et
`mailto:` débarrassés des espaces, espace simple entre deux mots laissé
ordinaire, décalage fonctionnant aussi sur un pavé, échappement des caractères
spéciaux toujours actif.

**Comportement** — 20 contrôles automatisés dans un DOM réel (jsdom) :
présence et destination de chaque lien, six pavés, trois vignettes de galerie,
l'encart Watts News et son placement après la galerie, trois lignes d'infos
pratiques, six liens ; cinq scénarios d'installation (Android, iPhone/Safari,
navigateur Facebook, ordinateur, application déjà installée) ; masquage de la
galerie, de Watts News et d'un pavé ; absence de `config.js`.

**Géométrie** — mesurée à 390 px : sections dans l'ordre attendu, l'encart
Watts News (366 × 102 px) strictement identique à celui d'« À la une », les
trois photos alignées sur une seule ligne de 115 × 115 px. Le retrait de trois
espaces représente **12,7 px** devant le numéro de téléphone et **12,8 px**
devant l'adresse de courriel ; l'adresse postale est inchangée.

**Sécurité d'affichage** — tout texte venant de `config.js` est échappé avant
affichage : une apostrophe, un chevron ou une balise dans un titre ne peut pas
casser la page. Tous les liens externes portent `rel="noopener"`.

**Syntaxe** — `config.js`, `sw.js` et `manifest.json` validés.

---

## 7. Couleurs

Les trois teintes principales sont relevées directement sur le fichier
`logosb.png` fourni, et non choisies arbitrairement :

| Rôle | Valeur | Origine |
|---|---|---|
| Principale | `#12C4EE` | cyan dominant du logo |
| Accent | `#FAC800` | jaune du soleil |
| Encre | `#3F5570` | bleu ardoise des pictogrammes |
| Fond | `#F2FAFD` | déclinaison très claire du cyan |
| Carte | `#FFFFFF` | — |

---

## 8. La section Watts News

« Toutes les photos » a été sortie de la galerie et placée dans sa propre
section **Watts News**, présentée en encart large — la même mise en forme que
« À la une ». Une vignette seule au format galerie aurait été à la fois trop
petite et visuellement bancale ; l'encart large lui donne le poids d'une
rubrique à part entière. La section accepte plusieurs entrées : ajouter un
bloc dans `wattsnews.liste` et elles s'empilent.

La galerie compte désormais trois photos et passe donc de quatre à trois
colonnes, ce qui aligne sa grille sur celle des pavés et évite une case vide.

Le libellé reste **« Toutes les photos »**, tel que transmis. Il pointe vers
`veille-pv.html`, qui est une veille d'articles et non une galerie : si le
libellé doit devenir « Veille photovoltaïque », « Tous les articles » ou autre,
c'est la valeur `texte` du bloc `wattsnews.liste` qu'il faut changer.

---

## 9. Décaler un texte avec des espaces

Les espaces se saisissent **directement dans `config.js`**, à l'endroit voulu.
Ils sont restitués tels quels à l'écran :

```
telephone: {
  afficher: true,
  intitule: "Soleil Beaujolais",
  numero: "   06 42 87 46 32"
},
mail: {
  afficher: true,
  adresse: "   contact@soleilbeaujolais.fr"
}
```

Ajouter des espaces décale davantage, les retirer supprime le décalage.
Aucun paramètre à connaître, aucune autre ligne à modifier.

**Pourquoi cela demandait une correction du moteur.** Le HTML regroupe par
défaut les espaces consécutifs en un seul : trois espaces saisis n'auraient
produit qu'un espace unique à l'écran. Le moteur convertit donc les espaces de
début, les espaces de fin et les groupes de deux espaces ou plus en espaces
insécables, que le navigateur affiche tous. Un espace simple entre deux mots
reste un espace ordinaire, pour que les retours à la ligne continuent de se
faire normalement.

Cela vaut pour **tous les textes** de `config.js`, pas seulement pour les
infos pratiques : un libellé de pavé, un titre de section ou une légende
peuvent être décalés de la même façon.

Les liens `tel:` et `mailto:` sont construits à part, à partir de la valeur
débarrassée de ses espaces. Le décalage est donc purement visuel : l'appel et
l'envoi de courriel fonctionnent quels que soient les espaces saisis.

À noter : le décalage porte bien sur le numéro et sur l'adresse de courriel,
comme demandé. Les intitulés « ADRESSE » et « TÉLÉPHONE » restent, eux,
directement accolés à la mention « Soleil Beaujolais » qui les suit. Si ce
sont ces trois intitulés qu'il fallait décoller de leur valeur, c'est une
autre correction, à faire dans les styles.

---

## 10. Point ouvert

Deux liens ont été transmis sous une forme ambiguë — un libellé
`https://soleilbeaujolais.fr/` pointant vers `https://soleilbeaujolais.fr/nos-missions/` :
le pavé **ACC** et les **trois photos** de la galerie. La destination retenue
est `https://soleilbeaujolais.fr/nos-missions/`, c'est-à-dire la cible réelle
du lien. Si l'intention était la page d'accueil, il suffit de remplacer la
valeur `lien` dans les quatre blocs concernés de `config.js`.
