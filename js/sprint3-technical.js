var checkboxes = document.getElementsByName("checkbox");

function addListeners() { 

  for (var i = 0; i < checkboxes.length; i++) {  
    checkboxes[i].addEventListener( 'change', function(evt) {
        var idNumber = evt.target.id[3]
        var div = document.getElementById('td-' + idNumber)
        if(evt.target.checked) {
          div.style.display = "block"
        } else {
          div.style.display = "none";
        }
    });
  }
}
addListeners()
