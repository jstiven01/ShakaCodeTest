
const resultCode =  tmp => {
    let result = ""
    tmp += " "
    let stk = ""
    for(let i = 0; i < tmp.length; i++){
      let s = tmp[i]
      stk += s
      switch(stk){
        case "...---... ":
          result += "SOS"
          stk = ""
          break
        case "  ":
          result += " "
          stk = ""
          break;
        case ". ":
          result += "E"
          stk = ""
          break;
        case "- ":
          result += "T"
          stk = ""
          break;
        case ".. ":
          result += "I"
          stk = ""
          break;
        case "... ":
          result += "S"
          stk = ""
          break;
        case ".... ":
          result += "H"
          stk = ""
          break;
        case "...- ":
          result += "V"
          stk = ""
          break;
        case "..- ":
          result += "U"
          stk = ""
          break;
        case "..-. ":
          result += "F"
          stk = ""
          break;
        case ".- ":
          result += "A"
          stk = ""
          break;
        case ".-. ":
          result += "R"
          stk = ""
          break;
        case ".-.. ":
          result += "L"
          stk = ""
          break;
        case ".-- ":
          result += "W"
          stk = ""
          break;
        case ".--. ":
          result += "P"
          stk = ""
          break;
        case ".--- ":
          result += "J"
          stk = ""
          break;
        case "-. ":
          result += "N"
          stk = ""
          break;
        case "-.. ":
          result += "D"
          stk = ""
          break;
        case "-... ":
          result += "B"
          stk = ""
          break;
        case "-..- ":
          result += "X"
          stk = ""
          break;
        case "-.- ":
          result += "K"
          stk = ""
          break;
        case "-.-. ":
          result += "C"
          stk = ""
          break;
        case "-.-- ":
          result += "Y"
          stk = ""
          break;
        case "-- ":
          result += "M"
          stk = ""
          break;
        case "--. ":
          result += "G"
          stk = ""
          break;
        case "--.. ":
          result += "Z"
          stk = ""
          break;
        case "--.- ":
          result += "Q"
          stk = ""
          break;
        case "-.-.-- ":
          result += "!"
          stk = ""
          break;
        case ".-.-.- ":
          result += "."
          stk = ""
          break;
        case "--- ":
          result += "O"
          stk = ""
          break;
        
      }
    }
    
  
    return result
    
  }
  
  const possibilities = signals => {
    let tmp = []
    let finalResult = []
    let tempSignals = signals.trim()
    let currentLength = 0
    let currentString = ''
    
    if(tempSignals.includes('?')){
      tmp.push(tempSignals)
      while(tmp[0].includes('?')) {
          currentLength = tmp.length
          for(let i = 0; i< currentLength; i+=1){
            currentString = tmp.shift()
            tmp.push(currentString.replace('?','.'))
            tmp.push(currentString.replace('?','-'))
          }   
        }
     }else{
         tmp = [tempSignals]
     }
    for(let i = 0; i < tmp.length; i+=1){
      finalResult.push(resultCode(tmp[i]))
    }
    
    return finalResult
    
  };
  
  