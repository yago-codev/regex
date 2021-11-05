const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNine = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNine.test(text)) // true
console.log(regexNine.exec(text)) // ['9',index: 18,input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',groups: undefined]

const regexLetters = /[a-f]/g
console.log('Métodos da string...')
console.log(text.match(regexLetters)) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(text.search(regexLetters)) // 20 (primeiro índice do primeiro elemento que cumpre a regra da regex)
console.log(text.replace(regexLetters, 'Achei')) // substitui as incidencias da regex
console.log(text.split(regexLetters))