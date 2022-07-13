let lista = $('#lista');


//let btn = document.getElementById('boton');

// btn.onclick = function (event) {
//   let i = 0;
//   fetch('http://localhost:5000/amigos')
//     .then(response => response.json())
//     .then(data => lista.append(`<li> ${data[i].name} </li>`));

// }

$('#boton').click(function () {
  lista.empty()
  $.get('http://localhost:5000/amigos', function (data, status) {
    if (status === 'success') {
      data.forEach(elem => lista.append(
        `<li> ${elem.name} X </li>`
      ))
    }
  })
})

$('#search').click(function () {
  let id = $('#input').val();
  console.log(id)
  $.get(`http://localhost:5000/amigos/${id}`, function (data, status) {
    if (status === 'success') {
      $('#amigo').text(data.name)
    }
  })
})

$('#delete').click(function () {
  let id = $('#inputDelete').val();
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: function (result) {
      $('#success').text("Amigo borrado con exito")
    }
  })
})

// con fetch
// fetch (`http://localhost:5000/amigos/${id}`)
// .then(res => res.json())
// .then(amigo => $('#success').text(`Amigo borrado con exito`))

//con axios
// axios.delete(`http://localhost:5000/amigos/${id}`)