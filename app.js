const productos = [
  {
    nombre: "Pijama Floral Verde",
    precio: "$380",
    miniDescripcion: "Pijama de satín con estampado floral. Talla: L (Grande).",
    descripcionCompleta: "Conjunto de pijama confeccionado en satín con un estampado floral en tonos blancos y marrones sobre fondo verde oscuro. Incluye camisa de botones con cuello clásico y shorts con cintura elástica para mayor comodidad. Es perfecto para noches de descanso elegante.",
    imagen: "./img/Pijama1.jpeg"
  },
  {
    nombre: "Pijama Azul Marino Floral",
    precio: "$430",
    miniDescripcion: "Pijama fresco con estilo sofisticado. Talla: L (Grande).",
    descripcionCompleta: "Conjunto de pijama hecho de algodón transpirable con diseño floral en blanco sobre azul marino. La camisa tiene botones y ribetes decorativos, y los pantalones largos cuentan con cintura elástica. Ideal para climas cálidos y noches relajadas.",
    imagen: "./img/Pijama2.jpeg"
  },
  {
    nombre: "Pijama Plantitas",
    precio: "$430",
    miniDescripcion: "Elegante pijama con diseño minimalista. Talla: S (Chica).",
    descripcionCompleta: "Pijama de satín en tono gris claro con un delicado estampado floral en beige y marrón. Este conjunto incluye camisa con botones y ribetes decorativos, además de pantalones largos cómodos con cintura elástica. Una opción ideal para noches sofisticadas.",
    imagen: "./img/Pijama3.jpeg"
  },
  {
    nombre: "Pijama Romántica Rosada",
    precio: "$380",
    miniDescripcion: "Pijama con corazones blancos. Talla: M (Mediana).",
    descripcionCompleta: "Conjunto de pijama de dos piezas con diseño romántico en fondo rosado. Incluye camisa de botones con bolsillo decorativo y shorts de cintura elástica. Es una opción ideal para añadir un toque encantador a tus momentos de descanso.",
    imagen: "./img/Pijama4.jpeg"
  },
  {
    nombre: "Pijama Chocolate Pastel",
    precio: "$380",
    miniDescripcion: "Pijama suave con corazones decorativos. Talla: M (Mediana).",
    descripcionCompleta: "Este conjunto de pijama cuenta con una camisa de botones y shorts en color marrón claro, decorados con corazones blancos y azules. Su diseño encantador y materiales suaves lo convierten en la elección perfecta para noches tranquilas en casa.",
    imagen: "./img/Pijama5.jpeg"
  },
  {
    nombre: "Pijama Rosada de Corazones",
    precio: "$220",
    miniDescripcion: "Pijama ligera y fresca. Talla: L (Grande).",
    descripcionCompleta: "Este conjunto está confeccionado en tela ligera y cómoda con un diseño de corazones rojos sobre fondo rosado. Incluye camisa de botones con ribetes decorativos y shorts con cintura elástica, ideal para noches relajadas.",
    imagen: "./img/Pijama6.jpeg"
  },
  {
    nombre: "Pijama Blanca de Mariposas",
    precio: "$380",
    miniDescripcion: "Pijama delicada y femenina. Talla: M (Mediana).",
    descripcionCompleta: "Conjunto de pijama blanco con un diseño de mariposas negras y rosas. Incluye camisa de botones y pantalones largos con cintura elástica. Este diseño elegante y fresco es ideal para noches de descanso estilizado.",
    imagen: "./img/Pijama7.jpeg"
  },
  {
    nombre: "Pijama Rosa Pastel de Corazones",
    precio: "$380",
    miniDescripcion: "Pijama romántica y sofisticada. Talla: M (Mediana).",
    descripcionCompleta: "Conjunto en tono rosa claro decorado con corazones rojos y blancos. Incluye camisa de botones y shorts con detalles decorativos que aportan estilo y comodidad. Perfecto para relajarse con un toque romántico.",
    imagen: "./img/Pijama8.jpeg"
  },
  {
    nombre: "Pijama Tropical de Flamencos",
    precio: "$380",
    miniDescripcion: "Pijama con diseño alegre y fresco. Talla: XL (Extra Grande).",
    descripcionCompleta: "Conjunto de pijama con estampado de flamencos rosados sobre fondo gris claro. La camisa de botones y los pantalones largos con cintura elástica ofrecen una combinación perfecta de estilo tropical y comodidad.",
    imagen: "./img/Pijama9.jpeg"
  }
];
  
  const gallery = document.querySelector('.gallery');
  
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="card-content">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <p>${producto.miniDescripcion}</p>
      </div>
    `;
    card.addEventListener('click', () => abrirModal(producto));
    gallery.appendChild(card);
  });
  
  // Modal
  const modal = document.getElementById('modal');
  const modalImagen = document.getElementById('modalImagen');
  const modalDescripcion = document.getElementById('modalDescripcion');
  const cerrarModal = document.getElementById('cerrarModal');
  
  function abrirModal(producto) {
    modal.style.display = "block";
    modalImagen.src = producto.imagen;
    modalDescripcion.textContent = producto.descripcionCompleta;
  }
  
  cerrarModal.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
