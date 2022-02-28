function getPreviousImageNumber(gname, inumber) {
  const winterFunPrevious = { 3: 2 };
  const harvestingPrevious = { 5: 4 };
  const sportsPrevious = { 4: 3, 7: 6 };

  inumber = inumber - 1;
  const itemp = inumber;
  switch (gname) {
    case "festivals":
      break;
    case "winter_fun":
      inumber = winterFunPrevious[inumber];
      break;
    case "harvesting":
      inumber = harvestingPrevious[inumber];
      break;
    case "sports":
      inumber = sportsPrevious[inumber];
      break;
    case "celebrations":
      break;
  }

  if (!Number.isInteger(inumber)) {
    inumber = itemp;
  }

  return inumber;
}

function getNextImageNumber(gname, inumber) {
  const winterFunNext = { 3: 4 };
  const harvestingNext = { 5: 6 };
  const sportsNext = { 4: 5, 7: 8 };

  inumber = inumber + 1;
  const itemp = inumber;
  switch (gname) {
    case "festivals":
      break;
    case "winter_fun":
      inumber = winterFunNext[inumber];
      break;
    case "harvesting":
      inumber = harvestingNext[inumber];
      break;
    case "sports":
      inumber = sportsNext[inumber];
      break;
    case "celebrations":
      break;
  }

  if (!Number.isInteger(inumber)) {
    inumber = itemp;
  }

  return inumber;
}

