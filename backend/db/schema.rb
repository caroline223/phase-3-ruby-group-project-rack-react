# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_06_190530) do

  create_table "authors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "birth_city"
    t.string "birth_state"
    t.date "birth_date"
    t.string "college"
    t.string "degree"
    t.string "image_url"
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "genre"
    t.integer "author_id"
    t.date "publishing_date"
    t.integer "rating"
    t.string "image_url"
  end

  create_table "novels", force: :cascade do |t|
    t.string "image_url"
    t.string "title"
    t.string "author_name"
    t.string "genre"
    t.string "publishing_date"
    t.integer "rating"
  end

end
