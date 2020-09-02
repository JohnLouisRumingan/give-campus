require 'pry'

def longest_stretch(array)

    return -1 if !array.kind_of?(Array)

    max_counter = 0;
    current_counter = 0;
    
    return max_counter if array.length <= 0 

    current_number = array[0] #declares and assigns first element in array. Unlike JavaScript, cannot declare without assignment.

    array.each do |num|

        if !(num.kind_of?(Integer) || num.kind_of?(String))
            max_counter = -2
            break
        end 

        number = num.to_i 

        # binding.pry

        if number != current_number 
            current_counter = 1
            current_number = number
        elsif number == current_number 
            current_counter += 1
        end 

        if current_counter > max_counter 
            max_counter = current_counter 
        end 
    end 

    return max_counter 
end 


# line 16 is similar to line 15 in JavaScript version; returns -2 if there is an unexpected datatype as an element
# the difference is that JavaScript and Ruby both parse datatypes differently.
# JavaScript has type coersion, but I wanted to use parseInt in the case of NaN and how it handles strings.
# For Ruby, I can use type_of. I can do the same in JavaScript and remove objects or other datatypes. 
# However, as explained in the JS function, I think expectation of strings or integers as elements is reasonable.