# TrainingApp
A personal web app for climbing training

# Schema Mongo
```
training : {
    id: string,
    title: string
    exercices: [
        {
            id: string,
            name: string,
            description: string
        }
    ]
} 
```
