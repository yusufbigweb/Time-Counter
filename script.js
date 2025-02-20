const container = document.createElement('div')
document.body.append(container)
container.style.cssText="display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 30px; "

const today = new Date("march 5, 2026 15:37:25").getTime();

const x = setInterval(function(){
    const now = new Date().getTime();

    const distance = today - now;

    // Set Hour, Mininute, Seconds

    const days = Math.floor (distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(distance% (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / (1000)) 

    container.innerHTML=` <h2 style="background-color: red; color: white; padding: 10px; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; font-size: 20px; margin-right: 3px; border-radius: 50%;">${days}d</h2>  <h2 style="background-color: red; color: white; padding: 10px; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; font-size: 20px; margin-right: 3px; border-radius: 50%;">${hours}h</h2>  <h2 style="background-color: red; color: white; padding: 10px; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; font-size: 20px; margin-right: 3px; border-radius: 50%;">${minutes}m</h2> <h2 style="background-color: red; color: white; padding: 10px; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; font-size: 20px; border-radius: 50%;">${seconds}s</h2> `


}, 1000)
