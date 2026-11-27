var T={
fr:{n_about:"À propos",n_services:"Services",n_contact:"Contact",
hero_p:"Ingénierie, équipements et services industriels pour les mines, le génie civil et les infrastructures en République démocratique du Congo et au-delà.",
cta1:"Découvrir nos services",cta2:"Nous contacter",
about_h:"Une expertise qui passe à l’action",
about_p:"KANYCOM accompagne les entreprises publiques et privées, de la sélection d’un équipement à la mise en service d’un chantier. Basée à Lubumbashi, la société réunit ingénierie, équipements, formation et outils numériques sous un même interlocuteur.",
f1b:"Basée à Lubumbashi",f1s:"Province du Haut-Katanga, au cœur du bassin minier.",
f2b:"Secteurs public et privé",f2s:"Interventions en RDC et à l’étranger.",
f3b:"Conformité d’abord",f3s:"Nous n’exerçons une activité réglementée qu’avec les autorisations ou partenaires habilités.",
srv_h:"Nos domaines d’intervention",srv_p:"Quatre pôles complémentaires pour couvrir un projet de bout en bout.",
s1h:"Équipements et après-vente",s1p:"Engins, outillages, pièces détachées et consommables pour les mines, le génie civil et la construction.",
s1a:"Import, distribution et représentation commerciale",s1b:"Installation, essais, mise en service et formation des utilisateurs",s1c:"Entretien, dépannage, réparation et gestion des pièces de rechange",
s2h:"Ingénierie et gestion de projets",s2p:"Études et conseil en génie civil, mécanique et électrique, avec un suivi rigoureux des travaux.",
s2a:"Faisabilité, conception, dimensionnement et plans",s2b:"Conseil en gestion environnementale et sociale",s2c:"Assistance à la maîtrise d’ouvrage et supervision de chantiers",
s3h:"Formation technique",s3p:"Formations pratiques pour renforcer les équipes sur le terrain.",
s3a:"Ingénierie, construction et maintenance",s3b:"Gestion de projets et sécurité technique",s3c:"Supports pédagogiques et évaluation des acquis",
s4h:"Numérique et logiciels",s4p:"Des outils sur mesure pour numériser les processus de l’entreprise.",
s4a:"Développement d’applications, sites et plateformes",s4b:"Conseil en systèmes d’information et bases de données",s4c:"Assistance informatique et accompagnement en cybersécurité",
ct_h:"Parlons de votre projet",ct_p:"Présentez-nous votre besoin en équipements, en ingénierie, en formation ou en solutions numériques.",
street:"avenue des Bananiers, quartier Bel-Air",country:"République démocratique du Congo",foot:"Société par actions simplifiée unipersonnelle, capital 1 000 USD"},
en:{n_about:"About",n_services:"Services",n_contact:"Contact",
hero_p:"Engineering, equipment and industrial services for mining, civil works and infrastructure in the Democratic Republic of the Congo and beyond.",
cta1:"Explore our services",cta2:"Get in touch",
about_h:"Expertise that gets things done",
about_p:"KANYCOM supports public and private organizations, from selecting equipment to commissioning a site. Based in Lubumbashi, we bring engineering, equipment, training and digital tools together under one point of contact.",
f1b:"Based in Lubumbashi",f1s:"Haut-Katanga Province, at the heart of the mining region.",
f2b:"Public and private sectors",f2s:"Working in the DRC and abroad.",
f3b:"Compliance first",f3s:"We only carry out regulated activities with the required authorizations or an authorized partner.",
srv_h:"What we do",srv_p:"Four complementary areas to cover a project from start to finish.",
s1h:"Equipment and after-sales",s1p:"Machinery, tools, spare parts and consumables for mining, civil engineering and construction.",
s1a:"Import, distribution and commercial representation",s1b:"Installation, testing, commissioning and user training",s1c:"Maintenance, troubleshooting, repair and spare parts management",
s2h:"Engineering and project management",s2p:"Studies and advice in civil, mechanical and electrical engineering, with rigorous follow-up on site.",
s2a:"Feasibility, design, sizing and drawings",s2b:"Environmental and social management advice",s2c:"Owner’s support and construction supervision",
s3h:"Technical training",s3p:"Hands-on training to strengthen teams in the field.",
s3a:"Engineering, construction and maintenance",s3b:"Project management and technical safety",s3c:"Training materials and skills assessment",
s4h:"Digital and software",s4p:"Tailor-made tools to digitize business processes.",
s4a:"Application, website and platform development",s4b:"IT consulting and database design",s4c:"IT support and cybersecurity guidance",
ct_h:"Let’s talk about your project",ct_p:"Tell us what you need in equipment, engineering, training or digital solutions.",
street:"Avenue des Bananiers, Bel-Air district",country:"Democratic Republic of the Congo",foot:"Single-shareholder simplified joint-stock company, capital USD 1,000"}
};
function setLang(l){
  document.documentElement.lang=l;
  document.querySelectorAll("[data-i]").forEach(function(e){e.textContent=T[l][e.dataset.i]});
  document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.l===l)});
  try{localStorage.setItem("kanycom-lang",l)}catch(e){}
}
document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.l)})});
var l="fr";
try{l=localStorage.getItem("kanycom-lang")||(/^en/i.test(navigator.language)?"en":"fr")}catch(e){}
document.getElementById("yr").textContent=new Date().getFullYear();
setLang(l);
