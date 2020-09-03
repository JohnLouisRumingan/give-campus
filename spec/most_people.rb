require 'pry'
require_relative '../most_people'


describe "/most_people.rb" do 

    it "most_people should return an empty array if passed a non-array argument"  do
        answer = most_people("a")
        expect(answer).to eq([])
        answer = most_people(2.5)
        expect(answer).to eq([])
        answer = most_people({})
        expect(answer).to eq([])
    end

    it "most_people should return an empty array if passed an array with zero elements"  do
        answer = most_people([])
        expect(answer).to eq([])
    end

    it "when most_people takes in argument [[1910, 1950], [1900, 1951], [1945, 2000]] it returns [1945, 1946, 1947, 1948, 1949, 1950]" do 
        answer = most_people([[1910, 1950], [1900, 1951], [1945, 2000]])
        expect(answer).to eq([1945, 1946, 1947, 1948, 1949, 1950])
    end 

    it "most_people can take in negative years for BCE" do 
        answer = most_people([[-7, -3], [-20, -5], [-4, -2]])
        expect(answer).to eq([-7, -6, -5, -4, -3])
    end 

    it "most_people can take in mixed numbers for BCE and CE with the assumption that a year 0 exists" do 
        answer = most_people([[-5, 2], [-3, 5], [-20, 10]])
        expect(answer).to eq([-3, -2, -1, 0, 1, 2])
    end 

    it "most_people can take arguments of multiple births and deaths in the same year" do 
        answer = most_people([[-5, 2], [-3, 5], [-20, 10]])
        expect(answer).to eq([-3, -2, -1, 0, 1, 2])
    end 

end 


#tests here are similar to the tests in JS version