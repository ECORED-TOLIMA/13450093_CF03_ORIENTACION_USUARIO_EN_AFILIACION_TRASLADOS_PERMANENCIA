<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Enfoque diferencial en salud
    p.mb-4 En el contexto de la afiliación y trámite de novedades en el sistema de salud colombiano (SGSSS), el enfoque diferencial se refiere a la adaptación del proceso de atención a las características particulares de cada persona o grupo poblacional. 
    p.mb-4 Su objetivo es garantizar un acceso efectivo, equitativo y digno al derecho a la salud, superando barreras relacionadas con el género, la edad, la etnia, la discapacidad, la orientación sexual, la situación socioeconómica o el contexto territorial.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Aplicar el enfoque diferencial en trámites como la afiliación, el traslado de EPS o la inclusión de beneficiarios, implica reconocer que no todos los usuarios tienen las mismas condiciones, ni las mismas facilidades para cumplir con los requisitos o acceder a los servicios. Por ello, es necesario ofrecer ajustes razonables, orientación especializada y un trato humanizado, teniendo en cuenta las particularidades de cada persona. Esto garantiza que el proceso no se convierta en un obstáculo, sino en un puente para el ejercicio del derecho a la salud.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Este enfoque es especialmente relevante para poblaciones que históricamente han enfrentado barreras de acceso, como las mujeres gestantes y madres lactantes, personas en situación de discapacidad, personas mayores, comunidades indígenas, afrodescendientes o ROM, niños, niñas y adolescentes, víctimas del conflicto armado, personas en condición de calle o sin documentación y población migrante o en tránsito.
        p.mb-4 La aplicación del enfoque diferencial se traduce en acciones concretas durante la atención. Entre ellas se incluyen:
    .row.justify-content-center.align-items-center
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img2.svg', alt='Imagen decorativa')
          .tarjeta.bgblanco.p-3(x="5%" y="12%" numero="+")
            p El uso de un lenguaje claro y culturalmente apropiado.
          .tarjeta.bgblanco.p-3(x="24%" y="12%" numero="+")
            p La flexibilidad en los canales de atención y en los requisitos exigidos (cuando la normatividad lo permita).
          .tarjeta.bgblanco.p-3(x="55%" y="15%" numero="+")
            p La priorización en la atención para niños, adultos mayores, mujeres embarazadas y personas con condiciones de salud críticas. 
          .tarjeta.bgblanco.p-3(x="73.5%" y="9%" numero="+")
            p  La orientación personalizada a usuarios con barreras idiomáticas, cognitivas o físicas.
          .tarjeta.bgblanco.p-3(x="92%" y="9%" numero="+")
            p Las acciones afirmativas que aseguren este acceso, incluso en casos donde no se cuente con toda la documentación, como ocurre con personas desplazadas o habitantes de calle.
      .col-lg-10.movil
          figure
            img(src='@/assets/curso/temas/tema4/img2_1.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La importancia del enfoque diferencial radica en que permite que el derecho a la salud se cumpla en condiciones de equidad real. No se debe tratar a todas las personas por igual, se debe brindar a cada una lo que necesita para estar en igualdad de condiciones frente al sistema. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2
        p En el trámite de novedades, esto puede significar tomarse más tiempo para explicar un procedimiento, utilizar otro idioma o dialecto, ayudar a llenar un formulario o permitir que un tercero autorizado actúe como representante.
        p Aplicar el enfoque diferencial en los procesos de afiliación y novedades del SGSSS, implica ver al usuario como un sujeto de derechos y no como un simple trámite administrativo. Significa adaptar el servicio a su realidad, garantizando que, sin importar su situación, pueda ejercer plenamente su derecho a la salud.

      .col-lg-5.col-10.mb-lg-0.mb-4.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')

    
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1. Principios del enfoque diferencial en salud
    p.mb-4 Son ideas fundamentales que orientan cómo debe ser la atención a los usuarios del sistema de salud, teniendo en cuenta sus condiciones personales y sociales. Su objetivo es asegurar una atención justa, respetuosa y sin discriminación. En trámites como la afiliación o las novedades en el SGSSS, estos principios ayudan a que el sistema se adapte a las distintas realidades de la población. Al respecto, se tienen los siguientes principios:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema4/img4.png', alt='Texto que describa la imagen')
      .col-lg-6
         LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Equidad").p-3
            .col-lg-12.mb-md-0
              p Es uno de los principios más importantes. Esto significa que no todas las personas necesitan lo mismo, por lo tanto, se deben tomar medidas especiales para apoyar a quienes tienen más dificultades. 
               
          .row(numero="2" titulo="Reconocimiento de la diversidad ").p-3
            .col-lg-12.mb-md-0
              p Indica que el sistema de salud debe respetar las diferencias entre las personas, como la edad, el género, la identidad cultural, la orientación sexual, la discapacidad, la etnia o la condición migratoria. Cada persona debe recibir atención adecuada a sus características, sin prejuicios ni estigmas.
               
          .row(numero="3" titulo="Accesibilidad").p-3
            .col-lg-12.mb-md-0
              p Es otro principio importante. Significa que los servicios y trámites deben estar disponibles sin barreras físicas, de idioma, de ubicación o de tecnología. Por ejemplo, se deben adaptar los procesos para personas con discapacidad o con dificultades para leer o escribir.
                
          .row(numero="4" titulo="Autonomía ").p-3
            .col-lg-12.mb-md-0
              p Reconoce que cada persona tiene derecho a tomar decisiones informadas sobre su salud. Esto incluye participar activamente en los trámites de afiliación, con apoyo si lo necesita.
          .row(numero="5" titulo="Participación ").p-3
            .col-lg-12.mb-md-00
              p Es un factor clave. Las personas y comunidades deben tener la posibilidad de opinar y decidir sobre temas que afectan su salud y sus derechos. También deben ser escuchadas durante la atención y en la creación de políticas de salud.

          .row(numero="6" titulo="Interculturalidad").p-3
            .col-lg-12.mb-md-0
              p Reconoce que no todas las personas entienden la salud de la misma manera. Por ejemplo, los pueblos indígenas tienen sus propias formas de ver la salud y la vida. El sistema debe respetar y dialogar con esas visiones, sin imponer una sola forma de pensar.
          .row(numero="7" titulo="Protección especial").p-3
            .col-lg-12.mb-md-0
              p Se aplica a grupos que han sido excluidos o que están en situación de vulnerabilidad, como niños, víctimas del conflicto, personas en pobreza extrema o en situación de calle. Estas personas deben recibir atención prioritaria y condiciones especiales que garanticen su derecho a la salud.
                  
          .row(numero="8" titulo="No discriminación").p-3
            .col-lg-12.mb-md-0
              p Establece que nadie debe recibir un trato injusto por su raza, edad, condición económica, género, discapacidad u otra característica personal. El sistema de salud debe ser incluyente y respetar los derechos humanos de todas las personas.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Estos principios permiten que la atención en salud sea más humana, justa e incluyente. En el trámite de afiliación o novedades, se aplican en acciones concretas como dar prioridad en la atención, ayudar a llenar formularios o aceptar declaraciones cuando una persona no tiene documentos.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2. Aplicación del enfoque diferencial en los procesos de afiliación
    p.mb-4 Algunos ejemplos de aplicación de enfoque diferencial son:
    .tarjeta--container.row.mb-5
      .col-lg.tarjeta.color-primario.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img5.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center Mujer gestante
            p Si una mujer gestante en situación de desplazamiento llega sin cédula ni documentos del Sisbén, se debe priorizar su atención por su condición de embarazo y de víctima del conflicto armado. En este caso, se le puede permitir afiliarse, mediante una declaración juramentada, se le ofrece orientación en lenguaje sencillo y se le apoya en el diligenciamiento de formularios. Además, se debe garantizar su acceso inmediato a los controles prenatales, brindándole toda la información necesaria para continuar su atención en salud.
      .col-lg.tarjeta.color-secundario.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img6.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center Persona con discapacidad auditiva
            p Otro caso puede ser el de una persona mayor con discapacidad auditiva que desea trasladarse de EPS, tras mudarse de ciudad. En este escenario, se debe asegurar que la comunicación sea clara y adaptada a su condición, permitiendo el acompañamiento de un familiar como apoyo. Se debe explicar el proceso con calma, confirmar la comprensión del usuario y garantizar que la información también quede por escrito, para que pueda revisarla posteriormente.
      .col-lg.tarjeta.color-acento-contenido.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema4/img7.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center  Joven indígena
            p Asimismo, si una joven indígena que no domina el español, llega a afiliar a un familiar como beneficiario, el sistema debe tener en cuenta su contexto cultural. Se puede permitir que un familiar actúe como intérprete o, de ser posible, contar con un mediador cultural. Además, si no se cuenta con todos los documentos convencionales, puede aceptarse una declaración de convivencia u otro soporte válido, según la normativa. La atención debe ser clara, respetuosa y adaptada a su forma de comprender el sistema de salud.
            
    p.mb-4 En todos estos casos, aplicar el enfoque diferencial significa no hacer un trámite automático, sino ver a cada usuario como un sujeto con derechos y adaptar el servicio para que pueda ejercerlos, independientemente de su condición o dificultad.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Esto fortalece una atención humanizada, justa e incluyente, que responde verdaderamente a las necesidades de la población colombiana en toda su diversidad.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
