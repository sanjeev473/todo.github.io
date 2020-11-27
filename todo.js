function checkWaiting() {
  $('.spiner__waiting').hide();
}
$(document).ready(function () {
  function checkWaiting() {
    $('.spiner__waiting').hide();
  }
  $("#todo-data").on('submit', function (e) {
    e.preventDefault();
    if ($('.todo__list').text().trim() == "The TO-DO is Empty") {
      $('.todo__list').html("");
    }
    let todotext = $('.todotxt').val();
    console.log(todotext);
    if (todotext !== " ") {
      let html = `<div class="row animate__animated animate__rotateInDownRight" id="lastScroll"><div class="col-8 border todoActualTxt">${todotext}</div><div class="col-2 edit border"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg></div><div class="col-2 border delete"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg></div></div>`
      $('.todo__list').append(html);
      $('.todotxt').val("");
      playAdd();
      $("html , body, .todo__list").animate({ scrollTop: $(document).height() });
    }
  });

  $(document).on('click', '.delete', function () {
    $(this).parent().remove();
    playDelete();
    if ($('.todo__list').text().trim() == "") {
      $('.todo__list').html(`<h2 class="text-danger text-center">The TO-DO is Empty</h2>`);
    }
  })
  $(document).on('click', '.edit', function () {
    let txt = $(this).siblings('.todoActualTxt').text()
    $('.todotxt').val(txt);
    playEdit();
  })
  function playDelete() {
    console.log("Played");
    var audio = new Audio('http://127.0.0.1:5500/delete.mp3');
    audio.play();
  }
  function playAdd() {
    console.log("Played");
    var audio = new Audio('http://127.0.0.1:5500/addtodo.mp3');
    audio.play();
  }
  function playEdit() {
    console.log("Played");
    var audio = new Audio('http://127.0.0.1:5500/edittodo.mp3');
    audio.play();
  }
});