/* main.js
   - Datos: 15 películas (posters ahora images/c1.png ... c15.png)
   - Renderiza index (tarjetas responsivas con Bootstrap)
   - Renderiza detalle (rating, enlace referencia)
   - Maneja comentarios anónimos (solo textarea)
*/

// =======================
// Datos: 15 películas (POSTERS = images/c1.png ... c15.png)
// =======================
const movies = [
  { id: 1, title: "Horizonte Digital", year: 2025, poster: "images/c1.png", synopsis: "Un programador descubre un código que altera la realidad virtual.", actors: "Lina Torres, Andrés Molina", rating: "8.6", reference: "https://www.imdb.com" },
  { id: 2, title: "Ecos del Pasado", year: 2023, poster: "images/c2.png", synopsis: "Una periodista investiga un caso olvidado que resurge tras 20 años.", actors: "Carolina Ruiz, Diego Benítez", rating: "7.9", reference: "https://www.imdb.com" },
  { id: 3, title: "La Última Aurora", year: 2024, poster: "images/c3.png", synopsis: "Un grupo de científicos intenta salvar el planeta de un invierno perpetuo.", actors: "Sofía Calderón, Pablo Herrera", rating: "8.1", reference: "https://www.imdb.com" },
  { id: 4, title: "Sombras de Neón", year: 2022, poster: "images/c4.png", synopsis: "En una ciudad futurista, una detective persigue a un hacker fugitivo.", actors: "Mariana Díaz, Julio Márquez", rating: "8.3", reference: "https://www.imdb.com" },
  { id: 5, title: "Tiempo Cero", year: 2025, poster: "images/c5.png", synopsis: "Un reloj antiguo permite viajar al pasado, pero a un alto costo.", actors: "Valeria Gómez, Esteban Duarte", rating: "7.8", reference: "https://www.imdb.com" },
  { id: 6, title: "Noche Infinita", year: 2021, poster: "images/c6.png", synopsis: "Una tormenta solar deja al mundo sin luz y desata el caos global.", actors: "Natalia Suárez, Miguel Castillo", rating: "8.0", reference: "https://www.imdb.com" },
  { id: 7, title: "Código Fantasma", year: 2023, poster: "images/c7.png", synopsis: "Un estudiante encuentra un virus que adquiere conciencia propia.", actors: "Laura Morales, Camilo Pérez", rating: "7.7", reference: "https://www.imdb.com" },
  { id: 8, title: "Destino Fragmentado", year: 2022, poster: "images/c8.png", synopsis: "Una historia entrelazada por decisiones que cambian el rumbo del tiempo.", actors: "Ana María Rico, Daniel Mejía", rating: "8.5", reference: "https://www.imdb.com" },
  { id: 9, title: "Silencio Bajo el Agua", year: 2020, poster: "images/c9.png", synopsis: "Una expedición submarina descubre un secreto milenario.", actors: "Catalina Rojas, Jorge Restrepo", rating: "8.2", reference: "https://www.imdb.com" },
  { id: 10, title: "Fragmento Lunar", year: 2024, poster: "images/c10.png", synopsis: "Un astronauta regresa con una piedra que despierta extrañas visiones.", actors: "Marcos Cárdenas, Laura Ortiz", rating: "7.6", reference: "https://www.imdb.com" },
  { id: 11, title: "Vértigo Urbano", year: 2023, poster: "images/c11.png", synopsis: "Tres desconocidos cruzan sus vidas en una gran metrópolis.", actors: "Tatiana León, David Guerrero", rating: "7.9", reference: "https://www.imdb.com" },
  { id: 12, title: "El Último Relato", year: 2022, poster: "images/c12.png", synopsis: "Un escritor enfrenta los fantasmas de sus propias historias.", actors: "Lucía Cabrera, Samuel Torres", rating: "8.4", reference: "https://www.imdb.com" },
  { id: 13, title: "Sueños en Beta", year: 2025, poster: "images/c13.png", synopsis: "Una empresa prueba un software que altera los sueños de sus usuarios.", actors: "Diana López, Felipe Giraldo", rating: "8.8", reference: "https://www.imdb.com" },
  { id: 14, title: "El Eco del Silencio", year: 2021, poster: "images/c14.png", synopsis: "Un músico pierde el oído y descubre nuevas formas de percibir el mundo.", actors: "Andrea Patiño, Luis Serrano", rating: "8.1", reference: "https://www.imdb.com" },
  { id: 15, title: "Memoria Artificial", year: 2024, poster: "images/c15.png", synopsis: "Una inteligencia artificial comienza a recordar su vida anterior.", actors: "Sara Jiménez, Cristian Vega", rating: "9.0", reference: "https://www.imdb.com" }
];

