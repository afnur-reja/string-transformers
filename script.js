const input = document.getElementById('string-inpt');
const lowerCase = document.getElementById('lower-case')
const upperCase = document.getElementById('upper-case')
const camelCase = document.getElementById('camel-case')
const pascalCase = document.getElementById('pascal-case')
const snakeCase = document.getElementById('snake-case')
const kebabCase = document.getElementById('kebab-case')
const trim = document.getElementById('trim')

const toCamelCase = (value) => {
     const wordArr = value.split(" ")
     if(wordArr.length === 1) {
        return value;
     }

     const camelCase = wordArr.map((word, idx) => {
        if(idx === 0) {
            return word;
        }

     return word.charAt(0).toUpperCase() + word.slice(1)
     })

     return camelCase.join("");
}

const toPascalCase = (value) => {
     const wordArr = value.split(" ")
     if(wordArr.length === 1) {
        return value.charAt(0).toUpperCase() + value.slice(1);
     }

     const pascalCase = wordArr.map((word, idx) => {

         return word.charAt(0).toUpperCase() + word.slice(1)

     })

     return pascalCase.join("");
}


const toSnakeCase = (value) => {
    return value.replaceAll(" ", "_")
}

const toKebabCase = (value) => {
    return value.replaceAll(" ", "-")
}


input.addEventListener('input', () => {
    lowerCase.innerHTML = input.value.toLowerCase();
    upperCase.innerHTML = input.value.toUpperCase()
    console.log(toCamelCase(input.value))
    camelCase.innerHTML = toCamelCase(input.value)
    pascalCase.innerHTML = toPascalCase(input.value)
    snakeCase.innerHTML = toSnakeCase(input.value)
    kebabCase.innerHTML = toKebabCase(input.value)
    trim.innerHTML = input.value.replaceAll(" ", '')
})