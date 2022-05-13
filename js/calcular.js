function calcularTabla(){
       
       let  numero = parseInt(document.getElementById("numero").value);
       let tabla='';
       let fin;


       (numero - 3 >= 0) ? fin=numero-3: fin = 0;
       
       for(let y=numero;y>fin;y--){
           tabla+= `<br/><span>La tabla del ${y} es:</span><br/>`;
           for(let i = 0; i < 9 ; i++)
               tabla+= ` ${y} * ${i+1} es ${(i+1) * y}<br/>`;
       } 
       
       document.getElementById("resultado").innerHTML= tabla;
      
}