export default {
  global: {
    componenteFormativo:
      'Gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario',
    descripcionCurso:
      'Este componente introduce a los aprendices en la forma de tramitar novedades en la afiliación al sistema de salud, considerando procedimientos, requisitos y la normativa vigente. Se describen conceptos como el de portabilidad, su alcance y técnicas de comunicación para la atención de usuarios del sistema de salud colombiano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Novedades en la afiliación al SGSSS',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Normativa específica relacionada',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procedimiento para modificar afiliación al SGSSS',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Portabilidad en el sistema de salud colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Proceso de solicitud de novedad en la afiliación',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estrategias de servicio al cliente',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comunicación asertiva',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Enfoque diferencial en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios del enfoque diferencial en salud',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              ' Aplicación del enfoque diferencial en los procesos de afiliación',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_13450093_DU.pdf',
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
  complementario: [
    {
      tema: '1. Novedades en la afiliación al SGSSS',
      referencia:
        'Ministerio de Salud y Protección Social. (2022, 15 de septiembre). <em>Afiliación al Sistema de Salud</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=e0IWd1YdkUc',
    },
    {
      tema: '1.2. Procedimiento para modificar afiliación al SGSSS',
      referencia:
        'Ecosistema de Recurso Educativos SENA. (2025, 3 de junio).<em> Orientación al usuario en el proceso de afiliación y registro de novedades del servicio de salud</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0HeR3rr7l5U ',
    },
    {
      tema: '2. Portabilidad en el sistema de salud colombiano',
      referencia:
        'Ecosistema de Recurso Educativos SENA. (2025, 3 de junio). <em>Orientación al usuario en el proceso de afiliación y registro de novedades del servicio de salud</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0HeR3rr7l5U ',
    },
  ],
  glosario: [
    {
      termino: 'Afiliación',
      significado:
        'proceso mediante el cual una persona se inscribe en el Sistema General de Seguridad Social en Salud. ',
    },
    {
      termino: 'BDUA',
      significado: ' Base de Datos Única de Afiliados. ',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'refiere a un estilo de comunicación que permite expresarse de manera firme y precisa. ',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'es un método de atención que considera las características propias de cada individuo.  ',
    },
    {
      termino: 'EPS',
      significado: ' Entidad Promotora de Servicios de Salud.',
    },
    {
      termino: 'Novedad en la afiliación',
      significado:
        'todos los cambios que la persona haga de sus datos en el sistema.',
    },
    {
      termino: 'Portabilidad',
      significado:
        'garantía de atención en salud en cualquier lugar del territorio. ',
    },
    {
      termino: 'Régimen contributivo',
      significado:
        'régimen para las personas en condiciones socioeconómicas con incapacidad de pago.',
    },
    {
      termino: 'Régimen subsidiado',
      significado:
        'régimen diseñado para la población afiliada con capacidad de pago.',
    },
    {
      termino: 'SAT',
      significado:
        'es la plataforma digital Sistema de Afiliación Transaccional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2011). <em>Ley 1438 de 2011: Por medio de la cual se reforma el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones. Diario Oficial No. 47.957.</em> ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1438_2011.html',
    },
    {
      referencia:
        'Función Pública. (1991). Constitución Política de Colombia. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Función Pública. (2013). <em>Decreto 1683 de 2013: Por el cual se reglamenta el artículo 22 de la Ley 1438 de 2011 sobre portabilidad nacional en el Sistema General de Seguridad Social en Salud.</em> ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=54074 ',
    },
    {
      referencia:
        'Función Pública. (2016). <em>Decreto 780 de 2016: <em>Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813 ',
    },
    {
      referencia:
        'Ministerio de Salud y protección Social. (2007). <em>Ley 1122 de 2007: <em>Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones.</em> ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1122-de-2007.pdf ',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <em>Resolución 4622 de 2016: Por la cual se establece el reporte de los datos de afiliación al Sistema General de Seguridad Social en Salud, a planes voluntarios, Regímenes Especial y de Excepción y de las personas privadas de la libertad bajo la custodia y vigilancia del INPEC.</em> ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-4622-de-2016.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
