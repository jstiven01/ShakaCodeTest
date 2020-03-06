def first_non_repeating_letter(str)
    str.each_char do |character|
      return character if str.downcase.count(character.downcase) < 2
    end
    ""
  end