// Captions for the festivals section
const festivalInformation = {
  en: {
    "1c": "Sourdough Rendezvous Poster",
    "1co": "Yukon Archives, Yukon Sourdough Rendezvous fonds 78/30 P-126",
    "2c": "Sourdough Rendezvous brings many different cultures to Whitehorse. Here the pageantry of a Tlingit dance group dazzles an appreciative crowd. ca. 1980",
    "2co":
      "Yukon Archives, Yukon Sourdough Rendezvous fonds 78/30, PHO 85 f. 4 #7",
    "3c": "A return to the Mesozoic era on the lawns of Whitehorse, and a recreation of the classic battle: Triceratops vs. Tyrannosaurus Rex. ca. 176,000,000 years ago.",
    "3co": "Yukon Archives, Yukon Public Affairs 81/18,PHO 298, f. 21 #7",
    "4c": "Recreating the gold rush days, the flour packing event tests this contestant’s mettle, with Father Dave Daws giving encouragement at right. The scene is reminiscent of the stampeders \u0027 climb over the Chilkoot Pass, struggling up the mountainside with all that they could possibly carry. ca. 1970",
    "4co":
      "Yukon Archives, Yukon Sourdough Rendezvous fonds 78/30, PHO 86 f. 7 #1",
    "5c": "Before the establishment of the Sourdough Rendezvous in 1962, Whitehorse enjoyed a winter carnival. Mary MacBride draws raffle tickets from a large steel drum while other Carnival Queen contestants, including Corinne Cyr at right, look on.",
    "5co": "Yukon Archives, Mickey DeWynter collection 81/153, PHO 151 #14",
    "6c": "During Rendezvous, the Keystone Cops patrol the streets. If citizens prove too stingy to contribute to the Cops\u0027 fund for charity, a lesson is in order. The miser is placed in &ldquo;the Cage&rdquo;, and towed up and down Main Street, so others may observe the price of selfishness. ca. 1960",
    "6co": "Yukon Archives, Whitehorse Star fonds 82/563, PHO 199 f. 1",
    "7c": "Too long on the trail, this unlucky musher and his team are turned to ice by the sub-zero temperatures. 1972",
    "7co": "Yukon Archives, Whitehorse Star fonds 82/563, PHO 201 f. 115 #58",
    "8c": "Many of the competitions on the Rendezvous schedule are derived from the skills that the pioneers needed to survive. Here contestants hurry to build a fire and boil water in the shortest time. ca. 1970",
    "8co":
      "Yukon Archives, Yukon Sourdough Rendezvous fonds 78/30, PHO 86 f. 7 #3",
    "9c": "Rendezvous features all kinds of sporting events, with athletes in all age groups. As children sprint out in the snowshoe race, one contestant discovers that the race can be quite perilous. ca. 1960\u0027s",
    "9co":
      "Yukon Archives, Yukon Sourdough Rendezvous fonds 78/30, PHO 86 f. 7 #2",
    "10c":
      "Yukoners from all over the Territory converge on Whitehorse every February for Sourdough Rendezvous. Artist Jim Robb puts the finishing touches on a store window, decorated for the annual event. During Rendezvous week the city is a hive of activity, pageantry, and revelry. ca. 1972",
    "10co": "Yukon Archives, Richard Harrington fonds 79/27, PHO 105 # 372",
    "11c": "A fearsome dragon comes to life in this snow sculpture. ca. 1973",
    "11co":
      "Yukon Archives, Whitehorse Star fonds 82/563, PHO 201  f. 116 #112",
    "12c":
      "Period costume is all the rage during Rendezvous.  Gillian Campbell as belle of the 1890s favours the audience with a song.  Ca. 1970",
    "12co":
      "Yukon Archives, Yukon Public Affairs fonds 81/18, PHO 298 f. 21 #2",
    "13c":
      "Two ski jumpers soar together at the Whitehorse Winter Carnival, the predecessor to the Sourdough Rendezvous.  1946.",
    "13co": "Yukon Archives, W. Al Turner collection, 87/102 PHO 363 #27",
    "14c":
      "Musical revues and stage productions are a big part of the Yukon\u0027s history.  Since the 1890s, sourdoughs have spent the long winter evenings entertained by vaudeville performers, cancan dancers, actors and singers.  Here a musical troupe sings the grand finale to another show.  ca.1970",
    "14co":
      "Yukon Archives, Yukon Public Affairs fonds 81/18, PHO 298 f. 21 #4",
    "15c":
      "A most mysterious float in Dawson City\u0027s winter carnival parade.  Artistic impression is given consideration over sponsorship and message in this curious construction.  ca. 1945-1947",
    "15co": "Yukon Archives, Mickey DeWynter collection 81/153, PHO 151 #24",
    "16c":
      "Many sporting events and races are more light-hearted.  Timing and coordination are everything for the hapless contestants of the dreaded three-legged snowshoe race.  ca. 1972",
    "16co":
      "Yukon Archives, Yukon Public Affairs fonds 81/18, PHO 298  f. 21 #3",
    "17c":
      "Ice and snow sculptures are an enduring part of winter festivals throughout the North.  A young girl observes this bearded man pushing a cart.  ca. 1960s",
    "17co": "Yukon Archives, Richard Harrington fonds 85/25, PHO 280 #544",
    "18c":
      "Snow sculptures around Whitehorse.  A robot or space alien or possibly a psycho-mutant stands beside a World War II fighter plane.  ca. 1970s",
    "18co":
      "Yukon Archives, Yukon Public Affairs fonds 81/18, PHO 298 f. 21 #6",
    "19c":
      "The streets of Whitehorse take on the feel of a snow-covered Mardi Gras during Rendezvous.  An annual event since 1964, it is the Yukoners\u0027 mid-winter release from cabin fever.  ca. 1960s",
    "19co":
      "Yukon Archives, Yukon Sourdough Rendezvous fonds 78/30, PHO 85 f. 4 #5",
    "20c":
      "A Capital Hotel team member wards off disaster in the bed race.  ca. 1970",
    "20co":
      "Yukon Archives, Yukon Public Affairs collection 81/18, PHO 298  f. 21 # 1",
    "21c":
      "The one dog pull is the ultimate test of canine strength.  The dogs pull sleds loaded with hundreds of kilograms of dog food.  The winner keeps the load.  ca. 1970s",
    "21co": "Yukon Archives, Yukon Public Affairs fonds 81/18, PHO 298  #35",
    "22c":
      "The dogsled race is the high point of Rendezvous.  The race was traditionally run on the Yukon river.  This musher encourages the dogs as they pull away from the starting line.  In the background are the sternwheelers &ldquo;Casca&rdquo; and &ldquo;Whitehorse&rdquo; on the shore.  Two years after this picture was taken, both boats were destroyed by fire.  1972",
    "22co": "Yukon Archives, Richard Harrington fonds 79/27, PHO 105 #417",
    "23c":
      "The Frostbite Music Festival provides Yukoners with a chance to dance the winter blues away. Featuring a variety of northern and international performers and musicians, Frostbite satisfies every possible musical taste. 1988",
    "23co": "Yukon Government Photograph, H5-88-6",
  },
  fr: {
    "1c": "Affiche du Sourdough Rendezvous",
    "1co": "Archives du Yukon, fonds du Yukon Sourdough Rendezvous 78/30 P-126",
    "2c": "Le festival Sourdough Rendezvous rassemble différentes cultures à Whitehorse. Un groupe de danseurs tlingit en costume d\u0027apparat séduit la foule.  Vers 1980",
    "2co":
      "Archives du Yukon, fonds du Yukon Sourdough Rendezvous 78/30, PHO 85, d. 4, n\u00B0 7",
    "3c": "Retour au mésozoïque : reproduction sur une pelouse de Whitehorse d\u0027un combat entre un tricératops et un tyrannosaure roi qui aurait eu lieu il y a environ 176  000 000 ans.",
    "3co":
      "Archives du Yukon, fonds du Bureau des affaires publiques du Yukon 81/18, PHO 298, d. 21, n\u00B0 7",
    "4c": "Le père Dave Daws, à droite, encourage un participant à l\u0027épreuve du transport des sacs de farine.  L\u0027épreuve commémore la laborieuse ascension jusqu\u0027au col Chilkoot que devaient entreprendre les chercheurs d\u0027or croulant sous le poids de leur fardeau. Vers 1970",
    "4co":
      "Archives du Yukon, fonds du Yukon Sourdough Rendezvous 78/30, PHO 86, d. 7, n\u00B0 1",
    "5c": "Whitehorse n\u0027avait pas attendu l\u0027établissement du Sourdough Rendezvous en 1962 pour s\u0027offrir un carnaval d\u0027hiver.  Mary MacBride, la main plongée dans un grand tonneau d\u0027acier, procède au tirage au sort sous l\u0027œil amusé des aspirantes reines du carnaval, dont Corinne Cyr (à droite).",
    "5co":
      "Archives du Yukon, collection Mickey DeWynter 81/153, PHO 151, n\u00B0 14",
    "6c": "Pendant le Sourdough Rendezvous, les Keystone Cops patrouillent la ville.  Si quelqu\u0027un se montre trop \u00ABgrippe-sous\u00BB pour contribuer au fonds de charité, on lui donne une leçon : on le met en \u00ABcage\u00BB et on le promène sur la rue principale pour que tous puissent voir à quoi s\u0027exposent les âmes non charitables. Vers 1960",
    "6co": "Archives du Yukon, fonds du Whitehorse Star 82/563, PHO 199, d. 1",
    "7c": "Gare aux retardataires!  Conducteur de traîneau à chiens et son équipage pris dans la glace.  1972",
    "7co":
      "Archives du Yukon, fonds du Whitehorse Star 82/563, PHO 201, d. 115, n\u00B0 58",
    "8c": "Plusieurs épreuves au programme du Rendezvous s\u0027inspirent de l\u0027expérience des pionniers qui devaient faire preuve de beaucoup de débrouillardise pour survivre.  Les concurrents doivent ici rivaliser de vitesse pour construire un feu et faire bouillir de l\u0027eau.  Vers 1970",
    "8co":
      "Archives du Yukon, fonds du Yukon Sourdough Rendezvous  78/30, PHO 86, d. 7, n\u00B0 3",
    "9c": "Il y a de tout pour tous, au Rendezvous. Jeunes participants  à une course en raquettes.  Le parcours s\u0027est avéré plus périlleux pour certains que pour d\u0027autres!  Années 1960",
    "9co":
      "Archives du Yukon, fonds du Yukon Sourdough Rendezvous 78/30, PHO 86, d. 7, n\u00B0 2",
    "10c":
      "Les gens viennent de partout dans le territoire pour participer au Rendezvous.   Jim Robb, artiste yukonnais, met la dernière touche à une vitrine décorée spécialement pour l\u0027occasion.  Pendant toute la durée du festival, la ville est prise d\u0027assaut par la foule avide de divertissement : on se costume, on fait la bombe et on oublie le temps qui passe.  Vers 1972",
    "10co":
      "Archives du Yukon, fonds Richard Harrington  79/27, PHO 105, n\u00B0 372",
    "11c":
      "Sculpture sur glace d\u0027un dragon aux crocs menaçants. Vers 1973",
    "11co":
      "Archives du Yukon, fonds du Whitehorse Star 82/563, PHO 201, d. 116, n\u00B0 112",
    "12c":
      "Les costumes d\u0027époque font fureur durant le festival.  Gillian Campbell en costume de belle de fin des années 1800 y va d\u0027une chanson pour charmer l\u0027audience.  Vers 1970",
    "12co":
      "Archives du Yukon, fonds du Bureau des affaires publiques 81/18, PHO 298, d. 21, n\u00B0 2",
    "13c":
      "Deux sauteurs à ski en pleine performance au carnaval d\u0027hiver de Whitehorse, l\u0027ancêtre du Sourdough Rendezvous.  1946.",
    "13co": "Archives du Yukon, collection W. Al Turner 87/102, n\u00B0 27",
    "14c":
      "Les spectacles de music-hall et les productions théâtrales figurent de façon proéminente dans l\u0027histoire du territoire.  Depuis la fin des années 1800, les artistes de vaudeville, danseuses de cancans, acteurs et chanteurs ont su meubler très agréablement les longues soirées d\u0027hiver pour le plus grand plaisir des Yukonnais.  Le rideau s\u0027apprête à tomber sur une autre performance de music-hall.  Vers 1970",
    "14co":
      "Archives du Yukon, fonds du Bureau des affaires publiques 81/18, PHO 298, d. 21, n0 4",
    "15c":
      "Curieux char allégorique dans le défilé du carnaval d\u0027hiver de Dawson.  On a préféré donner priorité à l\u0027expression artistique plutôt qu\u0027à l\u0027identité des commanditaires ou autres mentions.  Vers 1945-1947",
    "15co":
      "Archives du Yukon, collection Mickey DeWynter 81/153, PHO 151, n\u00B0 24",
    "16c":
      "Certaines épreuves sportives sont particulièrement amusantes, tant pour les participants que pour les spectateurs.  Synchronisation et coordination sont de rigueur dans cette course en raquette à trois jambes.   Vers 1972",
    "16co":
      "Archives du Yukon, fonds du Bureau des affaires publiques du Yukon 81/18, PHO 298, d. 21, n\u00B0 3",
    "17c":
      "La sculpture sur neige ou sur glace est une activité majeure de tout carnaval d\u0027hiver dans le Nord. Jeune fille en train d\u0027admirer un homme à longue barbe poussant une charrette.  Années 1960",
    "17co":
      "Archives du Yukon, fonds Richard Harrington 85/25, PHO 280, n\u00B0 544",
    "18c":
      "Sculptures sur neige ornant les rues de Whitehorse.  Un robot - ou s\u0027agit-il d\u0027un martien? ou d\u0027un mutant? - fait bon voisinage avec un avion de la Deuxième Guerre mondiale.  Années 1970",
    "18co":
      "Archives du Yukon, fonds du Bureau des affaires publiques du Yukon 81/18, PHO 298, d. 21, n\u00B0 6",
    "19c":
      "Durant le Rendezvous, un festival qui bat son plein tous les févriers depuis 1962, Whitehorse ressemble à une ville de mardi gras, neige en sus.  Années 1960",
    "19co":
      "Archives du Yukon, fonds du Yukon Sourdough Rendezvous 78/30, d. 4, n\u00B0 5",
    "20c":
      "Un membre de l\u0027équipe de l\u0027hôtel Capital l\u0027a échappé belle durant la course de lit.  Vers 1970",
    "20co":
      "Archives du Yukon, fonds du Bureau des affaires publiques du Yukon 81/18, PHO 298, d. 21, n\u00B0 1",
    "21c":
      "Le tiré en solo est l\u0027ultime épreuve de force canine.  Les chiens doivent tirer un traîneau chargé de sacs de nourriture pour chiens pouvant peser des centaines de kilos.  Le gagnant aura le plaisir de croquer le lot.  Années 1970",
    "21co":
      "Archives du Yukon, fonds du Bureau des affaires publiques du Yukon  81/18, PHO 298, d. 21, n\u00B0 35",
    "22c":
      "La course de traîneau à chiens est le clou du Rendezvous.  À l\u0027origine, la course se déroulait sur le fleuve Yukon.  Le conducteur encourage son attelage qui vient de prendre le départ.   En arrière-plan se dressent les bateaux à roue Casca et Whitehorse détruits par le feu deux ans plus tard.  1972",
    "22co": "Archives du Yukon, fonds Richard Harrington 79/27, PHO 105",
    "23c":
      "Le festival de musique Frostbite est l\u0027occasion pour les Yukonnais de se débarrasser du spleen de l\u0027hiver sur un air de danse. Avec une brochette bien garnie d\u0027artistes locaux et d\u0027artistes internationaux, le Frostbite satisfait tous les goûts musicaux.  1988",
    "23co": "Photographie du gouvernement du Yukon, H5-88-6",
  },
};

