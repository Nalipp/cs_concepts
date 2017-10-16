# def superDigit(num, multiplier)
#   multiplied = num.to_s * multiplier

#   if (multiplied.length == 1)
#     return multiplied
#   end

#   sum = multiplied.to_s.split('').reduce { |a, b| a.to_i + b.to_i }

#   superDigit(sum, 1)
# end


# puts superDigit(99, 2);

