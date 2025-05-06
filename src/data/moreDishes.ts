import { Dish } from '@/types';

export const moreDishes: Dish[] = [
  // Additional German dishes
  {
    id: '101',
    imageUrl: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b',
    price: 15.99,
    prepTime: 80,
    category: 'meat',
    audioUrl: {
      en: '/audio/leberkase-en.mp3',
      de: '/audio/leberkase-de.mp3',
      es: '/audio/leberkase-es.mp3',
      fr: '/audio/leberkase-fr.mp3',
    },
    translations: {
      en: {
        name: 'Leberkäse',
        description: 'A German specialty made of ground meat baked into a loaf, often served with sweet mustard and pretzel.',
        ingredients: ['Ground beef', 'Ground pork', 'Bacon', 'Onions', 'Salt', 'Pepper', 'Sweet mustard', 'Pretzels'],
        region: 'Bavaria',
        preparationSteps: [
          'Preheat oven to 180°C (350°F).',
          'Finely chop bacon and onions.',
          'Mix all ingredients in a large bowl.',
          'Press the mixture into a loaf pan.',
          'Bake for approximately 1 hour until the top is golden brown and crispy.',
          'Let cool slightly before slicing.',
          'Serve warm with sweet mustard and pretzels.'
        ],
        tips: [
          'For the most authentic flavor, use a mixture of veal, pork, and beef.',
          'Can be sliced and pan-fried until crispy for a different serving option.',
          'Traditionally eaten with potato salad or sauerkraut.',
          'In Bavaria, often enjoyed as a quick breakfast or lunch in a bread roll.'
        ]
      },
      de: {
        name: 'Leberkäse',
        description: 'Eine deutsche Spezialität aus gemahlenem Fleisch, zu einem Laib gebacken, oft mit süßem Senf und Breze serviert.',
        ingredients: ['Rinderhackfleisch', 'Schweinehackfleisch', 'Speck', 'Zwiebeln', 'Salz', 'Pfeffer', 'Süßer Senf', 'Brezen'],
        region: 'Bayern',
        preparationSteps: [
          'Ofen auf 180°C vorheizen.',
          'Speck und Zwiebeln fein hacken.',
          'Alle Zutaten in einer großen Schüssel mischen.',
          'Die Mischung in eine Kastenform drücken.',
          'Etwa 1 Stunde backen, bis die Oberseite goldbraun und knusprig ist.',
          'Vor dem Schneiden leicht abkühlen lassen.',
          'Warm mit süßem Senf und Brezen servieren.'
        ],
        tips: [
          'Für den authentischsten Geschmack eine Mischung aus Kalb, Schwein und Rind verwenden.',
          'Kann in Scheiben geschnitten und in der Pfanne knusprig gebraten werden für eine andere Serviervariante.',
          'Wird traditionell mit Kartoffelsalat oder Sauerkraut gegessen.',
          'In Bayern oft als schnelles Frühstück oder Mittagessen im Brötchen genossen.'
        ]
      },
      es: {
        name: 'Leberkäse',
        description: 'Una especialidad alemana hecha de carne molida horneada en forma de pan, a menudo servida con mostaza dulce y pretzel.',
        ingredients: ['Carne de res molida', 'Carne de cerdo molida', 'Tocino', 'Cebollas', 'Sal', 'Pimienta', 'Mostaza dulce', 'Pretzels'],
        region: 'Baviera',
        preparationSteps: [
          'Precaliente el horno a 180°C (350°F).',
          'Pique finamente el tocino y las cebollas.',
          'Mezcle todos los ingredientes en un tazón grande.',
          'Presione la mezcla en un molde de pan.',
          'Hornee durante aproximadamente 1 hora hasta que la parte superior esté dorada y crujiente.',
          'Deje enfriar ligeramente antes de cortar.',
          'Sirva caliente con mostaza dulce y pretzels.'
        ],
        tips: [
          'Para el sabor más auténtico, use una mezcla de ternera, cerdo y res.',
          'Se puede cortar en rodajas y freír en la sartén hasta que quede crujiente para una opción de servir diferente.',
          'Tradicionalmente se come con ensalada de patatas o chucrut.',
          'En Baviera, a menudo se disfruta como un desayuno o almuerzo rápido en un panecillo.'
        ]
      },
      fr: {
        name: 'Leberkäse',
        description: "Une spécialité allemande à base de viande hachée cuite en pain, souvent servie avec de la moutarde douce et un bretzel.",
        ingredients: ['Bœuf haché', 'Porc haché', 'Bacon', 'Oignons', 'Sel', 'Poivre', 'Moutarde douce', 'Bretzels'],
        region: 'Bavière',
        preparationSteps: [
          'Préchauffez le four à 180°C (350°F).',
          'Hachez finement le bacon et les oignons.',
          'Mélangez tous les ingrédients dans un grand bol.',
          'Pressez le mélange dans un moule à pain.',
          "Faites cuire pendant environ 1 heure jusqu'à ce que le dessus soit doré et croustillant.",
          'Laissez refroidir légèrement avant de trancher.',
          'Servez chaud avec de la moutarde douce et des bretzels.'
        ],
        tips: [
          'Pour la saveur la plus authentique, utilisez un mélange de veau, de porc et de bœuf.',
          'Peut être tranché et poêlé jusqu\'à ce qu\'il soit croustillant pour une option de service différente.',
          'Traditionnellement mangé avec une salade de pommes de terre ou de la choucroute.',
          'En Bavière, souvent apprécié comme petit déjeuner ou déjeuner rapide dans un petit pain.'
        ]
      }
    }
  },
  {
    id: '102',
    imageUrl: 'https://eat.de/wp-content/uploads/2022/09/kohlrouladen-backofen-9873-1170x780.jpg',
    price: 14.99,
    prepTime: 60,
    category: 'meat',
    audioUrl: {
      en: '/audio/kohlroulade-en.mp3',
      de: '/audio/kohlroulade-de.mp3',
      es: '/audio/kohlroulade-es.mp3',
      fr: '/audio/kohlroulade-fr.mp3',
    },
    translations: {
      en: {
        name: 'Kohlroulade',
        description: 'Cabbage leaves stuffed with ground meat, rice, and spices, simmered in a savory tomato sauce.',
        ingredients: ['Cabbage', 'Ground beef', 'Ground pork', 'Rice', 'Onions', 'Eggs', 'Tomato sauce', 'Sour cream'],
        region: 'Throughout Germany',
        preparationSteps: [
          'Blanch large cabbage leaves in boiling water until pliable.',
          'Mix ground meat with cooked rice, diced onions, eggs, and spices.',
          'Place a portion of the filling onto each cabbage leaf.',
          'Roll the cabbage leaves around the filling, tucking in the sides.',
          'Place the rolls seam-side down in a large pot.',
          'Cover with tomato sauce and simmer for about 45 minutes.',
          'Serve with a dollop of sour cream and boiled potatoes.'
        ],
        tips: [
          'To easily remove whole cabbage leaves, core the cabbage and blanch it whole.',
          'For a smoky flavor, add a bit of smoked paprika to the filling.',
          'These rolls freeze well, making them perfect for meal prep.',
          'For an authentic East German version, use sauerkraut instead of fresh cabbage.'
        ]
      },
      de: {
        name: 'Kohlroulade',
        description: 'Kohlblätter gefüllt mit Hackfleisch, Reis und Gewürzen, geschmort in einer herzhaften Tomatensoße.',
        ingredients: ['Kohl', 'Rinderhackfleisch', 'Schweinehackfleisch', 'Reis', 'Zwiebeln', 'Eier', 'Tomatensoße', 'Saure Sahne'],
        region: 'In ganz Deutschland',
        preparationSteps: [
          'Große Kohlblätter in kochendem Wasser blanchieren, bis sie biegsam sind.',
          'Hackfleisch mit gekochtem Reis, gewürfelten Zwiebeln, Eiern und Gewürzen mischen.',
          'Eine Portion der Füllung auf jedes Kohlblatt legen.',
          'Die Kohlblätter um die Füllung rollen und dabei die Seiten einschlagen.',
          'Die Rouladen mit der Naht nach unten in einen großen Topf legen.',
          'Mit Tomatensoße bedecken und etwa 45 Minuten köcheln lassen.',
          'Mit einem Klecks saurer Sahne und gekochten Kartoffeln servieren.'
        ],
        tips: [
          'Um ganze Kohlblätter leicht zu entfernen, den Kohl entkernen und im Ganzen blanchieren.',
          'Für ein rauchiges Aroma etwas geräuchertes Paprikapulver zur Füllung geben.',
          'Diese Rouladen lassen sich gut einfrieren und eignen sich daher perfekt für die Vorbereitung von Mahlzeiten.',
          'Für eine authentische ostdeutsche Version Sauerkraut anstelle von frischem Kohl verwenden.'
        ]
      },
      es: {
        name: 'Rollitos de Col',
        description: 'Hojas de col rellenas de carne molida, arroz y especias, cocinadas a fuego lento en una sabrosa salsa de tomate.',
        ingredients: ['Col', 'Carne de res molida', 'Carne de cerdo molida', 'Arroz', 'Cebollas', 'Huevos', 'Salsa de tomate', 'Crema agria'],
        region: 'Por toda Alemania',
        preparationSteps: [
          'Blanquee las hojas grandes de col en agua hirviendo hasta que estén flexibles.',
          'Mezcle la carne molida con arroz cocido, cebollas en cubitos, huevos y especias.',
          'Coloque una porción del relleno en cada hoja de col.',
          'Enrolle las hojas de col alrededor del relleno, doblando los lados.',
          'Coloque los rollos con la costura hacia abajo en una olla grande.',
          'Cubra con salsa de tomate y cocine a fuego lento durante unos 45 minutos.',
          'Sirva con una cucharada de crema agria y patatas hervidas.'
        ],
        tips: [
          'Para quitar fácilmente hojas enteras de col, quite el corazón de la col y blanquéela entera.',
          'Para un sabor ahumado, añada un poco de pimentón ahumado al relleno.',
          'Estos rollitos se congelan bien, lo que los hace perfectos para la preparación de comidas.',
          'Para una versión auténtica de Alemania Oriental, use chucrut en lugar de col fresca.'
        ]
      },
      fr: {
        name: 'Roulades de Chou',
        description: "Feuilles de chou farcies de viande hachée, de riz et d'épices, mijotées dans une sauce tomate savoureuse.",
        ingredients: ['Chou', 'Bœuf haché', 'Porc haché', 'Riz', 'Oignons', 'Œufs', 'Sauce tomate', 'Crème fraîche'],
        region: "Dans toute l'Allemagne",
        preparationSteps: [
          "Blanchissez de grandes feuilles de chou dans de l'eau bouillante jusqu'à ce qu'elles soient souples.",
          'Mélangez la viande hachée avec du riz cuit, des oignons en dés, des œufs et des épices.',
          'Placez une portion de la farce sur chaque feuille de chou.',
          'Roulez les feuilles de chou autour de la farce, en rentrant les côtés.',
          'Placez les rouleaux côté couture vers le bas dans une grande casserole.',
          'Couvrez de sauce tomate et laissez mijoter pendant environ 45 minutes.',
          'Servez avec une cuillère de crème fraîche et des pommes de terre bouillies.'
        ],
        tips: [
          'Pour retirer facilement des feuilles entières de chou, retirez le cœur du chou et blanchissez-le entier.',
          'Pour une saveur fumée, ajoutez un peu de paprika fumé à la farce.',
          'Ces rouleaux se congèlent bien, ce qui les rend parfaits pour la préparation des repas.',
          'Pour une version authentique d\'Allemagne de l\'Est, utilisez de la choucroute au lieu du chou frais.'
        ]
      }
    }
  },
  {
    id: '103',
    imageUrl: 'https://images.unsplash.com/photo-1562967915-92ae0c320a01',
    price: 11.99,
    prepTime: 45,
    category: 'desserts',
    audioUrl: {
      en: '/audio/kaiserschmarrn-en.mp3',
      de: '/audio/kaiserschmarrn-de.mp3',
      es: '/audio/kaiserschmarrn-es.mp3',
      fr: '/audio/kaiserschmarrn-fr.mp3',
    },
    translations: {
      en: {
        name: 'Kaiserschmarrn',
        description: 'A fluffy shredded pancake, served with powdered sugar and fruit compote, originally from Austria but popular in southern Germany.',
        ingredients: ['Flour', 'Milk', 'Eggs', 'Sugar', 'Butter', 'Raisins', 'Powdered sugar', 'Applesauce or plum compote'],
        region: 'Bavaria and Baden-Württemberg',
        preparationSteps: [
          'Separate the eggs and beat the whites until stiff peaks form.',
          'Mix the egg yolks with milk, flour, and a pinch of salt to make a smooth batter.',
          'Gently fold in the beaten egg whites and raisins (if using).',
          'Melt butter in a large frying pan and pour in the batter.',
          'Cook until the bottom is golden, then flip or tear into pieces to cook through.',
          'Use two forks to tear the pancake into bite-sized pieces while cooking.',
          'Sprinkle with powdered sugar and serve hot with fruit compote.'
        ],
        tips: [
          'For an authentic touch, flambe the Kaiserschmarrn with rum before serving.',
          'Soak the raisins in rum for extra flavor.',
          'The name means "Emperor\'s mess," supposedly because Emperor Franz Joseph I of Austria loved this dish.',
          'It can be served as a dessert or a light main course.'
        ]
      },
      de: {
        name: 'Kaiserschmarrn',
        description: 'Ein fluffiger, zerrissener Pfannkuchen, serviert mit Puderzucker und Früchtekompott, ursprünglich aus Österreich, aber beliebt in Süddeutschland.',
        ingredients: ['Mehl', 'Milch', 'Eier', 'Zucker', 'Butter', 'Rosinen', 'Puderzucker', 'Apfelmus oder Pflaumenkompott'],
        region: 'Bayern und Baden-Württemberg',
        preparationSteps: [
          'Die Eier trennen und das Eiweiß steif schlagen.',
          'Die Eigelbe mit Milch, Mehl und einer Prise Salz zu einem glatten Teig verrühren.',
          'Den geschlagenen Eischnee und die Rosinen (falls verwendet) vorsichtig unterheben.',
          'Butter in einer großen Pfanne schmelzen und den Teig hineingießen.',
          'Kochen, bis die Unterseite goldbraun ist, dann wenden oder in Stücke reißen, um durchzugaren.',
          'Mit zwei Gabeln den Pfannkuchen während des Kochens in mundgerechte Stücke zerreißen.',
          'Mit Puderzucker bestreuen und heiß mit Früchtekompott servieren.'
        ],
        tips: [
          'Für eine authentische Note den Kaiserschmarrn vor dem Servieren mit Rum flambieren.',
          'Die Rosinen in Rum einweichen für zusätzliches Aroma.',
          'Der Name bedeutet "Schmarrn des Kaisers", angeblich weil Kaiser Franz Joseph I. von Österreich dieses Gericht liebte.',
          'Er kann als Dessert oder als leichte Hauptspeise serviert werden.'
        ]
      },
      es: {
        name: 'Kaiserschmarrn',
        description: 'Un esponjoso panqueque desmenuzado, servido con azúcar glas y compota de frutas, originario de Austria pero popular en el sur de Alemania.',
        ingredients: ['Harina', 'Leche', 'Huevos', 'Azúcar', 'Mantequilla', 'Pasas', 'Azúcar glas', 'Compota de manzana o ciruela'],
        region: 'Baviera y Baden-Wurtemberg',
        preparationSteps: [
          'Separe los huevos y bata las claras hasta que se formen picos firmes.',
          'Mezcle las yemas con leche, harina y una pizca de sal para hacer una masa suave.',
          'Incorpore suavemente las claras batidas y las pasas (si las usa).',
          'Derrita mantequilla en una sartén grande y vierta la masa.',
          'Cocine hasta que la parte inferior esté dorada, luego voltee o rompa en pedazos para cocinar completamente.',
          'Use dos tenedores para desgarrar el panqueque en trozos del tamaño de un bocado mientras cocina.',
          'Espolvoree con azúcar glas y sirva caliente con compota de frutas.'
        ],
        tips: [
          'Para un toque auténtico, flamee el Kaiserschmarrn con ron antes de servir.',
          'Remoje las pasas en ron para un sabor extra.',
          'El nombre significa "desorden del Emperador", supuestamente porque el Emperador Francisco José I de Austria amaba este plato.',
          'Se puede servir como postre o como plato principal ligero.'
        ]
      },
      fr: {
        name: 'Kaiserschmarrn',
        description: "Une crêpe moelleuse déchiquetée, servie avec du sucre glace et de la compote de fruits, originaire d'Autriche mais populaire dans le sud de l'Allemagne.",
        ingredients: ['Farine', 'Lait', 'Œufs', 'Sucre', 'Beurre', 'Raisins secs', 'Sucre glace', 'Compote de pommes ou de prunes'],
        region: 'Bavière et Bade-Wurtemberg',
        preparationSteps: [
          'Séparez les œufs et battez les blancs jusqu\'à ce qu\'ils forment des pics fermes.',
          'Mélangez les jaunes d\'œufs avec du lait, de la farine et une pincée de sel pour faire une pâte lisse.',
          'Incorporez délicatement les blancs d\'œufs battus et les raisins secs (si utilisés).',
          'Faites fondre du beurre dans une grande poêle et versez la pâte.',
          'Faites cuire jusqu\'à ce que le fond soit doré, puis retournez ou déchirez en morceaux pour cuire complètement.',
          'Utilisez deux fourchettes pour déchirer la crêpe en morceaux de la taille d\'une bouchée pendant la cuisson.',
          'Saupoudrez de sucre glace et servez chaud avec de la compote de fruits.'
        ],
        tips: [
          'Pour une touche authentique, flambez le Kaiserschmarrn au rhum avant de servir.',
          'Faites tremper les raisins secs dans du rhum pour plus de saveur.',
          'Le nom signifie "désordre de l\'Empereur", supposément parce que l\'Empereur François-Joseph Ier d\'Autriche adorait ce plat.',
          'Il peut être servi comme dessert ou comme plat principal léger.'
        ]
      }
    }
  },
  {
    id: '104',
    imageUrl: 'https://rezeto.com/wp-content/uploads/2020/06/Semmelkn%C3%B6del.jpg',
    price: 13.99,
    prepTime: 40,
    category: 'sides',
    audioUrl: {
      en: '/audio/knodel-en.mp3',
      de: '/audio/knodel-de.mp3',
      es: '/audio/knodel-es.mp3',
      fr: '/audio/knodel-fr.mp3',
    },
    translations: {
      en: {
        name: 'Semmelknödel',
        description: 'Traditional bread dumplings made from dried bread rolls, herbs, and onions, perfect for soaking up gravy.',
        ingredients: ['Stale bread rolls', 'Milk', 'Eggs', 'Onions', 'Parsley', 'Nutmeg', 'Butter', 'Flour'],
        region: 'Bavaria',
        preparationSteps: [
          'Cut stale bread rolls into small cubes.',
          'Sauté finely chopped onions in butter until translucent.',
          'Pour warm milk over the bread cubes and let soak for 15 minutes.',
          'Add beaten eggs, sautéed onions, chopped parsley, nutmeg, salt, and pepper.',
          'Mix well and form into round dumplings.',
          'Gently simmer the dumplings in salted water for about 15-20 minutes.',
          'Serve as a side dish with roasts and rich gravy.'
        ],
        tips: [
          'The bread should be at least a day old for the best texture.',
          'If the mixture is too wet, add a bit of flour to help bind it.',
          'Test if the dumplings are done by cutting one in half - it should be moist but not wet inside.',
          'Leftover dumplings can be sliced and pan-fried for a delicious breakfast dish.'
        ]
      },
      de: {
        name: 'Semmelknödel',
        description: 'Traditionelle Brotknödel aus getrockneten Brötchen, Kräutern und Zwiebeln, perfekt zum Aufsaugen von Soße.',
        ingredients: ['Altbackene Brötchen', 'Milch', 'Eier', 'Zwiebeln', 'Petersilie', 'Muskatnuss', 'Butter', 'Mehl'],
        region: 'Bayern',
        preparationSteps: [
          'Altbackene Brötchen in kleine Würfel schneiden.',
          'Fein gehackte Zwiebeln in Butter glasig dünsten.',
          'Warme Milch über die Brotwürfel gießen und 15 Minuten einweichen lassen.',
          'Verquirlte Eier, gedünstete Zwiebeln, gehackte Petersilie, Muskatnuss, Salz und Pfeffer hinzufügen.',
          'Gut vermischen und zu runden Knödeln formen.',
          'Die Knödel etwa 15-20 Minuten in Salzwasser sanft köcheln lassen.',
          'Als Beilage zu Braten und kräftiger Soße servieren.'
        ],
        tips: [
          'Das Brot sollte für die beste Textur mindestens einen Tag alt sein.',
          'Wenn die Mischung zu feucht ist, etwas Mehl hinzufügen, um sie zu binden.',
          'Testen Sie, ob die Knödel fertig sind, indem Sie einen halbieren - er sollte innen feucht, aber nicht nass sein.',
          'Übrig gebliebene Knödel können in Scheiben geschnitten und in der Pfanne gebraten werden für ein leckeres Frühstücksgericht.'
        ]
      },
      es: {
        name: 'Albóndigas de Pan',
        description: 'Albóndigas tradicionales de pan hechas de panecillos secos, hierbas y cebollas, perfectas para absorber la salsa.',
        ingredients: ['Panecillos duros', 'Leche', 'Huevos', 'Cebollas', 'Perejil', 'Nuez moscada', 'Mantequilla', 'Harina'],
        region: 'Baviera',
        preparationSteps: [
          'Corte los panecillos duros en cubos pequeños.',
          'Saltee las cebollas finamente picadas en mantequilla hasta que estén transparentes.',
          'Vierta leche tibia sobre los cubos de pan y deje en remojo durante 15 minutos.',
          'Añada huevos batidos, cebollas salteadas, perejil picado, nuez moscada, sal y pimienta.',
          'Mezcle bien y forme albóndigas redondas.',
          'Cocine suavemente las albóndigas en agua con sal durante unos 15-20 minutos.',
          'Sirva como guarnición con asados y salsa rica.'
        ],
        tips: [
          'El pan debe tener al menos un día de antigüedad para la mejor textura.',
          'Si la mezcla está demasiado húmeda, añada un poco de harina para ayudar a unirla.',
          'Pruebe si las albóndigas están hechas cortando una por la mitad - debe estar húmeda pero no mojada por dentro.',
          'Las albóndigas sobrantes pueden cortarse en rodajas y freírse en la sartén para un delicioso plato de desayuno.'
        ]
      },
      fr: {
        name: 'Boulettes de Pain',
        description: "Boulettes de pain traditionnelles faites de petits pains séchés, d'herbes et d'oignons, parfaites pour absorber la sauce.",
        ingredients: ['Petits pains rassis', 'Lait', 'Œufs', 'Oignons', 'Persil', 'Muscade', 'Beurre', 'Farine'],
        region: 'Bavière',
        preparationSteps: [
          'Coupez les petits pains rassis en petits cubes.',
          'Faites revenir les oignons finement hachés dans du beurre jusqu\'à ce qu\'ils soient translucides.',
          'Versez du lait chaud sur les cubes de pain et laissez tremper pendant 15 minutes.',
          'Ajoutez les œufs battus, les oignons revenus, le persil haché, la muscade, le sel et le poivre.',
          'Mélangez bien et formez des boulettes rondes.',
          'Faites mijoter doucement les boulettes dans de l\'eau salée pendant environ 15-20 minutes.',
          'Servez en accompagnement de rôtis et de sauce riche.'
        ],
        tips: [
          'Le pain doit être vieux d\'au moins un jour pour la meilleure texture.',
          'Si le mélange est trop humide, ajoutez un peu de farine pour aider à le lier.',
          'Vérifiez si les boulettes sont cuites en en coupant une en deux - elle doit être humide mais pas mouillée à l\'intérieur.',
          'Les boulettes restantes peuvent être tranchées et poêlées pour un délicieux plat de petit déjeuner.'
        ]
      }
    }
  },
  {
    id: '105',
    imageUrl: 'https://eat.de/wp-content/uploads/2022/11/bienenstich-vom-baecker-0644-2-1536x1024.jpg',
    price: 12.99,
    prepTime: 55,
    category: 'desserts',
    audioUrl: {
      en: '/audio/bienenstich-en.mp3',
      de: '/audio/bienenstich-de.mp3',
      es: '/audio/bienenstich-es.mp3',
      fr: '/audio/bienenstich-fr.mp3',
    },
    translations: {
      en: {
        name: 'Bienenstich',
        description: '"Bee Sting Cake" - a traditional German dessert with a honey almond topping and vanilla custard filling.',
        ingredients: ['Yeast dough', 'Butter', 'Honey', 'Almonds', 'Vanilla custard', 'Cream', 'Sugar', 'Eggs'],
        region: 'Throughout Germany',
        preparationSteps: [
          'Prepare a yeast dough and let it rise until doubled in size.',
          'Roll out the dough into a rectangular shape and place in a baking pan.',
          'For the topping, melt butter with honey and sugar, then add sliced almonds.',
          'Spread the almond mixture over the dough.',
          'Bake at 180°C (350°F) until golden brown and caramelized on top.',
          'Meanwhile, prepare a thick vanilla custard.',
          'When cool, slice the cake horizontally and fill with the custard.'
        ],
        tips: [
          'Watch the cake carefully as it bakes - the honey-almond topping can burn quickly.',
          'For extra richness, fold some whipped cream into the custard filling.',
          'The name "Bee Sting" comes from the sweet honey topping that attracts bees.',
          'Best served fresh the same day, but can be refrigerated for up to 2 days.'
        ]
      },
      de: {
        name: 'Bienenstich',
        description: 'Ein traditionelles deutsches Dessert mit Honig-Mandel-Belag und Vanillepuddingfüllung.',
        ingredients: ['Hefeteig', 'Butter', 'Honig', 'Mandeln', 'Vanillepudding', 'Sahne', 'Zucker', 'Eier'],
        region: 'In ganz Deutschland',
        preparationSteps: [
          'Einen Hefeteig zubereiten und gehen lassen, bis er sich verdoppelt hat.',
          'Den Teig zu einer rechteckigen Form ausrollen und in eine Backform legen.',
          'Für den Belag Butter mit Honig und Zucker schmelzen, dann gehobelte Mandeln hinzufügen.',
          'Die Mandelmischung auf dem Teig verteilen.',
          'Bei 180°C backen, bis die Oberseite goldbraun und karamellisiert ist.',
          'In der Zwischenzeit einen dicken Vanillepudding zubereiten.',
          'Nach dem Abkühlen den Kuchen horizontal durchschneiden und mit dem Pudding füllen.'
        ],
        tips: [
          'Den Kuchen beim Backen gut beobachten - der Honig-Mandel-Belag kann schnell verbrennen.',
          'Für extra Cremigkeit etwas geschlagene Sahne unter die Puddingfüllung heben.',
          'Der Name "Bienenstich" kommt vom süßen Honigbelag, der Bienen anzieht.',
          'Am besten frisch am selben Tag servieren, kann aber bis zu 2 Tage im Kühlschrank aufbewahrt werden.'
        ]
      },
      es: {
        name: 'Bienenstich',
        description: '"Pastel Picadura de Abeja" - un postre tradicional alemán con cobertura de almendras con miel y relleno de crema de vainilla.',
        ingredients: ['Masa de levadura', 'Mantequilla', 'Miel', 'Almendras', 'Crema de vainilla', 'Nata', 'Azúcar', 'Huevos'],
        region: 'Por toda Alemania',
        preparationSteps: [
          'Prepare una masa de levadura y déjela levar hasta que duplique su tamaño.',
          'Estire la masa en forma rectangular y colóquela en un molde para hornear.',
          'Para la cobertura, derrita mantequilla con miel y azúcar, luego añada almendras en láminas.',
          'Extienda la mezcla de almendras sobre la masa.',
          'Hornee a 180°C hasta que esté dorado y caramelizado por encima.',
          'Mientras tanto, prepare una espesa crema de vainilla.',
          'Cuando esté frío, corte el pastel horizontalmente y rellene con la crema.'
        ],
        tips: [
          'Vigile el pastel cuidadosamente mientras se hornea - la cobertura de miel y almendras puede quemarse rápidamente.',
          'Para mayor riqueza, incorpore algo de nata montada en el relleno de crema.',
          'El nombre "Picadura de Abeja" viene de la cobertura dulce de miel que atrae a las abejas.',
          'Mejor servido fresco el mismo día, pero puede refrigerarse hasta por 2 días.'
        ]
      },
      fr: {
        name: 'Bienenstich',
        description: '"Gâteau Piqûre d\'Abeille" - un dessert allemand traditionnel avec un nappage miel-amandes et une garniture de crème pâtissière à la vanille.',
        ingredients: ['Pâte levée', 'Beurre', 'Miel', 'Amandes', 'Crème pâtissière à la vanille', 'Crème', 'Sucre', '�ufs'],
        region: "Dans toute l'Allemagne",
        preparationSteps: [
          'Préparez une pâte levée et laissez-la lever jusqu\'à ce qu\'elle double de volume.',
          'Étalez la pâte en forme rectangulaire et placez-la dans un moule à pâtisserie.',
          'Pour le nappage, faites fondre du beurre avec du miel et du sucre, puis ajoutez des amandes effilées.',
          'Étalez le mélange d\'amandes sur la pâte.',
          'Faites cuire à 180°C jusqu\'à ce que le dessus soit doré et caramélisé.',
          'Pendant ce temps, préparez une épaisse crème pâtissière à la vanille.',
          'Une fois refroidi, coupez le gâteau horizontalement et remplissez-le de crème pâtissière.'
        ],
        tips: [
          'Surveillez attentivement le gâteau pendant la cuisson - le nappage miel-amandes peut brûler rapidement.',
          'Pour plus de richesse, incorporez de la crème fouettée dans la garniture de crème pâtissière.',
          'Le nom "Piqûre d\'Abeille" vient du nappage sucré au miel qui attire les abeilles.',
          'Meilleur servi frais le jour même, mais peut être réfrigéré jusqu\'à 2 jours.'
        ]
      }
    }
  }
];
