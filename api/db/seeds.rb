users = User.create({first_name: 'Reece', last_name: 'Jones', password: '123'},{first_name: 'Eoghan', last_name: 'Crowery', password: '123'},{first_name: 'Eoghan', last_name: 'Crowery', password: '123'})
users.save

charities = Charity.create({charity_name: 'StreetChange', password: '123'})
charities.save

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)