const winterFunInformation = {
  en: {
    "1c": "Ice skating was a natural pastime to evolve in the northern climate.  These residents of Atlin sport humorous and bizarre costumes for the occasion of this skating party.  ca. 1912-1938",
    "1co":
      "Yukon Archives, Atlin Historical Society collection 82/432, PHO 63 #41",
    "2c": "Hot springs occur in various locations throughout the Yukon.  As the water is always comfortably warm, they provide the ideal setting for outdoor relaxation.  Surrounded by a snowy landscape, these children enjoy a frolic in the Takhini Hot Springs.  ca. 1960",
    "2co": "Yukon Archives, Yukon Public Affairs fonds 81/18, PHO 299 f. 22 #3",
    "4c": "Frozen lakes provided large, smooth surfaces for motorized vehicles.  Pictured here is Atlin\u0027s first &ldquo;tricar&rdquo;, out for a spin on Atlin Lake.  1900",
    "4co": "Yukon Archives, British Columbia Archives collection, #947.",
    "5c": "Photo 1: Long winter evenings were a time to catch up on some household chores, perhaps while listening to the radio.  1938<br>Photo 2: When early Yukoners were confined indoors by the bitterly cold winter weather, many leisure activities took place around the table.  Mary and Claude Tidd while away the time with a game of &ldquo;anagrams&rdquo;, a predecessor to the popular game of &ldquo;Scrabble&rdquo;.  1930",
    "5co":
      "Photo 1: Yukon Archives, Claude Tidd fonds #8068<br>Photo 2: Yukon Archives, Claude Tidd fonds #7962",
    "6c": "Photo 1: Snowshoeing in the wilderness didn\u0027t mean depriving oneself of creature comforts.  Claude Tidd stops for a warming cup of tea and a fire.  1932<br>Photo 2: Two women and a man stop on their dogsled journey for a picnic.  A fur robe acts as a blanket and a soap box for a table as these folks settle down to a relaxing meal on the trail.  ca. 1920s",
    "6co":
      "Photo 1: Yukon Archives, Claude Tidd fonds #8116<br>Photo 2: Yukon Archives, Claude Tidd fonds #7571",
    "7c": "Some things are inherent to being Canadian.  A cold, dark winter evening in Watson Lake finds Lou Lundrigan, Bob Kliner, Kevin Hegarty and Pete Clute huddled around the radio, listening to a broadcast of &ldquo;Hockey Night in Canada&rdquo;.  1945",
    "7co": "Yukon Archives, W. Al Turner collection 88/16, PHO 365 #61A",
    "8c": "Dogsledding was a leisure activity as soon as Dawsonites had any leisure time to spend.  This group of ladies and gentlemen enjoys a picturesque mush near Dawson City.  1905",
    "8co": "Canadian Museum of Civilization, #J6125",
    "9c": "Many traditional First Nations subsistence activities were adopted by European settlers, and a number of these became recreational pursuits.  Here Mary Tidd and Honey Ryder head out for a stroll on snowshoes.  1932",
    "9co": "Yukon Archives, Claude Tidd fonds #7996",
    "10c":
      "A Yukon Boy Scout troop observes the investiture of a new member.  All the pomp and circumstance of Scout ceremonies were carried on as they were &ldquo;outside&rdquo;, although this troop endures minus 40 degree weather.  1929",
    "10co": "Yukon Archives, Iris Warner fonds 82/245, PHO 19 f. 170",
    "11c":
      "George Johnston owned the first car in Teslin. With the tires in chains, the Chev  was well-equipped for a drive across a frozen lake. ca. 1910-1940",
    "11co": "Yukon Archives, Their Own Yukon Collection 82/429, PHO 60 #110",
    "12c":
      "An invitation to the First Annual Ball of the St. Andrew\u0027s Preceptory-Knights Templar.  ca. 1905",
    "12co": "Yukon Archives, Walter R. Hamilton fonds 77/51, MSS 061",
    "13c":
      "Outdoor recreational activities must take advantage of the climate, since winter conditions begin in the autumn and extend well into spring.  Here a snowshoeing club, the &ldquo;Atlin Webfeet&rdquo;, enjoys a stroll and pose for a group portrait.  ca. 1930s",
    "13co":
      "Yukon Archives, Atlin Historical Society collection 82/430, PHO 61 #19",
    "14c":
      "The White Pass and Yukon Route railway was created in the gold rush to ferry men and supplies from the seaport at Skagway to the head of river navigation at Whitehorse.  From the start, the route\u0027s magnificent scenery made it a tourist attraction as well.  The first passenger train to reach the summit stops to allow the passengers to momentarily disembark.  1899",
    "14co": "Yukon Archives, Robert T. Whiting collection 84/36, PHO 264 #21",
    "15c":
      "Dressed in their Sunday best, these people enjoy a leisurely trip out to a mine.  There, the ladies are instructed in the finer points of gold panning.  ca. 1900-1920",
    "15co": "Yukon Archives, Blanche Lambert fonds 82/327 , PHO 22 #3",
    "16c":
      "Cycling can hardly be described as a classic Yukon leisure activity, but enthusiasts like this man remained undaunted.  The local ice rink in Dawson City provides a smooth, albeit slippery, surface for riding.  ca. 1900",
    "16co": "Yukon Archives, Cunningham family fonds 90/45, PHO 414 #6",
    "17c":
      "The prolific Claude Tidd never let a little snow stop him from taking advantage of a great photo op. Here, he sets up his camera near Mayo.  ca. 1930s",
    "17co": "Yukon Archives, Claude Tidd fonds #8526",
    "18c":
      "Membership card for the Snowy Range Dance Club.  A prudent investment, as the card is valid from &ldquo;now to eternity&rdquo;.  ca. 1905",
    "18co": "Yukon Archives, Walter R. Hamilton fonds 77/51, MSS 061",
    "19c":
      "A group of four well-dressed men and a woman pose in front of a snowman at least three times their height, possibly at the White Pass summit.  1902",
    "19co": "Yukon Archives, H.C. Barley fonds #4826",
  },
  fr: {
    "1c": "Le climat nordique était tout indiqué pour la pratique du patinage.  Pour ce groupe de résidents d\u0027Atlin, la partie de patinage revêt une toute autre allure sous des costumes amusants.  Autour des années 1912-1938",
    "1co":
      "Archives du Yukon, collection de l\u0027Atlin Historical Society 82/432, PHO 63, n\u00B0 41",
    "2c": "On trouve des sources thermales à plusieurs endroits au Yukon.  Comme l\u0027eau s\u0027y maintient à une température très confortable, ces sources sont un lieu idéal où venir se détendre en plein air.  Comme un défi lancé au décor enneigé qui les entoure, ces jeunes s\u0027en donnent à cœur joie dans l\u0027eau ravigotante des sources de Takhini.  Vers 1960",
    "2co":
      "Archives du Yukon, fonds du Bureau des affaires publiques du Yukon 81/18, PHO 299, d. 22, n\u00B0 3",
    "3c": "Le toboggan pouvait aussi bien servir à la survie qu\u0027au plaisir.  Matthew Thom est fin prêt pour une ballade dans un toboggan en bouleau de construction typique des Teslin.  Années 1920-1930",
    "3co": "Archives du Yukon, fonds George Johnston 82/428, n\u00B0 86",
    "4c": "La surface des lacs gelés se prête à merveille à la circulation des véhicules.  Le propriétaire du premier \u00ABtricycle\u00BB de la région prêt pour une équipée sur le lac Atlin. 1900",
    "4co": "Yukon Archives, British Columbia Archives collection, n\u00B0 947.",
    "5c": "1 : Les longues soirées d\u0027hiver laissaient aux gens amplement le temps de voir aux corvées domestiques, qu\u0027ils agrémentaient en écoutant la radio.  1938<br> 2 : Souvent confinés à l\u0027intérieur par les froids extrêmes, les gens s\u0027adonnaient à divers jeux sur table, comme cette partie d\u0027anagramme, l\u0027ancêtre du Scrabble, disputée entre Mary et Claude Tidd. 1930",
    "5co":
      "1 : Archives du Yukon, fonds Claude Tidd, n\u00B0 8068<br> 2 : Archives du Yukon, fonds Claude Tidd, n\u00B0 7962",
    "6c": "1 : Les déplacements en raquette n\u0027étaient pas nécessairement sans agrément.  Claude Tidd se réchauffe à un feu de camp et en buvant une bonne tasse de thé.  1932<br> 2 : Deux femmes et leur compagnon se sont arrêtés pour un déjeuner sur la neige.  Une mante en fourrure et une boîte de savons leur servent respectivement de couverture et de table.  Années 1920",
    "6co":
      "1 : Archives du Yukon, fonds Claude Tidd, n\u00B0 8116<br> 2 : Archives du Yukon, fonds Claude Tidd, n\u00B0 7571",
    "7c": "Il y a certains incontournables dans la vie de tout Canadien.  Par une froide et sombre soirée d\u0027hiver à Watson Lake, Lou Lundrigan, Bob Kliner, Kevin Hegarty et Pete Clute sont rassemblés autour du poste de radio pour la \u00ABSoirée du hockey\u00BB.  1945",
    "7co":
      "Archives du Yukon, collection W. Al Turner 88/16, PHO 365, n\u00B0 61A",
    "8c": "Dès qu\u0027ils avaient un moment de libre, les gens de Dawson n\u0027aimaient rien de mieux que de s\u0027échapper en traîneau à chiens. Groupe de femmes et d\u0027hommes en ballade en traîneau à chiens près de Dawson.  1905",
    "8co": "©Musée canadien des civilisations, J-6125",
    "9c": "Plusieurs activités de survie pratiquées par les autochtones ont été reprises par les Européens comme loisirs. Mary Tidd et Honey Ryder en ballade à raquettes.  1932",
    "9co": "Archives du Yukon, fonds Claude Tidd, n\u00B0 7996",
    "10c":
      "Un groupe de scouts assiste à l\u0027investiture d\u0027un nouveau membre.  Ces cérémonies se déroulaient en grande pompe à l\u0027extérieur, malgré que le thermomètre indiquait 40 degrés sous zéro.  1929",
    "10co": "Archives du Yukon, fonds Iris Warner 82/245, d. 170",
    "11c":
      "George Johnston a été le fier propriétaire de la première automobile à circuler à Teslin.  Équipée de chaînes autour des roues, la Chevrolet est fin prête pour la traversée du lac glacé. Entre 1910 et 1940",
    "11co":
      "Archives du Yukon, collection Their Own Yukon 82/429, PHO 60, n\u00B0 110",
    "12c":
      "Invitation au premier bal annuel du St. Andrew\u0027s Preceptory, sorte de loge des Chevaliers du temple.  Vers 1905",
    "12co": "Archives du Yukon, fonds Walter R. Hamilton 77/51, MSS 061",
    "13c":
      "Les fervents de plein air doivent réserver une large part aux plaisirs de l\u0027hiver, puisque celui se fait déjà sentir bien avant la fin de l\u0027automne et dure longtemps passé l\u0027arrivée officielle du printemps.  Un club de raquetteurs d\u0027Atlin, \u00ABLes pieds palmés\u00BB, fait la pause, le temps de prendre une photo de groupe.  Années 1930",
    "13co":
      "Archives du Yukon, collection de la Atlin Historical Society 82/430, PHO 61, n\u00B0 19",
    "14c":
      "Le chemin de fer White Pass & Yukon Route a vu le jour durant la ruée vers l\u0027or.  Il assurait le transport des passagers et des marchandises de Skagway, sur la côte, jusqu\u0027à Whitehorse, où les prospecteurs entreprenaient le voyage sur le fleuve.  Le parcours est vite devenu un trajet prisé des voyageurs pour la beauté des paysages qu\u0027il traversait.  Le premier train de passagers à atteindre le sommet s\u0027arrête pour souffler, pendant que les passagers en profitent pour se dégourdir les jambes.  1899",
    "14co":
      "Archives du Yukon, collection Robert T. Whiting 84/36, PHO 264, n\u00B0 21",
    "15c":
      "Les promeneurs ont passé leurs habits du dimanche pour une visite à la mine.     Sur place, les dames se font expliquer les rudiments du lavage de l\u0027or à la batée. Autour des années 1900-1920",
    "15co":
      "Archives du Yukon, fonds Blanche Lambert 82/327, PHO 22, n\u00B0 3",
    "16c":
      "La bicyclette n\u0027était pas vraiment l\u0027activité la plus pratiquée au Yukon, mais certains plus endurcis ne se laissaient pas démonter par les conditions climatiques.  La patinoire de Dawson, bien qu\u0027un peu glissante, offre une bonne surface de pratique.  Vers 1900",
    "16co":
      "Archives du Yukon, fonds de la famille Cunningham 90/45, PHO 414, n\u00B0 6",
    "17c":
      "Pour Claude Tidd, quelques pouces de neige est un obstacle vite surmonté quand l\u0027occasion pour une bonne photo se présente.  On le voit ici en train d\u0027installer sa caméra près de Mayo.  Années 1930",
    "17co": "Archives du Yukon, fonds Claude Tidd,  n\u00B0 8526",
    "18c":
      "Carte de membre du club de danse Snowy Range.  Un bon investissement quand on considère qu\u0027elle est valide pour l\u0027éternité!",
    "18co": "Archives du Yukon, fonds Walter R. Hamilton 77/51, MSS 061",
    "19c":
      "Quatre hommes en habit et une femme devant un bonhomme de neige au moins trois fois plus grand qu\u0027eux.  La photo a probablement été prise au sommet du col White.  1902",
    "19co": "Archives du Yukon, fonds H.C. Barley, n\u00B0 4826",
  },
};

