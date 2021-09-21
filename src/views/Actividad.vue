<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/emparejamiento.svg")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Ejemplos de mercadeo verde en el mundo
        p.mb-4 Comprender los conceptos de mezcla de mercadeo aplicadas en el marketing sostenible.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Actividad didáctica 1
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad01/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/falso-verdadero.svg")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Diagnóstico de mercado
        p.mb-4 Comprender las metodologías Lean Startup, ciclo de 8 pasos, Coolhunting, así como los conceptos de category manager y los tipos de PMV.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Actividad didáctica 2
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad02/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass" scoped></style>
