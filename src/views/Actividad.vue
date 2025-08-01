<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos relacionados con la gestión de novedades en la afiliación, permitiendo a los participantes brindar orientación integral a los usuarios del sistema de salud colombiano.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La Ley 1438 de 2011 eliminó los periodos de carencia para acceder a servicios de salud.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El SAT es una plataforma digital que permite registrar afiliaciones y novedades en el sistema de salud.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El registro civil de nacimiento es necesario para afiliar a un recién nacido.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El usuario debe ser ignorado si se encuentra molesto durante el trámite.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Una persona que pierde su empleo debe continuar en el régimen contributivo sin cambios.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Las novedades en la afiliación no son necesarias si el usuario no cambia de ciudad.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La portabilidad permite recibir atención médica en cualquier parte del país, sin necesidad de cambiar de EPS.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La inclusión de un padre como beneficiario no requiere ningún tipo de certificación.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El Decreto 780 de 2016 contiene todas las normas relacionadas con afiliación y novedades.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La BDUA es una base de datos para consultar el estado de afiliación de un usuario.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La Resolución 4622 de 2016 regula el procedimiento de afiliación y novedades en salud',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La comunicación asertiva implica hablar con firmeza y respeto para orientar al usuario.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'La afiliación al SGSSS es un derecho condicionado al nivel socioeconómico del usuario.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'La comunicación escrita también debe ser clara y sin abreviaturas innecesarias.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'El acta de defunción es necesaria para retirar del sistema a una persona fallecida.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Para cambiar datos personales, se debe presentar un documento actualizado',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Para trasladarse de EPS, se requiere haber permanecido en la EPS anterior al menos 180 días.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'La orientación debe brindarse solo si el usuario pregunta expresamente.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'La afiliación al sistema de salud solo puede hacerse de forma presencial.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El enfoque diferencial busca aplicar el mismo trato a todos los usuarios por igual.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad y demuestra sólidos conocimientos sobre gestión de novedades en la afiliación al SGSSS con enfoque diferencial y atención al usuario.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
