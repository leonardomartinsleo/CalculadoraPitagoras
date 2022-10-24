let cateto1 = document.getElementById("cateto1");
let cateto2 = document.getElementById("cateto2");
let hipotenusa = document.getElementById("hipotenusa");
function limpar(){
  let campos = [cateto1,cateto2,hipotenusa];
  campos.forEach(campos => 
    resp(campos,"#0276b0"))
  cateto1.value = "";
  cateto2.value = "";
  hipotenusa.value = "";
}
function calc(){

    if(hipotenusa.value==''){
      var h = Math.sqrt(Math.pow(cateto1.value,2)+Math.pow(cateto2.value,2));
      var a = document.getElementById('res')
      if(h==0 || h == cateto1.value || h== cateto2.value ){
        alert('Com esses dados não é possível realizar o calculo da relação dos triângulos. Insira os valores corretamente!')
      }else{
      hipotenusa.value = h.toFixed(2);
      resp(hipotenusa,"green")
      }
      
    }else if(cateto1.value ==''){
        var h = Math.sqrt(Math.pow(hipotenusa.value,2)-Math.pow(cateto2.value,2))
        if(h==0 || h == cateto2.value || h == hipotenusa.value ){
            alert('Com esses dados não é possível realizar o calculo da relação dos triângulos. Insira os valores corretamente!')
          }else{
        cateto1.value = h
        resp(cateto1,"green")
    }
      
    }else if(cateto2.value ==''){
        var h = Math.sqrt(Math.pow(hipotenusa.value,2)-Math.pow(cateto1.value,2))
        if(h==0 ){
            alert('Com esses dados não é possível realizar o calculo da relação dos triângulos. Insira os valores corretamente!')
          }else{
        cateto2.value =h
        resp(cateto2,"green")
    }

    }else{                          
        alert('Com esses dados não é possível realizar o calculo da relação dos triângulos. Insira os valores corretamente!')
    }
        
}
function resp(field,color){
    field.style.borderColor = color;
}

  
    
