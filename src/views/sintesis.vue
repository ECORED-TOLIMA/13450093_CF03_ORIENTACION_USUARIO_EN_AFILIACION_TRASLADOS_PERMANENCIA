<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo, introduce las bases esenciales para tramitar novedades en la afiliación al sistema de salud, considerando procedimientos, requisitos y la normativa vigente. 
    p Con esta formación, el aprendiz comprenderá cómo identificar, orientar y tramitar novedades en la afiliación al SGSSS, aplicando la normativa vigente, técnicas de comunicación asertiva y enfoque diferencial. Desarrollará habilidades para brindar atención clara, empática y efectiva, garantizando el acceso oportuno a los servicios de salud, según las necesidades de cada usuario.
    p Este componente permite al aprendiz fortalecer conocimientos normativos sobre el SGSSS, desarrollar habilidades prácticas para el trámite de novedades y mejorar su comunicación con los usuarios mediante técnicas asertivas y enfoque diferencial. Esto le permite brindar una atención más humana, eficiente y adaptada a las necesidades de poblaciones diversas.

    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario, se parte del proceso de las novedades que hay presentes con temas de afiliación, lo cual se debe llevar a cabo acorde a la normativa existente. Además, se ahonda en los beneficios que hay en temas de portabilidad, así como las estrategias que se llevan a cabo para tener un buen servicio al cliente, logrando con ello, una comunicación asertiva. Luego, se finaliza con la explicación de los principios que hay en un enfoque diferencial y los ejemplos prácticos de situaciones reales que se pueden presentar en este entorno.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
