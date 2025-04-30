const productos = [
  // Pijamas
  {
    nombre: "Pijama Floral Verde",
    precio: "$380",
    miniDescripcion: "Pijama de satín con estampado floral. Talla: L (Grande).",
    descripcionCompleta: "Conjunto de pijama confeccionado en satín con un estampado floral en tonos blancos y marrones sobre fondo verde oscuro. Incluye camisa de botones con cuello clásico y shorts con cintura elástica para mayor comodidad. Es perfecto para noches de descanso elegante.",
    imagen: "./img/pijamaaaa.jpeg",
    categoria: "pijamas"
  },
  {
    nombre: "Pijama Azul Marino Floral",
    precio: "$430",
    miniDescripcion: "Pijama fresco con estilo sofisticado. Talla: L (Grande).",
    descripcionCompleta: "Conjunto de pijama hecho de algodón transpirable con diseño floral en blanco sobre azul marino. La camisa tiene botones y ribetes decorativos, y los pantalones largos cuentan con cintura elástica. Ideal para climas cálidos y noches relajadas.",
    imagen: "./img/pijamaaaa.jpeg",
    categoria: "pijamas"
  },
  {
    nombre: "Pijama Plantitas",
    precio: "$430",
    miniDescripcion: "Elegante pijama con diseño minimalista. Talla: S (Chica).",
    descripcionCompleta: "Pijama de satín en tono gris claro con un delicado estampado floral en beige y marrón. Este conjunto incluye camisa con botones y ribetes decorativos, además de pantalones largos cómodos con cintura elástica. Una opción ideal para noches sofisticadas.",
    imagen: "./img/pijamaaaa.jpeg",
    categoria: "pijamas"
  },
  {
    nombre: "Pijama Romántica Rosada",
    precio: "$380",
    miniDescripcion: "Pijama con corazones blancos. Talla: M (Mediana).",
    descripcionCompleta: "Conjunto de pijama de dos piezas con diseño romántico en fondo rosado. Incluye camisa de botones con bolsillo decorativo y shorts de cintura elástica. Es una opción ideal para añadir un toque encantador a tus momentos de descanso.",
    imagen: "./img/pijamaaaa.jpeg",
    categoria: "pijamas"
  },
  {
    nombre: "Pijama Chocolate Pastel",
    precio: "$380",
    miniDescripcion: "Pijama suave con corazones decorativos. Talla: M (Mediana).",
    descripcionCompleta: "Este conjunto de pijama cuenta con una camisa de botones y shorts en color marrón claro, decorados con corazones blancos y azules. Su diseño encantador y materiales suaves lo convierten en la elección perfecta para noches tranquilas en casa.",
    imagen: "./img/pijamaaaa.jpeg",
    categoria: "pijamas"
  },
  {
    nombre: "Pijama Rosada de Corazones",
    precio: "$220",
    miniDescripcion: "Pijama ligera y fresca. Talla: L (Grande).",
    descripcionCompleta: "Este conjunto está confeccionado en tela ligera y cómoda con un diseño de corazones rojos sobre fondo rosado. Incluye camisa de botones con ribetes decorativos y shorts con cintura elástica, ideal para noches relajadas.",
    imagen: "./img/pijamaaaa.jpeg",
    categoria: "pijamas"
  },
  {
    nombre: "Pijama Blanca de Mariposas",
    precio: "$380",
    miniDescripcion: "Pijama delicada y femenina. Talla: M (Mediana).",
    descripcionCompleta: "Conjunto de pijama blanco con un diseño de mariposas negras y rosas. Incluye camisa de botones y pantalones largos con cintura elástica. Este diseño elegante y fresco es ideal para noches de descanso estilizado.",
    imagen: "./img/pijamaaaa.jpeg",
    categoria: "pijamas"
  },
  {
    nombre: "Pijama Rosa Pastel de Corazones",
    precio: "$380",
    miniDescripcion: "Pijama romántica y sofisticada. Talla: M (Mediana).",
    descripcionCompleta: "Conjunto en tono rosa claro decorado con corazones rojos y blancos. Incluye camisa de botones y shorts con detalles decorativos que aportan estilo y comodidad. Perfecto para relajarse con un toque romántico.",
    imagen: "./img/pijamaaaa.jpeg",
    categoria: "pijamas"
  },
  {
    nombre: "Pijama Tropical de Flamencos",
    precio: "$380",
    miniDescripcion: "Pijama con diseño alegre y fresco. Talla: XL (Extra Grande).",
    descripcionCompleta: "Conjunto de pijama con estampado de flamencos rosados sobre fondo gris claro. La camisa de botones y los pantalones largos con cintura elástica ofrecen una combinación perfecta de estilo tropical y comodidad.",
    imagen: "./img/pijamaaaa.jpeg",
    categoria: "pijamas"
  },

  // Otros productos
  {
    nombre: "Pantalón Mezclilla Slim",
    precio: "$500",
    miniDescripcion: "Pantalón de mezclilla ajustado. Talla: 30 (Mediana).",
    descripcionCompleta: "Pantalón de mezclilla de corte slim, ideal para un look moderno y elegante. Con detalles de desgaste ligero y un toque de estilo casual. Con cinturilla elástica para mayor confort.",
    imagen: "./img/pantalon.jpeg",
    categoria: "pantalones"
    
  },
  {
    nombre: "Pantalón Mezclilla Slim",
    precio: "$500",
    miniDescripcion: "Pantalón de mezclilla ajustado. Talla: 30 (Mediana).",
    descripcionCompleta: "Pantalón de mezclilla de corte slim, ideal para un look moderno y elegante. Con detalles de desgaste ligero y un toque de estilo casual. Con cinturilla elástica para mayor confort.",
    imagen: "./img/pantalon.jpeg",
    categoria: "pantalones"
    
  },
  {
    nombre: "Pantalón Mezclilla Slim",
    precio: "$500",
    miniDescripcion: "Pantalón de mezclilla ajustado. Talla: 30 (Mediana).",
    descripcionCompleta: "Pantalón de mezclilla de corte slim, ideal para un look moderno y elegante. Con detalles de desgaste ligero y un toque de estilo casual. Con cinturilla elástica para mayor confort.",
    imagen: "./img/pantalon.jpeg",
    categoria: "pantalones"
    
  },
  {
    nombre: "Pantalón Mezclilla Slim",
    precio: "$500",
    miniDescripcion: "Pantalón de mezclilla ajustado. Talla: 30 (Mediana).",
    descripcionCompleta: "Pantalón de mezclilla de corte slim, ideal para un look moderno y elegante. Con detalles de desgaste ligero y un toque de estilo casual. Con cinturilla elástica para mayor confort.",
    imagen: "./img/pantalon.jpeg",
    categoria: "pantalones"
    
  },
  {
    nombre: "Pantalón Mezclilla Slim",
    precio: "$500",
    miniDescripcion: "Pantalón de mezclilla ajustado. Talla: 30 (Mediana).",
    descripcionCompleta: "Pantalón de mezclilla de corte slim, ideal para un look moderno y elegante. Con detalles de desgaste ligero y un toque de estilo casual. Con cinturilla elástica para mayor confort.",
    imagen: "./img/pantalon.jpeg",
    categoria: "pantalones"
    
  },
  {
    nombre: "Vestido Floral Elegante",
    precio: "$800",
    miniDescripcion: "Vestido largo con estampado floral. Talla: M (Mediana).",
    descripcionCompleta: "Vestido largo y fluido con un delicado estampado floral, ideal para ocasiones especiales. Con un diseño sin mangas y falda fluida para mayor comodidad. Perfecto para un look elegante y fresco.",
    imagen: "./img/vestido.jpeg",
    categoria: "vestidos"
  },
  {
    nombre: "Vestido Floral Elegante",
    precio: "$800",
    miniDescripcion: "Vestido largo con estampado floral. Talla: M (Mediana).",
    descripcionCompleta: "Vestido largo y fluido con un delicado estampado floral, ideal para ocasiones especiales. Con un diseño sin mangas y falda fluida para mayor comodidad. Perfecto para un look elegante y fresco.",
    imagen: "./img/vestido.jpeg",
    categoria: "vestidos"
  },
  {
    nombre: "Vestido Floral Elegante",
    precio: "$800",
    miniDescripcion: "Vestido largo con estampado floral. Talla: M (Mediana).",
    descripcionCompleta: "Vestido largo y fluido con un delicado estampado floral, ideal para ocasiones especiales. Con un diseño sin mangas y falda fluida para mayor comodidad. Perfecto para un look elegante y fresco.",
    imagen: "./img/vestidos.jpeg",
    categoria: "vestido"
  },
  {
    nombre: "Vestido Floral Elegante",
    precio: "$800",
    miniDescripcion: "Vestido largo con estampado floral. Talla: M (Mediana).",
    descripcionCompleta: "Vestido largo y fluido con un delicado estampado floral, ideal para ocasiones especiales. Con un diseño sin mangas y falda fluida para mayor comodidad. Perfecto para un look elegante y fresco.",
    imagen: "./img/vestido.jpeg",
    categoria: "vestidos"
  },
  {
    nombre: "Vestido Floral Elegante",
    precio: "$800",
    miniDescripcion: "Vestido largo con estampado floral. Talla: M (Mediana).",
    descripcionCompleta: "Vestido largo y fluido con un delicado estampado floral, ideal para ocasiones especiales. Con un diseño sin mangas y falda fluida para mayor comodidad. Perfecto para un look elegante y fresco.",
    imagen: "./img/vestido.jpeg",
    categoria: "vestidos"
  },
  {
    nombre: "Vestido Floral Elegante",
    precio: "$800",
    miniDescripcion: "Vestido largo con estampado floral. Talla: M (Mediana).",
    descripcionCompleta: "Vestido largo y fluido con un delicado estampado floral, ideal para ocasiones especiales. Con un diseño sin mangas y falda fluida para mayor comodidad. Perfecto para un look elegante y fresco.",
    imagen: "./img/vestido.jpeg",
    categoria: "vestidos"
  },
  {
    nombre: "Detalles de Regalo Rosa",
    precio: "$150",
    miniDescripcion: "Detalle decorativo en color rosa. Tamaño: Pequeño.",
    descripcionCompleta: "Set de detalles decorativos en color rosa pastel, ideal para complementar cualquier regalo o como decoración para tu hogar. Incluye varias figuras en miniatura para un toque único y elegante.",
    imagen: "./img/flor.jpeg",
    categoria: "detalles"
  },
  {
    nombre: "Detalles de Regalo Rosa",
    precio: "$150",
    miniDescripcion: "Detalle decorativo en color rosa. Tamaño: Pequeño.",
    descripcionCompleta: "Set de detalles decorativos en color rosa pastel, ideal para complementar cualquier regalo o como decoración para tu hogar. Incluye varias figuras en miniatura para un toque único y elegante.",
    imagen: "./img/flor.jpeg",
    categoria: "detalles"
  },
  {
    nombre: "Detalles de Regalo Rosa",
    precio: "$150",
    miniDescripcion: "Detalle decorativo en color rosa. Tamaño: Pequeño.",
    descripcionCompleta: "Set de detalles decorativos en color rosa pastel, ideal para complementar cualquier regalo o como decoración para tu hogar. Incluye varias figuras en miniatura para un toque único y elegante.",
    imagen: "./img/flor.jpeg",
    categoria: "detalles"
  },
  {
    nombre: "Detalles de Regalo Rosa",
    precio: "$150",
    miniDescripcion: "Detalle decorativo en color rosa. Tamaño: Pequeño.",
    descripcionCompleta: "Set de detalles decorativos en color rosa pastel, ideal para complementar cualquier regalo o como decoración para tu hogar. Incluye varias figuras en miniatura para un toque único y elegante.",
    imagen: "./img/flor.jpeg",
    categoria: "detalles"
  },
  {
    nombre: "Detalles de Regalo Rosa",
    precio: "$150",
    miniDescripcion: "Detalle decorativo en color rosa. Tamaño: Pequeño.",
    descripcionCompleta: "Set de detalles decorativos en color rosa pastel, ideal para complementar cualquier regalo o como decoración para tu hogar. Incluye varias figuras en miniatura para un toque único y elegante.",
    imagen: "./img/flor.jpeg",
    categoria: "detalles"
  }
  
];

