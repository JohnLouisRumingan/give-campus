require 'pry'
require_relative '../longest_stretch'

describe "/longest_stretch.rb" do 

    it "longest_stretch should return -1 if passed a non-array argument"  do
        answer = longest_stretch("a")
        expect(answer).to eq(-1)
    end

    it "longest_stretch should return -1 if passed a non-array argument"  do
        answer = longest_stretch(1)
        expect(answer).to eq(-1)
    end

    it "longest_stretch should return 0 if passed an empty array"  do
        answer = longest_stretch([])
        expect(answer).to eq(0)
    end

    it "longestStretch argument should return -2 if passed a non-array, non-integer value"  do
        answer = longest_stretch([[1]])
        expect(answer).to eq(-2)
    end 

    it "When longestStretch argument is [1,7,7,3] return should be 2"  do
        answer = longest_stretch([1,7,7,3])
        expect(answer).to eq(2)
    end

    it "When longestStretch argument is [1,7,7,3,9,9,9,4,9] return should be 3"  do
        answer = longest_stretch([1,7,7,3,9,9,9,4,9])
        expect(answer).to eq(3)
    end 

    it "longestStretch should correctly parse an array of strings containing numbers and return the correct output" do
        answer = longest_stretch(["1","7","7","3"])
        expect(answer).to eq(2)
    end

    it "longestStretch should differentiate between positive and negative integers and recognize all unique numbers" do
        answer = longest_stretch([1,-7,7,3])
        expect(answer).to eq(1)
    end

    it "longestStretch should correctly return maximum even if multiple numbers have the same count" do
        answer = longest_stretch([1,7,7,3,9,9,-9,4,9])
        expect(answer).to eq(2)
    end 

    it "longestStretch should correctly return 1 if all integers are unique and some are strings" do
        answer= longest_stretch(["1","7","-7 years","3"])
        expect(answer).to eq(1)
    end 

    
end 