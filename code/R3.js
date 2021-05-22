


//muestra Modal
    let videos = ['<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/FdsPAFqZrGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WpqvFdaB1Mo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/OVjal1gh2Ao"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'];
    function video(a){
        if (window.matchMedia("(max-width: 700px)").matches) {
            document.getElementById("cvideo").innerHTML = ""+videos[a]+"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum fugiat sunt facilis eaque? Eum, reprehenderit sapiente voluptate unde laudantium ad enim repudiandae dicta numquam sit ratione alias ipsum in totam ut quos quasi ullam est expedita velit, impedit officiis! Quo distinctio, deserunt molestias corrupti eligendi mollitia libero doloribus, reiciendis necessitatibus fugit natus reprehenderit! Est alias repudiandae, commodi labore voluptate neque, laboriosam vel nesciunt velit assumenda corrupti ullam.</p>";
            document.getElementById("modal").style.transform ="translateY(-67%)";
            document.getElementById("modal").style.display ="flex";
            document.getElementById("modal").style.visibility ="visible"
            document.getElementById("videocentral").style.display ="none"
          } 
          else {
            document.getElementById("cvideo").innerHTML = ""+videos[a]+"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum fugiat sunt facilis eaque? Eum, reprehenderit sapiente voluptate unde laudantium ad enim repudiandae dicta numquam sit ratione alias ipsum in totam ut quos quasi ullam est expedita velit, impedit officiis! Quo distinctio, deserunt molestias corrupti eligendi mollitia libero doloribus, reiciendis necessitatibus fugit natus reprehenderit! Est alias repudiandae, commodi labore voluptate neque, laboriosam vel nesciunt velit assumenda corrupti ullam.</p>";
            document.getElementById("modal").style.transform ="translateY(-67%)";
            document.getElementById("modal").style.display ="flex";
            document.getElementById("modal").style.visibility ="visible"
            document.getElementById("videocentral").style.display ="none"


          }
        }
// cerrar el modal
        function cerrar(){
            document.getElementById("modal").style.visibility ="hidden"
            document.getElementById("modal").style.transform ="translateY(-500%)";
            document.getElementById("videocentral").style.display ="block"

        }
