class ExerciseName < ApplicationRecord
  has_many :exercises

  validates_presence_of :name
  validates_uniqueness_of :name, case_sensitivity: false
end
