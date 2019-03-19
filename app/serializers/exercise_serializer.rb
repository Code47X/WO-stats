class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :exercise_name, :weight, :reps
end