const harvestingInformation = {
  en: {
    "1c": "A First Nations woman sets a snare in the brush in the Mayo area.  The snare is a success, and she removes and displays a large rabbit.  This catch will provide a fine pelt and a tasty meal.  ca. 1930s",
    "1co": "Yukon Archives, Claude Tidd fonds #7474",
    "2c": "In the ice-bound Yukon winter, fish are an important part of the diet.  Before Europeans came to the Territory, First Nations people caught fish by spearing them through holes cut in the ice.  These fish, caught with a hook and line, were all taken in thirty minutes.  ca. 1930s",
    "2co": "Yukon Archives, Claude Tidd fonds #7300",
    "3c": "After a successful fishing trip to Tatlmain Lake, these very large lake trout have frozen hard on the journey home. ca. 1900-1920",
    "3co": "Yukon Archives, Eileen Shilleto collection 81/31, PHO 145  #21",
    "4c": "Before European influence introduced the concept of harnessing dogs to pull sleds, the First Nations people of the Yukon relied on snowshoes to travel in winter.  Snowshoes provide easy, quiet access to wilderness areas, and are perfect for the trapping of small, wary game like lynx.  The luxurious pelts are a valuable trading commodity.",
    "4co": "Yukon Archives, Teslin Museum collection 82/353 , PHO 153 #1",
    "6c": "Two successful trappers in front of a veritable wall of furs, including fox, wolf, and wolverine pelts. The two observe a wire snare while a curious pup looks on.  ca. 1910-1940",
    "6co": "Yukon Archives, Their Own Yukon Collection 82/429, PHO 60 #111",
    "7c": "An auction sale report, listing prices paid for different types and qualities of pelts.  1938",
    "7co":
      "Yukon Archives, Taylor and Drury Co. Ltd. fonds 89/36R, COR 385 file #5",
    "8c": "A man and his son in front of his winter trapping camp near Teslin.  They are well supplied with a stove-heated tent, a cache for storing food, and snowshoes and a sled for travelling the trap line.  ca. 1920s",
    "8co": "Yukon Archives, Freddie Johnston fonds 79/119, PHO 115 #87",
    "9c": '"Bringing home the bacon" reads the photographer\u0027s original caption.  In the North, as elsewhere, heavy machinery assumed many of the tasks previously assigned to the working horse.  In this case, several hundred pounds of meat are brought home quickly and easily, and the hunter is spared the onerous task of butchering the animal in the wild.  ca. 1930-1958',
    "9co": "Yukon Archives, Geoffrey Bidlake collection 83/90, PHO 233 #40",
    "10c":
      "Travel on snowshoes was simpler and quieter for hunters in winter, and allowed access to more rugged areas.  These men shoulder a rope to drag home two mountain goats.  ca. 1912-1938",
    "10co":
      "Yukon Archives, Atlin Historical Society collection 82/432, PHO 63 #18",
    "11c": "A certificate of registration of a trapping area.  1958",
    "11co": "Yukon Archives, Connolly Family collection 82/188, MSS 016",
    "12c": "Summary of hunting regulations.  1959",
    "12co": "Yukon Archives, George Shaw collection84/94, MSS 175 f. #31",
    "13c":
      "In traditional life, people moved with the seasonal patterns of the wildlife.  At this family\u0027s camp, moosemeat drying on stakes proves the success of the hunt.  The meat and the camp itself will be transported by dog team.  The team\u0027s harness can be seen laying on the ground.  ca. 1940",
    "13co": "Yukon Archives, Bill Hare fonds #6910",
    "14c":
      "With the arrival of European settlement, the role of animal pelts graduated from clothing to currency for the First Nations people.  The shop keeper, Jack Nelson, evaluates the pelt while Alfred Silas and his grandson, David Charlie, wait for the verdict in a store in Pelly Crossing.  ca. 1950s",
    "14co": "Yukon Archives, Martha Silas collection 87/39, PHO 340 #102",
    "15c":
      "In area where the river surface remained open, it was possible to take fish with a gaff.  In this photo, taken near Skagway, these men are even wading into the icy water to reach the fish.  1898",
    "15co": "MSCUA,  University of Washington Libraries, Hegg #132",
  },
  fr: {
    "1c": "Une autochtone pose un collet dans les broussailles, dans les environs de Mayo.  La chasse a été fructueuse : admirons ce beau lapin qui, une fois dépouillé de sa peau précieuse, donnera le plus succulent des civets.  Années 1930",
    "1co": "Archives du Yukon, fonds Claude Tidd, nos 7474",
    "2c": "Pendant les longs mois où le territoire gît sous la glace, le poisson est une importante source de nourriture.  Avant l\u0027arrivée des Euro-Américains, les autochtones harponnaient les poissons à travers d\u0027étroites ouvertures pratiquées dans la glace.  Cette \u00ABenfilade\u00BB de poissons a été pêchée à la corde et hameçon en moins d\u0027une demi-heure.  Années 1930",
    "2co": "Archives du Yukon, fonds Claude Tidd, n\u00B0 7300",
    "3c": "Ces truites, prises au terme d\u0027un voyage de pêche des plus fructueux au lac Tatlmain, ont gelé dur pendant le voyage de retour. Autour des années 1900-1920",
    "3co":
      "Archives du Yukon, collection Eileen Shilleto 81/31, PHO 145, n\u00B0 21",
    "4c": "Avant d\u0027apprendre des Euro-Américains la pratique d\u0027atteler les chiens à un traîneau, les autochtones se déplaçaient en raquette pendant les mois d\u0027hiver.  Le silence inhérent aux déplacements en raquettes font de ces dernières un mode d\u0027approche idéal pour la chasse au gibier, surtout les espèces plus farouches comme le lynx, dont la fourrure a une grande valeur d\u0027échange.  ",
    "4co": "Archives du Yukon, collection du musée de Teslin 82/353, n\u00B0 1",
    "6c": "Deux piégeurs devant leur butin : un véritable mur de peaux de renard, de loup et de carcajou.  Dans le coin, un chiot curieux les observe.  Années 1910-1940",
    "6co":
      "Archives du Yukon, collection Their Own Yukon 82/429, PHO 60, n\u00B0 111",
    "7c": "Rapport d\u0027une vente aux enchères, dans lequel on indique le prix versé pour les différentes catégories et qualités de fourrures.  1938",
    "7co":
      "Archives du Yukon, fonds Taylor and Drury Co. Ltd. 89/36R, COR385, f. n\u00B0 5",
    "8c": "Un père et son fils devant leur camp de trappe d\u0027hiver près de Teslin.  Ils  ont tout ce qu\u0027il faut : une tente chauffée d\u0027un poêle, une cache où conserver la nourriture, des raquettes et un traîneau pour parcourir le territoire de piégeage.  Années 1920",
    "8co":
      "Archives du Yukon, fonds Freddie Johnston 79/119, PHO 115, n\u00B0 87",
    "9c": "\u00ABGagner son pain\u00BB, disait la légende inscrite à l\u0027origine par le photographe. Dans le Nord comme ailleurs, l\u0027équipement motorisé a rapidement remplacé le cheval de trait.  Ce chasseur pourra rentrer chez lui sans perdre de temps, son véhicule chargé de centaines de livres de viande qu\u0027il n\u0027aura pas eu à dépecer sur les lieux.  Autour des années 1930-1958",
    "9co":
      "Archives du Yukon, collection Geoffrey Bidlake 83/90, PHO 233, n\u00B0 40 ",
    "10c":
      "Les raquettes étaient encore le meilleur moyen d\u0027accéder à certains endroits éloignés, sans faire de bruit pouvant alerter les animaux.  Ces trois hommes, une même corde passée en travers de leurs épaules, tirent deux chèvres de montagnes.  Autour des années 1912-1938",
    "10co":
      "Archives du Yukon, collection de la Atlin Historical Society 82/432, PHO 63, n\u00B0 18",
    "11c":
      "Certificat d\u0027enregistrement d\u0027un territoire de piégeage.  1958",
    "11co":
      "Archives du Yukon, collection de la famille Connolly 82/188, MSS 016",
    "12c": "Sommaire du règlement de chasse.  1959",
    "12co":
      "Archives du Yukon, collection  George Shaw 84/94, MSS 175, f. n\u00B0 31",
    "13c":
      "Les autochtones pratiquant le mode de vie traditionnel se déplaçaient en fonction des migrations saisonnières du gibier.  Les gros morceaux de viande d\u0027orignal empalés sur des pieux pour sécher devant le campement familial attestent du succès de la chasse.  Les chiens, dont on aperçoit les harnais sur le sol, assureront le transport du butin et du matériel.  Vers 1940",
    "13co": "Archives du Yukon, fonds Bill Hare, n\u00B0 6910",
    "14c":
      "Suivant l\u0027arrivée des Euro-Américains, les peaux d\u0027animaux, qui anciennement servaient essentiellement à la confection de vêtements, ont acquis une toute nouvelle valeur, soit celle de monnaie d\u0027échange pour les autochtones.  Alfred Silas et son petit-fils, David Charlie, attendent le verdict de Jack Nelson, commerçant, dans sa boutique de Pelly Crossing.  Années 1950",
    "14co":
      "Archives du Yukon, collection Martha Silas 87/39, PHO 340, n\u00B0 102",
    "15c":
      "Là où les rivières étaient libres de glace, il était possible de pêcher à la gaffe.  Ces hommes, pris en photo près de Skagway, s\u0027aventurent même dans l\u0027eau glacée pour mieux saisir les poissons.  1898",
    "15co": "MSCUA, University of Washington Libraries, Hegg n\u00B0 132",
  },
};

