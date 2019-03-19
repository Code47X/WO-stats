class Exercise < ApplicationRecord
  belongs_to :workout

  validates_presence_of :exercise_name, :weight, :reps
  validates_numericality_of :weight, :reps
  validates :exercise_name, inclusion: { in: ExerciseName.all.map(&:name) }
end
