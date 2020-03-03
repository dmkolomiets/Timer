//реализация Табов

window.addEventListener('DOMContentLoaded', function() { //обязательное начало документа

    'use strict';

    function tabs() {

        let tabClass = '.info-header-tab',
            tabsWrapper = '.info-header',
            contentClass = '.info-tabcontent',

            tab = document.querySelectorAll(tabClass),
            info = document.querySelector(tabsWrapper),
            tabContent = document.querySelectorAll(contentClass);

    
        //по умолчанию показывать а = 1 таб
        function hideTabContent(a) {
            for( let i = a; i < tabContent.length; i++ ) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if(tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener( 'click', function(event) {
            let target = event.target;
            if(target && target.classList.contains('info-header-tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if(target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }

    tabs();

    //Таймер

    let deadLine = '2020-03-03';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };     
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if(num < 10 && num > -1) {
                    return '0' + num;
                } else {
                    return num;
                }
            }
            
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = addZero('0');
                minutes.textContent = addZero('0');
                seconds.textContent = addZero('0');
            }
        }
    }

    setClock('timer', deadLine);

});