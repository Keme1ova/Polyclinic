function changeContent() {
    var element = document.getElementById("myElement"); // Замените "myElement" на соответствующий идентификатор вашего элемента
    
    // Изменение содержимого элемента
    element.innerHTML = "Другое содержимое"; // Замените "Другое содержимое" на желаемый текст или HTML-разметку
  }
  
  // Привязка функции к событию нажатия на иконку
  var icon = document.getElementById("myIcon"); // Замените "myIcon" на соответствующий идентификатор вашей иконки
  icon.addEventListener("click", changeContent);