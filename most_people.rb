require 'pry'

def most_people(array)

    return [] if !array.kind_of?(Array)

    all_years = {}

    for person in array 

        birth_year = person[0]
        death_year = person[1]
        lifespan = (birth_year..death_year).to_a

        for year in lifespan
            all_years[year]? all_years[year] += 1 : all_years[year] = 1
        end 
    end 

    highest_pop = all_years.max_by{|k, v| v}[1] #returns a key-value pair, we only want the value

    return all_years.select{ |year, pop| pop == highest_pop }.keys
end 

# Ruby has several short ways to populate an array with a range of numbers.
# No need to create a separate function.
# highest pop returns key value pair, but we are only interested in the value so we append [1] to it.
# all_years select works with hashes but returns a hash with only the highest values. We only care about the keys and not values.
# To fix this problem we use .keys afterwards
