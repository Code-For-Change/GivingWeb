class CreateMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :members do |t|
      t.string :name
      t.text :info
      t.datetime :post_date
      t.string :snippet
      t.string :location
      t.integer :goal
      t.string :title
      t.string :meta_description

      t.timestamps
    end
  end
end