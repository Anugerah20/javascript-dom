let button = document.getElementById('btn-hobby');
let show = document.getElementById('show');

button.addEventListener('click', () => {
     let h = document.getElementsByName('hobby');
     h.forEach((hobby) => {
          if(hobby.checked) {
               show.innerText = `Hobi kamu: ${hobby.value}`;
          }
     });
});
