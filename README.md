# TrainingApp
A personal web app for climbing training

# Schema Mongo

training : {
    id: string,
    userId: string,
    title: string
    exercices: [
        {
            id: string,
            name: string,
            description: string,
            timer: int
        }
    ]
} 
