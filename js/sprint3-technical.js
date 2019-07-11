console.log('test')

function displayDiv() {
  var checkBox1 = document.getElementById('cb-1');
  var textDiv1 = document.getElementById('td-1');

  if (checkBox1.checked == true) {
    textDiv1.style.display = "block" 
      
    } else {
    
      textDiv1.style.display = "none";
  }
}

// function displayDiv() {
//   var checkBox = document.getElementsByClassName('c-box');
//   var textDiv = document.getElementsByClassName('text-div');

//   if (checkBox.checked == true) {
//     textDiv.style.display = "block" 
      
//     } else {
    
//       textDiv.style.display = "none";
//   }
// }



// function Validate() {
//   var checked = 0;


//   //Reference all the CheckBoxes in Table.
//   var chks = checkbox-wrapper.getElementsByClassName('c-box');
//   console.log(chks)

//   //Loop and count the number of checked CheckBoxes.
//   for (var i = 0; i < chks.length; i++) {
//       if (chks[i].checked) {
//           checked++;
//       }
//   }

//   if (checked > 0) {
//       alert(checked + " CheckBoxe(s) are checked.");
//       return true;
//   } else {
//       alert("Please select CheckBoxe(s).");
//       return false;
//   }
// };

var checkbox = document.querySelector("input[name=checkbox]");
var textDiv = document.getElementsByClassName('text-div');


checkbox.addEventListener( 'change', function() {
    if(checkbox.checked) {
      // textDiv.style.display = "block"
      console.log('hi')
    } else {
      // textDiv.style.display = "none";
      console.log('no')

    }
});


// console.log(document.getElementsByClassName('c-box'))


//   if (checkBox.checked == true) {
//     textDiv.style.display = "block" 
      
//     } else {
    
//       textDiv.style.display = "none";
//   }