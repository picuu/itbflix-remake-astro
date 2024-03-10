interface Film {
    title: string
    image: string
    sinopsis: string
    genres: string[]
    year: number
    duration: number
    trailer: string
    director: string
    script: string[]
    clasification: number
    actors: {
        name: string
        photo: string
        character: string
    }[]
    color: string
    info?: string
}

export const FILMS: Film[] = [
    {
        title: "Joker",
        image: "/img/films/joker.jpg",
        sinopsis: "Gotham, 1981. Arthur Fleck vive con su madre y su única motivación en la vida es hacer reír a la gente. Actúa haciendo de payaso en pequeños trabajos, pero tiene problemas mentales que hacen que la gente le vea como un bicho raro. Su gran sueño es actuar como cómico delante del público, pero una serie de trágicos acontecimientos le hará ir incrementando su ira contra una sociedad que le ignora.",
        genres: ["Drama Social", "Películas dramáticas", "Thrillers", "Dramas sobre temas sociales"],
        year: 1994,
        duration: 121,
        trailer: "https://youtu.be/ygUHhImN98w",
        director: "Todd Phillips",
        script: ["Todd Phillips", "Scott Silver"],
        clasification: 18,
        actors: [
            {
                name: "Joaquin Phoenix",
                photo: "/img/actors/joaquin-phoenix.jpg",
                character: "Joker, Arthur Fleck"
            },
            {
                name: "Robert De Niro",
                photo: "/img/actors/robert-de-niro.jpg",
                character: "Murray Franklin"
            },
            {
                name: "Zazie Beetz",
                photo: "/img/actors/zazie-beetz.jpg",
                character: "Sophie Dumond"
            },
            {
                name: "Frances Conroy",
                photo: "/img/actors/frances-conroy.jpg",
                character: "Penny Fleck"
            },
            {
                name: "Brett Cullen",
                photo: "/img/actors/brett-cullen.jpg",
                character: "Thomas Wayne"
            }
        ],
        color: "#ff1e0040"
    },
    {
        title: "IT",
        image: "/img/films/it.jpg",
        sinopsis: "Cuando empiezan a desaparecer niños en el pueblo de Derry (Maine), un pandilla de amigos lidia con sus mayores miedos al enfrentarse a un malvado payaso llamado Pennywise, cuya historia de asesinatos y violencia data de siglos. Adaptación cinematográfica de la conocida novela de Stephen King 'It'.",
        genres: ["Terror", "Películas de terror", "Películas basadas en libros", "Películas de monstruos"],
        year: 2017,
        duration: 134,
        trailer: "https://youtu.be/hAUTdjf9rko",
        director: "Andy Muschietti",
        script: ["Chase Palmer", "Cary Fukunaga", "Gary Dauberman"],
        clasification: 16,
        actors: [
            {
                name: "Bill Skarsgård",
                photo: "/img/actors/bill-skarsgard.jpg",
                character: "Pennywise"
            },
            {
                name: "Jaeden Martell",
                photo: "/img/actors/jaeden-martell.jpg",
                character: "Bill Denbrough"
            },
            {
                name: "Finn Wolfhard",
                photo: "/img/actors/finn-wolfhard.jpg",
                character: "Richie Tozier"
            },
            {
                name: "Sophia Lillis",
                photo: "/img/actors/sophia-lillis.jpg",
                character: "Beverly Marsh"
            },
            {
                name: "Jeremy Ray Taylor",
                photo: "/img/actors/jeremy-ray-taylor.jpg",
                character: "Ben Hanscom"
            }
        ],
        color: "#ff1e0040"
    },
    {
        title: "Spider-Man No Way Home",
        image: "/img/films/spiderman-no-way-home.jpg",
        sinopsis: "Por primera vez en la historia cinematográfica de Spider-Man, nuestro héroe, vecino y amigo es desenmascarado, y por tanto, ya no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un superhéroe. Cuando pide ayuda al Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser él. Secuela de 'Spider-Man: Far From Home'.",
        genres: ["Ciencia ficción", "Acción y aventuras", "Películas de superhéroes", "Películas de acción y aventuras"],
        year: 2021,
        duration: 148,
        trailer: "https://youtu.be/rt-2cxAiPJk",
        director: "Jon Watts",
        script: ["Chris McKenna", "Erik Sommers"],
        clasification: 12,
        actors: [
            {
                name: "Tom Holland",
                photo: "/img/actors/tom-holland.jpg",
                character: "Spiderman, Peter Parker"
            },
            {
                name: "Zendaya",
                photo: "/img/actors/zendaya.jpg",
                character: "MJ"
            },
            {
                name: "Benedict Cumberbatch",
                photo: "/img/actors/benedict-cumberbatch.jpg",
                character: "Doctor Strange"
            },
            {
                name: "Jacob Batalon",
                photo: "/img/actors/jacob-batalon.jpg",
                character: "Ned Leeds"
            },
            {
                name: "Marisa Tomei",
                photo: "/img/actors/marisa-tomei.jpg",
                character: "May Parker"
            }
        ],
        color: "#001eff40"
    },
    {
        title: "El Lobo de Wall Street",
        image: "/img/films/lobo-wall-street.jpg",
        sinopsis: "Película basada en hechos reales del corredor de bolsa neoyorquino Jordan Belfort. A mediados de los años 80, Belfort era un joven honrado que perseguía el sueño americano, pero pronto en la agencia de valores aprendió que lo más importante no era hacer ganar a sus clientes, sino ser ambicioso y ganar una buena comisión. Su enorme éxito y fortuna le valió el mote de “El lobo de Wall Street”. Dinero. Poder. Mujeres. Drogas. Las tentaciones abundaban y el temor a la ley era irrelevante. Jordan y su manada de lobos consideraban que la discreción era una cualidad anticuada; nunca se conformaban con lo que tenían.",
        genres: [],
        year: 2013,
        duration: 179,
        trailer: "https://youtu.be/iszwuX1AK6A",
        director: "Martin Scorsese",
        script: ["Terence Winter"],
        clasification: 18,
        actors: [
            {
                name: "Leonardo DiCaprio",
                photo: "/img/actors/leonardo-dicaprio.jpg",
                character: "Jordan Belfort"
            },
            {
                name: "Jonah Hill",
                photo: "/img/actors/jonah-hill.jpg",
                character: "Donnie Azoff"
            },
            {
                name: "Margot Robbie",
                photo: "/img/actors/margot-robbie.jpg",
                character: "Naomi Lapaglia"
            },
            {
                name: "Matthew McConaughey",
                photo: "/img/actors/matthew-mcconaughey.jpg",
                character: "Mark Hanna"
            },
            {
                name: "Kyle Chandler",
                photo: "/img/actors/kyle-chandler.jpg",
                character: "Patrick Denham"
            }
        ],
        color: "#918d004d"
    },
    {
        title: "Wonder",
        image: "/img/films/wonder.jpg",
        sinopsis: "Un niño de 10 años nacido con una deformidad facial que le ha obligado a ser operado 27 veces de cirugía, se esfuerza por encajar en su nuevo colegio.",
        genres: ["Drama", "Películas basadas en libros", "Películas para toda la familia", "Dramas"],
        year: 2017,
        duration: 113,
        trailer: "https://youtu.be/Ob7fPOzbmzE",
        director: "Stephen Chbosky",
        script: ["Stephen Chbosky", "Steve Conrad", "Jack Thorne"],
        clasification: 7,
        actors: [
            {
                name: "Jacob Tremblay",
                photo: "/img/actors/jacob-tremblay.jpg",
                character: "Auggie Pullman"
            },
            {
                name: "Julia Roberts",
                photo: "/img/actors/julia-roberts.jpg",
                character: "Isabel Pullman"
            },
            {
                name: "Owen Wilson",
                photo: "/img/actors/owen-wilson.jpg",
                character: "Nate Pullman"
            },
            {
                name: "Izabela Vidovic",
                photo: "/img/actors/izabela-vidovic.jpg",
                character: "Via Pullman"
            },
            {
                name: "Mandy Patinkin",
                photo: "/img/actors/mandy-patinkin.jpg",
                character: "Mr. Tushman"
            }
        ],
        color: "#00aaff40"
    },
    {
        title: "Los Pitufos 2",
        image: "/img/films/pitufos-2.jpg",
        sinopsis: "El malvado brujo Gargamel crea una pareja de criaturas revoltosas, una copia de los pitufos, llamados los Malotes, y que espera le permitan aprovecharse de su poderosa y mágica esencia. Pero cuando descubre que solo un auténtico Pitufo le puede dar lo que quiere -y que solamente un secreto que conoce Pitufina puede transformar a los Malotes en verdaderos pitufos- Gargamel secuestra a Pitufina y la lleva a París. Por lo que está en manos de Papá Pitufo, Torpe, Gruñón y Vanidoso regresar a nuestro mundo, y reunirse con sus amigos humanos Patrick y Grace Winslow, ¡y rescatarla!",
        genres: ["Familiar", "Películas infantiles", "Películas para toda la familia", "Comedias"],
        year: 2013,
        duration: 105,
        trailer: "https://youtu.be/6j8kZm3lO5I",
        director: "Raja Gosnell",
        script: ["J. David Stem", "David N. Weiss", "Jay Scherick", "David Ronn", "Karey Kirkpatrick"],
        clasification: 7,
        actors: [
            {
                name: "Neil Patrick Harris",
                photo: "/img/actors/neil-patrick-harris.jpg",
                character: "Patrick Winslow"
            },
            {
                name: "Jayma Mays",
                photo: "/img/actors/jayma-mays.jpg",
                character: "Grace Winslow"
            },
            {
                name: "Hank Azaria",
                photo: "/img/actors/hank-azaria.jpg",
                character: "Gargamel"
            },
            {
                name: "Katy Perry",
                photo: "/img/actors/katy-perry.jpg",
                character: "Pitufina"
            },
            {
                name: "Jonathan Winters",
                photo: "/img/actors/jonathan-winters.jpg",
                character: "Papá Pitufo"
            }
        ],
        color: "#ffffff40"
    },
    {
        title: "Avatar: El sentido del agua",
        image: "/img/films/avatar-el-sentido-del-agua.jpg",
        sinopsis: "Más de una década después de los acontecimientos de 'Avatar', los Na'vi Jake Sully, Neytiri y sus hijos viven en paz en los bosques de Pandora hasta que regresan los hombres del cielo. Entonces comienzan los problemas que persiguen sin descanso a la familia Sully, que decide hacer un gran sacrificio para mantener a su pueblo a salvo y seguir ellos con vida.",
        genres: ["Ciencia ficción", "Acción y aventuras", "Películas de ciencia ficción", "Películas de acción y aventuras"],
        year: 2022,
        duration: 192,
        trailer: "https://youtu.be/5PSNL1qE6VY",
        director: "James Cameron",
        script: ["James Cameron"],
        clasification: 12,
        actors: [
            {
                name: "Sam Worthington",
                photo: "/img/actors/sam-worthington.jpg",
                character: "Jake Sully"
            },
            {
                name: "Zoe Saldana",
                photo: "/img/actors/zoe-saldana.jpg",
                character: "Neytiri"
            },
            {
                name: "Sigourney Weaver",
                photo: "/img/actors/sigourney-weaver.jpg",
                character: "Dr. Grace Augustine"
            },
            {
                name: "Stephen Lang",
                photo: "/img/actors/stephen-lang.jpg",
                character: "Colonel Miles Quaritch"
            },
            {
                name: "Cliff Curtis",
                photo: "/img/actors/cliff-curtis.jpg",
                character: "Tonowari"
            }
        ],
        color: "#001eff40",
        info: "Avatar: El sentido del agua, considerada la película con mejor efectos visuales de 2023."
    },
    {
        title: "Sin Novedad en el Frente",
        image: "/img/films/sin-novedad-en-el-frente.jpg",
        sinopsis: "En la Alemania de 1917, el joven Paul Baumer miente sobre su edad para alistarse con sus amigos, todos ellos jóvenes patriotas. Sin embargo, la realidad de la guerra desmantela casi inmediatamente su exuberancia.",
        genres: ["Guerra", "Películas bélicas", "Dramas", "Películas basadas en libros"],
        year: 2022,
        duration: 147,
        trailer: "https://youtu.be/6j8kZm3lO5I",
        director: "Edward Berger",
        script: ["Ian Stokell", "Lesley Paterson"],
        clasification: 12,
        actors: [
            {
                name: "Daniel Brühl",
                photo: "/img/actors/daniel-bruhl.jpg",
                character: "Stanislaus Katczinsky"
            },
            {
                name: "Albrecht Schuch",
                photo: "/img/actors/albrecht-schuch.jpg",
                character: "Paul Baumer"
            },
            {
                name: "Aaron Hilmer",
                photo: "/img/actors/aaron-hilmer.jpg",
                character: "Albert Kropp"
            },
            {
                name: "Edin Hasanovic",
                photo: "/img/actors/edin-hasanovic.jpg",
                character: "Müller"
            },
            {
                name: "Sebastian Hülk",
                photo: "/img/actors/sebastian-hulk.jpg",
                character: "Tjaden"
            }
        ],
        color: "#332e5d40",
        info: "Sin Novedad en el Frente, ganadora de 4 premios Oscar."
    }
] as const