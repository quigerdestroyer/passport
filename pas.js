function find_edit(){
    document.getElementById('GivenBy').innerHTML="Given By: The Ministry of Internal Affairs of the Moscow region" 

    document.getElementById('Country').innerHTML="Russian Federation"

    document.getElementById("name").innerHTML="Egor"

    document.getElementById("surname").innerHTML="Novozhilov"

    document.getElementById("date").innerHTML="10.19.2006"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)

