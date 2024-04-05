let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #dc8f90;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #dc8f90;">Soy estudiante de programación web y ciencias de la computación</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
