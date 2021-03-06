class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date, :description

  has_many :exercises, key: "exercises_attributes"

  def date
    object.created_at.strftime("%m/%d/%y")
  end
end
