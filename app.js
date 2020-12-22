// Actual Date:
let dayDate = Date();
let dateAffichage = document.getElementById('date');

dateAffichage.innerHTML = dayDate;

// Clock:
function clock (){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes()
    let seconds = date.getSeconds();


    let timeOut = setTimeout(function (){

        let time = [
            {
                time: 'hours',
                angle: (hours * 30) + (minutes /2)
            },
            {
                time: 'minutes',
                angle: (minutes * 6)
            },
            {
                time: 'seconds',
                angle: (seconds * 6)
            }
        ];

        for (let i = 0; i < time.length; i++) {
            let elements = document.querySelectorAll('#' + time[i].time);
            for (let j = 0; j < elements.length; j++) {
                elements[j].style.transform = 'rotateZ('+ time[i].angle + 'deg)';
                //Compatibilité:
                //elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';

                if (time[i].time === 'minutes') {
                    elements[j].parentNode.setAttribute('data-second-angle', time[i + 1].angle)
                }
            }
        }

        clock();

    }, 1000);


}

clock();