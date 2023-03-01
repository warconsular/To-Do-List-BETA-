document.addEventListener("DOMContentLoaded", function() {
    const Click_Element = document.getElementById('click');
    const ListContainer = document.getElementById('list-id');
    const InputElement = document.querySelector('.input-sheet');
  
    Click_Element.addEventListener('click', function() {
      const NewItemOnList = document.createElement('li');
      NewItemOnList.className = 'li-style';
      NewItemOnList.textContent = InputElement.value;
      ListContainer.appendChild(NewItemOnList);
      InputElement.value = '';
    });
  });