function insrt(num){
    $('.calc-display').val($('.calc-display').val()+num)
}

function clrdisplay(){
    $('.calc-display').val('')
}

function solve(){
    const val = $('.calc-display').val()
    $('.calc-display').val(eval(val))
}

function del(){
    const input = $('.calc-display').val()
    $('.calc-display').val(input.substring(0, input.length-1))
}