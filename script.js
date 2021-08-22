


function calc(){
    var input = document.getElementById('n1');
    var cateto1 = input.value;
    var input = document.getElementById('n2');
    var cateto2 = input.value;
    var input = document.getElementById('h1');
    var hipotenusa = input.value;

    if(hipotenusa==''){
      var h = Math.sqrt(Math.pow(cateto1,2)+Math.pow(cateto2,2));
      var a = document.getElementById('res')
      if(h==0 || h == cateto1 || h== cateto2 ){
        alert('Com esses dados não é possível realizar o calculo da relação dos triângulos. Insira os valores corretamente!')
      }else{
      a.innerHTML = "O valor da Hipotenusa é " + h.toFixed(2) + "!"
      }
      
    }else if(cateto1==''){
        var h = Math.sqrt(Math.pow(hipotenusa,2)-Math.pow(cateto2,2))
        var a = document.getElementById('res')
        if(h==0 || h == cateto2 || h == hipotenusa ){
            alert('Com esses dados não é possível realizar o calculo da relação dos triângulos. Insira os valores corretamente!')
          }else{
        a.innerHTML = "O valor do 1° Cateto é " + h + "."
    }
      
    }else if(cateto2==''){
        var h = Math.sqrt(Math.pow(hipotenusa,2)-Math.pow(cateto1,2))
        var a = document.getElementById('res')
        if(h==0 ){
            alert('Com esses dados não é possível realizar o calculo da relação dos triângulos. Insira os valores corretamente!')
          }else{
        a.innerHTML = "O valor do 2° Cateto é " + h + "!"
    }

    }else{                          
        alert('Com esses dados não é possível realizar o calculo da relação dos triângulos. Insira os valores corretamente!')
    }
        
}

  
    
