let mainPointerFollow = (function () {
  const seekAreaCursor = document.getElementById("seek-area");
  const follower = document.getElementById("follower");
  const clickme = document.getElementById("sl1-click-me");
  let estaFuera = true;
  let mouseX = 0;
  let mouseY = 0;
  let intervalo;

  function startPointerFollow() {
    follower.style.display = "flex";

    $(document.body).mouseout(function (e) {
      if (!e.relatedTarget && !e.toElement) {
        clickme.style.display = "flex";
        follower.style.visibility = "hidden";
        //console.log("----- ----- OUT del navegador");
      }
    });

    $(window).mousemove(function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      estaFuera = hayInterseccion(seekAreaCursor, follower);

      if (estaFuera) {
        //console.log(" ----- Afuera");
        clickme.style.display = "flex";
        follower.style.visibility = "hidden";
      } else {
        //console.log("Adentro ----- ");
        follower.style.display = "flex";
        clickme.style.display = "none";
        follower.style.visibility = "initial";
      }
    });

    let pointerFolllower = {
      el: $("#follower"),
      x: window.innerWidth / 1,
      y: window.innerHeight / .5,
      w: 10,
      h: 10,
      update: function () {
        l = this.x - this.w / 2;
        t = this.y - this.h / 2;
        this.el.css({
          transform: "translate3d(" + (l - 58) + "px," + (t +5) + "px, 0)",
        });
      },
    };

    intervalo = setInterval(move, 1000 / 60);

    function move() {
      pointerFolllower.x = lerp(pointerFolllower.x, mouseX, 0.1);
      pointerFolllower.y = lerp(pointerFolllower.y, mouseY, 0.1);
      pointerFolllower.update();
    }

    function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    }

    let hayInterseccion = function (parent, child) {
      var boxPadre = parent.getBoundingClientRect();
      var boxHijo = child.getBoundingClientRect();

      if (
        boxHijo.top < boxPadre.top ||
        boxHijo.right > boxPadre.right ||
        boxHijo.bottom > boxPadre.bottom ||
        boxHijo.left < boxPadre.left
      ) {
        return true;
      }
      return false;
    };
  }

  function stopPointerFollow() {
    $(window).off("mousemove");
    $(document.body).off("mouseout");
    clearInterval(intervalo);
    follower.style.display = "none";
  }

  return {
    startPointerFollow: startPointerFollow,
    stopPointerFollow: stopPointerFollow,
  };
})();
