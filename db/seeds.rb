# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
airlines= Airline.create([
    {
        name: "Air Canada",
        image_url: "/airline-logo-images/aircanada.jpeg"
    },
    {
        name:"Air India",
        image_url: "/airline-logo-images/airindia.png"
    },
    {
        name:"Emirates",
        image_url: "/airline-logo-images/emirates.png"
    },
    {
        name:"American Airlines",
        image_url: "/airline-logo-images/americanairline.png"
    },
    {
        name:"Spice Jet",
        image_url: "/airline-logo-images/spicejet.png"
    }
])

# reviews= Review.create([
#     {
#         title: 'Great Airlines',
#         description: 'kajsndajsnd',
#         score: 5,
#         airline_id: 
#     },
#     {
#         title: 'Bad Airlines',
#         description: 'kajsndajsnd',
#         score: 1,
#         airline: airlines.first
#     }
# ])