<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Servicio al cliente
      
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
    p El servicio al cliente, en temas relacionados con la salud, se refiere a la aplicación de acciones y estrategias orientadas a brindar una atención clara, respetuosa, empática y eficaz. Su propósito es generar confianza, garantizar el acceso oportuno a los servicios y mejorar la experiencia del usuario dentro del sistema de salud.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Estrategias de servicio al cliente
    p.mb-4 En el contexto de la atención al usuario en salud, especialmente en los procesos de afiliación y novedades del Sistema General de Seguridad Social en Salud (SGSSS), es fundamental aplicar estrategias de servicio al cliente que garanticen una atención clara, respetuosa, empática y eficaz. Estas estrategias contribuyen a generar confianza, facilitar el acceso a los servicios y mejorar la experiencia del usuario dentro del sistema. Por lo tanto, se deben aplicar las siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Orientación personalizada y comprensible")
            .col-md-12.mb-4.mb-md-0
              p Se considera como una de las principales estrategias, ya que cada usuario tiene una situación particular, por lo que es necesario escuchar con atención, identificar el tipo de trámite que necesita (como traslado de EPS, inclusión de beneficiarios, actualización de datos, entre otros) y explicarle de manera clara los pasos a seguir, los documentos requeridos y los canales disponibles para realizar el proceso.
          .row(titulo="Atención eficiente")
            .col-md-12.mb-4.mb-md-0
              p La comunicación asertiva y empática y el conocimiento del proceso y la normatividad vigente son claves para brindar la información con amabilidad y firmeza. Es fundamental la eficiencia en la gestión del trámite para ofrecer un buen servicio. Esto incluye evitar demoras innecesarias, brindar instrucciones claras, facilitar el diligenciamiento de formularios, y, en caso de no poder resolver el trámite en el momento, informar al usuario sobre los plazos de respuesta y cómo puede hacer seguimiento a su solicitud.
          .row(titulo="Acompañamiento del servicio")
            .col-md-12.mb-4.mb-md-0
              p Una actitud de servicio debe mantenerse durante toda la atención. Incluso cuando no sea posible dar solución inmediata, es importante ofrecer alternativas, orientar hacia los canales adecuados o brindar indicaciones sobre el siguiente paso a seguir. Nunca se debe dejar al usuario sin respuesta o sin una vía clara para continuar el proceso.
          .row(titulo="Formalización de documentación ")
            .col-md-12.mb-4.mb-md-0
             p Siempre que sea posible, es recomendable entregar información por escrito o medios digitales, como constancias de radicado, instrucciones paso a paso o confirmaciones electrónicas. Esto permite que el usuario tenga claridad sobre el trámite realizado y facilite el seguimiento posterior.
          .row(titulo="Canales de seguimiento")
            .col-md-12.mb-4.mb-md-0
             p Finalmente, se deben establecer canales efectivos de seguimiento y retroalimentación, informando al usuario cómo puede consultar el estado de su trámite y a quién acudir en caso de dudas. Escuchar sugerencias y experiencias también permite mejorar los procesos de atención y fortalecer la confianza en el sistema.

      .col-lg-4.col-8.col-sm-3.order-lg-2.order-1.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En conjunto, estas estrategias aseguran una atención centrada en el usuario, enfocada en la solución y alineada con los principios de calidad, oportunidad y respeto en los servicios de salud.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Comunicación asertiva
    p.mb-4 Es una forma de expresarse con claridad, respeto y firmeza, permitiendo decir lo que se piensa o necesita sin ofender ni someterse a los demás. Es un punto medio entre la comunicación pasiva y la agresiva, y se basa en el respeto mutuo, la empatía y el manejo adecuado de las emociones. Para la atención de usuarios en temas de afiliación al sistema de salud, esta habilidad es fundamental, ya que le permite orientar de manera clara, resolver dudas, manejar situaciones difíciles con usuarios inconformes o angustiados, además de transmitir confianza y profesionalismo. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center.tarjeta-cuadro.color-primario.p-3
          .col-lg-4.col-8.col-sm-3.mb-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='Texto que describa la imagen')
          .col-lg-6
            p Una comunicación asertiva mejora la experiencia del usuario, evita malentendidos y fortalece la imagen institucional, siendo una competencia clave en la atención humanizada y efectiva dentro del sector salud.
    p.mb-4 Las técnicas de comunicación asertiva en el contexto de afiliación y trámite de novedades en salud son:
    .tarjeta.tarjeta--BG01.p-5.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b" data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Escucha activa
            p Se debe practicar una escucha atenta, sin interrumpir al usuario, mostrando interés real por lo que expresa. Esto incluye:

            p  #[b Mantener contacto visual:]
            p  Asentir con la cabeza o usar expresiones breves como “entiendo” o “claro”.

            p  Reformular lo que el usuario dice para confirmar que comprendió:
            p  “Entonces, ¿usted desea hacer un traslado de EPS porque se mudó de ciudad, correcto?”
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img4.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Uso de lenguaje claro y sencillo
            p Es fundamental evitar tecnicismos o términos normativos que puedan confundir al usuario. Se debe explicar los procedimientos de manera comprensible:
            p “La portabilidad significa que usted puede seguir recibiendo atención médica en su nueva ciudad, sin cambiar de EPS. Solo necesita informar el traslado”. 
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img5.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Empatía verbal y emocional
            p Se debe validar las emociones del usuario, especialmente si este se encuentra molesto, angustiado o confundido. Frases como la siguientes, permiten generar un ambiente de respeto y confianza:
            p “Comprendo que esta situación puede ser frustrante”.
            p “Lamento que haya tenido esa dificultad, voy a ayudarle con el proceso”. 
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img6.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Asertividad en la entrega de información
            p La asertividad implica comunicar lo que se puede y lo que no se puede hacer, con claridad y respeto:
            p “En este momento no podemos hacer el cambio de EPS porque no han pasado los 365 días mínimos, pero puedo indicarle la fecha exacta en que puede volver a intentarlo”.
            p Esta técnica evita falsas expectativas y muestra compromiso con la solución.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img7.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Confirmación de comprensión
            p Luego de dar una explicación, se debe confirmar que el usuario entendió:
            p “¿Le quedó claro el procedimiento? ¿Desea que le repita algo?”
            p Esto garantiza que el usuario se sienta acompañado y reduce errores en la gestión de trámites. 
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img8.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Comunicación escrita clara (cuando aplica)
            p Si se debe entregar constancia, radicado o instrucciones por escrito, es importante asegurarse de que el texto sea legible, sin abreviaturas innecesarias y que esté acompañado de una breve explicación oral:
            p “Este es el número de radicado de su trámite. Puede hacerle seguimiento llamando al número que está en este documento”.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img9.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Orientación con actitud de servicio
            p La actitud de quien atiende debe ser siempre de guía, incluso si el trámite no puede realizarse en ese momento:
            p “No puedo hacer el cambio en este momento, pero puedo decirle cómo solicitar una cita con el orientador de su EPS o cómo acceder al SAT desde su celular”.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img10.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Manejo de usuarios difíciles o enojados
            p Siempre hay que evitar responder con confrontación. En su lugar, se debe mantener la calma, usar frases de contención y enfocar la conversación hacia soluciones:
            p “Entiendo su molestia. Mi función es ayudarle con lo que esté a mi alcance. Permítame revisar su caso para ver cómo puedo orientarlo”.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema3/img11.png' alt="Imagen decorativa")
 
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
