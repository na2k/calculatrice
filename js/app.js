var calculatrice = (function calculatrice(){
  var arr = [];
  var res = 0;
  const init = function init() {
    // click sur egal
    document.getElementById("btnEgal").addEventListener("click", function egal(){
      document.getElementById("screen").value=eval(res);
      console.log(res);
      if(eval(res)=="Infinity" || eval(res)== "-Infinity" || eval(res)=="NaN"){
        alert("ALERTE");
        document.getElementById("screen").value="Error";
      }
    });
document.getElementById("btn0")
    // click sur 0
    document.getElementById("btn0").addEventListener("click", function zero(){
      res+=0;
      document.getElementById("screen").value+=0;
    });

    // click sur 1
    document.getElementById("btn1").addEventListener("click", function un(){
      res+=1;
      document.getElementById("screen").value+=1;
    });

    // click sur 2
    document.getElementById("btn2").addEventListener("click", function deux(){
      res+=2;
      document.getElementById("screen").value+=2;
    });

    // click sur 3
    document.getElementById("btn3").addEventListener("click", function trois(){
      res+=3;
      document.getElementById("screen").value+=3;
    });

    // click sur 4
    document.getElementById("btn4").addEventListener("click", function quatre(){
      res+=4;
      document.getElementById("screen").value+=4;
    });

    // click sur 5
    document.getElementById("btn5").addEventListener("click", function cinq(){
      res+=5;
      document.getElementById("screen").value+=5;
    });

    // click sur 6
    document.getElementById("btn6").addEventListener("click", function six(){
      res+=6;
      document.getElementById("screen").value+=6;
    });

    // click sur 7
    document.getElementById("btn7").addEventListener("click", function sept(){
      res+=7;
      document.getElementById("screen").value+=7;
    });

    // click sur 8
    document.getElementById("btn8").addEventListener("click", function huit(){
      res+=8;
      document.getElementById("screen").value+=8;
    });

    // click sur 9
    document.getElementById("btn9").addEventListener("click", function neuf(){
      res+=9;
      document.getElementById("screen").value+=9;
    });

    //click sur plus
    document.getElementById("btnPlus").addEventListener("click", function plus(){
      res+="+";
      document.getElementById("screen").value+="+";
    });

    //click sur moins
    document.getElementById("btnMoins").addEventListener("click", function moins(){
      res+="-";
      document.getElementById("screen").value+="-";
    });

    //click sur multi
    document.getElementById("btnMultiplie").addEventListener("click", function multiplie(){
      res+="*";
      document.getElementById("screen").value+="*";
    });

    //click sur divise
    document.getElementById("btnDivise").addEventListener("click", function divise(){
      res+="/";
      document.getElementById("screen").value+="/";
    });

    //click sur point
    document.getElementById("btnPoint").addEventListener("click", function point(){
      res+=".";
      document.getElementById("screen").value+=".";
    });

    //click sur c
    document.getElementById("btnC").addEventListener("click", function supprimer(){
      res="";
      document.getElementById("screen").value="";
    });

    // //click sur c
    // document.getElementById("btnCE").addEventListener("click", function effacer(){
    //   res = res.substr(0,res.length-1);
    //   var newValue = document.getElementById("screen").value;
    //   newValue.substr(0,newValue.length-1);
    //   document.getElementById("screen").value = newValue;
    // });


    //click sur parentheseOuverte
    document.getElementById("parentheseOuverte").addEventListener("click", function ouvrirPar(){
      res+="(";
      document.getElementById("screen").value+="(";
    });

    //click sur parentheseFermee
    document.getElementById("parentheseFermee").addEventListener("click", function fermerPar(){
      res+=")";
      document.getElementById("screen").value+=")";
    });

    //click sur pi
    document.getElementById("btnPi").addEventListener("click", function pi(){
      res+="Math.PI";
      document.getElementById("screen").value+="π";
    });

    //click sur sin
    document.getElementById("btnSin").addEventListener("click", function sin(){
      res+="Math.sin(";
      document.getElementById("screen").value+="sin(";
    });

    //click sur cos
    document.getElementById("btnCos").addEventListener("click", function cos(){
      res+="Math.cos(";
      document.getElementById("screen").value+="cos(";
    });

    //click sur tan
    document.getElementById("btnTan").addEventListener("click", function tan(){
      res+="Math.tan(";
      document.getElementById("screen").value+="tan(";
    });

    //click sur modulo
    document.getElementById("btnModulo").addEventListener("click", function modulo(){
      res+="%";
      document.getElementById("screen").value+="%";
    });

  }; //fin init
  window.onload = init;
}()); //fin
