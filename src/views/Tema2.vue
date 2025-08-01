<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Portabilidad en el sistema de salud colombiano
    p.mb-4 La portabilidad en salud es un derecho que tienen todas las personas afiliadas al Sistema General de Seguridad Social en Salud (SGSSS) en Colombia. Este derecho les permite recibir atención médica en un municipio o departamento diferente al que figura como su lugar de afiliación, sin necesidad de cambiar de EPS. Es decir, si una persona se traslada a otro lugar por trabajo, estudio, vacaciones, cuidado familiar u otra razón, puede seguir siendo atendida por su EPS siempre y cuando informe oportunamente el cambio de ubicación.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este mecanismo fue establecido para garantizar el acceso a los servicios de salud, incluso cuando el afiliado cambia de lugar de residencia temporal o permanentemente. La Ley 1438 de 2011 y el Decreto 1683 de 2013 son las normas que regulan la portabilidad y obligan a las EPS a garantizar la atención médica de sus usuarios en cualquier parte del territorio nacional, mediante redes alternas de prestadores de servicios de salud.
    p.mb-4 Para activar la portabilidad, el afiliado debe informar a su EPS el lugar al que se traslada, el tiempo estimado de permanencia y el tipo de atención que necesita (urgencias, consultas generales, tratamientos específicos, etc.). Esta notificación puede hacerse en persona, por teléfono o a través de los canales virtuales que la EPS tenga habilitados. En algunos casos, también se puede realizar mediante el Sistema de Afiliación Transaccional (SAT).
    .tarjeta-BG02.px-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-10.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')
        .col-lg-5
          p Es fundamental saber orientar al usuario sobre este procedimiento y poder explicar con claridad qué es la portabilidad, cómo se activa, cuáles son sus beneficios y qué implicaciones tiene no reportarla. Además, se debe estar en capacidad de ayudar al usuario a registrar la novedad, ya sea llenando un formulario, usando la plataforma digital correspondiente o remitiéndolo a la oficina adecuada.
          p Es importante recordar que la portabilidad aplica para todos los afiliados, tanto del régimen contributivo como del subsidiado. Si el usuario no reporta su traslado, puede tener dificultades para acceder a servicios que no sean urgencias, ya que la EPS podría no tener habilitada una red asistencial en el nuevo municipio. Por eso, es clave brindar una orientación oportuna y asegurarse de que el usuario sepa a qué Institución Prestadora de Servicios (IPS) debe acudir en su nuevo lugar de residencia.
    p.mb-4 La portabilidad tiene los siguientes beneficios:
    .row.justify-content-center.mb-4
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/img3.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Optimización
              p.mb-0 Permite que el sistema de salud colombiano sea más flexible, equitativo y accesible.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/img4.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Atención
              p.mb-0 Garantiza la continuidad en la atención.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/img5.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Protección
              p.mb-0 Protege el derecho fundamental a la salud.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema2/img6.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Cobertura 
              p.mb-0 Evita que las personas pierdan cobertura por el simple hecho de haberse desplazado a otro lugar del país. 
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Proceso de solicitud de novedad en la afiliación
    p.mb-4 Una novedad importante en el proceso de solicitud es que puede realizarse de manera virtual o presencial, dependiendo de la EPS. En muchos casos, los usuarios pueden usar la plataforma del Sistema de Afiliación Transaccional (SAT) para registrar directamente la modificación desde un computador o celular con conexión a internet. Esta opción es especialmente útil en zonas donde no hay oficinas físicas cercanas o cuando se desea evitar desplazamientos.
    .tarjeta-BG02.px-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.order-2.order-lg-1
          p Cuando el trámite se realiza presencialmente, el usuario debe llenar un formulario físico de novedades, el cual debe estar completamente diligenciado y firmado. Como ya se mencionó, los formularios no deben presentar tachaduras ni espacios en blanco, ya que esto puede generar devoluciones del trámite. Además, se debe verificar que se anexen los documentos exigidos en cada caso y que estos sean legibles y actualizados, como registros civiles, cédulas o certificaciones laborales.
          p Al radicar la solicitud, ya sea en línea o en oficina, el sistema o el funcionario debe entregar al usuario un comprobante de radicación con un número único que permita hacer seguimiento. Este comprobante es fundamental porque es la evidencia formal del trámite y su fecha marca el inicio de los tiempos establecidos para que la novedad se haga efectiva.
          p Es importante conocer la responsabilidad de informar al usuario sobre los tiempos estimados de respuesta para cada tipo de novedad. 

        .col-lg-5.col-8.order-1.order-lg-2.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')
    p.mb-4 Por ejemplo, estas novedades:
    .row.mb-5
      .col-lg-6
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5 Traslado de EPS
              p.mb-0 La solicitud se aplica el primer día del mes siguiente al de la radicación.
      .col-lg-6
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5 Cambio de datos personales
              p.mb-0 La solicitud puede tardar menos tiempo que la del cambio de EPS. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Si el usuario no recibe confirmación dentro del plazo indicado, debe saber cómo hacer seguimiento o reclamar ante la EPS o la Superintendencia Nacional de Salud.
</template>

<script>
export default {
  name: 'Tema2',
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
