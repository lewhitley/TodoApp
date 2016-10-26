# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.create!(title: "graduate AppAcademy", body: "stay alive", done: false)
Todo.create!(title: "wash car", body: "after it rains", done: true)
Todo.create!(title: "get a puppy", body: "name him 'Scooby'", done: false)
Todo.create!(title: "steal Robert's denim jacket", body: "while he is at lunch", done: false)
