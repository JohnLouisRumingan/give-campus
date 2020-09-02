require 'pry'
require_relative '../most_people'


describe "/most_people.rb" do 

    it "most_people should return an empty array if passed a non-array argument"  do
        answer = most_people("a")
        expect(answer).to eq([])
    end

end 