const sportsInformation = {
  en: {
    "1c": "The enthusiasm for sports was so great in Dawson City that the very large Dawson Amateur Athletic Association building was constructed in 1902.  The building had already undergone structural changes, evidenced by the displacement of windows on the front of the building, by the time this photograph was taken in 1903",
    "1co": "National Archives of Canada no. C-022353",
    "2c": "This Dawson hockey team played for, but unfortunately did not win, the Stanley Cup in 1904, making it the northernmost and westernmost team to ever compete for the revered prize.  Posing for the team picture: Hector Smith, George Kennedy, Lorne Hammay (?), Jim Johnston, Norm Watt, Albert Forrest, Col. Joe Boyle, and Dr. Randy McLellan. 1904",
    "2co": "Yukon Archives, Joseph Paul Forrest fonds 88/25, PHO o/s15",
    "3c": "The Arctic Winter Games provide a forum for northern athletes from the Yukon, Northwest Territories, Nunavut, northern Alberta, Alaska, Greenland and Russia to compete in both European sports and traditional aboriginal games. Here, a wrestler grimaces as he pins his opponent to the mat.",
    "3co":
      "Yukon Archives, Yukon Public Affairs fonds 81/18, PHO 299  f. 22 #2",
    "4c": "Photo1: At 1600 kilometres between Whitehorse and Fairbanks, the Yukon Quest is billed as &ldquo;the toughest sled dog race in the world&rdquo;, challenging the physical and mental mettle of human and dog alike. Here, spectators line the street as a musher races by the White Pass and Yukon Route building at the beginning of the adventure. 1989.<br>\nPhoto 2: A lone team travels along the trail. The Quest is a solitary journey that requires a strong bond between mushers and their dogs. 1990<br>\nPhoto 3: These pooped pooches were born to run, but even the hardiest of huskies needs a rest after a long day. 1990",
    "4co":
      "Photo 1: Yukon Government Photograph H2-89-72<br>Photo 2: Yukon Government Photograph H2-90-50<br>Photo 3: Yukon Government Photograph H2-84-143",
    "5c": "The timekeeper looks on as cross country skiers pass the midway point in a ski race in Old Crow.  ca. 1970",
    "5co": "Yukon Archives, Chief Zzeh Gittlit School fonds #9350",
    "6c": "Before facilities had been built, the Dawson Curling Club championship was held outdoors.  Here the rinks of J. T. Lithzow and Col. Rourke vie for the title.  1901",
    "6co":
      "Yukon Archives, University of Washington photograph collection, #1213.",
    "8c": "A mascot for the Arctic Winter Games.  ca. 1972",
    "8co": "Yukon Archives, Arctic Winter Games fonds 86/74 COR 518 file #4",
    "9c": "Any sport that could be played on ice was a natural for the north.  The Dawson City Lady Curlers pose for a portrait at the Fairbanks Carnival.  ca. 1940",
    "9co": "Yukon Archives, Dawson Curling Club fonds 83/61, PHO 214 #16",
    "10c":
      "Claude Tidd tries to pick himself up after taking a tumble on a trail near Dawson.  1916",
    "10co": "Yukon Archives, Claude Tidd fonds #8497",
    "11c":
      "The White Pass basketball team pose for a group portrait with their coach in Skagway.  1902",
    "11co": "Yukon Archives, H.C. Barley fonds #5006",
    "12c":
      "A program for the Duquesne Garden in Philadelphia, featuring the Stanley Cup contending Dawson City hockey team.  1905",
    "12co": "Yukon Archives, PAM 1905-29",
    "13c":
      "Team composite photograph of a Dawson City indoor baseball team.  Organized team sports were very popular at the turn of the century.  1904",
    "13co": "Yukon Archives, Dawson City Museum collection #6397",
    "14c":
      "A featured Inuit game at the Arctic Winter Games, the One Hand Reach requires exceptional strength and balance. 1980",
    "14co":
      "Yukon Archives, Arctic Winter Games Host Society fonds 80/83, PHO 135 f. 6, sl. 1 #13",
    "15c":
      "The sharply dressed winners of the President\u0027s Trophies pose for a portrait.  1908",
    "15co": "Yukon Archives, Dawson Curling Club fonds 83/61, PHO 214 #9",
    "16c":
      "The Northwest Mounted Police hockey team, dressed in silly costumes, pose for a photograph on the ice rink of the N.W.M.P. compound in Whitehorse.  1902",
    "16co":
      "Yukon Archives, Provincial Archives of Alberta, Ernest Brown collection #863",
    "17c": "Membership card for the Dawson Amateur Athletic Association.  1906",
    "17co": "Yukon Archives, Walter R. Hamilton fonds 77/51, MSS 061",
    "18c":
      "Mukluks or moccasins are required footwear for the snowshoe  biathlon at the Arctic Winter Games. 1980",
    "18co":
      "Yukon Archives, Arctic Winter Games fonds 80/83, PHO 135 f. 18 sl. 5 #6",
    "19c": "A welcoming letter to the Games from US President Ronald Reagan.",
    "19co": "Yukon Archives, Arctic Winter Games fonds 86/74, COR 518 file #7",
  },
  fr: {
    "1c": "L\u0027érection de l\u0027immeuble de la Dawson Amateur Athletic Association en 1902 témoigne de la ferveur sportive qui animait déjà les résidents de Dawson.  À peine un an plus tard - la photo a été prise en 1903 -, on procédait déjà à des modifications de la charpente, notamment aux fenêtres sur la façade.  1903",
    "1c": "Archives nationales du Canada, n\u00B0 C-022353",
    "2c": "Même si elle n\u0027a pas remporté la victoire, cette équipe de hockey de Dawson peut s\u0027enorgueillir d\u0027avoir participé aux éliminatoires de la Coupe Stanley en 1904.  C\u0027est la seule fois où une équipe de l\u0027extrême nord-ouest canadien a participé au championnat. Hector Smith, George Kennedy, Lorne Hammay (?), Jim Johnston, Norm Watt, Albert Forrest, Joe Boyle et Randy McLellan posent pour la photo. 1904",
    "2co": "Archives du Yukon, fonds Emil Forrest 88/25, PHO o/s 15",
    "3c": "Les Jeux d\u0027hiver de l\u0027Arctique sont l\u0027occasion pour les athlètes du Yukon, des Territoires du Nord-Ouest, du Nunavut, du Nord de l\u0027Alberta, de l\u0027Alaska, du Groënland et de la Russie de se mesurer dans des épreuves sportives de style aussi bien européen qu\u0027autochtone.  Un lutteur y va d\u0027une grimace au moment d\u0027envoyer son adversaire au tapis. [sans date]",
    "3co":
      "Archives du Yukon, fonds du Bureau des affaires publiques du Yukon, 81/18, PHO 299, d. 22, n\u00B0 2",
    "4c": "1 : La Yukon Quest, avec son parcours de quelque 1600 km entre Whitehorse et Fairbanks, est considérée comme la plus éprouvante des courses de traîneaux à chiens au monde.  Seuls les plus endurcis, bêtes et hommes confondus, passent la ligne d\u0027arrivée. Les spectateurs se sont rassemblés pour encourager les conducteurs à leur départ devant l\u0027édifice de la White Pass & Yukon Route à Whitehorse. 1989<br> 2 : Un attelage fait son chemin en solitaire.  Pendant la Quest, on se retrouve souvent seul avec ses chiens, d\u0027où l\u0027importance d\u0027avoir établi des liens solides avec son attelage. 1990<br> 3 : On a beau être né pour courir, un moment de repos après une dure journée est plus qu\u0027apprécié.  1990",
    "4co":
      "1 : Photo du gouvernement du Yukon H2-89-72<br> 2 : Photo du gouvernement du Yukon H2-90-50<br> 3 : Photo du gouvernement du Yukon H2-84-143",
    "5c": "Les fondeurs filent sous le regard du chronométreur positionné au point médian du parcours.  Old Crow, vers 1970",
    "5co":
      "Archives du Yukon, fonds de l\u0027école Chief Zzeh-Gittlit, n\u00B0 9350",
    "6c": "Avant que ne soit construite l\u0027aréna, les tournois du club de curling de Dawson avaient lieu à l\u0027extérieur.  L\u0027équipe de J. T. Lithzow affronte ici l\u0027équipe du col. Rourke.  1901",
    "6co":
      "Yukon Archives, University of Washington photograph collection, n\u00B0 1213.",
    "8c": "Mascotte des Jeux d\u0027hiver de l\u0027Arctique de 1986.",
    "8co":
      "Archives du Yukon, fonds des Jeux d\u0027hiver de l\u0027Arctique 86/74, COR 518, f. n\u00B0 4",
    "9c": "On s\u0027en doute, les sports qui se pratiquent sur la glace étaient tout indiqués pour le Nord.  L\u0027équipe de curling de Dawson au carnaval de Fairbanks.  Vers 1940",
    "9co":
      "Archives du Yukon, fonds du Dawson Curling Club 83/61, PHO 214, n\u00B0 16",
    "10c":
      "Claude Tidd tente de se relever après une chute sur une piste aux environs de Dawson.  1916",
    "10co": "Archives du Yukon, fonds Claude Tidd, n\u00B0 8497",
    "11c":
      "L\u0027équipe de basketball White Pass et son entraîneur à Skagway.  1902",
    "11co": "Archives du Yukon, fonds H.C. Barley, n\u00B0 5006",
    "12c":
      "Programme du Duquesne Garden, à Philadelphie, qui donne les résultats du match de la Coupe Stanley auquel participait l\u0027équipe de Dawson.  1905",
    "12co": "Archives du Yukon, PAM 1905-29",
    "13c":
      "Photo des membres de l\u0027équipe de baseball intérieur de Dawson.  Les sports d\u0027équipe étaient très populaires au tournant du 20e siècle.  1904",
    "13co": "Archives du Yukon, collection du musée de Dawson, n\u00B0 6397",
    "14c":
      "Une des épreuves-vedettes des Jeux d\u0027hiver de l\u0027Arctique, le jeu inuit \u00ABAttrape d\u0027une main\u00BB exige des athlètes autant de force que d\u0027équilibre. 1980",
    "14co":
      "Archives du Yukon, fonds des Jeux d\u0027hiver de l\u0027Arctique 80/83, PHO 135, d. 6, m. 1, n\u00B0 13",
    "15c":
      "Les gagnants du Trophée du président ont vêtus leurs beaux atours pour la séance de photographie.  1908",
    "15co":
      "Archives du Yukon, fonds du Dawson Curling Club 83/61, PHO 214, n\u00B0 9",
    "16c":
      "Les membres de l\u0027équipe de hockey de la Police à cheval du Nord-Ouest, en costume loufoque, se laissent croquer par le photographe sur la patinoire du terrain de la P.C.N.-O. à Whitehorse.  1902",
    "16co": "Archives du Yukon, collection Ernest Brown, n\u00B0 863",
    "17c": "Carte de membre de la Dawson Amateur Athletic Association.  1906",
    "17co": "Archives du Yukon, fonds Walter R. Hamilton 77/51, MSS 061",
    "18c":
      "Les mocassins sont de mise pour le biathlon de raquettes aux Jeux d\u0027hiver de l\u0027Arctique. 1980",
    "18co":
      "Archives du Yukon, fonds des Jeux d\u0027hiver de l\u0027Arctique 80/83, PHO 135, d. 18, m.  5, n\u00B0 6",
    "19c":
      "Mot de bienvenue aux Jeux d\u0027hiver signé par le président des États-Unis, Ronald Reagan.",
    "19co":
      "Archives du Yukon, fonds des Jeux d\u0027hiver de l\u0027Arctique 86/74, COR 518, f.n\u00B0 7",
  },
};

