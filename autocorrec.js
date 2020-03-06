function autocorrect(input) {
    const regex = /you\./gi;
    let inputSplit = input.split(' ')
    for(let i = 0; i < inputSplit.length; i +=1){
      if(inputSplit[i].slice(0,3).toLowerCase() ==='you' && 
         inputSplit[i].slice(3, inputSplit[i].lenght).split('').every(char => char === 'u')){
         inputSplit[i] = 'your client'       
       }else if(inputSplit[i] === 'u'){
         inputSplit[i] = 'your client'  
       }else {
         inputSplit[i] = inputSplit[i].replace(regex, 'your client.')
       }  
    }
    return inputSplit.join(' ')
  }