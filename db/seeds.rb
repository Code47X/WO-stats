# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create({username: "demo", email: "demo@demo.com", password: "password", password_confirmation: "password"});

ExerciseName.create({name: "Bench press"})
ExerciseName.create({name: "Squat"})
ExerciseName.create({name: "Leg press"})
ExerciseName.create({name: "Pull up"})
ExerciseName.create({name: "Push up"})
ExerciseName.create({name: "Chin up"})
ExerciseName.create({name: "Shoulder press"})
ExerciseName.create({name: "Bent-over row"})
ExerciseName.create({name: "Bicep curl"})
ExerciseName.create({name: "Dead lift"})

demoUser.workouts << Workout.create({
  exercises_attributes: [
    {
      exercise_name: "Bench press",
      reps: 15,
      weight: 135
    },
    {
      exercise_name: "Pull up",
      reps: 20,
      weight: 135
    },
    {
      exercise_name: "Push up",
      reps: 20,
      weight: 145
    }
  ]
})

demoUser.workouts << Workout.create({
  exercises_attributes: [
    {
      exercise_name: "Squat",
      reps: 15,
      weight: 185
    },
    {
      exercise_name: "Leg press",
      reps: 10,
      weight: 200
    }
  ]
})

demoUser.workouts << Workout.create({
  exercises_attributes: [
    {
      exercise_name: "Chin up",
      reps: 20,
      weight: 145
    },
    {
      exercise_name: "Shoulder press",
      reps: 15,
      weight: 45
    },
    {
      exercise_name: "Dead lift",
      reps: 15,
      weight: 165
    }
  ]
})

demoUser.workouts << Workout.create({
  exercises_attributes: [
    {
      exercise_name: "Chin up",
      reps: 20,
      weight: 145
    },
    {
      exercise_name: "Shoulder press",
      reps: 15,
      weight: 45
    },
    {
      exercise_name: "Dead lift",
      reps: 15,
      weight: 165
    }
  ]
})

demoUser.workouts << Workout.create({
  exercises_attributes: [
    {
      exercise_name: "Chin up",
      reps: 20,
      weight: 145
    },
    {
      exercise_name: "Shoulder press",
      reps: 15,
      weight: 45
    },
    {
      exercise_name: "Dead lift",
      reps: 15,
      weight: 165
    }
  ]
})

demoUser.workouts << Workout.create({
  exercises_attributes: [
    {
      exercise_name: "Chin up",
      reps: 20,
      weight: 145
    },
    {
      exercise_name: "Shoulder press",
      reps: 15,
      weight: 45
    },
    {
      exercise_name: "Dead lift",
      reps: 15,
      weight: 165
    }
  ]
})

demoUser.workouts.first.update_attribute :created_at, 5.days.ago
demoUser.workouts.second.update_attribute :created_at, 4.days.ago
demoUser.workouts.third.update_attribute :created_at, 3.days.ago
