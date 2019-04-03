class Workout < ApplicationRecord
  belongs_to :user
  has_many :exercises

  validates_length_of :description, maximum: 30
  validates_presence_of :exercises

  accepts_nested_attributes_for :exercises, allow_destroy: true
end
