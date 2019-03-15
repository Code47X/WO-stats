class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date

  has_many :exercises

  def date
    object.created_at.strftime("%m/%d/%y")
  end
end
