/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

document.querySelector('textarea').value = ''

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('button')) {
        let char = ''
        if(e.target.classList.contains('button-control') || e.target.innerText.length > 1) {
            switch (e.target.innerText) {
                case 'C':
                    document.querySelector('textarea').value = ''
                    break
                case '=':
                    document.querySelector('textarea').value = eval(document.querySelector('textarea').value)
                    break
                case 'x²':
                    char = '**2'
                    break
                case 'x³':
                    char = '**3'
                    break
                case '×':
                    char = '*'
                    break
                case '÷':
                    char = '/'
                    break
                case '⌫':
                    document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, -1)
                    break
                default:
                    char = e.target.innerText
                    break
            }
        }else {
            char = e.target.innerText;
        }
        document.querySelector('textarea').value += char;
    }
})