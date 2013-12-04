class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :gist_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :favorites, :user_idf
  end
end
