require 'pry'
require_relative '../most_people'


describe "/most_people.rb" do 

    it "most_people should return an empty array if passed a non-array argument"  do
        answer = most_people("a")
        expect(answer).to eq([])
    end

    it "most_people should return an empty array if passed an array with zero elements"  do
        answer = most_people([])
        expect(answer).to eq([])
    end

    it "when mostPeople takes in argument [[1910, 1950], [1900, 1951], [1945, 2000]] it returns [1945, 1946, 1947, 1948, 1949, 1950]" do 
        answer = most_people([[1910, 1950], [1900, 1951], [1945, 2000]])
        expect(answer).to eq([1945, 1946, 1947, 1948, 1949, 1950])
    end 

end 