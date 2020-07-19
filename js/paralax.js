(function () { 
    const mySVG = document.querySelector('#svg');
    const displ = document.getElementById('displ');
    const map = document.getElementById('map');
    
    // const offTop = mySVG currentTranslate

    
    window.addEventListener('mousemove', function(e) {
        let mouseX = e.x;
        let mouseY = e.y;
        
        let offsetXMape = e.x + map.offsetLeft;
        let offsetYMape = e.y + map.offsetTop;

        mySVG.style.left = mouseX/window.innerWidth;
        mySVG.style.top = mouseY/window.innerHeight;
        mySVG.style.transform = `translateX(${mouseX*10/window.innerWidth}px) translateY(${mouseY*12/window.innerHeight}px)`;

      
        // displ.innerHTML = ` 
        // X osa mis: ${mouseX}; Y osa misa: ${mouseY}
        // `;

      
        // console.log(e.clientX/window.innerWidth);
    });

    // a.setAttribute("viewBox","0 0 " + SVGWidth + " 300");
     } ())
   