
var input = document.querySelector('.input');

var item = Array.from(document.querySelectorAll('.item'));
console.log(item)

item.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (input.innerHTML == '0')
            input.innerHTML = '';
        if (btn.innerHTML == 'AC')
            input.innerHTML = '0';
        else if (btn.innerHTML == 'DEL') {
            var arrtest = Array.from(input.innerHTML);
            arrtest.splice(arrtest.length - 1, 1);
            if (arrtest.length != 0)
                input.innerHTML = arrtest.join('');
                else input.innerHTML='0';
        }
        else if (btn.innerHTML == '=') {
            input.innerHTML = eval(input.innerHTML);
        }
        else input.innerHTML += btn.innerHTML;
    })
})
