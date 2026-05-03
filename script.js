const visited = [
  { title: 'Металлообработка', type: 'производство', text: 'Цеха, станки, люди и процессы, которые превращают металл в продукт.' },
  { title: 'Стройка и инфраструктура', type: 'проект', text: 'Разговоры о технологиях, безопасности, команде и реальном опыте на площадке.' },
  { title: 'Деревообработка', type: 'мастерская', text: 'Материал, ремесло, оборудование и современный подход к прикладным профессиям.' },
  { title: 'Промышленные выставки', type: 'события', text: 'Новые решения, партнеры, предприниматели и точки роста индустрии.' }
];

const track = document.querySelector('#visitedTrack');
track.innerHTML = visited.map(item => `
  <article class="place">
    <p class="tag">${item.type}</p>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </article>
`).join('');

document.querySelector('[data-next]').onclick = () => track.scrollBy({ left: 380, behavior: 'smooth' });
document.querySelector('[data-prev]').onclick = () => track.scrollBy({ left: -380, behavior: 'smooth' });

document.querySelector('#year').textContent = new Date().getFullYear();

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
