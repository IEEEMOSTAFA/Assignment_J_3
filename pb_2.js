function checkName(name)
{
    if(typeof name != 'string' ){
        return "invalid";
    }
    if(typeof name === 'number' ){
        return "invalid";
    }
    if(typeof name === 'Array' ){
        return "invalid";
    }

    
    let lastChar = name.charAt(name.length - 1);

    if(lastChar === 'a' || lastChar === 'A' || lastChar === 'e' || lastChar === 'E' || lastChar === 'i' || lastChar === 'I' || lastChar === 'o' || lastChar === 'O' || lastChar === 'u' || lastChar === 'U' || lastChar === 'y' || lastChar === 'Y' || lastChar === 'w' || lastChar === 'W' ){
        return 'Good Name';
    }
    return 'Bad Name'

}
let names ="RAFEE";
let output = checkName(names);
console.log(output);