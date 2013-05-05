      function changeNavState(target) {
        var objs = document.getElementById("nav").getElementsByTagName("li");
        for (var i=0; i < objs.length; i++) {
          if (objs[i].innerHTML.indexOf(target) > 0) {
            objs[i].innerHTML = 
              objs[i].innerHTML.replace(/(<a )/, '$1style="color:rgb(0,169,255)" ');
          } else {
            objs[i].innerHTML = 
              objs[i].innerHTML.replace(/style[^ ]* /, ' ');
          }
        }
      }

