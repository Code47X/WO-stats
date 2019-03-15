# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u = User.create({username: "demo", email: "demo@demo.com", password: "password", password_confirmation: "password"});

exName1 = ExerciseName.create({name: "Benchpress"})
exName2 = ExerciseName.create({name: "Bicep curls"})

workout1 = Workout.create({user: u})
workout2 = Workout.create({user: u})

workout1.exercises << Exercise.create({exercise_name: exName1, weight: 135, reps: 15})
workout1.exercises << Exercise.create({exercise_name: exName2, weight: 45, reps: 15})
