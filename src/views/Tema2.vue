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
    .tarjeta-BG02.lg-px-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')
        .col-lg-5
          p Es fundamental saber orientar al usuario sobre este procedimiento y poder explicar con claridad qué es la portabilidad, cómo se activa, cuáles son sus beneficios y qué implicaciones tiene no reportarla. Además, se debe estar en capacidad de ayudar al usuario a registrar la novedad, ya sea llenando un formulario, usando la plataforma digital correspondiente o remitiéndolo a la oficina adecuada.
          p Es importante recordar que la portabilidad aplica para todos los afiliados, tanto del régimen contributivo como del subsidiado. Si el usuario no reporta su traslado, puede tener dificultades para acceder a servicios que no sean urgencias, ya que la EPS podría no tener habilitada una red asistencial en el nuevo municipio. Por eso, es clave brindar una orientación oportuna y asegurarse de que el usuario sepa a qué Institución Prestadora de Servicios (IPS) debe acudir en su nuevo lugar de residencia.
    p.mb-4 La portabilidad tiene los siguientes beneficios:

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
