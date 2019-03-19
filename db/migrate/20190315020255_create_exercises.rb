class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.belongs_to :workout
      t.string :exercise_name
      t.float :weight
      t.float :reps
      t.timestamps
    end
  end
end
