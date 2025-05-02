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
  // Lencería
{ 
  nombre: "Set de Lencería Encaje Negro 001",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/001.jpeg",
  categoria: "lenceria"
},
{ 
  nombre: "Set de Lencería Encaje Negro 002",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/002.jpeg",
  categoria: "lenceria"
},
{ 
  nombre: "Set de Lencería Encaje Negro 003",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/003.jpeg",
  categoria: "lenceria"
},

{ 
  nombre: "Set de Lencería Encaje Negro 052",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/004.jpeg",
  categoria: "lenceria"
},
{ 
  nombre: "Set de Lencería Encaje Negro 052",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/006.jpeg",
  categoria: "lenceria"
},
{ 
  nombre: "Set de Lencería Encaje Negro 052",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/007.jpeg",
  categoria: "lenceria"
},
{ 
  nombre: "Set de Lencería Encaje Negro 052",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/008.jpeg",
  categoria: "lenceria"
},
{ 
  nombre: "Set de Lencería Encaje Negro 052",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/009.jpeg",
  categoria: "lenceria"
},
{ 
  nombre: "Set de Lencería Encaje Negro 052",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/0010.jpeg",
  categoria: "lenceria"
},
{ 
  nombre: "Set de Lencería Encaje Negro 052",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/011.jpeg",
  categoria: "lenceria"
},
{ 
  nombre: "Set de Lencería Encaje Negro 052",
  precio: "$290",
  miniDescripcion: "Conjunto elegante de encaje. Talla: M",
  descripcionCompleta: "Conjunto de lencería de dos piezas con encaje negro y detalles finos. Cómodo, sensual y elegante.",
  imagen: "./img/012.jpeg",
  categoria: "lenceria"
},
{
  nombre: "Loción Floral de Rosas",
  precio: "$250",
  miniDescripcion: "Aroma suave de rosas. Contenido: 120 ml.",
  descripcionCompleta: "Loción corporal con fragancia floral de rosas, ideal para uso diario. Hidratante y ligera.",
  imagen: "./img/Lociones.jpg",
  categoria: "lociones"
},
{
  nombre: "Crema de Cacao",
  precio: "$180",
  miniDescripcion: "Nutritiva para piel seca. Contenido: 150 ml.",
  descripcionCompleta: "Crema corporal enriquecida con manteca de cacao, ideal para piel seca y agrietada.",
  imagen: "./img/Lociones.jpg",
  categoria: "lociones"
},
{
  nombre: "Loción Vainilla Dulce",
  precio: "$220",
  miniDescripcion: "Aroma dulce y cálido. Contenido: 100 ml.",
  descripcionCompleta: "Loción hidratante con fragancia de vainilla suave. Perfecta para pieles normales.",
  imagen: "./img/Lociones.jpg",
  categoria: "lociones"
},
{
  nombre: "Crema de Manos Lavanda",
  precio: "$90",
  miniDescripcion: "Tamaño de bolsillo. Contenido: 50 ml.",
  descripcionCompleta: "Crema de manos relajante con aroma a lavanda. Formato ideal para llevar.",
  imagen: "./img/Lociones.jpg",
  categoria: "lociones"
},
{
  nombre: "Loción Brisa Marina",
  precio: "$240",
  miniDescripcion: "Refrescante y ligera. Contenido: 110 ml.",
  descripcionCompleta: "Loción con notas marinas y toque cítrico. Sensación fresca durante todo el día.",
  imagen: "./img/Lociones.jpg",
  categoria: "lociones"
},
{
  nombre: "Crema Corporal Coco",
  precio: "$190",
  miniDescripcion: "Fragancia tropical. Contenido: 200 ml.",
  descripcionCompleta: "Crema hidratante con extracto de coco, ideal para revitalizar la piel.",
  imagen: "./img/Lociones.jpg",
  categoria: "lociones"
},
{
  nombre: "Loción Frutal Tropical",
  precio: "$230",
  miniDescripcion: "Con notas de mango y piña. 100 ml.",
  descripcionCompleta: "Loción corporal frutal ideal para primavera y verano. Hidratación y frescura.",
  imagen: "./img/Lociones.jpg",
  categoria: "lociones"
},
{
  nombre: "Set de Notas Adhesivas Pastel",
  precio: "$60",
  miniDescripcion: "Colores pastel. Incluye 100 hojas.",
  descripcionCompleta: "Set de post-its en tonos suaves. Ideal para oficina, escuela o agenda personal.",
  imagen: "./img/Cuaderno.jpeg",
  categoria: "papeleria"
},
{
  nombre: "Cuaderno de Flores",
  precio: "$85",
  miniDescripcion: "Diseño floral. 80 hojas rayadas.",
  descripcionCompleta: "Cuaderno tamaño carta con portada floral y hojas rayadas para apuntes o journaling.",
  imagen: "./img/Cuaderno.jpeg",
  categoria: "papeleria"
},
{
  nombre: "Set de Plumas Gel",
  precio: "$90",
  miniDescripcion: "6 colores. Punta fina.",
  descripcionCompleta: "Set de plumas de gel en colores surtidos. Escritura fluida y suave.",
  imagen: "./img/Cuaderno.jpeg",
  categoria: "papeleria"
},
{
  nombre: "Agenda 2025 Rosa",
  precio: "$120",
  miniDescripcion: "Diseño elegante. Semanal.",
  descripcionCompleta: "Agenda de vista semanal con espacio para notas, recordatorios y tareas diarias.",
  imagen: "./img/Cuaderno.jpeg",
  categoria: "papeleria"
},
{
  nombre: "Stickers Decorativos",
  precio: "$70",
  miniDescripcion: "Diseños variados. Incluye 5 hojas.",
  descripcionCompleta: "Stickers para planners, cuadernos o decoración. Estilo kawaii y minimalista.",
  imagen: "./img/Cuaderno.jpeg",
  categoria: "papeleria"
},
{
  nombre: "Marcadores Pastel",
  precio: "$110",
  miniDescripcion: "6 tonos suaves.",
  descripcionCompleta: "Marcadores ideales para subrayar sin manchar. Paleta pastel.",
  imagen: "./img/Cuaderno.jpeg",
  categoria: "papeleria"
},
{
  nombre: "Cartuchera Transparente",
  precio: "$75",
  miniDescripcion: "PVC resistente. Cierre superior.",
  descripcionCompleta: "Cartuchera compacta, ideal para llevar plumas, lápices y borradores.",
  imagen: "./img/Cuaderno.jpeg",
  categoria: "papeleria"
},
{
  nombre: "Labial Líquido Rosa Nude",
  precio: "$150",
  miniDescripcion: "Acabado mate. Larga duración.",
  descripcionCompleta: "Labial líquido en tono rosa nude. Textura suave, secado rápido y no transfiere.",
  imagen: "./img/Labial.jpeg",
  categoria: "maquillaje"
},
{
  nombre: "Paleta de Sombras Naturales",
  precio: "$220",
  miniDescripcion: "6 tonos neutros. Acabado mate y shimmer.",
  descripcionCompleta: "Paleta compacta con tonos versátiles para uso diario o noche.",
  imagen: "./img/Labial.jpeg",
  categoria: "maquillaje"
},
{
  nombre: "Delineador Negro Waterproof",
  precio: "$130",
  miniDescripcion: "Punta precisa. Resistente al agua.",
  descripcionCompleta: "Delineador en lápiz con punta fina y color intenso. Dura todo el día.",
  imagen: "./img/Labial.jpeg",
  categoria: "maquillaje"
},
{
  nombre: "Rubor Rosado Compacto",
  precio: "$140",
  miniDescripcion: "Textura sedosa. Tonalidad natural.",
  descripcionCompleta: "Rubor compacto fácil de difuminar. Ideal para piel clara a media.",
  imagen: "./img/Labial.jpeg",
  categoria: "maquillaje"
},
{
  nombre: "Máscara de Pestañas Volumen",
  precio: "$160",
  miniDescripcion: "Cepillo curvo. Negro intenso.",
  descripcionCompleta: "Riza, define y da volumen sin grumos. A prueba de agua.",
  imagen: "./img/Labial.jpeg",
  categoria: "maquillaje"
},
{
  nombre: "Iluminador Líquido",
  precio: "$180",
  miniDescripcion: "Acabado glow. Color champagne.",
  descripcionCompleta: "Iluminador en gotero para aplicar en mejillas, cejas o escote.",
  imagen: "./img/Labial.jpeg",
  categoria: "maquillaje"
},
{
  nombre: "Base Líquida Tono Medio",
  precio: "$210",
  miniDescripcion: "Cobertura media. Con protector solar.",
  descripcionCompleta: "Base fluida que unifica el tono y protege la piel con FPS 15.",
  imagen: "./img/Labial.jpeg",
  categoria: "maquillaje"
},
{
  nombre: "Bolso Cruzado Beige",
  precio: "$350",
  miniDescripcion: "Compacto y elegante.",
  descripcionCompleta: "Bolso cruzado de tamaño mediano con cadena dorada y cierre de botón.",
  imagen: "./img/Bolso.jpeg",
  categoria: "bolsos"
},
{
  nombre: "Cartera Floral",
  precio: "$180",
  miniDescripcion: "Diseño delicado. Cierre de broche.",
  descripcionCompleta: "Cartera pequeña con estampado floral, ideal para monedas y billetes.",
  imagen: "./img/Bolso.jpeg",
  categoria: "bolsos"
},
{
  nombre: "Bolso Shopper Negro",
  precio: "$520",
  miniDescripcion: "Amplio y resistente.",
  descripcionCompleta: "Bolso tipo shopper con asas largas y forro interior. Ideal para el día a día.",
  imagen: "./img/Bolso.jpeg",
  categoria: "bolsos"
},
{
  nombre: "Cartera con Cremallera Rosa",
  precio: "$220",
  miniDescripcion: "Compartimentos múltiples.",
  descripcionCompleta: "Cartera de tamaño estándar con espacio para tarjetas, billetes y monedas.",
  imagen: "./img/Bolso.jpeg",
  categoria: "bolsos"
},
{
  nombre: "Mini Bolso Pastel",
  precio: "$290",
  miniDescripcion: "Estilo juvenil. Asa corta.",
  descripcionCompleta: "Mini bolso estructurado en colores pastel. Ideal para salidas informales.",
  imagen: "./img/Bolso.jpeg",
  categoria: "bolsos"
},
{
  nombre: "Bolso Casual Verde Oliva",
  precio: "$400",
  miniDescripcion: "Material sintético. Interior forrado.",
  descripcionCompleta: "Bolso informal con múltiples compartimentos y cierre de cremallera.",
  imagen: "./img/Bolso.jpeg",
  categoria: "bolsos"
},
{
  nombre: "Cartera Glitter Nocturna",
  precio: "$250",
  miniDescripcion: "Brillante y elegante.",
  descripcionCompleta: "Cartera de fiesta con glitter, perfecta para ocasiones especiales.",
  imagen: "./img/Bolso.jpeg",
  categoria: "bolsos"
},

  
];

// Función para crear las tarjetas de productos
let productoActual = null;

// Crear tarjetas de productos
function crearTarjetas() {
  const categorias = [
    "pijamas",
    "pantalones",
    "vestidos",
    "detalles",
    "lenceria",
    "lociones",
    "papeleria",
    "maquillaje",
    "bolsos"
  ];
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
