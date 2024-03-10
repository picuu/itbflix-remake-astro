interface Actor {
    name: string
    photo: string
    valoration: number
}

export const ACTORS: Actor[] = [
    {
        name: "Joaquin Phoenix",
        photo: "/img/actors/joaquin-phoenix.jpg",
        valoration: 9.1
    },
    {
        name: "Leonardo DiCaprio",
        photo: "/img/actors/leonardo-dicaprio.jpg",
        valoration: 8.9
    },
    {
        name: "Adam Sandler",
        photo: "/img/actors/adam-sandler.jpg",
        valoration: 7.5
    },
    {
        name: "Úrsula Corberó",
        photo: "/img/actors/ursula-corbero.jpg",
        valoration: 8.3
    },
    {
        name: "Zendaya",
        photo: "/img/actors/zendaya.jpg",
        valoration: 8.7
    },
    {
        name: "Jennifer Lawrence",
        photo: "/img/actors/jennifer-lawrence.jpg",
        valoration: 8.4
    },
    {
        name: "Robert Downey Jr.",
        photo: "/img/actors/robert-downey-jr.jpg",
        valoration: 8.8
    },
    {
        name: "Emma Watson",
        photo: "/img/actors/emma-watson.png",
        valoration: 8.6
    }
] as const