const celebrationsInformation = {
  en: {
    "1c": "A time for coming together.  Sheltered inside from the cold and the snow, folks gather around the Christmas tree, put up by the First Nations people to welcome gold-seeking newcomers to Dyea.  1898",
    "1co": "Yukon Archives, Anton Vogee fonds #96",
    "2c": "Whitehorse was booming in the late 1940s.  The war was over, and the new highway was bringing people and prosperity to the city.  These revelers dance the night away at the Metropolitan House.  Lucille Carmichael, John Ellard, Edie (?), and Red Irwin. 1947",
    "2co": "Yukon Archives, W. Al Turner collection 88/16, PHO 365 #75",
    "3c": "A large company for dinner at the Department of Transport barracks.  Far from their families, the men congregate for Christmas dinner.  1943",
    "3co": "Yukon Archives, W. Al Turner collection 87/102, PHO 363 #3",
    "4c": "The St. Andrew\u0027s Day banquet at the Windsor Hotel in Whitehorse.  As the dead of winter approached, townspeople were eager for a party.  These gentlemen look forward to a sumptuous meal.  1902",
    "4co": "Yukon Archives, P.F. Scharschmidt collection 82/382, PHO 47 #1",
    "5c": "A Christmas Eve gathering of neighbors and friends.  1913",
    "5co": "Yukon Archives, Victoria Faulkner collection 82/400, PHO 48 #54",
    "6c": "The North American Transportation and Trading Company band (and friends) pose for a portrait in front of the company\u0027s block on Front Street in Dawson City.   1899",
    "6co": "British Columbia Archives #51491",
    "7c": 'A view of the interior of the Northwest Mounted Police mess hall in Dawson.  The Yukon Field Force is sitting down to Christmas dinner alongside their "Maxim gun".  1899',
    "7co": "Yukon Archives, Glenbow collection #2415",
    "8c": "Masquerade balls were in fashion at the turn of the century, and Dawson City was no exception.  Only some of this group of about fifty men, women, and children are in costume, probably on New Year\u0027s Eve.  1900",
    "8co":
      "Photo by Goetzman, Alaska State Library 01-246 NOT TO BE REPRODUCED WITHOUT PERMISSION FROM THE ALASKA STATE LIBRARY",
    "9c": "Guests at a masquerade ball held at the Palace Grand Theatre.  A fanciful, free-spirited release from the gloom of the Klondike winter.  1900",
    "9co": "British Columbia Archives #51504",
    "10c":
      "Christmas Eve in the cozy confines of a Quonset hut in Whitehorse.  Workers on the new highway gather to exchange gifts and greetings.  1943",
    "10co":
      "Yukon Archives, Margaret and Earle Waddington collection 82/331, PHO 32 #44",
    "11c":
      'Another masquerade ball in the Palace Grande Theatre in Dawson City.  This gala was notable for its cause; a benefit for the widows and orphans of the Boer War.  The theme for the costumes was "Great Britain and her Colonies".  1900',
    "11co": "Vancouver Public Library #33096",
    "12c": "Charter of the Loyal Order of Moose.  1913",
    "12co": "Yukon Archives, Maggie\u0027s Museum Collection 77/60 COR O/S 008",
    "13c":
      "At the St. Andrew\u0027s Ball in the Palace Grande Theatre in Dawson City, the town folk turn out for the annual bash.  The presence of both Canadian and American flags is evidence of the international population.  1900",
    "13co": "British Columbia Archives #13523",
    "14c":
      "A First Nations man stands outside his sweat house.  Traditionally covered with hides, and later with canvas, the sweat house was the site for the Shaman\u0027s treatments.  They were used by older people for the relief of rheumatism and other ailments.  n.d.",
    "14co":
      "The Bassoc Collection, Accession number 69-92-606, Archives and Manuscripts, Alaska Polar Region, University of Alaska Fairbanks",
    "15c":
      "A newspaper advertisement for the first Grand Ball of the Loyal Order of Moose, held in celebration of George Washington\u0027s birthday, and the ball itself, with all of Dawson City society in attendance.  1914",
    "15co":
      "Dawson Daily News, Yukon Archives, Alberta Knotter collection 85/54, PHO 282 #1",
    "16c":
      "The United States Army and Air Force Orchestra performs at a Department of Transport dance in Watson Lake.  For the building of the Alaska Highway, and for the duration of the war, American troops remained in the Yukon in large numbers.  1944",
    "16co": "Yukon Archives, W. Al Turner collection 88/16, PHO 365 #39A",
    "17c": "Program for the Visiting Masons Annual Reception and Ball.  1906",
    "17co": "Yukon Archives, PAM 1906-17",
    "18c": "Program for the Grand Annual Arctic Brotherhood Masque Ball.  1912",
    "18co": "Yukon Archives, PAM 1912-020",
    "19c":
      "The Grand Ball for the New Year in Mayo.  A splendid time, by all accounts, with the unmasking at eleven thirty and dancing until three, and prizes awarded for the best costumes.  First prize was claimed by the lady dressed as a rainbow.  1937",
    "19co": "Yukon Archives, Frank Buckway collection 91/29, PHO 426 #25",
    "20c":
      "The menu for the Royal Northwest Mounted Police Christmas dinner.  1904",
    "20co": "Yukon Archives, W. Shuckburgh collection 77/61, PHO 77 #1",
    "21c":
      "In addition to athletic excellence the Arctic Winter Games also celebrate northern arts and cross-cultural awareness. Here, elders and youngsters celebrate with dancing, drumming and colour., Whitehorse, 1980",
    "21co":
      "Yukon Archives, Arctic Winter Games Host Society fonds 80/83, PHO 134 f. 4 sl. 8 #9",
    "22c":
      "In addition to athletic excellence the Arctic Winter Games also celebrate northern arts and cross-cultural awareness. Here, elders and youngsters celebrate with dancing, drumming and colour., Whitehorse, 1980",
    "22co":
      "Yukon Archives, Arctic Winter Games Host Society fonds 80/83, PHO 134 f. 4 sl. 9 #9",
    "23c":
      "In addition to athletic excellence the Arctic Winter Games also celebrate northern arts and cross-cultural awareness. Here, elders and youngsters celebrate with dancing, drumming and colour., Whitehorse, 1980",
    "23co":
      "Yukon Archives, Arctic Winter Games Host Society fonds 80/83, PHO 134 f. 4 sl. 9 #12",
  },
  fr: {
    "1c": "Un temps pour se rassembler.  Faisant fi de la neige et du froid qui sévissent à l\u0027extérieur, ces joyeux lurons sont rassemblés pour fêter Noël autour de l\u0027arbre érigé par les autochtones pour accueillir les prospecteurs à Dyea.  1898",
    "1co": "Archives du Yukon, fonds Anton Vogee, n\u00B0 96",
    "2c": "Whitehorse était en plein essor dans les années 1940.  La guerre était finie, et la construction de la nouvelle route avait apporté son lot de nouveaux venus et la prospérité.  La fête va bon train à la Metropolitan House où on dansera jusqu\u0027aux petites heures du matin.  Lucille Carmichael, John Ellard, Edie (?), et Red Irwin. 1947",
    "2co":
      "Archives du Yukon, collection W. Al Turner 88/16, PHO 365, n\u00B0 75",
    "3c": "Les convives sont nombreux à ce souper donné dans les bâtiments du ministère du Transport.  Loin de leurs familles, les hommes se sont rassemblée pour célébrer Noël en compagnie de leurs pairs.  1943",
    "3co": "Archives du Yukon, collection W. Al Turner 87/102, n\u00B0 3",
    "4c": "L\u0027hiver sera bientôt à son plus féroce; quel plus somptueux pied de nez à lui faire que de se mettre sur son trente-six et se joindre aux convives rassemblés à l\u0027hôtel Windsor de Whitehorse pour le banquet de la St. Andrew\u0027s.  Le repas s\u0027annonce excellent.  1902",
    "4co": "Archives du Yukon, collection P.F. Scharschmidt 82/382, n\u00B0 1",
    "5c": "Voisins et amis se sont rassemblés pour célébrer la veille de Noël.  1913",
    "5co":
      "Archives du Yukon, collection Victoria Faulkner 82/400, PHO 48, n\u00B0 54",
    "6c": "L\u0027orchestre de la North American Transportation and Trading Company (et leurs fans) réunis pour la photo devant le bâtiment de la société sur la rue Front à Dawson.  1899",
    "6co": "British Columbia Archives, n\u00B0 51491",
    "7c": "Vue du messe des officiers de la Police à cheval du Nord-Ouest à Dawson. Les membres de la Troupe de campagne du Yukon sont attablés pour le souper de Noël, en \u00ABcompagnie\u00BB de leur fidèle protecteur, le canon Maxim.  1899",
    "7co": "Archives du Yukon, collection Glenbow, n\u00B0 2415",
    "8c": "Les bals costumés étaient très populaires au tournant du siècle dernier, et les résidents de Dawson se voulaient à la page… Du moins certains d\u0027entre eux, qu\u0027on voit ici se distinguant nettement du reste de la foule, probablement réunie pour célébrer la veille du Jour de l\u0027An.  1900",
    "8co":
      "Photo par Goetzman, Alaska State Library 01-246 Toute reproduction interdite sans l\u0027autorisation de l\u0027Alaska State Library",
    "9c": "Invités à un bal costumé donné au Palace Grand Theatre.  Une bonne façon d\u0027oublier les rigueurs de l\u0027hiver du Klondike.  1900",
    "9co": "British Columbia Archives, n\u00B0 51504",
    "10c":
      "La construction de la route de l\u0027Alaska devra attendre que ces travailleurs, entassés dans l\u0027espace sans doute chaleureux mais un tantinet exigu d\u0027une hutte quonset à Whitehorse, aient fini leur échange de cadeaux et de bons vœux la veille de Noël. 1943",
    "10co":
      "Archives du Yukon, collection Margaret et Earle Waddington 82/331, PHO 32, n0 44",
    "11c":
      "Encore un bal costumé au Palace Grand Theatre de Dawson, celui-ci pour une noble cause : la collecte de fonds destinés aux veuves et orphelins des soldats tombés à la Guerre des Boers.   Le thème de la soirée était \u00ABLa Grande-Bretagne et ses colonies\u00BB.  1900",
    "11co": "Vancouver Public Library, #33096",
    "12c": "Acte constitutif du Loyal Order of Moose.  1913",
    "12co":
      "Archives du Yukon, Collection Maggie\u0027s Museum 77/60 COR O/S 008",
    "13c":
      "Les résidents de Dawson ne manqueraient pour rien au monde le bal annuel de la St. Andrew\u0027s au Palace Grand Theatre.  Les drapeaux américains qui flottent contre les drapeaux canadiens attestent de la nature cosmopolite de la foule. 1900",
    "13co": "British Columbia Archives, n\u00B0 13523",
    "14c":
      "Un autochtone devant sa suerie.  À l\u0027origine, ces huttes étaient recouvertes de peaux, mais plus tard la toile a remplacé les peaux.  C\u0027est là que les sorciers procédaient aux guérisons.  Les personnes âgées y trouvaient un soulagement aux rhumatismes et aux autres problèmes de santé qui les tenaillaient.  [sans date]",
    "14co":
      "Collection Bassoc, numéro d\u0027accès 6992-606, Archives et manuscrits, Alaska Polar Region, Université de l\u0027Alaska, Fairbanks",
    "15c":
      "Annonce du premier bal du Loyal Order of Moose parue dans le journal et photo prise à la soirée elle-même, donnée à l\u0027occasion de l\u0027anniversaire de naissance de George Washington, à laquelle assistait le Tout-Dawson.  1914",
    "15co":
      "Dawson Daily News, Archives du Yukon, collection Knotter 85/54, PHO 282, n\u00B0 1",
    "16c":
      "L\u0027orchestre des forces armées et de l\u0027air américaines y va d\u0027un petit air à l\u0027occasion d\u0027une danse organisée dans les bâtiments du ministère du Transport à Watson Lake.  De nombreux soldats américains ont séjourné au Yukon tout au long de la construction de la route de l\u0027Alaska et pendant la guerre. 1944",
    "16co": "Archives du Yukon, collection W. Al Turner 88/66, n\u00B0 39A",
    "17c": "Programme de la soirée et du bal annuel des francs-maçons.  1906",
    "17co": "Archives du Yukon, PAM 1906-17",
    "18c": "Programme du bal masqué annuel du Arctic Brotherhood.  1912",
    "18co": "Archives du Yukon, PAM 1912-020",
    "19c":
      "Grand bal du Nouvel An à Mayo.  Toute une soirée, on s\u0027en doute, ponctuée par le retrait des masques à 23 h 30 et la remise du prix pour le plus beau costume qui est allé cette année-là à la dame déguisée en arc-en-ciel.  Puis il y la danse, la danse, et encore la danse… jusqu\u0027à trois heures du matin.  1937",
    "19co":
      "Archives du Yukon, collection Frank Buckway 91/29, PHO 426, n\u00B0 25",
    "20c":
      "Menu du réveillon de Noël de la Police à cheval du Nord-Ouest.  1904",
    "20co":
      "Archives du Yukon, collection W. Shuckburg 77/61, PHO 77, n\u00B0 1",
    "21c":
      "Les Jeux d\u0027hiver de l\u0027Arctique sont non seulement une occasion de faire valoir les prouesses sportives des athlètes, mais aussi de promouvoir les arts et les échanges interculturels.  Jeunes et moins jeunes s\u0027en donnent ici à cœur joie au son des tambours, dans l\u0027enceinte colorée.  1980",
    "21co":
      "Archives du Yukon, fonds des Jeux d’hiver de l’Arctique 80/83, PHO 134, d. 4, m. 8, n\u00B0 9",
    "22c":
      "Les Jeux d\u0027hiver de l\u0027Arctique sont non seulement une occasion de faire valoir les prouesses sportives des athlètes, mais aussi de promouvoir les arts et les échanges interculturels.  Jeunes et moins jeunes s\u0027en donnent ici à cœur joie au son des tambours, dans l\u0027enceinte colorée.  1980",
    "22co":
      "Archives du Yukon, fonds des Jeux d’hiver de l’Arctique 80/83, PHO 134, d. 4, m. 9, n\u00B0 9",
    "23c":
      "Les Jeux d\u0027hiver de l\u0027Arctique sont non seulement une occasion de faire valoir les prouesses sportives des athlètes, mais aussi de promouvoir les arts et les échanges interculturels.  Jeunes et moins jeunes s\u0027en donnent ici à cœur joie au son des tambours, dans l\u0027enceinte colorée.  1980",
    "23co":
      "Archives du Yukon, fonds des Jeux d’hiver de l’Arctique 80/83, PHO 134, d. 4, m. 9, n\u00B0 12",
  },
};

