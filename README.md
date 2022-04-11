# TrainingApp
A personal web app for climbing training

# Schema Mongo

training : {
    id: string,
    userId: string,
    title: string
    exercices: [
        exercice: {
            id: string,
            name : string,
            timer: int,

        }
    ]
} 
