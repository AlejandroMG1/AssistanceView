export default [
    {
        id: 1,
        name: "Equipo1",
        schedules: [
            { 
                id: 1, 
                date: "01/08/18"
            },
            { 
                id: 2, 
                date: "03/08/18"
            },
            { 
                id: 3, 
                date: "08/08/18"
            }
        ],
        athletes: [
            { 
                id: 9, 
                dni: 5413456453, 
                name: "Santiago",
                assistance: [
                    {
                        idDate: 1,
                        assisted:false
                    },
                    {
                        idDate: 2,
                        assisted:false
                    },
                    {
                        idDate: 3,
                        assisted:false
                    }
                ]
            },
            { 
                id: 7, 
                dni: 5643623162, 
                name: "Camilo",
                assistance: [
                    {
                        idDate: 1,
                        assisted:false
                    },
                    {
                        idDate: 2,
                        assisted:false
                    },
                    {
                        idDate: 3,
                        assisted:false
                    }
                ]
                
            },
            { 
                id: 5, 
                dni: 5731984563, 
                name: "Sofia",
                assistance: [
                    {
                        idDate: 1,
                        assisted:false
                    },
                    {
                        idDate: 2,
                        assisted:false
                    },
                    {
                        idDate: 3,
                        assisted:false
                    }
                ] 
            }
        ]
    },
    {
        id: 2,
        name: "Equipo2",
        schedules: [
            { id: 1, date: "01/08/18" },
            { id: 2, date: "03/08/18" },
            { id: 3, date: "08/08/18" }
        ],
        athletes: [
            { id: 2, dni: 1008491354, name: "Daniel",
            assistance: [
                {
                    idDate: 1,
                    assisted:false
                },
                {
                    idDate: 2,
                    assisted:false
                },
                {
                    idDate: 3,
                    assisted:false
                }
            ] },
            { id: 5, dni: 3548798135, name: "Manuel",
            assistance: [
                {
                    idDate: 1,
                    assisted:false
                },
                {
                    idDate: 2,
                    assisted:false
                },
                {
                    idDate: 3,
                    assisted:false
                }
            ] },
            { id: 4, dni: 1009645354, name: "Armando",
            assistance: [
                {
                    idDate: 1,
                    assisted:false
                },
                {
                    idDate: 2,
                    assisted:false
                },
                {
                    idDate: 3,
                    assisted:false
                }
            ] }
        ]
    },
    {
        id: 3,
        name: "Equipo3",
        schedules: [
            { id: 1, date: "02/08/18" },
            { id: 2, date: "04/08/18" },
            { id: 3, date: "09/08/18" }
        ],
        athletes: [
            { id: 1, dni: 2335698498, name: "juan",
            assistance: [
                {
                    idDate: 1,
                    assisted:false
                },
                {
                    idDate: 2,
                    assisted:false
                },
                {
                    idDate: 3,
                    assisted:false
                }
            ] },
            { id: 3, dni: 7336648953, name: "Alejandro",
            assistance: [
                {
                    idDate: 1,
                    assisted:false
                },
                {
                    idDate: 2,
                    assisted:false
                },
                {
                    idDate: 3,
                    assisted:false
                }
            ] },
            { id: 8, dni: 8443497358, name: "Jenni",
            assistance: [
                {
                    idDate: 1,
                    assisted:false
                },
                {
                    idDate: 2,
                    assisted:false
                },
                {
                    idDate: 3,
                    assisted:false
                }
            ] }
        ]
    }
]