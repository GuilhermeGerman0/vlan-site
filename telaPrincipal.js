document.addEventListener('DOMContentLoaded', () => { // vou ser sincero, foi o chatgpt que fez tudo isso KKKKKKKKKKKKKKKKK
    const links = document.querySelectorAll('nav a'); // pega todos os links de nageção
    links.forEach(link => {                           
      link.addEventListener('click', (e) => {       // quando clicado
        document.querySelectorAll('section').forEach(sec => sec.classList.remove('highlight')); // remove o highlight se tiver algum já
        const id = link.getAttribute('href').substring(1);
        const target = document.getElementById(id);
        if (target) {
          setTimeout(() => {                       
            target.classList.add('highlight'); // adiciona um highlight na seção desejada depois de 200 ms
          }, 200);
        }
      });
    });
  });