const galleryNames = [
  "festivals",
  "winter_fun",
  "harvesting",
  "sports",
  "celebrations",
];

// Get current locale
const address = new URL(window.location.href);
const path = address.pathname;
const locale = path.split("/")[2];

// Get url params form query string
const urlParams = new URLSearchParams(window.location.search);

// Get the gallery name from the query string
let galleryName = urlParams.get("c");

// Check for valid gallery name
if (!galleryNames.includes(galleryName)) {
  galleryName = "";
}

// Get the image number from the query string
let imageNumber = Number.parseInt(urlParams.get("i"));
if (!imageNumber > 0) {
  imageNumber = 0;
}

let navbarImage = "home";
let arrowColor = "yellow";
let maxImageNumber = 0;

let photoCaption = "";
let photoCollection = "";
let photoImage = "";

let showFestivalsIndicator = false;
let showWinterFunIndicator = false;
let showHarvestingIndicator = false;
let showSportsIndicator = false;
let showCelebrationsIndicator = false;

// Set up variables based on gallery
switch (galleryName) {
  case "festivals":
    navbarImage = "festivals";
    arrowColor = "red";
    photoCaption = festivalInformation[locale][`${imageNumber}c`];
    photoCollection = festivalInformation[locale][`${imageNumber}co`];
    photoImage = `1-${imageNumber}`;
    maxImageNumber = 23;
    showFestivalsIndicator = true;
    break;

  case "winter_fun":
    navbarImage = "winter_fun";
    arrowColor = "dblue";
    photoCaption = winterFunInformation[locale][`${imageNumber}c`];
    photoCollection = winterFunInformation[locale][`${imageNumber}co`];
    photoImage = `2-${imageNumber}`;
    maxImageNumber = 20;
    showWinterFunIndicator = true;
    break;

  case "harvesting":
    navbarImage = "harvesting";
    arrowColor = "orange";
    photoCaption = harvestingInformation[locale][`${imageNumber}c`];
    photoCollection = harvestingInformation[locale][`${imageNumber}co`];
    photoImage = `3-${imageNumber}`;
    maxImageNumber = 16;
    showHarvestingIndicator = true;
    break;

  case "sports":
    navbarImage = "sports";
    arrowColor = "green";
    photoCaption = sportsInformation[locale][`${imageNumber}c`];
    photoCollection = sportsInformation[locale][`${imageNumber}co`];
    photoImage = `4-${imageNumber}`;
    maxImageNumber = 20;
    showSportsIndicator = true;
    break;

  case "celebrations":
    navbarImage = "celebrations";
    arrowColor = "lblue";
    photoCaption = celebrationsInformation[locale][`${imageNumber}c`];
    photoCollection = celebrationsInformation[locale][`${imageNumber}co`];
    photoImage = `5-${imageNumber}`;
    maxImageNumber = 24;
    showCelebrationsIndicator = true;
    break;

  default:
    galleryName = "";
    navbarImage = "home";
    arrowColor = "yellow";
    maxImageNumber = 0;
    break;
}