// Función para crear las tarjetas de productos
let productoActual = null;

// Crear tarjetas de productos
function crearTarjetas() {
  const categorias = ["pijamas", "pantalones", "vestidos", "detalles"];
  categorias.forEach(categoria => {
    const contenedor = document.querySelector(`#${categoria} .productos`);
    const filtrados = productos.filter(p => p.categoria === categoria);

    filtrados.forEach(producto => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("card");
      tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="card-content">
          <h3>${producto.nombre}</h3>
          <p>${producto.miniDescripcion}</p>
          <span>${producto.precio}</span>
        </div>`;
      tarjeta.addEventListener("click", () => mostrarModal(producto));
      contenedor.appendChild(tarjeta);
    });
  });
}

// Mostrar modal de producto
function mostrarModal(producto) {
  const modal = document.getElementById("modal");
  productoActual = producto;

  document.getElementById("modalImagen").src = producto.imagen;
  document.getElementById("modalDescripcion").textContent = producto.descripcionCompleta;

  modal.style.display = "block";
}

// Cambiar producto con flechas
function cambiarProducto(direccion) {
  const indexActual = productos.indexOf(productoActual);
  let nuevoIndex = indexActual + direccion;

  if (nuevoIndex >= productos.length) nuevoIndex = 0; // Cicla al inicio
  if (nuevoIndex < 0) nuevoIndex = productos.length - 1; // Cicla al final

  mostrarModal(productos[nuevoIndex]);
}

// Eventos del teclado
document.addEventListener("keydown", (e) => {
  if (document.getElementById("modal").style.display === "block") {
    if (e.key === "Escape") {
      document.getElementById("modal").style.display = "none";
    } else if (e.key === "ArrowRight") {
      cambiarProducto(1);
    } else if (e.key === "ArrowLeft") {
      cambiarProducto(-1);
    }
  }
});

// Cerrar modal
document.getElementById("cerrarModal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// Inicia la creación de tarjetas al cargar
document.addEventListener("DOMContentLoaded", crearTarjetas);
