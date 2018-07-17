# def problem(str)
#     result = []
#     words = str.split(" ")
#     words.each do |word|
#         result.push(reverse(word))
#     end
#     return result.join(" ")
# end
# # n word , m letters == nm
# def reverse(word)
#     ans = ""
#     size = word.length - 1
#     while size >= 0
#         ans = ans + word[size]
#         size = size - 1
#     end
#     return ans
# end

# def problem(str)
#     result = []
#     letters = str.split("")
#     first_letter = 0
#     last_letter = 0
#     while last_letter < letters.length
#         while letters[last_letter] != " "
#             last_letter += 1
#         end
#         len = last_letter - first_letter
#         middle = len/2
#         i = 0 
#         while i < middle
#             letters[i], letters[last_letter] = letters[last_letter], letters[i]
#             i += 1
#         end
#         first_letter = last_letter + 2
#         last_letter = last_letter + 2
#     end
#     puts(letters.join(""))
#     return letters.join("")
# end

def problem(str)
    result = []
    temp = ""
    i = 0
    while i < str.length
        if str[i] == " "
            result.push(temp)
            temp = ""
        else
            temp = str[i] + temp
        end
        i += 1
    end
    result.push(temp)
    return result.join(" ")
end

