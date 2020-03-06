def calculate(expression)
    array_expression = expression.split
    operations = []
    results = []
    
    array_expression.each do |element|
      if ["-", "/", "*", "+", "**"].include?(element)
       operations = results.pop(2)
        results.push(operations[0].send(element, operations[1]))
      else
        results.push(element.to_f)
      end 
    end
    if expression == ""
      return 0
    else
      return results.last
    end
    
  end