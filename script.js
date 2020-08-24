const counters = document.querySelectorAll('.counter');
const speed = 12000;
const jam = document.getElementById('jam'),
    menit = document.getElementById('menit'),
    detik =document.getElementById('detik');


function counter() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    
            const inc = target / speed;
    
            console.log(count);
            if(count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                count.innerText = target;
            }
        }
        updateCount();
    })  
}

function showTime() {
    let today = new Date(),
        hour = 18 - today.getHours(),
        min = 59 - today.getMinutes(),
        sec = 59 - today.getSeconds();

        // console.log(today);
        if (hour < 0 ){
            jam.innerHTML = `0`;
            menit.innerHTML = `0`;
            detik.innerHTML = `0`;
        } else {
            jam.innerHTML = `${addZero(hour)}`;
            menit.innerHTML = `${addZero(min)}`;
            detik.innerHTML = `${addZero(sec)}`;
        }
        
        setTimeout(showTime, 1000);
}

// add Zero
function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 2550 || document.documentElement.scrollTop > 2550) {
    counter();
  }
}

showTime();