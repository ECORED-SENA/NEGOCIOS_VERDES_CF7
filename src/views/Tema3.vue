<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1  Propuesta de valor
    
    p.mb-4 Es aquella que plasma la estrategia de la organización para cada segmento de clientes, representando la combinación única de producto, precio, servicio e imagen. En otras palabras, es el corazón del modelo de negocio, la razón de ser, la razón por la cual los clientes buscan o prefieren su producto o servicio.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          .row.align-items-center
            .col-lg-2
              img(src='@/assets/curso/tema3/img01.svg')
            .col-lg-9
              p.mb-4 La propuesta de valor debe informar lo que la empresa espera hacer mejor o espera hacer de forma distinta. Las empresas pueden brindar varias propuestas de valor relacionadas, o de forma independiente a un solo grupo de cliente o a varios.
              p.mb-0 Para que un negocio mantenga el liderazgo en el mercado, debe considerar la innovación como un factor determinante.
          
    separador
    #t_3_1.titulo-segundo
      h2 3.1 #[i Design thinking]
    
    p.mb-4 La metodología design thinking, o pensamiento de diseño, es un conjunto de herramientas y acciones propuestas para dar solución a un problema determinado. Su característica principal radica en que hace énfasis en el diseño y en el usuario.
    p.mb-4 La metodología se desarrolla en 5 etapas o fases:

    .row.justify-content-center.mb-4
      .col-lg-7
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img02.svg')
          .tarjeta.color-acento-contenido.p-3(x="11%" y="27%")
            .h5.mb-2 Comprender o empatizar:
            p Es “ponerse en los zapatos” de los clientes, no solo a través del análisis de datos como la edad, el sexo o la ubicación, sino que se busca ahondar en la manera de pensar y actuar de los clientes. Los métodos más utilizados son: entrevistas personales, encuestas, #[i focus group]. 
          .tarjeta.color-acento-contenido.p-3(x="37%" y="25%")
            .h5.mb-2 Definir:
            p Es identificar un punto de acción a partir de las conclusiones sacadas de la fase 1.  Es decir, una vez se conoce que la persona tiene una necesidad a la hora de solucionar un problema, el reto es lograr encontrar la mejor solución.
          .tarjeta.color-acento-contenido.p-3(x="37%" y="73%")
            .h5.mb-2 Idear:
            p Proceso de creación de ideas buscando las soluciones luego de haber definido el perfil de los clientes y de la identificación de sus problemas y necesidades. Puede ser a través de lluvia de ideas o “#[i Brainstorming]”.
          .tarjeta.color-acento-contenido.p-3(x="65%" y="71%")
            .h5.mb-2 Prototipar:
            p Es crear una versión más pequeña del producto, empleando las ideas conseguidas de las fases anteriores. Es decir, convertir la idea o la solución a la que se ha llegado en un modelo digital o físico. No necesariamente debe ser un objeto, también puede ser un dibujo.
          .tarjeta.color-acento-contenido.p-3(x="88%" y="77%")
            .h5.mb-2 Testear o evaluar:
            p En esta etapa, se realizan pruebas o comprobaciones de la funcionalidad de los prototipos realizados en la fase anterior y se pide a los usuarios que opinen y comenten al respecto, con base en el uso de los prototipos. Es una fase fundamental en el pensamiento de diseño, pues se identifican los errores y las posibles fallas que puede tener el producto. Como resultado de las pruebas, se pueden presentar mejoras sobre el producto. 

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-a.color-secundario.p-1.p-md-5.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              img(src='@/assets/curso/tema3/img03.png')
            .col-lg-9
              .bloque-texto-a__texto.p-4
                strong Ejemplo 
                p Totto: empresa colombiana de morrales escolares descubrió, gracias al contacto directo con sus clientes, que una de las principales preocupaciones de los padres eran los problemas de espalda de sus hijos al cargar pesados útiles escolares. A partir de ahí, sus creativos idearon un morral innovador que no pierde su forma, permite que el aire circule a través de sus tejidos y tienen correas de tipo ergonómico según el sexo de los niños.
            
    separador
    #t_3_2.titulo-segundo
      h2 3.2 #[i Business Model Canvas]
    
    p.mb-4 El #[i Business Model Canvas] (BMC, por sus siglas en inglés), o Modelo de Negocio Canvas, fue diseñado por Alexander Osterwalder e Yves Pigneur, y es una herramienta de gestión estratégica para definir y organizar el modelo de negocio de una empresa.
    p.mb-4 El Modelo Canvas es la forma de establecer y presentar de manera sencilla un modelo de negocio, donde la propuesta de valor se puede explicar de forma breve y clara. Se divide el negocio en nueve (9) bloques que agrupan las características fundamentales de la empresa que se va a crear:

    .row.justify-content-center.mb-4
      .col-lg-10
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            p  
              strong Segmentos de mercado y clientes  
              br
              | A los que se dirige el producto o servicio.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p  
              strong Propuesta de valor: 
              br
              | Es eso que hace que su producto o servicio sea diferente del de la competencia.
          li 
            .lista-ol--cuadro__vineta
              span 3 
            span.text-bold Canales de distribución del producto 
          li 
            .lista-ol--cuadro__vineta
              span 4
            p  
              strong Relación con los clientes:  
              br
              | La comunicación y los medios de atención que se les brindará a los clientes, siempre directamente relacionados con lo que significa la marca.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p  
              strong Ingresos:  
              br
              | Debe haber un equilibrio entre el precio al que se quiere vender y el precio que está dispuesto a pagar el cliente por su producto o servicio. El negocio debe apuntar a la rentabilidad.
          li 
            .lista-ol--cuadro__vineta
              span 6
            p  
              strong Recursos:  
              br
              | Se refiere a los recursos financieros, recursos humanos y materiales para desarrollar y ejecutar las ideas que surjan del negocio.
          li 
            .lista-ol--cuadro__vineta
              span 7
            p  
              strong Actividades primarias:  
              br
              | Son aquellas actividades necesarias para alcanzar la propuesta de valor que se ha determinado para el producto, desde las etapas de diseño y desarrollo, hasta la comercialización del producto o servicio.
          li 
            .lista-ol--cuadro__vineta
              span 8
            p  
              strong Socios estratégicos:  
              br
              | Con los cuales se obtendrán los recursos y son importantes para impulsar el negocio.
          li 
            .lista-ol--cuadro__vineta
              span 9
            p  
              strong Estructura de costos:  
              br
              | Definir los costos para cada actividad, ya sea para el desarrollo del producto, para actividades de #[i marketing] o para actividades de servicio al cliente. 
    
    .row.justify-content-center.mb-4
      .col-lg-8.tabla.color-primario-25.p-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Modelo Canvas
        figura
          img(src='@/assets/curso/tema3/img04.svg')
          figcaption Nota. Imagen tomada de Rosana Rosas Modelo Canvas (s. f.).

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

<style lang="sass" scoped></style>
