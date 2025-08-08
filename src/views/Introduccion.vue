<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2
        p Este componente formativo tiene como objetivo capacitar a los participantes en la forma de hacer modificaciones de las afiliaciones, de acuerdo con la solicitud del usuario, el procedimiento y la normativa.
        p Para mantener actualizada y funcional esta afiliación, es necesario realizar novedades, cuando ocurren cambios en la situación del afiliado, como el traslado de EPS, la inclusión de beneficiarios, la modificación de datos personales, entre otros. Estas novedades no solo permiten una adecuada gestión administrativa, sino que aseguran la continuidad en la atención médica y el respeto al derecho fundamental a la salud. 
        .tarjeta-cuadro.color-primario.p-3
          p.mb-0 El componente formativo brinda una comprensión integral de las principales novedades en la afiliación, los requisitos normativos para su trámite, las competencias necesarias para una atención adecuada y la aplicación del enfoque diferencial. También enfatiza en la importancia de la comunicación asertiva, la orientación clara al usuario y el manejo eficiente de herramientas como el Sistema de Afiliación Transaccional (SAT) para facilitar los procesos.
      .col-lg-5.col-10.mb-lg-0.order-lg-2.order-1.mb-4
        figure
          img(src='@/assets/curso/temas/intro/img1.png', alt='Imagen decorativa')
    p.mb-4 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="1246" height="701" src="https://www.youtube.com/embed/ULkgujykK-o" title="Gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
