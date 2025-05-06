import { Dish } from '@/types';

export const dishes: Dish[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6',
    price: 24.99,
    prepTime: 30,
    category: 'meat',
    audioUrl: {
      en: '/audio/schnitzel-en.mp3',
      de: '/audio/schnitzel-de.mp3',
      es: '/audio/schnitzel-es.mp3',
      fr: '/audio/schnitzel-fr.mp3',
    },
    translations: {
      en: {
        name: 'Wiener Schnitzel',
        description: "A thin, breaded and pan-fried veal cutlet served with potato salad and lingonberry jam.",
        ingredients: ['Veal cutlet', 'Breadcrumbs', 'Eggs', 'Flour', 'Lemon', 'Potatoes', 'Lingonberry jam'],
        region: 'Southern Germany, originally from Austria',
        preparationSteps: [
          'Begin by tenderizing the veal cutlet to about 1/4-inch thickness.',
          'Season with salt and pepper on both sides.',
          'Set up three shallow dishes: one with flour, one with beaten eggs, and one with breadcrumbs.',
          'Dredge the cutlet in flour, shaking off excess.',
          'Dip in beaten eggs, ensuring complete coverage.',
          'Coat thoroughly with breadcrumbs, pressing gently to adhere.',
          'Heat oil in a large skillet over medium-high heat.',
          'Fry the schnitzel for 2-3 minutes on each side until golden brown.',
          'Drain on paper towels and serve immediately with potato salad and lingonberry jam.'
        ],
        tips: [
          'Use a meat mallet to tenderize the veal evenly.',
          'For extra crispiness, chill the breaded cutlets for 30 minutes before frying.',
          'Traditional accompaniments include potato salad, cucumber salad, or lingonberry jam.',
          'For an authentic presentation, serve with a lemon wedge and a sprig of parsley.'
        ]
      },
      de: {
        name: 'Wiener Schnitzel',
        description: 'Ein dünnes, paniertes und gebratenes Kalbsschnitzel serviert mit Kartoffelsalat und Preiselbeerkonfitüre.',
        ingredients: ['Kalbsschnitzel', 'Semmelbrösel', 'Eier', 'Mehl', 'Zitrone', 'Kartoffeln', 'Preiselbeerkonfitüre'],
        region: 'Süddeutschland, ursprünglich aus Österreich',
        preparationSteps: [
          'Klopfen Sie das Kalbsschnitzel auf etwa 0,6 cm Dicke.',
          'Würzen Sie es auf beiden Seiten mit Salz und Pfeffer.',
          'Bereiten Sie drei flache Schüsseln vor: eine mit Mehl, eine mit verquirlten Eiern und eine mit Semmelbröseln.',
          'Wenden Sie das Schnitzel im Mehl und klopfen Sie überschüssiges Mehl ab.',
          'Tauchen Sie es in die Eier und stellen Sie sicher, dass es vollständig bedeckt ist.',
          'Panieren Sie es gründlich mit Semmelbröseln und drücken Sie leicht an.',
          'Erhitzen Sie Öl in einer großen Pfanne bei mittlerer bis hoher Hitze.',
          'Braten Sie das Schnitzel für 2-3 Minuten auf jeder Seite, bis es goldbraun ist.',
          'Lassen Sie es auf Küchenpapier abtropfen und servieren Sie sofort mit Kartoffelsalat und Preiselbeerkonfitüre.'
        ],
        tips: [
          'Verwenden Sie einen Fleischklopfer, um das Kalb gleichmäßig zu klopfen.',
          'Für extra Knusprigkeit kühlen Sie die panierten Schnitzel 30 Minuten vor dem Braten.',
          'Traditionelle Beilagen sind Kartoffelsalat, Gurkensalat oder Preiselbeerkonfitüre.',
          'Für eine authentische Präsentation servieren Sie es mit einer Zitronenscheibe und einem Petersilienzweig.'
        ]
      },
      es: {
        name: 'Wiener Schnitzel',
        description: 'Una fina chuleta de ternera empanada y frita servida con ensalada de patatas y mermelada de arándanos rojos.',
        ingredients: ['Chuleta de ternera', 'Pan rallado', 'Huevos', 'Harina', 'Limón', 'Patatas', 'Mermelada de arándanos rojos'],
        region: 'Sur de Alemania, originario de Austria',
        preparationSteps: [
          'Comience ablandando la chuleta de ternera hasta un grosor de unos 0,6 cm.',
          'Sazone con sal y pimienta por ambos lados.',
          'Prepare tres platos poco profundos: uno con harina, otro con huevos batidos y otro con pan rallado.',
          'Pase la chuleta por harina, sacudiendo el exceso.',
          'Sumerja en huevos batidos, asegurando una cobertura completa.',
          'Cubra completamente con pan rallado, presionando suavemente para que se adhiera.',
          'Caliente aceite en una sartén grande a fuego medio-alto.',
          'Fría el schnitzel durante 2-3 minutos por cada lado hasta que esté dorado.',
          'Escurra sobre papel absorbente y sirva inmediatamente con ensalada de patatas y mermelada de arándanos rojos.'
        ],
        tips: [
          'Use un mazo de carne para ablandar la ternera uniformemente.',
          'Para mayor crujido, enfríe las chuletas empanadas durante 30 minutos antes de freír.',
          'Los acompañamientos tradicionales incluyen ensalada de patatas, ensalada de pepino o mermelada de arándanos rojos.',
          'Para una presentación auténtica, sirva con un gajo de limón y una ramita de perejil.'
        ]
      },
      fr: {
        name: 'Wiener Schnitzel',
        description: "Une fine escalope de veau panée et frite servie avec salade de pommes de terre et confiture d'airelles.",
        ingredients: ['Escalope de veau', 'Chapelure', 'Œufs', 'Farine', 'Citron', 'Pommes de terre', "Confiture d'airelles"],
        region: "Allemagne du Sud, originaire d'Autriche",
        preparationSteps: [
          "Commencez par attendrir l'escalope de veau jusqu'à une épaisseur d'environ 0,6 cm.",
          'Assaisonnez de sel et de poivre des deux côtés.',
          'Préparez trois assiettes peu profondes : une avec de la farine, une avec des œufs battus et une avec de la chapelure.',
          "Passez l'escalope dans la farine, en secouant l'excédent.",
          'Trempez dans les œufs battus, en assurant une couverture complète.',
          'Enrobez soigneusement de chapelure, en appuyant doucement pour faire adhérer.',
          "Faites chauffer de l'huile dans une grande poêle à feu moyen-vif.",
          "Faites frire le schnitzel pendant 2-3 minutes de chaque côté jusqu'à ce qu'il soit doré.",
          "Égouttez sur du papier absorbant et servez immédiatement avec salade de pommes de terre et confiture d'airelles."
        ],
        tips: [
          'Utilisez un maillet à viande pour attendrir le veau uniformément.',
          'Pour plus de croustillant, réfrigérez les escalopes panées pendant 30 minutes avant de les frire.',
          "Les accompagnements traditionnels comprennent la salade de pommes de terre, la salade de concombre ou la confiture d'airelles.",
          'Pour une présentation authentique, servez avec un quartier de citron et un brin de persil.'
        ]
      }
    }
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502',
    price: 18.99,
    prepTime: 120,
    category: 'meat',
    audioUrl: {
      en: '/audio/sauerbraten-en.mp3',
      de: '/audio/sauerbraten-de.mp3',
      es: '/audio/sauerbraten-es.mp3',
      fr: '/audio/sauerbraten-fr.mp3',
    },
    translations: {
      en: {
        name: 'Sauerbraten',
        description: 'A traditional German pot roast, usually made from beef that has been marinated for several days in a mixture of vinegar, water, herbs, and spices.',
        ingredients: ['Beef', 'Vinegar', 'Onions', 'Bay leaves', 'Cloves', 'Red wine', 'Carrots', 'Celery'],
        region: 'Rhineland',
        preparationSteps: [
          'Create a marinade with vinegar, water, red wine, onions, carrots, bay leaves, cloves, and other spices.',
          'Place the beef roast in the marinade and refrigerate for 2-5 days, turning occasionally.',
          'Remove the meat from the marinade and pat dry.',
          'Brown the meat on all sides in a large Dutch oven.',
          'Strain the marinade and add it to the pot with the meat.',
          'Simmer covered for 2-3 hours until the meat is tender.',
          'Remove the meat and strain the cooking liquid.',
          'Make a gravy by adding crushed gingersnaps to thicken the strained liquid.',
          'Slice the meat and serve with the gravy, red cabbage, and potato dumplings.'
        ],
        tips: [
          'The longer you marinate the meat, the more flavorful it will be. 3 days is ideal.',
          'Traditional Rhineland Sauerbraten uses a sour marinade with vinegar and wine.',
          'Gingersnap cookies (Lebkuchen) are the traditional thickening agent for the gravy.',
          'For an authentic experience, serve with red cabbage and potato dumplings.'
        ]
      },
      de: {
        name: 'Sauerbraten',
        description: 'Ein traditioneller deutscher Schmorbraten, üblicherweise aus Rindfleisch, das mehrere Tage in einer Mischung aus Essig, Wasser, Kräutern und Gewürzen mariniert wurde.',
        ingredients: ['Rindfleisch', 'Essig', 'Zwiebeln', 'Lorbeerblätter', 'Nelken', 'Rotwein', 'Karotten', 'Sellerie'],
        region: 'Rheinland',
        preparationSteps: [
          'Erstellen Sie eine Marinade mit Essig, Wasser, Rotwein, Zwiebeln, Karotten, Lorbeerblättern, Nelken und anderen Gewürzen.',
          'Legen Sie den Rinderbraten in die Marinade und kühlen Sie ihn 2-5 Tage im Kühlschrank, dabei gelegentlich wenden.',
          'Nehmen Sie das Fleisch aus der Marinade und tupfen Sie es trocken.',
          'Braten Sie das Fleisch in einem großen Schmortopf von allen Seiten an.',
          'Gießen Sie die Marinade durch ein Sieb und geben Sie sie zum Fleisch in den Topf.',
          'Köcheln Sie zugedeckt 2-3 Stunden, bis das Fleisch zart ist.',
          'Nehmen Sie das Fleisch heraus und sieben Sie die Kochflüssigkeit.',
          'Bereiten Sie eine Soße zu, indem Sie zerkleinerte Lebkuchen zur abgesiebten Flüssigkeit geben, um sie anzudicken.',
          'Schneiden Sie das Fleisch auf und servieren Sie es mit der Soße, Rotkohl und Kartoffelklößen.'
        ],
        tips: [
          'Je länger Sie das Fleisch marinieren, desto aromatischer wird es. 3 Tage sind ideal.',
          'Traditioneller Rheinländer Sauerbraten verwendet eine saure Marinade mit Essig und Wein.',
          'Lebkuchen sind das traditionelle Verdickungsmittel für die Soße.',
          'Für ein authentisches Erlebnis servieren Sie ihn mit Rotkohl und Kartoffelklößen.'
        ]
      },
      es: {
        name: 'Sauerbraten',
        description: 'Un asado tradicional alemán, generalmente hecho de carne de res que ha sido marinada durante varios días en una mezcla de vinagre, agua, hierbas y especias.',
        ingredients: ['Carne de res', 'Vinagre', 'Cebollas', 'Hojas de laurel', 'Clavos', 'Vino tinto', 'Zanahorias', 'Apio'],
        region: 'Renania',
        preparationSteps: [
          'Cree una marinada con vinagre, agua, vino tinto, cebollas, zanahorias, hojas de laurel, clavos y otras especias.',
          'Coloque el asado de res en la marinada y refrigere durante 2-5 días, volteándolo ocasionalmente.',
          'Retire la carne de la marinada y séquela con papel absorbente.',
          'Dore la carne por todos lados en una olla grande holandesa.',
          'Cuele la marinada y agréguela a la olla con la carne.',
          'Cocine a fuego lento con tapa durante 2-3 horas hasta que la carne esté tierna.',
          'Retire la carne y cuele el líquido de cocción.',
          'Prepare una salsa añadiendo galletas de jengibre trituradas para espesar el líquido colado.',
          'Rebane la carne y sirva con la salsa, col lombarda y albóndigas de patata.'
        ],
        tips: [
          'Cuanto más tiempo marine la carne, más sabor tendrá. 3 días es lo ideal.',
          'El Sauerbraten tradicional de Renania utiliza una marinada ácida con vinagre y vino.',
          'Las galletas de jengibre (Lebkuchen) son el agente espesante tradicional para la salsa.',
          'Para una experiencia auténtica, sirva con col lombarda y albóndigas de patata.'
        ]
      },
      fr: {
        name: 'Sauerbraten',
        description: "Un rôti allemand traditionnel, généralement fait de bœuf qui a été mariné pendant plusieurs jours dans un mélange de vinaigre, d'eau, d'herbes et d'épices.",
        ingredients: ['Bœuf', 'Vinaigre', 'Oignons', 'Feuilles de laurier', 'Clous de girofle', 'Vin rouge', 'Carottes', 'Céleri'],
        region: 'Rhénanie',
        preparationSteps: [
          "Créez une marinade avec du vinaigre, de l'eau, du vin rouge, des oignons, des carottes, des feuilles de laurier, des clous de girofle et d'autres épices.",
          'Placez le rôti de bœuf dans la marinade et réfrigérez pendant 2-5 jours, en le retournant occasionnellement.',
          'Retirez la viande de la marinade et séchez-la avec du papier absorbant.',
          'Faites dorer la viande sur tous les côtés dans une grande cocotte.',
          'Filtrez la marinade et ajoutez-la au pot avec la viande.',
          "Laissez mijoter à couvert pendant 2-3 heures jusqu'à ce que la viande soit tendre.",
          'Retirez la viande et filtrez le liquide de cuisson.',
          'Préparez une sauce en ajoutant des biscuits au gingembre écrasés pour épaissir le liquide filtré.',
          'Tranchez la viande et servez avec la sauce, du chou rouge et des boulettes de pommes de terre.'
        ],
        tips: [
          'Plus vous marinez la viande, plus elle sera savoureuse. 3 jours est idéal.',
          'Le Sauerbraten traditionnel de Rhénanie utilise une marinade aigre avec du vinaigre et du vin.',
          "Les biscuits au gingembre (Lebkuchen) sont l'agent épaississant traditionnel pour la sauce.",
          'Pour une expérience authentique, servez avec du chou rouge et des boulettes de pommes de terre.'
        ]
      }
    }
  },
  {
    id: '3',
    imageUrl: 'https://dirndlkitchen.com/wp-content/uploads/2023/02/kaesespaetzle-recipe-german-cheese-spaetzle-dirndl-kitchen21.jpg',
    price: 14.99,
    prepTime: 40,
    category: 'sides',
    audioUrl: {
      en: '/audio/spaetzle-en.mp3',
      de: '/audio/spaetzle-de.mp3',
      es: '/audio/spaetzle-es.mp3',
      fr: '/audio/spaetzle-fr.mp3',
    },
    translations: {
      en: {
        name: 'Käsespätzle',
        description: 'Homemade egg noodles with melted cheese and crispy onions, a comfort food from Swabia.',
        ingredients: ['Spätzle noodles', 'Emmental cheese', 'Caramelized onions', 'Chives', 'Butter', 'Flour', 'Eggs', 'Nutmeg'],
        region: 'Swabia, Baden-Württemberg',
        preparationSteps: [
          'Mix flour, eggs, water, salt, and a pinch of nutmeg to make the spätzle batter.',
          'Let the batter rest for 30 minutes.',
          'Meanwhile, thinly slice onions and caramelize them in butter until golden brown.',
          'Press the batter through a spätzle maker or a colander with large holes into boiling salted water.',
          'Cook until the spätzle float to the surface, then drain.',
          'Layer the cooked spätzle with grated Emmental cheese in a baking dish.',
          'Bake until the cheese is melted and bubbly.',
          'Top with the caramelized onions and chopped chives before serving.'
        ],
        tips: [
          'The batter should be thick but still flow slowly from a spoon.',
          'For best results, use a proper spätzle maker for consistent noodle shapes.',
          'Swiss Emmental cheese works best, but you can substitute Gruyère or another good melting cheese.',
          'Serve immediately while the cheese is still melted and gooey.'
        ]
      },
      de: {
        name: 'Käsespätzle',
        description: 'Hausgemachte Eiernudeln mit geschmolzenem Käse und knusprigen Zwiebeln, ein Komfortessen aus Schwaben.',
        ingredients: ['Spätzle', 'Emmentaler Käse', 'Karamellisierte Zwiebeln', 'Schnittlauch', 'Butter', 'Mehl', 'Eier', 'Muskatnuss'],
        region: 'Schwaben, Baden-Württemberg',
        preparationSteps: [
          'Mehl, Eier, Wasser, Salz und eine Prise Muskatnuss zu einem Spätzleteig verrühren.',
          'Den Teig 30 Minuten ruhen lassen.',
          'Inzwischen Zwiebeln in dünne Scheiben schneiden und in Butter goldbraun karamellisieren.',
          'Den Teig durch einen Spätzlehobel oder ein Sieb mit großen Löchern in kochendes Salzwasser drücken.',
          'Kochen, bis die Spätzle an die Oberfläche steigen, dann abgießen.',
          'Die gekochten Spätzle mit geriebenem Emmentaler Käse in eine Auflaufform schichten.',
          'Backen, bis der Käse geschmolzen ist und Blasen wirft.',
          'Vor dem Servieren mit den karamellisierten Zwiebeln und gehacktem Schnittlauch belegen.'
        ],
        tips: [
          'Der Teig sollte dick sein, aber dennoch langsam von einem Löffel fließen.',
          'Für beste Ergebnisse verwenden Sie einen richtigen Spätzlehobel für gleichmäßige Nudelformen.',
          'Schweizer Emmentaler Käse funktioniert am besten, aber Sie können Gruyère oder einen anderen gut schmelzenden Käse verwenden.',
          'Sofort servieren, solange der Käse noch geschmolzen und klebrig ist.'
        ]
      },
      es: {
        name: 'Käsespätzle',
        description: 'Fideos caseros de huevo con queso derretido y cebollas crujientes, una comida reconfortante de Suabia.',
        ingredients: ['Fideos spätzle', 'Queso Emmental', 'Cebollas caramelizadas', 'Cebollino', 'Mantequilla', 'Harina', 'Huevos', 'Nuez moscada'],
        region: 'Suabia, Baden-Württemberg',
        preparationSteps: [
          'Mezcle harina, huevos, agua, sal y una pizca de nuez moscada para hacer la masa de spätzle.',
          'Deje reposar la masa durante 30 minutos.',
          'Mientras tanto, corte finamente las cebollas y caramelícelas en mantequilla hasta que estén doradas.',
          'Presione la masa a través de un fabricante de spätzle o un colador con agujeros grandes en agua hirviendo con sal.',
          'Cocine hasta que los spätzle floten a la superficie, luego escurra.',
          'Coloque los spätzle cocidos en capas con queso Emmental rallado en una fuente para hornear.',
          'Hornee hasta que el queso se derrita y burbujee.',
          'Cubra con las cebollas caramelizadas y el cebollino picado antes de servir.'
        ],
        tips: [
          'La masa debe ser espesa pero aún fluir lentamente de una cuchara.',
          'Para obtener mejores resultados, use un fabricante de spätzle adecuado para obtener formas de fideos consistentes.',
          'El queso Emmental suizo funciona mejor, pero puede sustituirlo por Gruyère u otro queso que se derrita bien.',
          'Sirva inmediatamente mientras el queso aún esté derretido y pegajoso.'
        ]
      },
      fr: {
        name: 'Käsespätzle',
        description: "Nouilles aux œufs maison avec fromage fondu et oignons croustillants, un plat réconfortant de Souabe.",
        ingredients: ['Nouilles spätzle', 'Fromage Emmental', 'Oignons caramélisés', 'Ciboulette', 'Beurre', 'Farine', 'Œufs', 'Muscade'],
        region: 'Souabe, Bade-Wurtemberg',
        preparationSteps: [
          'Mélangez la farine, les œufs, l\'eau, le sel et une pincée de muscade pour faire la pâte à spätzle.',
          'Laissez reposer la pâte pendant 30 minutes.',
          'Pendant ce temps, coupez finement les oignons et faites-les caraméliser dans du beurre jusqu\'à ce qu\'ils soient dorés.',
          'Pressez la pâte à travers un fabricant de spätzle ou une passoire avec de grands trous dans de l\'eau bouillante salée.',
          'Faites cuire jusqu\'à ce que les spätzle remontent à la surface, puis égouttez.',
          'Superposez les spätzle cuits avec du fromage Emmental râpé dans un plat allant au four.',
          'Faites cuire jusqu\'à ce que le fromage soit fondu et bouillonne.',
          'Garnir avec les oignons caramélisés et la ciboulette hachée avant de servir.'
        ],
        tips: [
          'La pâte doit être épaisse mais couler lentement d\'une cuillère.',
          'Pour de meilleurs résultats, utilisez un fabricant de spätzle approprié pour des formes de nouilles uniformes.',
          'Le fromage Emmental suisse est le plus approprié, mais vous pouvez le remplacer par du Gruyère ou un autre fromage à bonne fonte.',
          'Servir immédiatement pendant que le fromage est encore fondu et gluant.'
        ]
      }
    }
  },
  {
    id: '4',
    imageUrl: 'https://www.savoryexperiments.com/wp-content/uploads/2024/02/Beef-Braciole-50-600x399.jpg',
    price: 16.99,
    prepTime: 90,
    category: 'meat',
    audioUrl: {
      en: '/audio/rouladen-en.mp3',
      de: '/audio/rouladen-de.mp3',
      es: '/audio/rouladen-es.mp3',
      fr: '/audio/rouladen-fr.mp3',
    },
    translations: {
      en: {
        name: 'Rouladen',
        description: 'Thin slices of beef wrapped around bacon, onions, mustard, and pickles, then cooked with a rich gravy.',
        ingredients: ['Beef slices', 'Bacon', 'Onions', 'Pickles', 'Mustard', 'Red wine', 'Beef broth'],
        region: 'Throughout Germany',
        preparationSteps: [
          'Lay out the beef slices and season with salt and pepper.',
          'Spread a thin layer of mustard on each slice.',
          'Place a slice of bacon, a pickle spear, and thinly sliced onions on one end of each beef slice.',
          'Roll up the beef slices and secure with kitchen twine or toothpicks.',
          'Heat oil in a large pot and brown the rouladen on all sides.',
          'Add chopped vegetables and deglaze with red wine.',
          'Add beef broth and simmer covered for about 1.5 hours until tender.',
          'Remove the rouladen and strain the sauce.',
          'Thicken the sauce with a roux or cornstarch slurry.',
          'Return the rouladen to the sauce and warm through before serving.'
        ],
        tips: [
          'Choose thin slices of beef round or flank steak for best results.',
          'Sour pickles work best for the authentic German flavor.',
          'For a more tender result, cook in a pressure cooker for 30 minutes instead.',
          'Serve with potato dumplings or spätzle and red cabbage for a complete meal.'
        ]
      },
      de: {
        name: 'Rouladen',
        description: 'Dünne Scheiben Rindfleisch, gewickelt um Speck, Zwiebeln, Senf und Gurken, dann gekocht mit einer reichhaltigen Soße.',
        ingredients: ['Rindfleisch', 'Speck', 'Zwiebeln', 'Gurken', 'Senf', 'Rotwein', 'Rinderbrühe'],
        region: 'In ganz Deutschland',
        preparationSteps: [
          'Legen Sie die Rindfleischstreifen aus und würzen Sie sie mit Salz und Pfeffer.',
          'Verteilen Sie eine dünne Schicht Senf auf jeder Scheibe.',
          'Legen Sie eine Scheibe Speck, eine Gewürzgurke und dünn geschnittene Zwiebeln auf ein Ende jeder Rindfleisch-Scheibe.',
          'Rollen Sie die Rindfleischstreifen auf und sichern Sie sie mit Küchengarn oder Zahnstochern.',
          'Erhitzen Sie Öl in einem großen Topf und braten Sie die Rouladen von allen Seiten an.',
          'Fügen Sie gehacktes Gemüse hinzu und löschen Sie mit Rotwein ab.',
          'Fügen Sie Rinderbrühe hinzu und köcheln Sie abgedeckt für etwa 1,5 Stunden, bis sie zart sind.',
          'Entfernen Sie die Rouladen und passieren Sie die Sauce.',
          'Verdicken Sie die Sauce mit einer Mehlschwitze oder Speisestärke.',
          'Geben Sie die Rouladen zurück in die Sauce und wärmen Sie sie vor dem Servieren durch.'
        ],
        tips: [
          'Wählen Sie dünne Scheiben von Rinderroulade oder Flankensteak für beste Ergebnisse.',
          'Saure Gurken eignen sich am besten für den authentischen deutschen Geschmack.',
          'Für ein zarteres Ergebnis, kochen Sie stattdessen 30 Minuten im Schnellkochtopf.',
          'Servieren Sie mit Kartoffelknödeln oder Spätzle und Rotkohl für eine komplette Mahlzeit.'
        ]
      },
      es: {
        name: 'Rouladen',
        description: 'Finas rebanadas de carne de res envueltas alrededor de tocino, cebollas, mostaza y pepinillos, luego cocinadas con una salsa rica.',
        ingredients: ['Rebanadas de res', 'Tocino', 'Cebollas', 'Pepinillos', 'Mostaza', 'Vino tinto', 'Caldo de carne'],
        region: 'Por toda Alemania',
        preparationSteps: [
          'Extienda las rebanadas de carne y sazone con sal y pimienta.',
          'Unte una fina capa de mostaza en cada rebanada.',
          'Coloque una rebanada de tocino, un pepinillo en lanza y cebollas en rodajas finas en un extremo de cada rebanada de carne.',
          'Enrolle las rebanadas de carne y asegúrelas con hilo de cocina o palillos de dientes.',
          'Caliente aceite en una olla grande y dore las rouladen por todos los lados.',
          'Agregue las verduras picadas y desglase con vino tinto.',
          'Agregue caldo de carne y cocine a fuego lento tapado durante aproximadamente 1,5 horas hasta que estén tiernas.',
          'Retire las rouladen y cuele la salsa.',
          'Espese la salsa con un roux o una mezcla de maicena.',
          'Regrese las rouladen a la salsa y caliente antes de servir.'
        ],
        tips: [
          'Elija rebanadas finas de redondo de res o bistec de flanco para obtener mejores resultados.',
          'Los pepinillos agrios funcionan mejor para el auténtico sabor alemán.',
          'Para un resultado más tierno, cocine en una olla a presión durante 30 minutos en su lugar.',
          'Sirva con albóndigas de patata o spätzle y col lombarda para una comida completa.'
        ]
      },
      fr: {
        name: 'Rouladen',
        description: "De fines tranches de bœuf enroulées autour de bacon, d'oignons, de moutarde et de cornichons, puis cuisinées avec une sauce riche.",
        ingredients: ['Tranches de bœuf', 'Bacon', 'Oignons', 'Cornichons', 'Moutarde', 'Vin rouge', 'Bouillon de bœuf'],
        region: 'Partout en Allemagne',
        preparationSteps: [
          'Étalez les tranches de bœuf et assaisonnez de sel et de poivre.',
          'Étalez une fine couche de moutarde sur chaque tranche.',
          'Placez une tranche de bacon, un cornichon et des oignons finement tranchés sur une extrémité de chaque tranche de bœuf.',
          'Roulez les tranches de bœuf et fixez-les avec de la ficelle de cuisine ou des cure-dents.',
          'Faites chauffer de l\'huile dans une grande casserole et faites dorer les rouladen de tous les côtés.',
          'Ajoutez les légumes hachés et déglacez avec du vin rouge.',
          'Ajoutez le bouillon de bœuf et laissez mijoter à couvert pendant environ 1,5 heure jusqu\'à ce qu\'ils soient tendres.',
          'Retirez les rouladen et filtrez la sauce.',
          'Épaississez la sauce avec un roux ou une bouillie de fécule de maïs.',
          'Remettez les rouladen dans la sauce et réchauffez-les avant de servir.'
        ],
        tips: [
          'Choisissez de fines tranches de rond de bœuf ou de steak de flanc pour de meilleurs résultats.',
          'Les cornichons aigres sont les meilleurs pour la saveur allemande authentique.',
          'Pour un résultat plus tendre, faites cuire dans un autocuiseur pendant 30 minutes à la place.',
          'Servir avec des boulettes de pommes de terre ou des spätzle et du chou rouge pour un repas complet.'
        ]
      }
    }
  },
  {
    id: '5',
    imageUrl: 'https://i.pinimg.com/originals/b5/21/09/b52109410b2f54fd1b8356b619ea89b1.png',
    price: 6.99,
    prepTime: 45,
    category: 'sides',
    audioUrl: {
      en: '/audio/pretzel-en.mp3',
      de: '/audio/pretzel-de.mp3',
      es: '/audio/pretzel-es.mp3',
      fr: '/audio/pretzel-fr.mp3',
    },
    translations: {
      en: {
        name: 'Bavarian Pretzel',
        description: "A large, soft pretzel with a dark, golden brown exterior, often served with sweet mustard.",
        ingredients: ['Flour', 'Yeast', 'Baking soda', 'Salt', 'Butter', 'Sugar', 'Lye or baking soda solution'],
        region: 'Bavaria',
        preparationSteps: [
          'Mix flour, yeast, salt, and water to form a smooth dough.',
          'Let the dough rise until doubled in size.',
          'Divide the dough into portions and roll each into a long rope.',
          'Shape each rope into the classic pretzel shape.',
          'Dip each pretzel in a lye solution or strong baking soda solution (for home cooks).',
          'Sprinkle with coarse salt.',
          'Bake until dark brown and glossy.',
          'Serve warm with sweet Bavarian mustard or cheese dip.'
        ],
        tips: [
          'The lye solution gives the pretzel its distinctive dark color and flavor, but baking soda can be used at home.',
          'The dough should be slightly firm, not sticky.',
          'For authentic texture, allow the shaped pretzels to rest and develop a skin before dipping in the solution.',
          'Store in a paper bag, not plastic, to maintain the crisp exterior.'
        ]
      },
      de: {
        name: 'Bayerische Brezel',
        description: 'Eine große, weiche Brezel mit einer dunklen, goldbraunen Außenseite, oft serviert mit süßem Senf.',
        ingredients: ['Mehl', 'Hefe', 'Backpulver', 'Salz', 'Butter', 'Zucker', 'Lauge oder Backsodalösung'],
        region: 'Bayern',
        preparationSteps: [
          'Mehl, Hefe, Salz und Wasser zu einem glatten Teig verrühren.',
          'Den Teig gehen lassen, bis er sich verdoppelt hat.',
          'Den Teig in Portionen teilen und jede zu einem langen Strang ausrollen.',
          'Jeden Strang in die klassische Brezelform bringen.',
          'Jede Brezel in eine Lauge oder eine starke Backsodalösung tauchen (für Hobbyköche).',
          'Mit grobem Salz bestreuen.',
          'Backen, bis sie dunkelbraun und glänzend sind.',
          'Warm mit süßem bayerischem Senf oder Käsedip servieren.'
        ],
        tips: [
          'Die Lauge verleiht der Brezel ihre charakteristische dunkle Farbe und ihren Geschmack, aber zu Hause kann Backpulver verwendet werden.',
          'Der Teig sollte leicht fest, nicht klebrig sein.',
          'Für eine authentische Textur die geformten Brezeln ruhen und eine Haut bilden lassen, bevor sie in die Lösung getaucht werden.',
          'Zur Aufbewahrung in einer Papiertüte, nicht in Plastik, um die knusprige Außenseite zu erhalten.'
        ]
      },
      es: {
        name: 'Pretzel Bávaro',
        description: 'Un pretzel grande y suave con un exterior oscuro y dorado, a menudo servido con mostaza dulce.',
        ingredients: ['Harina', 'Levadura', 'Bicarbonato de sodio', 'Sal', 'Mantequilla', 'Azúcar', 'Solución de lejía o bicarbonato de sodio'],
        region: 'Baviera',
        preparationSteps: [
          'Mezcle harina, levadura, sal y agua para formar una masa suave.',
          'Deje que la masa suba hasta que duplique su tamaño.',
          'Divida la masa en porciones y enrolle cada una en una cuerda larga.',
          'Forme cada cuerda en la forma clásica de pretzel.',
          'Sumerja cada pretzel en una solución de lejía o una solución fuerte de bicarbonato de sodio (para cocineros caseros).',
          'Espolvoree con sal gruesa.',
          'Hornee hasta que estén oscuros y brillantes.',
          'Sirva caliente con mostaza dulce bávara o salsa de queso.'
        ],
        tips: [
          'La solución de lejía le da al pretzel su distintivo color oscuro y sabor, pero se puede usar bicarbonato de sodio en casa.',
          'La masa debe ser ligeramente firme, no pegajosa.',
          'Para una textura auténtica, permita que los pretzels formados descansen y desarrollen una piel antes de sumergirlos en la solución.',
          'Guarde en una bolsa de papel, no de plástico, para mantener el exterior crujiente.'
        ]
      },
      fr: {
        name: 'Bretzel Bavarois',
        description: "Un grand bretzel moelleux avec un extérieur brun doré foncé, souvent servi avec de la moutarde douce.",
        ingredients: ['Farine', 'Levure', 'Bicarbonate de soude', 'Sel', 'Beurre', 'Sucre', 'Solution de lessive ou de bicarbonate de soude'],
        region: 'Bavière',
        preparationSteps: [
          'Mélangez la farine, la levure, le sel et l\'eau pour former une pâte lisse.',
          'Laissez la pâte lever jusqu\'à ce qu\'elle double de volume.',
          'Divisez la pâte en portions et roulez chacune en une longue corde.',
          'Façonnez chaque corde en forme classique de bretzel.',
          'Trempez chaque bretzel dans une solution de lessive ou une forte solution de bicarbonate de soude (pour les cuisiniers à domicile).',
          'Saupoudrez de gros sel.',
          'Faites cuire jusqu\'à ce qu\'ils soient brun foncé et brillants.',
          'Servir chaud avec de la moutarde douce bavaroise ou une sauce au fromage.'
        ],
        tips: [
          'La solution de lessive donne au bretzel sa couleur sombre distinctive et sa saveur, mais le bicarbonate de soude peut être utilisé à la maison.',
          'La pâte doit être légèrement ferme, pas collante.',
          'Pour une texture authentique, laissez les bretzels façonnés reposer et développer une peau avant de les tremper dans la solution.',
          'Conservez dans un sac en papier, pas en plastique, pour maintenir l\'extérieur croustillant.'
        ]
      }
    }
  },
  // Adding 10 new German dishes
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99',
    price: 12.99,
    prepTime: 45,
    category: 'sausages',
    audioUrl: {
      en: '/audio/bratwurst-en.mp3',
      de: '/audio/bratwurst-de.mp3',
      es: '/audio/bratwurst-es.mp3',
      fr: '/audio/bratwurst-fr.mp3',
    },
    translations: {
      en: {
        name: 'Nuremberg Bratwurst',
        description: "Small, finger-sized pork sausages seasoned with marjoram, traditionally grilled and served with sauerkraut.",
        ingredients: ['Pork', 'Marjoram', 'Garlic', 'Salt', 'White pepper', 'Sauerkraut', 'Mustard'],
        region: 'Nuremberg, Franconia',
        preparationSteps: [
          'Mix ground pork with marjoram, minced garlic, salt, and white pepper.',
          'Stuff the mixture into narrow sausage casings.',
          'Twist the casing every 7-9 cm to form small sausages.',
          'Let the sausages rest in the refrigerator for a few hours to develop flavor.',
          'Grill the sausages over beechwood fire or charcoal until browned on all sides.',
          'Serve hot with sauerkraut, mustard, and a fresh pretzel.'
        ],
        tips: [
          'Authentic Nuremberg bratwursts must be no longer than 9 cm and weigh no more than 25g.',
          'For best flavor, use fresh marjoram rather than dried.',
          'Traditional serving is "Drei im Weggla" - three sausages in a roll.',
          'Can be served with potato salad instead of sauerkraut for a milder flavor.'
        ]
      },
      de: {
        name: 'Nürnberger Rostbratwurst',
        description: 'Kleine, fingergroße Schweinswürstchen, gewürzt mit Majoran, traditionell gegrillt und mit Sauerkraut serviert.',
        ingredients: ['Schweinefleisch', 'Majoran', 'Knoblauch', 'Salz', 'Weißer Pfeffer', 'Sauerkraut', 'Senf'],
        region: 'Nürnberg, Franken',
        preparationSteps: [
          'Schweinehackfleisch mit Majoran, gehacktem Knoblauch, Salz und weißem Pfeffer mischen.',
          'Die Mischung in enge Wurstdärme füllen.',
          'Den Darm alle 7-9 cm drehen, um kleine Würstchen zu formen.',
          'Die Würstchen einige Stunden im Kühlschrank ruhen lassen, damit sich das Aroma entfalten kann.',
          'Die Würstchen über Buchenholzfeuer oder Holzkohle grillen, bis sie von allen Seiten gebräunt sind.',
          'Heiß mit Sauerkraut, Senf und einer frischen Brezel servieren.'
        ],
        tips: [
          'Echte Nürnberger Rostbratwürste dürfen nicht länger als 9 cm sein und nicht mehr als 25g wiegen.',
          'Für den besten Geschmack frischen Majoran anstelle von getrocknetem verwenden.',
          'Traditionelle Servierweise ist "Drei im Weggla" - drei Würstchen in einem Brötchen.',
          'Kann auch mit Kartoffelsalat anstelle von Sauerkraut für einen milderen Geschmack serviert werden.'
        ]
      },
      es: {
        name: 'Salchicha de Nuremberg',
        description: 'Pequeñas salchichas de cerdo del tamaño de un dedo, sazonadas con mejorana, tradicionalmente asadas y servidas con chucrut.',
        ingredients: ['Cerdo', 'Mejorana', 'Ajo', 'Sal', 'Pimienta blanca', 'Chucrut', 'Mostaza'],
        region: 'Nuremberg, Franconia',
        preparationSteps: [
          'Mezcle la carne de cerdo molida con mejorana, ajo picado, sal y pimienta blanca.',
          'Rellene la mezcla en tripas de salchicha estrechas.',
          'Gire la tripa cada 7-9 cm para formar pequeñas salchichas.',
          'Deje reposar las salchichas en el refrigerador durante unas horas para desarrollar sabor.',
          'Ase las salchichas sobre fuego de madera de haya o carbón hasta que estén doradas por todos lados.',
          'Sirva caliente con chucrut, mostaza y un pretzel fresco.'
        ],
        tips: [
          'Las auténticas salchichas de Nuremberg no deben medir más de 9 cm ni pesar más de 25g.',
          'Para mejor sabor, use mejorana fresca en lugar de seca.',
          'La forma tradicional de servir es "Drei im Weggla" - tres salchichas en un panecillo.',
          'Se puede servir con ensalada de patatas en lugar de chucrut para un sabor más suave.'
        ]
      },
      fr: {
        name: 'Saucisse de Nuremberg',
        description: "Petites saucisses de porc de la taille d'un doigt, assaisonnées à la marjolaine, traditionnellement grillées et servies avec de la choucroute.",
        ingredients: ['Porc', 'Marjolaine', 'Ail', 'Sel', 'Poivre blanc', 'Choucroute', 'Moutarde'],
        region: 'Nuremberg, Franconie',
        preparationSteps: [
          'Mélangez le porc haché avec la marjolaine, l\'ail émincé, le sel et le poivre blanc.',
          'Farcir le mélange dans des boyaux à saucisse étroits.',
          'Tordez le boyau tous les 7-9 cm pour former de petites saucisses.',
          'Laissez reposer les saucisses au réfrigérateur pendant quelques heures pour développer la saveur.',
          'Grillez les saucisses sur un feu de bois de hêtre ou de charbon de bois jusqu\'à ce qu\'elles soient dorées de tous les côtés.',
          'Servir chaud avec de la choucroute, de la moutarde et un bretzel frais.'
        ],
        tips: [
          'Les authentiques saucisses de Nuremberg ne doivent pas dépasser 9 cm de long et peser plus de 25g.',
          'Pour une meilleure saveur, utilisez de la marjolaine fraîche plutôt que séchée.',
          'Le service traditionnel est "Drei im Weggla" - trois saucisses dans un petit pain.',
          'Peut être servi avec une salade de pommes de terre au lieu de la choucroute pour une saveur plus douce.'
        ]
      }
    }
  },
  {
    id: '7',
    imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/eggless-black-forest-cake-recipe.jpg',
    price: 13.99,
    prepTime: 60,
    category: 'desserts',
    audioUrl: {
      en: '/audio/blackforest-en.mp3',
      de: '/audio/blackforest-de.mp3',
      es: '/audio/blackforest-es.mp3',
      fr: '/audio/blackforest-fr.mp3',
    },
    translations: {
      en: {
        name: 'Black Forest Cake',
        description: "A chocolate sponge cake layered with whipped cream and cherries, topped with chocolate shavings and more cherries.",
        ingredients: ['Chocolate cake', 'Cherries', 'Kirsch (cherry liqueur)', 'Whipped cream', 'Sugar', 'Chocolate shavings'],
        region: 'Black Forest, Baden-Württemberg',
        preparationSteps: [
          'Bake chocolate sponge cake layers and allow to cool completely.',
          'Soak cherries in kirsch liqueur for at least an hour.',
          'Whip cream with sugar until stiff peaks form.',
          'Place first cake layer on serving plate and brush with cherry syrup.',
          'Spread a layer of whipped cream and add drained cherries.',
          'Repeat with remaining cake layers.',
          'Cover the entire cake with whipped cream.',
          'Decorate with chocolate shavings on the sides and cherries on top.'
        ],
        tips: [
          'For an authentic flavor, use sour cherries (Morello) rather than sweet cherries.',
          'The kirsch liqueur is essential for traditional Black Forest cake.',
          'For the best structure, chill the cake between layers.',
          'Fresh, stabilized whipped cream works best for a longer-lasting cake.'
        ]
      },
      de: {
        name: 'Schwarzwälder Kirschtorte',
        description: 'Ein Schokoladenbiskuit geschichtet mit Schlagsahne und Kirschen, garniert mit Schokoladenraspeln und weiteren Kirschen.',
        ingredients: ['Schokoladenkuchen', 'Kirschen', 'Kirschwasser', 'Schlagsahne', 'Zucker', 'Schokoladenraspeln'],
        region: 'Schwarzwald, Baden-Württemberg',
        preparationSteps: [
          'Schokoladenbiskuitböden backen und vollständig abkühlen lassen.',
          'Kirschen mindestens eine Stunde in Kirschwasser einlegen.',
          'Sahne mit Zucker steif schlagen.',
          'Ersten Kuchenboden auf Servierteller legen und mit Kirschsirup beträufeln.',
          'Eine Schicht Schlagsahne verteilen und abgetropfte Kirschen darauflegen.',
          'Mit den restlichen Kuchenböden wiederholen.',
          'Die gesamte Torte mit Schlagsahne überziehen.',
          'Mit Schokoladenraspeln an den Seiten und Kirschen obenauf dekorieren.'
        ],
        tips: [
          'Für einen authentischen Geschmack Sauerkirschen (Schattenmorellen) anstelle von Süßkirschen verwenden.',
          'Das Kirschwasser ist essenziell für eine traditionelle Schwarzwälder Kirschtorte.',
          'Für die beste Struktur die Torte zwischen den Schichten kühlen.',
          'Frische, stabilisierte Schlagsahne eignet sich am besten für eine länger haltbare Torte.'
        ]
      },
      es: {
        name: 'Tarta Selva Negra',
        description: 'Un bizcocho de chocolate en capas con nata montada y cerezas, cubierto con virutas de chocolate y más cerezas.',
        ingredients: ['Bizcocho de chocolate', 'Cerezas', 'Kirsch (licor de cerezas)', 'Nata montada', 'Azúcar', 'Virutas de chocolate'],
        region: 'Selva Negra, Baden-Wurtemberg',
        preparationSteps: [
          'Hornee las capas de bizcocho de chocolate y deje que se enfríen completamente.',
          'Remoje las cerezas en licor de kirsch durante al menos una hora.',
          'Monte la nata con azúcar hasta que se formen picos firmes.',
          'Coloque la primera capa de bizcocho en el plato de servir y rocíe con almíbar de cerezas.',
          'Extienda una capa de nata montada y añada cerezas escurridas.',
          'Repita con las capas de bizcocho restantes.',
          'Cubra toda la tarta con nata montada.',
          'Decore con virutas de chocolate en los lados y cerezas en la parte superior.'
        ],
        tips: [
          'Para un sabor auténtico, use cerezas ácidas (Morello) en lugar de cerezas dulces.',
          'El licor de kirsch es esencial para la tarta Selva Negra tradicional.',
          'Para la mejor estructura, enfríe la tarta entre capas.',
          'La nata montada fresca y estabilizada funciona mejor para una tarta de mayor duración.'
        ]
      },
      fr: {
        name: 'Forêt-Noire',
        description: "Un gâteau éponge au chocolat superposé de crème fouettée et de cerises, garni de copeaux de chocolat et de plus de cerises.",
        ingredients: ['Gâteau au chocolat', 'Cerises', 'Kirsch (liqueur de cerise)', 'Crème fouettée', 'Sucre', 'Copeaux de chocolat'],
        region: 'Forêt-Noire, Bade-Wurtemberg',
        preparationSteps: [
          'Faites cuire des couches de gâteau éponge au chocolat et laissez-les refroidir complètement.',
          'Faites tremper les cerises dans la liqueur de kirsch pendant au moins une heure.',
          'Fouettez la crème avec du sucre jusqu\'à ce que des pics fermes se forment.',
          'Placez la première couche de gâteau sur une assiette de service et badigeonnez-la de sirop de cerise.',
          'Étalez une couche de crème fouettée et ajoutez des cerises égouttées.',
          'Répétez avec les couches de gâteau restantes.',
          'Couvrez tout le gâteau de crème fouettée.',
          'Décorez avec des copeaux de chocolat sur les côtés et des cerises sur le dessus.'
        ],
        tips: [
          'Pour une saveur authentique, utilisez des cerises acides (Morello) plutôt que des cerises douces.',
          'La liqueur de kirsch est essentielle pour la Forêt-Noire traditionnelle.',
          'Pour la meilleure structure, réfrigérez le gâteau entre les couches.',
          'La crème fouettée fraîche et stabilisée fonctionne mieux pour un gâteau qui dure plus longtemps.'
        ]
      }
    }
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1585238342070-61e1e768b1ff',
    price: 13.99,
    prepTime: 35,
    category: 'sides',
    audioUrl: {
      en: '/audio/sauerkraut-en.mp3',
      de: '/audio/sauerkraut-de.mp3',
      es: '/audio/sauerkraut-es.mp3',
      fr: '/audio/sauerkraut-fr.mp3',
    },
    translations: {
      en: {
        name: 'Bavarian Sauerkraut',
        description: "Fermented cabbage cooked with apples, onions, and spices, traditionally served with sausages or roasted meats.",
        ingredients: ['Sauerkraut', 'Apples', 'Onions', 'Bacon', 'Caraway seeds', 'Juniper berries', 'White wine', 'Chicken broth'],
        region: 'Bavaria',
        preparationSteps: [
          'Rinse sauerkraut in cold water and drain well.',
          'In a large pot, fry diced bacon until crispy.',
          'Add diced onions and cook until translucent.',
          'Add peeled and diced apples, caraway seeds, and juniper berries.',
          'Add the drained sauerkraut and stir to combine.',
          'Pour in white wine and chicken broth.',
          'Simmer covered for 25-30 minutes until tender and flavorful.',
          'Serve hot as a side dish or with traditional German sausages.'
        ],
        tips: [
          'For a milder flavor, rinse the sauerkraut more thoroughly.',
          'Adding a grated potato will help thicken the dish and add a creamy texture.',
          'For an authentic taste, use Riesling wine from Germany.',
          'Sauerkraut tastes even better when reheated the next day.'
        ]
      },
      de: {
        name: 'Bayerisches Sauerkraut',
        description: 'Fermentierter Kohl, gekocht mit Äpfeln, Zwiebeln und Gewürzen, traditionell serviert zu Würstchen oder gebratenem Fleisch.',
        ingredients: ['Sauerkraut', 'Äpfel', 'Zwiebeln', 'Speck', 'Kümmel', 'Wacholderbeeren', 'Weißwein', 'Hühnerbrühe'],
        region: 'Bayern',
        preparationSteps: [
          'Sauerkraut in kaltem Wasser abspülen und gut abtropfen lassen.',
          'In einem großen Topf gewürfelten Speck knusprig braten.',
          'Gewürfelte Zwiebeln hinzufügen und anbraten, bis sie glasig sind.',
          'Geschälte und gewürfelte Äpfel, Kümmel und Wacholderbeeren hinzufügen.',
          'Das abgetropfte Sauerkraut dazugeben und umrühren.',
          'Weißwein und Hühnerbrühe angießen.',
          'Zugedeckt 25-30 Minuten köcheln lassen, bis alles zart und aromareich ist.',
          'Heiß als Beilage oder zu traditionellen deutschen Würstchen servieren.'
        ],
        tips: [
          'Für einen milderen Geschmack das Sauerkraut gründlicher abspülen.',
          'Das Hinzufügen einer geriebenen Kartoffel hilft, das Gericht anzudicken und gibt eine cremige Textur.',
          'Für einen authentischen Geschmack Riesling aus Deutschland verwenden.',
          'Sauerkraut schmeckt noch besser, wenn es am nächsten Tag wieder aufgewärmt wird.'
        ]
      },
      es: {
        name: 'Chucrut Bávaro',
        description: 'Col fermentada cocinada con manzanas, cebollas y especias, tradicionalmente servida con salchichas o carnes asadas.',
        ingredients: ['Chucrut', 'Manzanas', 'Cebollas', 'Tocino', 'Semillas de alcaravea', 'Bayas de enebro', 'Vino blanco', 'Caldo de pollo'],
        region: 'Baviera',
        preparationSteps: [
          'Enjuague el chucrut en agua fría y escurra bien.',
          'En una olla grande, fría el tocino en cubos hasta que esté crujiente.',
          'Añada cebollas en cubos y cocine hasta que estén transparentes.',
          'Añada manzanas peladas y en cubos, semillas de alcaravea y bayas de enebro.',
          'Añada el chucrut escurrido y revuelva para combinar.',
          'Vierta vino blanco y caldo de pollo.',
          'Cocine a fuego lento tapado durante 25-30 minutos hasta que esté tierno y sabroso.',
          'Sirva caliente como guarnición o con salchichas alemanas tradicionales.'
        ],
        tips: [
          'Para un sabor más suave, enjuague el chucrut más a fondo.',
          'Añadir una patata rallada ayudará a espesar el plato y añadirá una textura cremosa.',
          'Para un sabor auténtico, use vino Riesling de Alemania.',
          'El chucrut sabe aún mejor cuando se recalienta al día siguiente.'
        ]
      },
      fr: {
        name: 'Choucroute Bavaroise',
        description: "Chou fermenté cuit avec des pommes, des oignons et des épices, traditionnellement servi avec des saucisses ou des viandes rôties.",
        ingredients: ['Choucroute', 'Pommes', 'Oignons', 'Lardons', 'Graines de carvi', 'Baies de genièvre', 'Vin blanc', 'Bouillon de poulet'],
        region: 'Bavière',
        preparationSteps: [
          'Rincez la choucroute à l\'eau froide et égouttez-la bien.',
          'Dans une grande casserole, faites frire les lardons jusqu\'à ce qu\'ils soient croustillants.',
          'Ajoutez les oignons coupés en dés et faites-les cuire jusqu\'à ce qu\'ils soient translucides.',
          'Ajoutez les pommes pelées et coupées en dés, les graines de carvi et les baies de genièvre.',
          'Ajoutez la choucroute égouttée et mélangez.',
          'Versez le vin blanc et le bouillon de poulet.',
          'Laissez mijoter à couvert pendant 25-30 minutes jusqu\'à ce que ce soit tendre et savoureux.',
          'Servez chaud en accompagnement ou avec des saucisses allemandes traditionnelles.'
        ],
        tips: [
          'Pour une saveur plus douce, rincez la choucroute plus abondamment.',
          'L\'ajout d\'une pomme de terre râpée aidera à épaissir le plat et ajoutera une texture crémeuse.',
          'Pour un goût authentique, utilisez du vin Riesling d\'Allemagne.',
          'La choucroute est encore meilleure lorsqu\'elle est réchauffée le lendemain.'
        ]
      }
    }
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
    price: 9.99,
    prepTime: 30,
    category: 'desserts',
    audioUrl: {
      en: '/audio/apfelstrudel-en.mp3',
      de: '/audio/apfelstrudel-de.mp3',
      es: '/audio/apfelstrudel-es.mp3',
      fr: '/audio/apfelstrudel-fr.mp3',
    },
    translations: {
      en: {
        name: 'Apple Strudel',
        description: "A layered pastry with a filling of apples, cinnamon, sugar, and raisins, served with vanilla sauce or ice cream.",
        ingredients: ['Pastry dough', 'Apples', 'Cinnamon', 'Sugar', 'Raisins', 'Breadcrumbs', 'Butter', 'Vanilla sauce'],
        region: 'Southern Germany',
        preparationSteps: [
          'Roll out the pastry dough very thin on a floured cloth.',
          'Mix sliced apples with cinnamon, sugar, raisins, and butter.',
          'Sprinkle toasted breadcrumbs over the dough to absorb moisture.',
          'Spread the apple filling evenly, leaving edges clean.',
          'Carefully roll up the strudel using the cloth to help.',
          'Place on baking sheet with seam side down.',
          'Brush with melted butter and bake until golden brown.',
          'Serve warm with vanilla sauce or ice cream.'
        ],
        tips: [
          'For authentic strudel, the dough should be rolled thin enough to read a newspaper through it.',
          'Tart apples like Granny Smith work best for a balanced flavor.',
          'Allow the strudel to rest for 10 minutes before serving to let the juices settle.',
          'Leftover strudel can be reheated in the oven for a crisp texture.'
        ]
      },
      de: {
        name: 'Apfelstrudel',
        description: 'Ein Schichtgebäck mit einer Füllung aus Äpfeln, Zimt, Zucker und Rosinen, serviert mit Vanillesoße oder Eis.',
        ingredients: ['Strudelteig', 'Äpfel', 'Zimt', 'Zucker', 'Rosinen', 'Semmelbrösel', 'Butter', 'Vanillesoße'],
        region: 'Süddeutschland',
        preparationSteps: [
          'Den Strudelteig auf einem bemehlten Tuch sehr dünn ausrollen.',
          'Geschnittene Äpfel mit Zimt, Zucker, Rosinen und Butter mischen.',
          'Geröstete Semmelbrösel über den Teig streuen, um Feuchtigkeit aufzunehmen.',
          'Die Apfelfüllung gleichmäßig verteilen, Ränder freilassen.',
          'Den Strudel vorsichtig mit Hilfe des Tuchs aufrollen.',
          'Mit der Naht nach unten auf ein Backblech legen.',
          'Mit geschmolzener Butter bestreichen und backen, bis er goldbraun ist.',
          'Warm mit Vanillesoße oder Eis servieren.'
        ],
        tips: [
          'Für authentischen Strudel sollte der Teig so dünn ausgerollt werden, dass man eine Zeitung hindurch lesen kann.',
          'Saure Äpfel wie Granny Smith eignen sich am besten für einen ausgewogenen Geschmack.',
          'Den Strudel vor dem Servieren 10 Minuten ruhen lassen, damit sich die Säfte setzen können.',
          'Übrig gebliebener Strudel kann im Ofen wieder aufgewärmt werden, um eine knusprige Textur zu erhalten.'
        ]
      },
      es: {
        name: 'Strudel de Manzana',
        description: 'Un pastel de hojaldre con un relleno de manzanas, canela, azúcar y pasas, servido con salsa de vainilla o helado.',
        ingredients: ['Masa de hojaldre', 'Manzanas', 'Canela', 'Azúcar', 'Pasas', 'Pan rallado', 'Mantequilla', 'Salsa de vainilla'],
        region: 'Sur de Alemania',
        preparationSteps: [
          'Estire la masa de hojaldre muy fina sobre un paño enharinado.',
          'Mezcle las manzanas en rodajas con canela, azúcar, pasas y mantequilla.',
          'Espolvoree pan rallado tostado sobre la masa para absorber la humedad.',
          'Extienda el relleno de manzana uniformemente, dejando los bordes limpios.',
          'Enrolle cuidadosamente el strudel usando el paño como ayuda.',
          'Coloque en una bandeja de hornear con la costura hacia abajo.',
          'Pincele con mantequilla derretida y hornee hasta que esté dorado.',
          'Sirva caliente con salsa de vainilla o helado.'
        ],
        tips: [
          'Para un strudel auténtico, la masa debe ser lo suficientemente fina como para leer un periódico a través de ella.',
          'Las manzanas ácidas como Granny Smith funcionan mejor para un sabor equilibrado.',
          'Deje reposar el strudel durante 10 minutos antes de servir para que los jugos se asienten.',
          'El strudel sobrante se puede recalentar en el horno para obtener una textura crujiente.'
        ]
      },
      fr: {
        name: 'Strudel aux Pommes',
        description: "Une pâtisserie feuilletée avec une garniture de pommes, cannelle, sucre et raisins secs, servie avec une sauce à la vanille ou de la glace.",
        ingredients: ['Pâte à strudel', 'Pommes', 'Cannelle', 'Sucre', 'Raisins secs', 'Chapelure', 'Beurre', 'Sauce à la vanille'],
        region: "Allemagne du Sud",
        preparationSteps: [
          'Étalez la pâte à strudel très fine sur un torchon fariné.',
          'Mélangez les pommes tranchées avec la cannelle, le sucre, les raisins secs et le beurre.',
          'Saupoudrez de chapelure grillée sur la pâte pour absorber l\'humidité.',
          'Étalez la garniture aux pommes uniformément, en laissant les bords propres.',
          'Roulez soigneusement le strudel en utilisant le torchon comme aide.',
          'Placez sur une plaque à pâtisserie, couture vers le bas.',
          'Badigeonnez de beurre fondu et faites cuire jusqu\'à ce qu\'il soit doré.',
          'Servez chaud avec de la sauce à la vanille ou de la glace.'
        ],
        tips: [
          'Pour un strudel authentique, la pâte doit être assez fine pour lire un journal à travers.',
          'Les pommes acidulées comme les Granny Smith fonctionnent mieux pour une saveur équilibrée.',
          'Laissez reposer le strudel pendant 10 minutes avant de servir pour laisser les jus se stabiliser.',
          'Les restes de strudel peuvent être réchauffés au four pour une texture croustillante.'
        ]
      }
    }
  },
  {
    id: '10',
    imageUrl: 'https://kravingsfoodadventures.com/wp-content/uploads/2018/06/KonisbergerKlopse-H2.jpg',
    price: 16.99,
    prepTime: 60,
    category: 'meat',
    audioUrl: {
      en: '/audio/koenigsberg-en.mp3',
      de: '/audio/koenigsberg-de.mp3',
      es: '/audio/koenigsberg-es.mp3',
      fr: '/audio/koenigsberg-fr.mp3',
    },
    translations: {
      en: {
        name: 'Königsberger Klopse',
        description: "Delicate meatballs made from veal or beef in a creamy caper sauce, a traditional dish from Eastern Prussia.",
        ingredients: ['Veal or beef', 'Anchovy fillets', 'Capers', 'Flour', 'Butter', 'Lemon', 'Cream', 'Eggs', 'White bread'],
        region: 'East Prussia (now Kaliningrad)',
        preparationSteps: [
          'Soak white bread in water, then squeeze dry.',
          'Mix ground meat with soaked bread, eggs, minced anchovy, and spices.',
          'Form meat mixture into golf ball-sized meatballs.',
          'Gently simmer meatballs in salted water until cooked through.',
          'Make a roux with butter and flour, gradually add cooking liquid.',
          'Add capers, cream, and lemon juice to create the sauce.',
          'Return meatballs to the sauce and warm through.',
          'Serve with boiled potatoes and garnish with fresh parsley.'
        ],
        tips: [
          'Use a mixture of veal and beef for the most authentic flavor.',
          'Adding a splash of white wine to the sauce enhances the flavor.',
          'The meatballs should be very delicate - handle gently when cooking.',
          'Traditional serving includes boiled potatoes and beetroot salad.'
        ]
      },
      de: {
        name: 'Königsberger Klopse',
        description: 'Zarte Fleischklößchen aus Kalb- oder Rindfleisch in einer cremigen Kapernsauce, ein traditionelles Gericht aus Ostpreußen.',
        ingredients: ['Kalb- oder Rindfleisch', 'Anchovisfilets', 'Kapern', 'Mehl', 'Butter', 'Zitrone', 'Sahne', 'Eier', 'Weißbrot'],
        region: 'Ostpreußen (heute Kaliningrad)',
        preparationSteps: [
          'Weißbrot in Wasser einweichen, dann ausdrücken.',
          'Hackfleisch mit eingeweichtem Brot, Eiern, gehackten Anchovis und Gewürzen mischen.',
          'Aus der Fleischmischung golfballgroße Klößchen formen.',
          'Klößchen in Salzwasser sanft köcheln lassen, bis sie gar sind.',
          'Eine Mehlschwitze aus Butter und Mehl herstellen, nach und nach Kochflüssigkeit hinzufügen.',
          'Kapern, Sahne und Zitronensaft hinzufügen, um die Sauce zu erstellen.',
          'Klößchen in die Sauce zurückgeben und durcherwärmen.',
          'Mit gekochten Kartoffeln servieren und mit frischer Petersilie garnieren.'
        ],
        tips: [
          'Verwenden Sie eine Mischung aus Kalb- und Rindfleisch für den authentischsten Geschmack.',
          'Ein Schuss Weißwein in der Sauce verstärkt das Aroma.',
          'Die Klößchen sollten sehr zart sein - behandeln Sie sie beim Kochen vorsichtig.',
          'Traditionell wird das Gericht mit gekochten Kartoffeln und Rote-Bete-Salat serviert.'
        ]
      },
      es: {
        name: 'Albóndigas de Königsberg',
        description: 'Delicadas albóndigas de ternera o res en una cremosa salsa de alcaparras, un plato tradicional de Prusia Oriental.',
        ingredients: ['Ternera o res', 'Filetes de anchoa', 'Alcaparras', 'Harina', 'Mantequilla', 'Limón', 'Crema', 'Huevos', 'Pan blanco'],
        region: 'Prusia Oriental (ahora Kaliningrado)',
        preparationSteps: [
          'Remoje el pan blanco en agua, luego exprima.',
          'Mezcle la carne molida con el pan remojado, huevos, anchoa picada y especias.',
          'Forme albóndigas del tamaño de una pelota de golf con la mezcla de carne.',
          'Cocine suavemente las albóndigas en agua salada hasta que estén bien cocidas.',
          'Haga un roux con mantequilla y harina, agregue gradualmente el líquido de cocción.',
          'Añada alcaparras, crema y jugo de limón para crear la salsa.',
          'Vuelva a poner las albóndigas en la salsa y caliente.',
          'Sirva con patatas hervidas y decore con perejil fresco.'
        ],
        tips: [
          'Use una mezcla de ternera y res para el sabor más auténtico.',
          'Añadir un chorrito de vino blanco a la salsa realza el sabor.',
          'Las albóndigas deben ser muy delicadas - manéjelas con cuidado al cocinarlas.',
          'La forma tradicional de servir incluye patatas hervidas y ensalada de remolacha.'
        ]
      },
      fr: {
        name: 'Boulettes de Königsberg',
        description: "Délicates boulettes de viande de veau ou de bœuf dans une sauce crémeuse aux câpres, un plat traditionnel de Prusse orientale.",
        ingredients: ['Veau ou bœuf', 'Filets d\'anchois', 'Câpres', 'Farine', 'Beurre', 'Citron', 'Crème', 'Œufs', 'Pain blanc'],
        region: 'Prusse orientale (maintenant Kaliningrad)',
        preparationSteps: [
          'Trempez le pain blanc dans l\'eau, puis pressez-le.',
          'Mélangez la viande hachée avec le pain trempé, les œufs, l\'anchois émincé et les épices.',
          'Formez des boulettes de la taille d\'une balle de golf avec le mélange de viande.',
          'Faites mijoter doucement les boulettes dans de l\'eau salée jusqu\'à ce qu\'elles soient cuites.',
          'Faites un roux avec du beurre et de la farine, ajoutez progressivement le liquide de cuisson.',
          'Ajoutez les câpres, la crème et le jus de citron pour créer la sauce.',
          'Remettez les boulettes dans la sauce et réchauffez.',
          'Servez avec des pommes de terre bouillies et garnissez de persil frais.'
        ],
        tips: [
          'Utilisez un mélange de veau et de bœuf pour la saveur la plus authentique.',
          'L\'ajout d\'un peu de vin blanc à la sauce rehausse la saveur.',
          'Les boulettes doivent être très délicates - manipulez-les doucement lors de la cuisson.',
          'Le service traditionnel comprend des pommes de terre bouillies et une salade de betteraves.'
        ]
      }
    }
  },
  {
    id: '11',
    imageUrl: 'https://images.unsplash.com/photo-1515942400420-2b98fed1f515',
    price: 17.99,
    prepTime: 75,
    category: 'meat',
    audioUrl: {
      en: '/audio/schnitzel-en.mp3',
      de: '/audio/schnitzel-de.mp3',
      es: '/audio/schnitzel-es.mp3',
      fr: '/audio/schnitzel-fr.mp3',
    },
    translations: {
      en: {
        name: 'Jägerschnitzel',
        description: "Breaded pork schnitzel topped with a rich mushroom sauce, a hunter-style variation of the classic schnitzel.",
        ingredients: ['Pork cutlets', 'Breadcrumbs', 'Mushrooms', 'Onions', 'Bacon', 'Cream', 'White wine', 'Fresh herbs'],
        region: 'Throughout Germany',
        preparationSteps: [
          'Pound pork cutlets to about 1/4-inch thickness.',
          'Season with salt and pepper, then coat in flour, egg, and breadcrumbs.',
          'Fry in hot oil until golden brown on both sides.',
          'For the sauce, sauté diced bacon until crispy.',
          'Add chopped onions and sliced mushrooms, cook until browned.',
          'Deglaze with white wine and reduce slightly.',
          'Add cream and simmer until thickened, then season with herbs.',
          'Serve schnitzel topped with the mushroom sauce and garnish with parsley.'
        ],
        tips: [
          'Use a variety of mushrooms for complex flavors - cremini, porcini, and oyster mushrooms work well.',
          'Adding a splash of brandy to the sauce deepens the flavor.',
          'For a lighter version, the schnitzel can be prepared without breading.',
          'Traditional accompaniments include spätzle or roasted potatoes.'
        ]
      },
      de: {
        name: 'Jägerschnitzel',
        description: 'Paniertes Schweineschnitzel mit einer reichhaltigen Pilzsauce, eine Jäger-Variante des klassischen Schnitzels.',
        ingredients: ['Schweineschnitzel', 'Semmelbrösel', 'Pilze', 'Zwiebeln', 'Speck', 'Sahne', 'Weißwein', 'Frische Kräuter'],
        region: 'In ganz Deutschland',
        preparationSteps: [
          'Schweineschnitzel auf etwa 0,6 cm Dicke klopfen.',
          'Mit Salz und Pfeffer würzen, dann in Mehl, Ei und Semmelbröseln wenden.',
          'In heißem Öl von beiden Seiten goldbraun braten.',
          'Für die Sauce gewürfelten Speck knusprig anbraten.',
          'Gehackte Zwiebeln und geschnittene Pilze hinzufügen, anbraten bis sie gebräunt sind.',
          'Mit Weißwein ablöschen und leicht reduzieren lassen.',
          'Sahne hinzufügen und eindicken lassen, dann mit Kräutern abschmecken.',
          'Schnitzel mit der Pilzsauce übergießen und mit Petersilie garnieren.'
        ],
        tips: [
          'Verwenden Sie verschiedene Pilzsorten für komplexe Aromen - Champignons, Steinpilze und Austernpilze eignen sich gut.',
          'Ein Schuss Cognac in der Sauce vertieft den Geschmack.',
          'Für eine leichtere Version kann das Schnitzel ohne Panade zubereitet werden.',
          'Traditionelle Beilagen sind Spätzle oder Bratkartoffeln.'
        ]
      },
      es: {
        name: 'Schnitzel del Cazador',
        description: 'Schnitzel de cerdo empanado cubierto con una rica salsa de champiñones, una variación al estilo cazador del schnitzel clásico.',
        ingredients: ['Chuletas de cerdo', 'Pan rallado', 'Champiñones', 'Cebollas', 'Tocino', 'Crema', 'Vino blanco', 'Hierbas frescas'],
        region: 'Por toda Alemania',
        preparationSteps: [
          'Golpee las chuletas de cerdo hasta que tengan aproximadamente 0,6 cm de grosor.',
          'Sazone con sal y pimienta, luego cubra con harina, huevo y pan rallado.',
          'Fría en aceite caliente hasta que esté dorado por ambos lados.',
          'Para la salsa, saltee el tocino en cubos hasta que esté crujiente.',
          'Añada cebollas picadas y champiñones en rodajas, cocine hasta que estén dorados.',
          'Deglase con vino blanco y reduzca ligeramente.',
          'Añada crema y cocine a fuego lento hasta que espese, luego sazone con hierbas.',
          'Sirva el schnitzel cubierto con la salsa de champiñones y adorne con perejil.'
        ],
        tips: [
          'Use una variedad de champiñones para sabores complejos - cremini, porcini y ostras funcionan bien.',
          'Añadir un chorrito de brandy a la salsa profundiza el sabor.',
          'Para una versión más ligera, el schnitzel se puede preparar sin empanar.',
          'Los acompañamientos tradicionales incluyen spätzle o patatas asadas.'
        ]
      },
      fr: {
        name: 'Schnitzel du Chasseur',
        description: "Escalope de porc panée garnie d'une riche sauce aux champignons, une variation de style chasseur du schnitzel classique.",
        ingredients: ['Escalopes de porc', 'Chapelure', 'Champignons', 'Oignons', 'Lardons', 'Crème', 'Vin blanc', 'Herbes fraîches'],
        region: "Dans toute l'Allemagne",
        preparationSteps: [
          'Aplatissez les escalopes de porc jusqu\'à environ 0,6 cm d\'épaisseur.',
          'Assaisonnez de sel et de poivre, puis enrobez de farine, d\'œuf et de chapelure.',
          'Faites frire dans de l\'huile chaude jusqu\'à ce qu\'elles soient dorées des deux côtés.',
          'Pour la sauce, faites revenir les lardons jusqu\'à ce qu\'ils soient croustillants.',
          'Ajoutez les oignons hachés et les champignons tranchés, faites cuire jusqu\'à ce qu\'ils soient dorés.',
          'Déglacez avec du vin blanc et réduisez légèrement.',
          'Ajoutez la crème et laissez mijoter jusqu\'à épaississement, puis assaisonnez avec des herbes.',
          'Servez le schnitzel nappé de sauce aux champignons et garnissez de persil.'
        ],
        tips: [
          'Utilisez une variété de champignons pour des saveurs complexes - cremini, cèpes et pleurotes fonctionnent bien.',
          'L\'ajout d\'un peu de cognac à la sauce approfondit la saveur.',
          'Pour une version plus légère, le schnitzel peut être préparé sans chapelure.',
          'Les accompagnements traditionnels comprennent des spätzle ou des pommes de terre rôties.'
        ]
      }
    }
  },
  {
    id: '12',
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
    price: 15.99,
    prepTime: 55,
    category: 'meat',
    audioUrl: {
      en: '/audio/schweinshaxe-en.mp3',
      de: '/audio/schweinshaxe-de.mp3',
      es: '/audio/schweinshaxe-es.mp3',
      fr: '/audio/schweinshaxe-fr.mp3',
    },
    translations: {
      en: {
        name: 'Schweinshaxe',
        description: "Roasted pork knuckle with crispy skin and tender meat, a Bavarian specialty often served at Oktoberfest.",
        ingredients: ['Pork knuckle', 'Garlic', 'Caraway seeds', 'Dark beer', 'Onions', 'Potatoes', 'Salt', 'Black pepper'],
        region: 'Bavaria',
        preparationSteps: [
          'Score the skin of the pork knuckle in a diamond pattern.',
          'Rub with salt, pepper, minced garlic, and caraway seeds.',
          'Let marinate in the refrigerator for several hours or overnight.',
          'Place on a bed of sliced onions in a roasting pan.',
          'Add dark beer and some water to the pan.',
          'Roast at 180°C (350°F) for about 2 hours, basting occasionally.',
          'Increase heat to 220°C (425°F) for the last 20-30 minutes to crisp the skin.',
          'Serve with potato dumplings and sauerkraut.'
        ],
        tips: [
          'Choose a meaty pork knuckle with enough fat under the skin for best results.',
          'Dry the skin thoroughly before scoring to ensure maximum crispiness.',
          'A blend of beer and broth in the roasting pan adds depth of flavor.',
          'Let the meat rest for 10-15 minutes before serving for juicier results.'
        ]
      },
      de: {
        name: 'Schweinshaxe',
        description: 'Gebratener Schweinshachsen mit knuspriger Kruste und zartem Fleisch, eine bayerische Spezialität, die oft zum Oktoberfest serviert wird.',
        ingredients: ['Schweinshachsen', 'Knoblauch', 'Kümmel', 'Dunkles Bier', 'Zwiebeln', 'Kartoffeln', 'Salz', 'Schwarzer Pfeffer'],
        region: 'Bayern',
        preparationSteps: [
          'Die Schwarte des Schweinshachsens in einem Rautenmuster einschneiden.',
          'Mit Salz, Pfeffer, gehacktem Knoblauch und Kümmel einreiben.',
          'Mehrere Stunden oder über Nacht im Kühlschrank marinieren lassen.',
          'Auf ein Bett aus geschnittenen Zwiebeln in eine Bratpfanne legen.',
          'Dunkles Bier und etwas Wasser in die Pfanne geben.',
          'Bei 180°C etwa 2 Stunden braten, gelegentlich mit der Flüssigkeit übergießen.',
          'Für die letzten 20-30 Minuten die Hitze auf 220°C erhöhen, um die Schwarte knusprig zu machen.',
          'Mit Kartoffelknödeln und Sauerkraut servieren.'
        ],
        tips: [
          'Wählen Sie einen fleischigen Schweinshachsen mit ausreichend Fett unter der Schwarte für das beste Ergebnis.',
          'Die Schwarte vor dem Einschneiden gründlich trocknen, um maximale Knusprigkeit zu gewährleisten.',
          'Eine Mischung aus Bier und Brühe in der Bratpfanne gibt zusätzlichen Geschmack.',
          'Das Fleisch vor dem Servieren 10-15 Minuten ruhen lassen für ein saftigeres Ergebnis.'
        ]
      },
      es: {
        name: 'Codillo de Cerdo',
        description: 'Codillo de cerdo asado con piel crujiente y carne tierna, una especialidad bávara que se sirve a menudo en el Oktoberfest.',
        ingredients: ['Codillo de cerdo', 'Ajo', 'Semillas de alcaravea', 'Cerveza oscura', 'Cebollas', 'Patatas', 'Sal', 'Pimienta negra'],
        region: 'Baviera',
        preparationSteps: [
          'Marque la piel del codillo de cerdo en un patrón de diamante.',
          'Frote con sal, pimienta, ajo picado y semillas de alcaravea.',
          'Deje marinar en el refrigerador durante varias horas o toda la noche.',
          'Coloque sobre una cama de cebollas en rodajas en una bandeja para asar.',
          'Añada cerveza oscura y algo de agua a la bandeja.',
          'Ase a 180°C durante unas 2 horas, rociando ocasionalmente.',
          'Aumente el calor a 220°C durante los últimos 20-30 minutos para que la piel quede crujiente.',
          'Sirva con albóndigas de patata y chucrut.'
        ],
        tips: [
          'Elija un codillo de cerdo carnoso con suficiente grasa debajo de la piel para obtener mejores resultados.',
          'Seque bien la piel antes de marcarla para asegurar la máxima textura crujiente.',
          'Una mezcla de cerveza y caldo en la bandeja de asar añade profundidad de sabor.',
          'Deje reposar la carne durante 10-15 minutos antes de servir para obtener resultados más jugosos.'
        ]
      },
      fr: {
        name: 'Jarret de Porc',
        description: "Jarret de porc rôti avec une peau croustillante et une viande tendre, une spécialité bavaroise souvent servie à l'Oktoberfest.",
        ingredients: ['Jarret de porc', 'Ail', 'Graines de carvi', 'Bière brune', 'Oignons', 'Pommes de terre', 'Sel', 'Poivre noir'],
        region: 'Bavière',
        preparationSteps: [
          'Incisez la peau du jarret de porc en motif de losange.',
          'Frottez avec du sel, du poivre, de l\'ail émincé et des graines de carvi.',
          'Laissez mariner au réfrigérateur pendant plusieurs heures ou toute la nuit.',
          'Placez sur un lit d\'oignons tranchés dans un plat à rôtir.',
          'Ajoutez de la bière brune et un peu d\'eau dans le plat.',
          'Faites rôtir à 180°C pendant environ 2 heures, en arrosant occasionnellement.',
          'Augmentez la chaleur à 220°C pendant les 20-30 dernières minutes pour rendre la peau croustillante.',
          'Servez avec des boulettes de pommes de terre et de la choucroute.'
        ],
        tips: [
          'Choisissez un jarret de porc charnu avec suffisamment de graisse sous la peau pour de meilleurs résultats.',
          'Séchez bien la peau avant de l\'inciser pour assurer un maximum de croustillant.',
          'Un mélange de bière et de bouillon dans le plat à rôtir ajoute de la profondeur à la saveur.',
          'Laissez la viande reposer pendant 10-15 minutes avant de servir pour des résultats plus juteux.'
        ]
      }
    }
  },
  {
    id: '13',
    imageUrl: 'https://images.unsplash.com/photo-1514995669114-6081e934b693',
    price: 9.99,
    prepTime: 35,
    category: 'desserts',
    audioUrl: {
      en: '/audio/berliner-en.mp3',
      de: '/audio/berliner-de.mp3',
      es: '/audio/berliner-es.mp3',
      fr: '/audio/berliner-fr.mp3',
    },
    translations: {
      en: {
        name: 'Berliner Pfannkuchen',
        description: "Fluffy, deep-fried pastry filled with jam or custard, similar to a donut without a hole.",
        ingredients: ['Flour', 'Eggs', 'Butter', 'Sugar', 'Milk', 'Yeast', 'Jam or custard', 'Powdered sugar'],
        region: 'Berlin and throughout Germany',
        preparationSteps: [
          'Prepare a yeast dough with flour, eggs, sugar, butter, and milk.',
          'Let the dough rise until doubled in size.',
          'Roll out the dough and cut into round shapes.',
          'Let the rounds rise again until puffy.',
          'Deep fry in oil at 175°C (350°F) until golden brown on both sides.',
          'Drain on paper towels and let cool slightly.',
          'Fill with jam or custard using a piping bag.',
          'Dust with powdered sugar before serving.'
        ],
        tips: [
          'Traditional fillings include raspberry or plum jam, but chocolate or vanilla custard are also popular.',
          'For best results, maintain oil temperature between 170-180°C (340-355°F).',
          'A regional joke is to fill one Berliner with mustard during carnival season.',
          'They are best eaten the same day they are made, but can be frozen unfilled.'
        ]
      },
      de: {
        name: 'Berliner Pfannkuchen',
        description: 'Fluffiges, fritiertes Gebäck gefüllt mit Marmelade oder Pudding, ähnlich einem Donut ohne Loch.',
        ingredients: ['Mehl', 'Eier', 'Butter', 'Zucker', 'Milch', 'Hefe', 'Marmelade oder Pudding', 'Puderzucker'],
        region: 'Berlin und in ganz Deutschland',
        preparationSteps: [
          'Einen Hefeteig aus Mehl, Eiern, Zucker, Butter und Milch zubereiten.',
          'Den Teig gehen lassen, bis er sich verdoppelt hat.',
          'Den Teig ausrollen und runde Formen ausstechen.',
          'Die Teiglinge nochmals gehen lassen, bis sie aufgegangen sind.',
          'In Öl bei 175°C von beiden Seiten goldbraun ausbacken.',
          'Auf Küchenpapier abtropfen lassen und leicht abkühlen lassen.',
          'Mit Marmelade oder Pudding mithilfe eines Spritzbeutels füllen.',
          'Vor dem Servieren mit Puderzucker bestäuben.'
        ],
        tips: [
          'Traditionelle Füllungen sind Himbeer- oder Pflaumenmarmelade, aber auch Schokoladen- oder Vanillepudding sind beliebt.',
          'Für beste Ergebnisse die Öltemperatur zwischen 170-180°C halten.',
          'Ein regionaler Scherz ist es, während der Karnevalszeit einen Berliner mit Senf zu füllen.',
          'Sie schmecken am besten am Tag der Herstellung, können aber ungefüllt eingefroren werden.'
        ]
      },
      es: {
        name: 'Berliner',
        description: 'Pastelería esponjosa y frita rellena de mermelada o crema, similar a una dona sin agujero.',
        ingredients: ['Harina', 'Huevos', 'Mantequilla', 'Azúcar', 'Leche', 'Levadura', 'Mermelada o crema', 'Azúcar glas'],
        region: 'Berlín y por toda Alemania',
        preparationSteps: [
          'Prepare una masa de levadura con harina, huevos, azúcar, mantequilla y leche.',
          'Deje que la masa suba hasta que doble su tamaño.',
          'Estire la masa y corte en formas redondas.',
          'Deje que las formas suban de nuevo hasta que estén esponjosas.',
          'Fría en aceite a 175°C hasta que esté dorado por ambos lados.',
          'Escurra sobre papel absorbente y deje enfriar ligeramente.',
          'Rellene con mermelada o crema usando una manga pastelera.',
          'Espolvoree con azúcar glas antes de servir.'
        ],
        tips: [
          'Los rellenos tradicionales incluyen mermelada de frambuesa o ciruela, pero la crema de chocolate o vainilla también son populares.',
          'Para mejores resultados, mantenga la temperatura del aceite entre 170-180°C.',
          'Una broma regional es rellenar un Berliner con mostaza durante la temporada de carnaval.',
          'Son mejores consumidos el mismo día que se hacen, pero pueden congelarse sin rellenar.'
        ]
      },
      fr: {
        name: 'Beignet Berlinois',
        description: "Pâtisserie moelleuse et frite, farcie de confiture ou de crème pâtissière, similaire à un beignet sans trou.",
        ingredients: ['Farine', 'Œufs', 'Beurre', 'Sucre', 'Lait', 'Levure', 'Confiture ou crème pâtissière', 'Sucre glace'],
        region: 'Berlin et dans toute l\'Allemagne',
        preparationSteps: [
          'Préparez une pâte à levure avec de la farine, des œufs, du sucre, du beurre et du lait.',
          'Laissez la pâte lever jusqu\'à ce qu\'elle double de volume.',
          'Étalez la pâte et découpez des formes rondes.',
          'Laissez les ronds lever à nouveau jusqu\'à ce qu\'ils soient gonflés.',
          'Faites frire dans de l\'huile à 175°C jusqu\'à ce qu\'ils soient dorés des deux côtés.',
          'Égouttez sur du papier absorbant et laissez refroidir légèrement.',
          'Remplissez de confiture ou de crème pâtissière à l\'aide d\'une poche à douille.',
          'Saupoudrez de sucre glace avant de servir.'
        ],
        tips: [
          'Les garnitures traditionnelles comprennent la confiture de framboise ou de prune, mais la crème pâtissière au chocolat ou à la vanille sont également populaires.',
          'Pour de meilleurs résultats, maintenez la température de l\'huile entre 170-180°C.',
          'Une blague régionale consiste à remplir un beignet de moutarde pendant la saison du carnaval.',
          'Ils sont meilleurs consommés le jour même de leur préparation, mais peuvent être congelés non remplis.'
        ]
      }
    }
  },
  {
    id: '14',
    imageUrl: 'https://i.pinimg.com/originals/d0/0f/be/d00fbe57c1dab1933757818cdc0654a4.jpg',
    price: 10.99,
    prepTime: 30,
    category: 'sides',
    audioUrl: {
      en: '/audio/kartoffelpuffer-en.mp3',
      de: '/audio/kartoffelpuffer-de.mp3',
      es: '/audio/kartoffelpuffer-es.mp3',
      fr: '/audio/kartoffelpuffer-fr.mp3',
    },
    translations: {
      en: {
        name: 'Kartoffelpuffer',
        description: "Crispy potato pancakes made from grated potatoes and onions, served with applesauce or sour cream.",
        ingredients: ['Potatoes', 'Onions', 'Eggs', 'Flour', 'Salt', 'Nutmeg', 'Applesauce', 'Sour cream'],
        region: 'Throughout Germany',
        preparationSteps: [
          'Peel and grate potatoes and onions finely.',
          'Squeeze out excess liquid from the grated potatoes.',
          'Mix with eggs, flour, salt, and a pinch of nutmeg.',
          'Heat oil in a large skillet over medium-high heat.',
          'Drop spoonfuls of the mixture into the hot oil and flatten slightly.',
          'Fry until golden brown on both sides, about 3-4 minutes per side.',
          'Drain on paper towels to remove excess oil.',
          'Serve hot with applesauce or sour cream.'
        ],
        tips: [
          'Squeezing the liquid from the potatoes is crucial for crispy pancakes.',
          'Use starchy potatoes like Russets for the best texture.',
          'They are traditionally served at Christmas markets with applesauce.',
          'For a savory version, serve with smoked salmon and horseradish cream.'
        ]
      },
      de: {
        name: 'Kartoffelpuffer',
        description: 'Knusprige Kartoffelpfannkuchen aus geriebenen Kartoffeln und Zwiebeln, serviert mit Apfelmus oder saurer Sahne.',
        ingredients: ['Kartoffeln', 'Zwiebeln', 'Eier', 'Mehl', 'Salz', 'Muskatnuss', 'Apfelmus', 'Saure Sahne'],
        region: 'In ganz Deutschland',
        preparationSteps: [
          'Kartoffeln und Zwiebeln schälen und fein reiben.',
          'Überschüssige Flüssigkeit aus den geriebenen Kartoffeln ausdrücken.',
          'Mit Eiern, Mehl, Salz und einer Prise Muskatnuss vermischen.',
          'Öl in einer großen Pfanne bei mittlerer bis hoher Hitze erhitzen.',
          'Löffelweise von der Mischung in das heiße Öl geben und leicht flachdrücken.',
          'Von beiden Seiten goldbraun braten, etwa 3-4 Minuten pro Seite.',
          'Auf Küchenpapier abtropfen lassen, um überschüssiges Öl zu entfernen.',
          'Heiß mit Apfelmus oder saurer Sahne servieren.'
        ],
        tips: [
          'Das Ausdrücken der Flüssigkeit aus den Kartoffeln ist entscheidend für knusprige Puffer.',
          'Verwenden Sie stärkehaltige Kartoffeln wie Mehligkochende für die beste Textur.',
          'Sie werden traditionell auf Weihnachtsmärkten mit Apfelmus serviert.',
          'Für eine herzhafte Variante servieren Sie sie mit Räucherlachs und Meerrettichcreme.'
        ]
      },
      es: {
        name: 'Tortitas de Patata',
        description: 'Tortitas crujientes de patata hechas de patatas y cebollas ralladas, servidas con compota de manzana o crema agria.',
        ingredients: ['Patatas', 'Cebollas', 'Huevos', 'Harina', 'Sal', 'Nuez moscada', 'Compota de manzana', 'Crema agria'],
        region: 'Por toda Alemania',
        preparationSteps: [
          'Pele y ralle finamente las patatas y cebollas.',
          'Exprima el exceso de líquido de las patatas ralladas.',
          'Mezcle con huevos, harina, sal y una pizca de nuez moscada.',
          'Caliente aceite en una sartén grande a fuego medio-alto.',
          'Vierta cucharadas de la mezcla en el aceite caliente y aplane ligeramente.',
          'Fría hasta que estén doradas por ambos lados, aproximadamente 3-4 minutos por lado.',
          'Escurra sobre papel absorbente para eliminar el exceso de aceite.',
          'Sirva caliente con compota de manzana o crema agria.'
        ],
        tips: [
          'Exprimir el líquido de las patatas es crucial para obtener tortitas crujientes.',
          'Use patatas con almidón como las Russet para la mejor textura.',
          'Se sirven tradicionalmente en mercados navideños con compota de manzana.',
          'Para una versión salada, sirva con salmón ahumado y crema de rábano picante.'
        ]
      },
      fr: {
        name: 'Galettes de Pommes de Terre',
        description: "Crêpes de pommes de terre croustillantes faites à partir de pommes de terre et d'oignons râpés, servies avec de la compote de pommes ou de la crème fraîche.",
        ingredients: ['Pommes de terre', 'Oignons', 'Œufs', 'Farine', 'Sel', 'Muscade', 'Compote de pommes', 'Crème fraîche'],
        region: "Dans toute l'Allemagne",
        preparationSteps: [
          'Épluchez et râpez finement les pommes de terre et les oignons.',
          'Pressez l\'excès de liquide des pommes de terre râpées.',
          'Mélangez avec les œufs, la farine, le sel et une pincée de muscade.',
          'Faites chauffer de l\'huile dans une grande poêle à feu moyen-vif.',
          'Déposez des cuillerées du mélange dans l\'huile chaude et aplatissez légèrement.',
          'Faites frire jusqu\'à ce qu\'elles soient dorées des deux côtés, environ 3-4 minutes par côté.',
          'Égouttez sur du papier absorbant pour éliminer l\'excès d\'huile.',
          'Servez chaud avec de la compote de pommes ou de la crème fraîche.'
        ],
        tips: [
          'Presser le liquide des pommes de terre est crucial pour des galettes croustillantes.',
          'Utilisez des pommes de terre féculentes comme les Russets pour la meilleure texture.',
          'Elles sont traditionnellement servies dans les marchés de Noël avec de la compote de pommes.',
          'Pour une version salée, servez avec du saumon fumé et de la crème au raifort.'
        ]
      }
    }
  },
  {
    id: '16',
    imageUrl: 'https://media.30seconds.com/tip/lg/Currywurst-Recipe-31432-8ed656eee3-1632799912.jpg',
    price: 11.99,
    prepTime: 30,
    category: 'sausages',
    audioUrl: {
      en: '/audio/currywurst-en.mp3',
      de: '/audio/currywurst-de.mp3',
      es: '/audio/currywurst-es.mp3',
      fr: '/audio/currywurst-fr.mp3',
    },
    translations: {
      en: {
        name: 'Currywurst',
        description: "Steamed and fried pork sausage topped with curry ketchup and curry powder, a post-war Berlin invention.",
        ingredients: ['Bratwurst', 'Ketchup', 'Worcestershire sauce', 'Curry powder', 'Paprika', 'Sugar', 'French fries', 'Mayonnaise'],
        region: 'Berlin',
        preparationSteps: [
          'Steam the bratwurst sausages for about 20 minutes.',
          'While the sausages are steaming, prepare the curry sauce by mixing ketchup, Worcestershire sauce, paprika, and sugar.',
          'Heat the curry sauce mixture in a small saucepan.',
          'Grill or fry the steamed sausages until browned on the outside.',
          'Slice the sausages into bite-sized pieces.',
          'Pour the warm curry sauce over the sliced sausages.',
          'Sprinkle generously with curry powder.',
          'Serve with french fries and mayonnaise on the side.'
        ],
        tips: [
          'For an authentic experience, use German bratwurst rather than any other type of sausage.',
          'The curry sauce should be sweet, tangy, and mildly spicy.',
          'Some street vendors in Berlin keep their exact curry sauce recipe a closely guarded secret.',
          'Traditional serving includes a small wooden fork for eating the sliced sausage pieces.'
        ]
      },
      de: {
        name: 'Currywurst',
        description: 'Gedämpfte und gebratene Schweinswurst, bedeckt mit Curry-Ketchup und Currypulver, eine Berliner Erfindung der Nachkriegszeit.',
        ingredients: ['Bratwurst', 'Ketchup', 'Worcestershire-Sauce', 'Currypulver', 'Paprika', 'Zucker', 'Pommes Frites', 'Mayonnaise'],
        region: 'Berlin',
        preparationSteps: [
          'Die Bratwürste etwa 20 Minuten dämpfen.',
          'Während die Würste dämpfen, die Currysauce aus Ketchup, Worcestershire-Sauce, Paprika und Zucker zubereiten.',
          'Die Currysauce-Mischung in einem kleinen Topf erwärmen.',
          'Die gedämpften Würste grillen oder braten, bis sie außen gebräunt sind.',
          'Die Würste in mundgerechte Stücke schneiden.',
          'Die warme Currysauce über die geschnittenen Würste gießen.',
          'Großzügig mit Currypulver bestreuen.',
          'Mit Pommes Frites und Mayonnaise servieren.'
        ],
        tips: [
          'Für ein authentisches Erlebnis verwenden Sie deutsche Bratwurst statt einer anderen Wurstart.',
          'Die Currysauce sollte süß, würzig und leicht scharf sein.',
          'Einige Straßenverkäufer in Berlin halten ihr genaues Currysaucen-Rezept streng geheim.',
          'Traditionell wird dazu eine kleine Holzgabel zum Essen der geschnittenen Wurststücke gereicht.'
        ]
      },
      es: {
        name: 'Currywurst',
        description: 'Salchicha de cerdo al vapor y frita, cubierta con ketchup al curry y polvo de curry, una invención berlinesa de la posguerra.',
        ingredients: ['Bratwurst', 'Ketchup', 'Salsa Worcestershire', 'Polvo de curry', 'Pimentón', 'Azúcar', 'Patatas fritas', 'Mayonesa'],
        region: 'Berlín',
        preparationSteps: [
          'Cocine al vapor las salchichas bratwurst durante unos 20 minutos.',
          'Mientras las salchichas están al vapor, prepare la salsa de curry mezclando ketchup, salsa Worcestershire, pimentón y azúcar.',
          'Caliente la mezcla de salsa de curry en una cacerola pequeña.',
          'Ase o fría las salchichas al vapor hasta que estén doradas por fuera.',
          'Corte las salchichas en trozos del tamaño de un bocado.',
          'Vierta la salsa de curry caliente sobre las salchichas cortadas.',
          'Espolvoree generosamente con polvo de curry.',
          'Sirva con patatas fritas y mayonesa aparte.'
        ],
        tips: [
          'Para una experiencia auténtica, use bratwurst alemana en lugar de cualquier otro tipo de salchicha.',
          'La salsa de curry debe ser dulce, picante y ligeramente especiada.',
          'Algunos vendedores ambulantes en Berlín mantienen la receta exacta de su salsa de curry como un secreto bien guardado.',
          'La forma tradicional de servir incluye un pequeño tenedor de madera para comer los trozos de salchicha cortados.'
        ]
      },
      fr: {
        name: 'Currywurst',
        description: "Saucisse de porc cuite à la vapeur puis frite, nappée de ketchup au curry et de poudre de curry, une invention berlinoise d'après-guerre.",
        ingredients: ['Bratwurst', 'Ketchup', 'Sauce Worcestershire', 'Poudre de curry', 'Paprika', 'Sucre', 'Frites', 'Mayonnaise'],
        region: 'Berlin',
        preparationSteps: [
          'Faites cuire les saucisses bratwurst à la vapeur pendant environ 20 minutes.',
          'Pendant que les saucisses cuisent, préparez la sauce au curry en mélangeant ketchup, sauce Worcestershire, paprika et sucre.',
          'Chauffez le mélange de sauce au curry dans une petite casserole.',
          'Grillez ou faites frire les saucisses cuites à la vapeur jusqu\'à ce qu\'elles soient dorées à l\'extérieur.',
          'Coupez les saucisses en morceaux de la taille d\'une bouchée.',
          'Versez la sauce au curry chaude sur les saucisses tranchées.',
          'Saupoudrez généreusement de poudre de curry.',
          'Servez avec des frites et de la mayonnaise à côté.'
        ],
        tips: [
          'Pour une expérience authentique, utilisez de la bratwurst allemande plutôt que tout autre type de saucisse.',
          'La sauce au curry doit être sucrée, acidulée et légèrement épicée.',
          'Certains vendeurs de rue à Berlin gardent leur recette exacte de sauce au curry comme un secret bien gardé.',
          'Le service traditionnel comprend une petite fourchette en bois pour manger les morceaux de saucisse tranchés.'
        ]
      }
    }
  }
];

