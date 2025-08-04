<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Novedades en la afiliación al SGSSS
      
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
    p Las novedades en la afiliación, son los cambios o actualizaciones que deben reportarse, cuando se presentan modificaciones en la información de las personas afiliadas al Sistema General de Seguridad Social en Salud (SGSSS). Estas actualizaciones son fundamentales para garantizar una atención continua, oportuna y sin interrupciones en los servicios de salud.
    p.mb-4 Los principales tipos de novedades y los requisitos necesarios para un trámite son:
    .tarjeta--BG056.px-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          LineaTiempoD.color-acento-botones
            .row.justify-content-center(numero="1" titulo="Ingreso o afiliación inicial")
              .col-lg-12.order-lg-2.order-3
                p Esta novedad ocurre cuando una persona se inscribe por primera vez en el sistema de salud colombiano. Esto puede suceder cuando alguien cumple la edad para afiliarse de forma independiente; por ejemplo, un recién nacido requiere ser incluido por sus padres o una persona llega a vivir a Colombia y necesita acceder a los servicios de salud.
                .bgblanco.p-3
                  h4 Requisitos
                  p Para realizar esta afiliación, se necesita el documento de identidad (registro civil para menores de 7 años, tarjeta de identidad para mayores de 7 años y cédula de ciudadanía para adultos) y el formulario de afiliación completamente diligenciado. En caso de menores, la afiliación debe hacerla uno de los padres, un tutor legal o acudiente autorizado. Una vez inscrito, el afiliado puede acceder a los servicios de salud, a través de la EPS que haya escogido.

              .col-lg-12.order-lg-3.order-1.mb-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img2.png', alt="Imagen decorativa")
            .row.justify-content-center(numero="2" titulo="Traslado de EPS")
              .col-lg-12.order-lg-2.order-3
                p El traslado consiste en cambiarse de una Entidad Promotora de Salud (EPS) a otra, ya sea por inconformidad con el servicio, por cambio de ciudad o porque la EPS anterior fue cerrada por las autoridades. Este cambio solo se puede hacer si se cuenta con 365 días de permanencia en una EPS, tal como lo señala el artículo 2.1.7.2 del Decreto Único Reglamentario 780 del 2016.
                .bgblanco.p-3
                  h4 Requisitos
                  p Los requisitos incluyen presentar el documento de identidad y realizar la solicitud, a través del Sistema de Afiliación Transaccional (SAT) o directamente en la EPS a la que se desea ingresar. Este proceso garantiza la continuidad en la atención y cobertura de servicios.
              .col-lg-12.order-lg-3.order-1.mb-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img3.png', alt="Imagen decorativa")
            .row.justify-content-center(numero="3" titulo="Cambio de datos personales")
              .col-lg-12.order-lg-2.order-3
                p Esta novedad aplica cuando se requiere actualizar datos básicos del afiliado como nombres, apellidos, tipo o número de documento, fecha de nacimiento o género. Es esencial mantener esta información al día, ya que errores de este tipo pueden impedir el acceso adecuado a los servicios de salud.
                .bgblanco.p-3
                  h4 Requisitos 
                  p Para tramitarla, se debe presentar copia del documento actualizado o corregido y en algunos casos, un formato de solicitud de novedad proporcionado por la EPS.
              .col-lg-12.order-lg-3.order-1.mb-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img4.png', alt="Imagen decorativa")
            .row.justify-content-center(numero="4" titulo="Inclusión o retiro de beneficiarios")
              .col-lg-12.order-lg-2.order-3
                p Cuando el afiliado desea agregar o excluir a miembros del grupo familiar, debe realizar esta novedad. Puede tratarse de la inclusión de un hijo recién nacido, un cónyuge o pareja permanente, o padres dependientes económicamente. 
                .bgblanco.p-3
                  h4 Requisitos 
                  p Para ello, se requiere documentación como el registro civil de nacimiento (para hijos), acta de matrimonio o declaración juramentada de convivencia (para pareja) y en caso de padres, una certificación de dependencia económica.
                  p En cuanto al retiro de beneficiarios, este debe hacerse cuando un miembro ya no cumple con los requisitos para seguir como tal, como por ejemplo al cumplir la mayoría de edad, por fallecimiento o por separación conyugal. En estos casos, deben presentarse los documentos que respalden el motivo del retiro (acta de defunción, sentencia de divorcio, etc.).

              .col-lg-12.order-lg-3.order-1.mb-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img5.png', alt="Imagen decorativa")
            .row.justify-content-center(numero="5" titulo="Cambio de régimen")
              .col-lg-12.order-lg-2.order-3
                p Es el paso del régimen contributivo al subsidiado o viceversa. Esto puede suceder cuando una persona sin empleo empieza a trabajar y debe afiliarse como cotizante o cuando alguien pierde su empleo y necesita pasar al régimen subsidiado.
                .bgblanco.p-3
                  h4 Al respecto, hay que tener presente: 
                  ul.lista-ul--color
                    li
                      i.fas.fa-angle-right
                      p.mb-0 #[b Régimen contributivo]: para el cambio al régimen contributivo se requiere una certificación laboral o prueba de vinculación como trabajador independiente, junto con el documento de identidad.
                    li
                      i.fas.fa-angle-right
                      p.mb-0 #[b Régimen subsidiado]: para ingresar al régimen subsidiado, se debe presentar el resultado vigente de la encuesta del Sisbén o un documento que certifique la condición socioeconómica. Este trámite se gestiona a través del SAT o en las alcaldías municipales.


              .col-lg-12.order-lg-3.order-1.mb-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img6.png', alt="Imagen decorativa")
            .row.justify-content-center(numero="6" titulo="Cambio de municipio o lugar de residencia")
              .col-lg-12.order-lg-2.order-3
                p Cuando un afiliado se muda a otro municipio o departamento, debe actualizar su lugar de residencia. Esto permite garantizar el acceso a servicios en el nuevo territorio y que la EPS asigne los prestadores de salud cercanos al nuevo domicilio.
                .bgblanco.p-3
                  h4 Requisitos 
                  p El requisito principal es el documento de identidad; algunas EPS pueden exigir un certificado de residencia expedido por la autoridad local. No hacer esta actualización puede dificultar el acceso a citas o tratamientos.
              .col-lg-12.order-lg-3.order-1.mb-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img7.png', alt="Imagen decorativa")
            .row.justify-content-center(numero="7" titulo="Nacimiento")
              .col-lg-12.order-lg-2.order-3
                p El nacimiento de un hijo implica la inclusión inmediata del recién nacido como beneficiario del sistema. Los padres deben realizar este trámite idealmente, antes de que el bebé cumpla tres meses, para que tenga cobertura desde su nacimiento.
                .bgblanco.p-3
                  h4 Requisitos 
                  p Se debe presentar el registro civil de nacimiento o certificado de nacido vivo, junto con el documento de identidad del padre o madre que ya esté afiliado.
              .col-lg-12.order-lg-3.order-1.mb-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img8.png', alt="Imagen decorativa")
            .row.justify-content-center(numero="8" titulo="Fallecimiento")
              .col-lg-12.order-lg-2.order-3
                p Cuando un afiliado fallece, es necesario reportarlo ante la EPS o mediante el SAT para que el sistema lo retire. Esto evita cobros indebidos y mantiene la base de datos del sistema actualizada.
                .bgblanco.p-3
                  h4 Requisitos 
                  p El documento exigido es el acta o certificado de defunción, que debe ser entregado por la familia o por la entidad que prestó la atención en salud.
              .col-lg-12.order-lg-3.order-1.mb-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img9.png', alt="Imagen decorativa")
            .row.justify-content-center(numero="9" titulo="Retiro por pérdida de condiciones")
              .col-lg-12.order-lg-2.order-3
                p Esta novedad aplica cuando la persona ya no cumple con las condiciones que le permitían estar afiliada. Por ejemplo, si un trabajador independiente deja de pagar sus aportes, si un beneficiario cumple la mayoría de edad y ya no depende económicamente del cotizante, o si una persona subsidiada pierde su clasificación del Sisbén.
                .bgblanco.p-3
                  h4 Requisitos 
                  p Para formalizar este retiro, se deben presentar documentos como la carta de desvinculación laboral, certificado de pérdida de condición socioeconómica, o constancia de traslado al exterior. En estos casos, la persona puede buscar otra forma de continuar afiliada.
              .col-lg-12.order-lg-3.order-1.mb-md-4
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png', alt="Imagen decorativa")

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Normativa específica relacionada
    p.mb-4 La siguiente, es la normativa esencial para comprender los fundamentos legales sobre los que se apoya el sistema de salud, en cuanto a la afiliación y sus modificaciones, la cual se debe conocer para garantizar una atención integral de los usuarios:
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Marco constitucional
    p.mb-4 Tiene presente estos artículos de la Constitución Política de Colombia: 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center  Artículo 48 – Seguridad social
            p La seguridad social es un servicio público de carácter obligatorio que se prestará bajo la dirección, coordinación y control del Estado. El acceso a la seguridad social es un derecho irrenunciable.
      .col-md.tarjeta.color-secundario.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema1/img12.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center Artículo 49 – Derecho a la salud
            p La atención en salud y el saneamiento ambiental son servicios públicos a cargo del Estado. Se garantiza a todas las personas el acceso a los servicios de promoción, protección y recuperación de la salud.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p #[b Aplicación práctica]: 
          p Cualquier novedad en la afiliación que limite el acceso oportuno a servicios atenta contra este derecho fundamental. 
          p.mb-0 La afiliación al SGSSS hace parte del cumplimiento del derecho a la seguridad social. Toda persona debe poder afiliarse y reportar novedades sin barreras.
    .tarjeta-BG02.px-md-5.px-4
      .titulo.mb-4(data-aos="flip-up")
        img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
        h5.mb-0 Decreto 780 de 2016
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.order-2.order-lg-1
          p Es una norma muy importante porque reúne en un solo documento, todas las reglas que deben seguirse en el sistema de salud colombiano. 
          p En lo relacionado con la afiliación y las novedades, este decreto explica quiénes pueden afiliarse al sistema, cómo se hace el proceso de afiliación inicial y qué trámites deben hacerse cuando hay cambios en la información del usuario, como el traslado de EPS, el cambio de datos personales, la inclusión o retiro de familiares, el cambio de régimen (de subsidiado a contributivo o viceversa) o el cambio de lugar de residencia. 
          p También indica qué documentos se deben presentar y quién es responsable de hacer el trámite. Este decreto ayuda a que todos los procesos se hagan de forma clara, organizada y legal, garantizando que las personas sigan recibiendo atención en salud sin interrupciones.

        .col-lg-4.col-8.order-1.order-lg-2.mb-md-4.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')
    .titulo.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Resolución 4622 de 2016 del Ministerio de Salud y Protección Social 
    p.mb-4 Establece las reglas y procedimientos que deben seguirse para afiliarse al Sistema General de Seguridad Social en Salud (SGSSS) y para reportar cualquier cambio o novedad en la afiliación. 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta resolución explica detalladamente cómo deben hacerse trámites como la afiliación inicial, el traslado entre EPS, la inclusión o retiro de beneficiarios, la actualización de datos personales, el cambio de régimen y el reporte de fallecimiento, entre otros. También indica cuáles son los documentos necesarios para cada trámite, los canales autorizados para realizarlos (como el SAT) y los tiempos máximos para que las novedades sean procesadas. 
          br
          br
        p.mb-0 Es una guía práctica y legal que ayuda a que todos los procesos relacionados con la afiliación se hagan correctamente, asegurando que las personas puedan acceder a los servicios de salud de manera continua y sin barreras.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Ley 1122 de 2007
    p.mb-4 Introdujo ajustes al SGSSS con el objetivo de mejorar la prestación de servicios de salud a los usuarios. En cuanto a la afiliación y novedades, esta ley estableció:
    .tarjeta--BG053.px-lg-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          SlyderF.color-acento-botones.my-4(columnas="col-lg-6 col-xl-6")
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop')
              h5.text-center Mejoras en la administración del sistema
              p.text-center Se establecieron medidas para optimizar la gestión de las Entidades Promotoras de Salud (EPS) y garantizar una atención más eficiente a los afiliados.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop')
              h5.text-center Supervisión y control
              p.text-center Se fortalecieron las funciones de inspección, vigilancia y control por parte de la Superintendencia Nacional de Salud, asegurando que las EPS cumplieran con sus obligaciones frente a los afiliados.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema1/img17.svg' alt='AvatarTop')
              h5.text-center Universalización del aseguramiento
              p.text-center Se promovió la afiliación de toda la población colombiana al sistema de salud, buscando que todos los ciudadanos, especialmente los más vulnerables, estuvieran cubiertos por el SGSSS.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema1/img18.svg' alt='AvatarTop')
              h5.text-center Fortalecimiento del régimen subsidiado
              p.text-center Se definieron mecanismos para ampliar la cobertura del régimen subsidiado, facilitando la afiliación de personas en situación de pobreza y vulnerabilidad.
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
          figure
            img(src='@/assets/curso/temas/tema1/img19.png', alt='Imagen decorativa' style='margin-bottom: -23px;')
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Ley 1438 de 2011
    p.mb-4 Reformó el SGSSS con el propósito de fortalecer la atención primaria en salud y garantizar el acceso equitativo a los servicios. En relación con la afiliación y novedades, esta ley dispuso:
    .row.mb-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Afiliación obligatoria
          p.text-center Estableció que todos los residentes en Colombia deben estar afiliados al SGSSS, sin importar su capacidad de pago, asegurando la cobertura universal en salud.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Portabilidad de los servicios
          p.text-center Garantizó que los afiliados pudieran acceder a los servicios de salud en cualquier lugar del país, facilitando la atención en casos de traslado o cambio de residencia.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Eliminación de períodos de carencia
          p.text-center Se suprimieron los tiempos de espera para acceder a los servicios de salud después de la afiliación, permitiendo una atención inmediata a los nuevos afiliados.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-adicional.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Unificación del Plan de Beneficios en Salud (PBS)
          p.text-center Se dispuso la unificación del PBS para todos los regímenes, contributivo y subsidiado, garantizando igualdad en la cobertura de servicios para todos los afiliados.
    p.mb-4 Estas leyes son fundamentales para comprender cómo funciona el proceso de afiliación y las modificaciones que pueden presentarse en el SGSSS. Conocerlas permite orientar adecuadamente a los usuarios y garantizar que se respeten sus derechos en el acceso a los servicios de salud.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Procedimiento para modificar afiliación al SGSSS 
    p Este tipo de trámite es frecuente en puntos de atención al usuario, EPS, IPS, centros administrativos locales o en entornos simulados de formación. 
    p.mb-4 A continuación, se describen los pasos que debe seguir:
    .tarjeta--BG043.p-4.px-lg-5.mb-4
      .tarjeta.tarjeta--BG04.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-7.col-12.mb-4.order-2.order-lg-1.mb-md-0
              h4 Escucha activa y verificación de la necesidad del usuario
              p El primer paso es recibir al usuario con una actitud amable, empática y profesional. 
              p Se debe preguntar y escuchar con atención cuál es el motivo de la consulta, identificando si se trata de una novedad en la afiliación, como un traslado de EPS, inclusión o retiro de un familiar, cambio de régimen, modificación de datos personales, nacimiento de un hijo, o cambio de residencia.
              p Una vez escuchado el caso, se debe clasificar adecuadamente el tipo de novedad, ya que cada una tiene requisitos y procedimientos específicos. En esta etapa también se puede consultar la BDUA (Base de Datos Única de Afiliados) para verificar el estado actual del usuario en el sistema.

            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img20.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-7.col-12.mb-4.order-2.order-lg-1.mb-md-0
              h4 Consulta de la normatividad aplicable
              p Después de identificar el tipo de novedad, se debe consultar la normativa vigente que regula el procedimiento. Por ejemplo, se puede revisar el Decreto 780 de 2016, la Resolución 4622 de 2016 o el Manual del Sistema de Afiliación Transaccional (SAT) para conocer los requisitos, documentos solicitados y plazos. 
              p Esta consulta permite orientar al usuario correctamente y sustentar la información con base legal.

            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-7.col-12.mb-4.order-2.order-lg-1.mb-md-0
              h4 Revisión de los documentos requeridos
              p Con base en la novedad identificada, se debe informar al usuario sobre los documentos necesarios para realizar el trámite. Por ejemplo:
              p Para incluir un hijo, se necesita el registro civil de nacimiento y el documento del afiliado principal.
              p Para un traslado de EPS, se requiere el documento de identidad y cumplir con el tiempo mínimo de permanencia en la EPS anterior.
              p Para un cambio de régimen, se debe presentar el resultado del Sisbén (si va al subsidiado) o certificado laboral (si pasa al contributivo).
              p Los documentos deben estar legibles, actualizados y completos. Si falta alguno, se debe explicar al usuario de forma clara qué debe conseguir y cómo puede obtenerlo.


            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img22.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-7.col-12.mb-4.order-2.order-lg-1.mb-md-0
              h4 Diligenciamiento del formulario o plataforma digital
              p Una vez verificados los documentos, se procede al diligenciamiento del formulario correspondiente, que puede ser físico o digital. En el caso del uso del SAT (Sistema de Afiliación Transaccional), hay que guiar al usuario para registrar la novedad en el sistema, respetando los campos obligatorios y validando los datos ingresados.
              p En caso de que el procedimiento se realice en papel, se debe asegurar que el formulario esté correctamente diligenciado, sin tachones ni errores, con firma del usuario y del funcionario responsable si aplica.


            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img23.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-7.col-12.mb-4.order-2.order-lg-1.mb-md-0
              h4 Registro, radicación y entrega de constancia
              p Después de llenar correctamente el formulario o registrar la novedad en el sistema, se debe radicar la solicitud siguiendo el protocolo de la EPS o entidad correspondiente. Se debe entregar al usuario una constancia del trámite o el número de radicado, el cual le servirá para hacer seguimiento. También se debe informar los tiempos estimados para que la novedad sea efectiva (por ejemplo, el traslado de EPS entra en vigor el primer día del mes siguiente a la radicación).

            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img24.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-7.col-12.mb-4.order-2.order-lg-1.mb-md-0
              h4 Seguimiento del caso y orientación al usuario
              p Como parte de un proceso integral, se debe invitar al usuario a hacer seguimiento a su trámite, ya sea consultando por teléfono, presencialmente o en línea. Además, se debe verificar que el usuario haya comprendido toda la información y responder de manera clara cualquier duda adicional.
              p En caso de presentarse inconsistencias en la actualización o rechazo del trámite, hay que saber cómo escalar el caso al funcionario responsable o brindar apoyo en la corrección.


            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img25.png', alt='Texto que describa la imagen')
                
          .row.justify-content-center.align-items-center(titulo="")
            .col-lg-7.col-12.mb-4.order-2.order-lg-1.mb-md-0
              h4 Registro en el sistema interno o bitácora de atención
              p Finalmente, hay que dejar constancia del proceso en el sistema o bitácora de atención al usuario, indicando la fecha, tipo de novedad tramitada, documentos recibidos, observaciones, y estado del trámite. Esto permite mantener un control interno en la entidad y es útil para auditorías o seguimientos posteriores.

            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img26.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Este procedimiento no solo asegura que la novedad se gestione correctamente, sino que también afianza en las competencias clave como atención al usuario, aplicación normativa, manejo documental, ética profesional y comunicación efectiva.
</template>

<script>
// eslint-disable-next-line prettier/prettier

export default {
  name: 'Tema1',
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
