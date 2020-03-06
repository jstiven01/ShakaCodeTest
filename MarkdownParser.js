function markdownParser (markdown) {
  let hashtagCounter = 0
  let markdownTrim = markdown.trim()
  
  for(let i = 0; i< markdownTrim .length; i+=1){
    if (markdownTrim [i]==="#"){
      hashtagCounter += 1
     } else if( markdownTrim[i]=== " " && hashtagCounter < 7){
       return `<h${hashtagCounter}>${markdownTrim.substring(i+1, markdownTrim.length).trim()}</h${hashtagCounter}>`
     } else {
       return markdown
     }
  }
}