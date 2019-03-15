class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :exercise_name, :weight, :reps

  def exercise_name
    object.exercise_name.name
  end
end
