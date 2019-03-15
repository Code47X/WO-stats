class Exercise < ApplicationRecord
  belongs_to :workout
  belongs_to :exercise_name

  validates_presence_of :weight, :reps
  validates_numericality_of :weight, :reps
end