// Create the code for placing the image or error message
let hasPhoto = false;
let photoImageLink = "";
let photoAltText = "";
if (galleryName != "" && imageNumber != 0) {
  hasPhoto = true;
  photoImageLink = `../assets/images/photos/${photoImage}.jpg`;
  photoAltText = `${photoCaption} ${photoCollection}`;
}

let backToGalleryLink = "#";
let navbarMajorLine = "home";
let previousImageLink = "";
let showPreviousImage = false;
let nextImageLink = "";
let showNextImage = false;
let previousImageNumber = 0;
let nextImageNumber = 0;

if (galleryName != "") {
  backToGalleryLink = `${galleryName}.html`;
  navbarMajorLine = galleryName;

  previousImageNumber = getPreviousImageNumber(galleryName, imageNumber);
  if (previousImageNumber > 0) {
    showPreviousImage = true;
    previousImageLink = `view_image.html?c=${galleryName}&i=${previousImageNumber}`;
  }

  nextImageNumber = getNextImageNumber(galleryName, imageNumber);
  if (nextImageNumber < maxImageNumber) {
    showNextImage = true;
    nextImageLink = `view_image.html?c=${galleryName}&i=${nextImageNumber}`;
  }
}

const ImageViewerApp = {
  data() {
    return {
      backToGalleryLink,
      hasPhoto,
      leftArrowColorSrc: `../assets/images/left_arrow_${arrowColor}.gif`,
      navbarMajorLineSrc: `../assets/images/${locale}/nav_major_${navbarMajorLine}.jpg`,
      nextImageLink,
      photoAltText,
      photoCaption,
      photoCollection,
      photoImageLink,
      previousImageLink,
      rightArrowColorSrc: `../assets/images/right_arrow_${arrowColor}.gif`,
      showCelebrationsIndicator,
      showFestivalsIndicator,
      showHarvestingIndicator,
      showNextImage,
      showPreviousImage,
      showSportsIndicator,
      showWinterFunIndicator,
    };
  },
};

Vue.createApp(ImageViewerApp).mount("#image-viewer-app");
