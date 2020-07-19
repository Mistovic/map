const dispachContr = document.querySelector('#contorler-wrap');
const pinsArray = document.querySelectorAll('.pins');

const grp = document.querySelectorAll('.grupa-region');
const siviElemnti = document.querySelectorAll('.sivi-element');
const zeleniElemnti = document.querySelectorAll('.zeleni-element');
const pinsElemnti = document.querySelectorAll('.pins');


let styleSHow = "opacity: 1; transition: 0.5s all ease;";
let styleHide = "opacity: 0; transition: 0.5s all ease;";

for (i = 0; i < pinsArray.length; i++) {
    pinsArray[i].style = "opacity: 0; transition: 0.5s all ease;";
}

function sendData(e) {
    if (e.target !== e.currentTarget) {

        const controler = e.target;
        const dataDispach = controler.getAttribute('data-dispach');

        function chekShow(data) {

            for (let reg of grp) {
                const children = reg.children;
                // console.log(reg);


                for (let child of children) {
                    // console.log(child)

                    if (child.hasAttribute('data-name') || child.classList.contains('sivi-element') || child.classList.contains('zeleni-element')) {
                        // Ekstrakujemo child elemnte grupe koji nam trebaju
                        if (child.hasAttribute('data-name') && data == child.getAttribute('data-name')) {
                            if (child.parentNode) {
                                child.style = styleSHow;
                                child.classList.add('prisutan');

                                child.parentElement.classList.add(`ima-${data}`);
                                let noviArr = child.parentElement.children;

                                for (let ary of noviArr) {
                                    // console.log(ary);
                                    if (ary.classList.contains('zeleni-element')) {
                                        // Ovdje otkrivamo Visible mapu
                                        ary.style = "opacity: 0;";
                                        console.log(reg)
                                    }

                                }
                            }
                        }
                        // if (child.hasAttribute('data-name') && reg.contains('')) {
                        //     console.log('ajdeee')
                        // }
                        controler.classList.add('active');
                    }

                }
            }
        }

        function chekHide(data) {

            for (let reg of grp) {
                const children = reg.children;
                console.log(reg);

                for (let child of children) {
                    // console.log(child)
                    if (child.hasAttribute('data-name') || child.classList.contains('sivi-element') || child.classList.contains('zeleni-element')) {
                        if (child.hasAttribute('data-name') && data == child.getAttribute('data-name')) {
                            if (child.parentNode) {
                                console.log("Brisi")
                                child.style = styleHide;
                                child.classList.remove('prisutan');
                                // Dodajem klasu na region
                                child.parentElement.classList.remove(`ima-${data}`);
                                let noviArr = child.parentElement.children;
                                for (let ary of noviArr) {
                                    // console.log(ary);
                                    if (ary.classList.contains('zeleni-element') && (!reg.classList.contains('ima-med') && !reg.classList.contains('ima-pice'))) {
                                        console.log('ovo je ARY ', ary)
                                        // Ovdje pokrivamo region ukoliko ne sadrzi iskljucivo jednu klasu - .grupa-region
                                        ary.style = "opacity: 1;";
                                    }
                                }
                            }
                        }
                        // if (child.hasAttribute('data-name') && reg.contains('')) {
                        //     console.log('ajdeee')
                        // }
                        controler.classList.remove('active');
                    }

                }
            }
        }



        function toggle() {
            console.log(controler);
            // ovdje palimo kontroler
            if (!controler.classList.contains('active')) {
                chekShow(dataDispach);
                return;
            }

            // ovdje gasimo aktivni controler   
            if (controler.classList.contains('active')) {
                chekHide(dataDispach);
                return;
            }
            // Ovdje provjeravamo 
        }

        toggle();

    }
}


dispachContr.addEventListener('click', sendData);
