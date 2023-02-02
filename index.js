let home = 0;
let guest = 0;

function add(num, team){
    if (team === 'guest') {
        guest += num;
        document.getElementById("guest").textContent = guest;
    } else {
        home += num;
        document.getElementById("home").textContent = home;
    }
    
}
