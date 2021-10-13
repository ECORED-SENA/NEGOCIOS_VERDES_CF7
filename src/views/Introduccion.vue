<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 Debido a los problemas ambientales que presenta cada día el planeta, el ser humano ha visto la necesidad y preocupación por cambiar sus hábitos de consumo, haciéndolos más comprometidos con el medio ambiente y con la sociedad, promoviendo así la conciencia ambiental en varios aspectos de la vida. Por ello, se ha venido trabajando en buscar estrategias y soluciones que reduzcan el impacto negativo en los seres humanos y en el ambiente, tanto en las empresas como en los emprendimientos, que les permita en sus negocios, comercializar y vender productos y servicios para que sean compatibles con la realidad actual.

    .row.justify-content-center.mb-4
      .col-lg-8
        .cajon.color-primario.p-4
          .row.align-items-center.justify-content-center
            .col-2
              img(src='@/assets/curso/intro/img01.svg')
            .col-9
              p La importancia de las estrategias del #[i.text-bold Green Marketing] en la realidad actual tiene que ver con la apuesta por la innovación, utilizando la tecnología con información clara, que impresione y genere un recuerdo en las personas.

    p.mb-4 Existe investigación previa sobre el #[i.text-bold Green Marketing] que puede ser identificada y consultada, sobre muchos estudios de caso, los cuales permiten tener un punto de vista de los adelantos en esta materia y de los beneficios en un contexto determinado. De esta manera, el #[i.text-bold Green Marketing] se convierte en una #[strong gran apuesta] para las empresas a nivel mundial que han optado por innovar, no sólo la oferta de sus productos y servicios, sino también la manera en que los comunican y los venden a los clientes.

    figure.mb-4
      img(src='@/assets/curso/intro/img02.png')
    
    p.mb-4 Para la elaboración de este componente, se abordaron varios autores conocidos en #[strong propuesta de negocio verde], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de los #[strong negocios verdes].

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
