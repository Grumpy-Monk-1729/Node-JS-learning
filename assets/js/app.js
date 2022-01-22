var url = "../assets/data/alumni.json";         
    $.getJSON(url, function (data) {
        $.each(data[2].data, function (key,value) {
            document.getElementById('alumni').innerHTML = "<div class='center' style='font-size:50px'>"+value.Name+"</div>"+value.description;

            console.log(value)
        }) 
    });