// =======================
// Render index (tarjetas)
// =======================
function createCard(movie) {
  // Columna responsive: xs 12, sm 6, md 4, lg 3
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

  // Card: usamos componente .card de Bootstrap para estilos predefinidos
  const card = document.createElement('div');
  card.className = 'card movie-card h-100 shadow-sm border-0';

  const img = document.createElement('img');
  img.src = movie.poster;           // ahora toma images/cX.png
  img.alt = movie.title;
  img.className = 'card-img-top movie-poster';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body d-flex flex-column justify-content-between';

  const h5 = document.createElement('h5');
  h5.className = 'card-title text-center';
  h5.textContent = movie.title;

  const p = document.createElement('p');
  p.className = 'card-text text-muted small';
  p.innerHTML = `${movie.year} • ${movie.actors} <br> <strong>⭐ ${movie.rating}</strong>`;

  const a = document.createElement('a');
  a.href = `detalle.html?id=${movie.id}`;
  a.className = 'btn btn-outline-primary btn-sm mt-2'; // .btn es clase bootstrap
  a.textContent = 'Ver detalle';

  cardBody.appendChild(h5);
  cardBody.appendChild(p);
  cardBody.appendChild(a);

  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);

  return col;
}

function renderMovies(list) {
  const grid = document.getElementById('moviesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  list.forEach(m => grid.appendChild(createCard(m)));
}

// =======================
// Detalle
// =======================
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderDetail(id) {
  const movie = movies.find(m => String(m.id) === String(id));
  const container = document.getElementById('movieDetail');
  if (!container) return;

  if (!movie) {
    container.innerHTML = '<div class="col-12 text-center py-5">Película no encontrada.</div>';
    return;
  }

  container.innerHTML = `
    <div class="col-12 col-md-4 mb-3">
      <img src="${movie.poster}" alt="${movie.title}" class="img-fluid rounded shadow-sm">
    </div>
    <div class="col-12 col-md-8">
      <h2>${movie.title} <small class="text-muted">(${movie.year})</small></h2>
      <p><strong>Actores:</strong> ${movie.actors}</p>
      <p><strong>Calificación IMDB:</strong> ⭐ ${movie.rating}/10</p>
      <p>${movie.synopsis}</p>
      <a href="${movie.reference}" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm">Ver más en IMDB</a>
    </div>
  `;

  const comments = document.getElementById('comments');
  if (comments) {
    comments.innerHTML = `<div class="mb-2"><strong>Usuario anónimo:</strong><p>Excelente película, la volvería a ver.</p></div>`;
  }
}

// =======================
// Eventos: búsqueda / filtro / comentarios
// =======================
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('moviesGrid');
  if (grid) {
    renderMovies(movies);

    const input = document.getElementById('searchInput');
    const filterYear = document.getElementById('filterYear');
    const clearBtn = document.getElementById('clearBtn');

    // Rellenar select de años dinámicamente
    const years = [...new Set(movies.map(m => m.year))].sort((a, b) => b - a);
    if (filterYear) filterYear.innerHTML = '<option value="">Año</option>' + years.map(y => `<option>${y}</option>`).join('');

    function applyFilters() {
      const q = input.value.trim().toLowerCase();
      const year = filterYear.value;
      const filtered = movies.filter(m => {
        const matchesQ = m.title.toLowerCase().includes(q);
        const matchesYear = year ? String(m.year) === String(year) : true;
        return matchesQ && matchesYear;
      });
      renderMovies(filtered);
    }

    input.addEventListener('input', applyFilters);
    filterYear.addEventListener('change', applyFilters);
    clearBtn.addEventListener('click', () => {
      input.value = '';
      filterYear.value = '';
      renderMovies(movies);
    });
  }

  const detailContainer = document.getElementById('movieDetail');
  if (detailContainer) {
    const id = getQueryParam('id') || 1;
    renderDetail(id);

    // Comentarios anónimos (solo textarea)
    document.getElementById('postComment')?.addEventListener('click', () => {
      const text = document.getElementById('comment').value.trim();
      if (!text) return alert('Por favor, escriba un comentario.');

      const comments = document.getElementById('comments');
      const node = document.createElement('div');
      node.className = 'mb-2';
      node.innerHTML = `<strong>Usuario anónimo:</strong><p>${text}</p>`;
      comments.prepend(node);

      document.getElementById('comment').value = '';
    });
  }
});
