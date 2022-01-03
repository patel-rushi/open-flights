# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
airlines= Airline.create([
    {
        name: "A. United Airlines",
        image_url: "https://patel-rushi.github.io/"
    },
    {
        name:"B. United Airlines",
        image_url:"https://patel-rushi.github.io/"
    },
    {
        name:"C. United Airlines",
        image_url:"https://patel-rushi.github.io/"
    },
    {
        name:"D. United Airlines",
        image_url:"https://patel-rushi.github.io/"
    },
    {
        name:"E. United Airlines",
        image_url:"https://patel-rushi.github.io/"
    },
    {
        name:"F. United Airlines",
        image_url:"https://patel-rushi.github.io/"
    }
])

reviews= Review.create([
    {
        title: 'Great Airlines',
        description: 'kajsndajsnd',
        score: 5,
        airline: airlines.first
    },
    {
        title: 'Bad Airlines',
        description: 'kajsndajsnd',
        score: 1,
        airline: airlines.first
    }
])