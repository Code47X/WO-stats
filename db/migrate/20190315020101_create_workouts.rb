class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.belongs_to :user
      t.timestamps
      t.string :description, default: "No description"
    end
  end
end
