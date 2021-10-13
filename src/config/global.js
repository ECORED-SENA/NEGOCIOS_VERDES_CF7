export default {
  global: {
    componenteFormativo: 'Propuesta de negocio verde',
    descripcionCurso:
      '<font color="#000">Ante el posicionamiento de Colombia como un país proveedor de negocios verdes a nivel mundial, es muy importante continuar impulsando la oferta de bienes y servicios que generen impactos positivos al medio ambiente, para atender el mercado y motivar al consumidor en su intención de compra. En este componente, el aprendiz logrará diseñar una propuesta de negocio verde y definirá propuestas de valor para su comercialización.</font>',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Qué es mercadeo verde (Green Marketing)?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ventajas y desventajas del mercadeo verde',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Implementación de una estrategia de mercadeo verde en una empresa',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ejemplos de mercadeo verde en el mundo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Factores de éxito del mercadeo verde',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'El Producto Mínimo Viable (PMV)',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Gestor de categoría (category manager)',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Ciclo de 8 pasos',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Coolhunting',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño de un producto  ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Envases, empaques, embalajes ecológicos y biodegradables',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Construcción de marca o branding',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Construcción de marca ecológica o marca verde (Green Branding)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Propiedad intelectual, patentes e invenciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Propuesta de valor',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Design thinking',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Business Model Canvas',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcaraz, S. (2019). Embalaje ecológico: Preguntas frecuentes sobre el impacto del embalaje en el medio ambiente. RAJA Blog.',
      link:
        'https://www.rajapack.es/blog-es/embalaje/embalaje-ecologico-preguntas-frecuentes/',
    },
    {
      referencia:
        'Calderón, M. y Pestana, Y. (2019). Green marketing, tendencias y su aplicación en proyectos. Universidad del Rosario).',
    },
    {
      referencia:
        'Castellano, S., Urdaneta, G. y Joheni, A. (2015). Estrategias de mercadeo verde utilizadas por empresas a nivel mundial. Telos, 17(3), p. 476-494.',
      link: 'https://www.redalyc.org/articulo.oa?id=99342682007',
    },
    {
      referencia:
        'Centro Internacional de Negocios. (s. f.). Etiqueta, envase, empaque y embalaje. Cámara de Comercio de Bogotá.',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/11225/100000611.pdf',
    },
    {
      referencia:
        'Echeverri, L. (2010). Inserción Del Mercadeo Verde En Prácticas Empresariales En Colombia (Casos De Estudio). Revista Luna Azul, (31), p. 122-138.',
    },
    {
      referencia:
        'González, A. y Nieto, G.(2019). El proceso de creación y evolución del Producto Mínimo Viable en las startups de software.',
      link:
        'https://dspace.ort.edu.uy/bitstream/handle/20.500.11968/4075/Material%20completo.pdf?sequence=-1&isAllowed=y',
    },
    {
      referencia:
        'Llamas, F. y Fernández, J. (2018). La metodología Lean Startup: desarrollo y aplicación para el emprendimiento. Revista EAN, (84), p. 79-95.',
      link: 'https://www.redalyc.org/jatsRepo/206/20657075005/html/index.html',
    },
    {
      referencia:
        'Monteiro, T., Giuliani, A., Cavazos-Arroyo, J. y Kassouf, N. (2015). MEZCLA DEL MARKETING VERDE: UNA PERSPECTIVA TEÓRICA. Cuadernos del CIMBAGE, (17), p. 103-126.',
      link: 'https://www.redalyc.org/articulo.oa?id=46243484005',
    },
    {
      referencia:
        'Ricci, T. (2020). Marketing verde e innovación. Universidad del Rosario.',
      link:
        'https://repository.urosario.edu.co/bitstream/handle/10336/30732/RicciCastillo-TitoFederico-2020.pdf?sequence=7&isAllowed=y',
    },
    {
      referencia:
        'Ries, E. (2011). El método Lean Startup: Cómo crear empresas de éxito utilizando la innovación continua. Deusto.',
      link:
        'https://books.google.com.co/books/about/El_m%C3%A9todo_Lean_Startup.html?id=4NipXMMzaBgC&printsec=frontcover&source=kp_read_button&hl=es-419&redir_esc=y#v=onepage&q&f=false',
    },
    {
      referencia:
        'Samper, J., Cañas, L. (2017). Acciones y prácticas de mercadeo verde en empresas colombianas (casos de estudio). Revista de Economía & Administración, 5(2), p. 139-158.',
      link:
        'https://www.academia.edu/3302778/ACCIONES_Y_PR%C3%81CTICAS_DE_MERCADO_VERDE_EN_EMPRESAS_COLOMBIANAS_CASOS_DE_ESTUDIO_?from=cover_page',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (s. f.). ¿Qué es una marca?.',
      link: 'https://www.sic.gov.co/node/77',
    },
  ],
  glosario: [
    {
      termino: 'Categoría',
      significado:
        'conjunto de productos que los consumidores identifican como interrelacionados y/o sustituibles, que satisfacen sus necesidades y se encuentran dentro de una misma exhibición.',
    },
    {
      termino: '<em>Category manager</em>',
      significado:
        'gestor de categoría o administrador de categorías de producto. Abreviatura “<em>Catman</em>”.',
    },
    {
      termino: '<em>Coolhunting</em>',
      significado:
        'disciplina reciente y muy novedosa que tiene como finalidad detectar cómo la combinación de determinados cambios en la sociedad puede llegar a significar nuevas necesidades para nuestros consumidores y que, a priori, no se detectan a través de estudios tradicionales de investigación de mercados.',
    },
    {
      termino: '<em>Early adopters</em>',
      significado:
        'son aquellos primeros clientes que adoptan un producto determinado. Son los primeros clientes que van a validar su producto en el mercado y que van a recomendar el producto entre su círculo social, los cuales tienen un prestigio social y son líderes de opinión en su comunidad. La mayoría de ellos cuentan con un blog o tienen bastante actividad en las redes sociales. Son personas que se toman tiempo para criticar o para resaltar los atributos de un producto.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'nivel de compromiso que tienen los consumidores y usuarios con una marca.',
    },
    {
      termino: '<em>Feedback</em>',
      significado:
        'en español, retroalimentación. Es la acción de ofrecer información a una persona sobre un resultado. Es la reacción, respuesta u opinión que nos da un interlocutor como retorno sobre un asunto determinado. En <em>marketing</em>, es la opinión que tienen nuestros clientes, o posibles clientes, de nuestra empresa, producto o campaña de publicidad.',
    },
    {
      termino: '<em>Green Branding</em>',
      significado: 'construcción de marca verde o marca ecológica.',
    },
    {
      termino: '<em>Green Marketing</em> o <em>marketing green</em>',
      significado:
        'el mercadeo verde se define como todas las actividades cuyo objetivo principal es generar y proporcionar cambios dirigidos a satisfacer las necesidades de las personas con la menor huella negativa posible hacia el medio ambiente. Este concepto presenta mucha similitud con la definición de mercadeo tradicional, con diferenciación en causar el menor impacto ambiental negativo al medio ambiente.',
    },
    {
      termino: '<em>Greenwashing</em>',
      significado:
        'el término proviene del inglés green (verde) y <em>washing</em> (lavado). Hace referencia a las malas prácticas de algunas empresas, que presentan productos como respetuosos del ambiente, aunque no lo son. Su objetivo es limpiar su imagen y no perder clientes (o recuperarlos). Como consecuencia, inducen a errores de percepción al cliente y aprovechan el deseo genuino de construir una cultura ambiental.',
    },
    {
      termino: '<em>Packaging</em>',
      significado: 'envase.',
    },
    {
      termino: 'PMV',
      significado:
        'Producto Mínimo Viable. Es la versión de un nuevo producto con la menor cantidad de funciones posibles, que permite al equipo de desarrollo recolectar información para validar respuestas del cliente, utilizando la menor cantidad de recursos posible (tiempo, dinero y esfuerzo).',
    },
    {
      termino: '<em>Retailers</em>',
      significado: 'minoristas.',
    },
    {
      termino: 'Segmento de mercado',
      significado:
        'es un grupo de consumidores que tienen características homogéneas y comunes para satisfacer una necesidad.',
    },
    {
      termino: '<em>Shopper</em>',
      significado: 'comprador.',
    },
    {
      termino: '<em>Startup</em>',
      significado:
        'es una organización de personas que buscan desarrollar un producto o un servicio, consolidar un modelo de negocio repetible y escalable, resolviendo un problema de forma innovadora, y que por norma general se apoyan en el uso de la tecnología.',
    },
  ],
  complementario: [
    {
      texto:
        'Castellano, S., Urdaneta, G. y Joheni, A. (2015). Estrategias de mercadeo verde utilizadas por empresas a nivel mundial. Telos, 17(3), p. 476-494.',
      tipo: 'Artículo científico',
      link: 'https://www.redalyc.org/articulo.oa?id=99342682007',
    },
    {
      texto:
        'Samper, J., Cañas, L. (2017). Acciones y prácticas de mercadeo verde en empresas colombianas (casos de estudio). Revista de Economía & Administración, 5(2), p. 139-158.',
      tipo: 'Artículo científico',
      link:
        'https://www.academia.edu/3302778/ACCIONES_Y_PR%C3%81CTICAS_DE_MERCADO_VERDE_EN_EMPRESAS_COLOMBIANAS_CASOS_DE_ESTUDIO_?from=cover_page',
    },
    {
      texto:
        'Instituto de Marketing Ágil. (2016). ¿Cómo crear un Producto Mínimo Viable para validar tu idea de negocios? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KkNOfdVl7qo',
    },
    {
      texto:
        'Centro Internacional de Negocios. (s. f.). Etiqueta, envase, empaque y embalaje. Cámara de Comercio de Bogotá.',
      tipo: 'Presentación en diapositivas',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/11225/100000611.pdf',
    },
    {
      texto:
        'Organización Mundial de la Propiedad Intelectual [OMPI]. (2007). Aprender del pasado para crear el futuro: Invenciones y Patentes.',
      tipo: 'Libro',
      link: 'https://www.wipo.int/ip-outreach/es/learn.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea del Pilar Torres Gallardo',
        cargo: 'Experta Temática',
        centro:
          'Regional Norte de Santander - Centro de la Industria, Empresa y Servicios CIES.',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'AseDiseñadora instruccionalsor',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
