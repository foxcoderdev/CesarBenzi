const languageLinkES = document.getElementById('language-link-es');
const languageLinkEN = document.getElementById('language-link-en');

languageLinkES.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.innerHTML = /* html */ `
    <div class="page" id="index-page">
        <p class="page-title-1">césar benzi</p>
        <span>
        <a class="language-link" id="language-link-es" style="display:none"href="#">en español</a>
        <a class="language-link" id="language-link-en" style="display:none" href="#">for english</a>
        </span>
    </div>

    <div class="page" id="second-page">
        <span>
            <p class="page-title-2">bio</p>
            <p class="bio-text">Benzi, C.</p>
            <p class="bio-text">1981, Colonia Belgrano, Santa Fe, Argentina.</p>
            <p class="bio-text">Artista Visual. Lic. en Artes Visuales. Docente.
                </p>
            <p class="bio-text">Ha participado en certámenes, Salones, Bienales y concursos de relevancia nacional, destacándose entre ellas el Programa “Argentina Pinta Bien”, el Salón Nacional Palais de Glace entre otros en la categoría “Nuevos Soportes e Instalaciones”. Ha obtenido premios y distinciones. Ha realizado clínica de obra con Tulio de Sagastizabal, Justo Pastor Mellado, Gabriel Valansi y Lara Marmor. Ha obtenido becas del FNA, de la Fundación Nuevo Banco de Santa Fe y del Ministerio de Cultura de la Provincia de Santa Fe. Ha desarrollado obra en industrias y de corte transdisciplinar articulando propuestas con compositores electroacústicos. Además ha participado como miembro de Jurado en diferentes certámenes y realizado acompañamientos curatoriales. Su obra forma parte de las publicaciones de la Academia Nacional de Bellas Artes entre otras y es patrimonio de destacados museos de su región. 
            </p>
        </span>
        <img src="img/62.jpg" alt="BIO">
    </div>

    <div class="page" id="third-page">
        <p class="page-title-1">obras</p>
        <img src="img/artworks.svg" alt="artworks">
    </div>

    <div class="page" id="fourth-page">
        <div id="fourth-page-items">
            <p class="page-title-2">"intangible con fuga"</p>
            <p class="page-title-2">(instalación)</p>
            <a class="page-link" href="https://www.youtube.com/watch?v=7wdVyU1WkzY&feature=youtu.be">trabajo en progreso</a>
            <a class="page-link" href="https://www.canva.com/design/DAE_Au7Jkn0/Bh8mkbS2NVvc-OxKSkWpGQ/view?website#2:de-luces-y-sombras...-por-arq.-marcelo-olmos-luz-y-sombra-constate-dialogo-establecido-en-el-arte-desde-hace-siglos.-desde-que-giotto-modelo-el-color-y-abandono-la-manera-a-la-greca-el-juego-de-la-luz-se-situ-como-una-constante.-la-dram-tica-luz-del-caravaggio-la-luz-intima-de-rembrandt-la-luz-percibida-del-impresionismo-todas-maneras-de-atrapar-la-fugacidad-del-instante.-otros-tiempos-otras-luces-aparecen-con-nuevos-lenguajes-nuevas-necesidades-nuevos-contextos-y-ya-no-son-en-el-plano-en-la-pintura.-ahora-est-n-presentes-en-el-espacio-se-materializan-y-nos-provocan-o-nos-invocan-de-la-mano-de-nuevas-tecnolog-as-o-de-materiales-viejos-pero-remozados-en-su-funci-n.-hay-artistas-que-trabajan-la-luz-en-busca-de-sensaciones-estimuladas-en-el-observador-buscando-repetir-angustias-y-llamados-al-pasado-m-s-oscuro.-es-un-territorio-de-luces-y-sombras-que-despiertan-la-vaga-sensaci-n-de-que-algo-inquietante-acechante-ronda-cerca.-la-constante-de-llamar-temibles-sensaciones-o-simplemente-causar-asombro-por-el-complicado-manejo-de-tecnolog-as-abundantes-soportes-costosos-y-complejos-pero-que-en-esencia-no-dicen-nada-o-poco.-son-solo-instantes-sin-respuestas.-solo-es-contemplaci-n-de-alardes-pretenciosos.-hay-otras-maneras-de-jugar-con-la-luz.-c-sar-benzi-lo-hace-con-el-cristal-como-materia-receptora-pero-lo-que-el-se-propone-es-provocar-la-sombra-la-tenue-sombra-del-atardecer-fugaz-de-las-situaciones-nicas-que-apenas-nos-rozan-y-sentimos-como-refrescante-contacto.-el-dominio-de-cesar-benzi-es-esa-penumbra-sutil-esfumada-la-frontera-entre-el-brillo-deslumbrante-y-la-fugacidad-de-su-paso.-lo-de-benzi-es-el-momento-m-nimo-que-la-sombra-nos-permite-apenas-vislumbrar-otras-instancias-otros-movimientos-otras-posibilidades.">texto arq. marcelo olmos</a>
            <a class="page-link" href="https://www.canva.com/design/DAE_AuJDTXE/8AISDXIs-VowA_b8PmsWmg/view?website#2:agrega-artistas-objetualistas-en-santa-fe-temas-11-academia-nacional-de-bellas-artes-2013-por-arq.-carlos-mar-a-reinante-...-el-presente-trabajo-pretende-dar-a-conocer-la-obra-realizada-en-la-provincia-de-santa-fe-por-artistas-objetualistas.-como-en-toda-mirada-una-carga-intencional-localiza-la-b-squeda-prescribe-sus-alcances-y-justifica-la-elecci-n-de-trabajos-recientemente-realizados-por-creadores-de-rosario-santa-fe-esperanza-y-rafaela.-obras-y-autores-que-pese-a-pertenecer-a-distintas-generaciones-provenir-de-variadas-formaciones-y-experiencias-y-materializar-registros-y-significados-muy-diferentes-aparecen-sin-embargo-centrados-dentro-de-un-mismo-microclima-productivo-un-microclima-en-el-que-sobrevuela-la-consideraci-n-conceptual-y-referencial-de-los-objetos-una-particular-ontolog-a-y-contemporaneidad-aglutinante.-la-obra-objetualista-de-los-realizadores-santafesinos-recorre-un-amplio-arco-de-creaciones-de-naturaleza-tridimensional-espacial-pero-ninguno-de-ellos-elige-timar-literalmente-o-resignificar-los-objetos-de-la-sociedad-de-consumo.-son-objetos-ad-hoc-creados-ex-profeso-para-desplegar-una-existencia-espec-fica-y-propiamente-intencional-objetos-que-se-revelan-como-formas-en-el-sentido-plat-nico-del-eidos-en-su-triple-condici-n-productiva-parten-de-una-voluntad-interior-subjetividad-o-proyecto-determinan-un-ordenamiento-ideal-de-mundo-lenguaje-o-codificaci-n-y-se-erigen-como-artefacto-simb-lico-como-fundamento-de-una-cultura-comunidad-ideal-dimensi-n-hist-rica-art-stica-etc.-de-este-modo-y-siguiendo-con-el-concepto-plat-nico-cerramos-esta-introducci-n-con-la-idea-de-que-el-objeto-es-algo-a-lo-que-el-ver-abre-el-acceso.-...-c-sar-benzi-colonia-gral.-belgrano-santa-fe-1981-afirma-benzi-el-objeto-me-aproxima-al-espacio.-necesito-del-medio-objetual-y-transparente-para-transferir-un-concepto-de-intangibilidad-.-como-configuraci-n-de-aquello-que-est-casi-imperceptible.-articulando-determinada-cantidad-de-l-neas-y-esferas-creo-una-estructura-con-entidad-de-objeto.">texto arq. carlos m. reinante</a>
            <a class="page-link" href="https://www.canva.com/design/DAE-32KJ8Do/WrSk6JueerKL3hrxZFrUNQ/view?website#2">+fotos</a>
        </div>
    </div>

    <div class="page" id="fifth-page">
        <span>
            <p class="page-title-2">"amor seco"</p>
            <p class="page-title-2">(escultura)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9llKbe4/IHnHguXS4CHH0RxrRdyASg/view?website#2">+fotos</a>
        </span>
    </div>
    <div class="page" id="sixth-page">
        <span id="sixth-page-items">
            <p class="page-title-2">"expiraciones"</p>
            <p class="page-title-2">(dibujos no
            <p class="page-title-2"> convencionales)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9wdiqOo/8S1ad291KDekjWVVmD7y6Q/view?website#2:p-gina-5">+fotos</a>
            <a class="page-link" href="https://www.rafaela.gob.ar/museo/PatrimonioVer.aspx?i=196">patrimonio</a>
        </span>
    </div>
    <div class="page" id="seventh-page">
        <span id="seventh-page-items">
            <p class="page-title-2">"sincronización de</p>
            <p class="page-title-2">muerte"</p>
            <p class="page-title-2">(dibujos no
            <p class="page-title-2"> convencionales)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-93xfEAA/AG0nd-bOlYkcp3PCvYgo8g/view?website#2:p-gina-2">+fotos</a>
        </span>
    </div>
    <div class="page" id="eighth-page">
        <span id="eighth-page-items">
       <p class="page-title-2">"blanco"</p>
        <p class="page-title-2">(instalación)</p>
       <a class="page-link" href="https://www.canva.com/design/DAE_PPfKmng/kR17bh91aWNT67EqZBAx5g/view?website#2:p-gina-1">+fotos</a>
        </span>
    </div>

    <div class="page" id="ninth-page">
        <span id="ninth-page-items">
            <p class="page-title-2">"romanza"</p>
            <p class="page-title-2">(dibujos no
                <p class="page-title-2"> convencionales)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-99og8Ao/ce2721gfroLlaIRR1kgoMw/view?website#2:p-gina-1">+fotos</a>
        </span>
    </div>
    <div class="page" id="tenth-page">
        <span id="tenth-page-items">
            <p class="page-title-2">"lo intangible"</p>
            <p class="page-title-2">(dibujos no</p>
            <p class="page-title-2">convencionales  - instalación)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9wPxF7I/2EeK9dRihhKiW-sk5bX9Tw/view?website#2:p-gina-5">+fotos</a>
        </span>
    </div>

    <div class="page" id="eleventh-page">
        <span id="eleventh-page-items">
            <p class="page-title-2">"humanos</p>
            <p class="page-title-2">danzantes"</p>
            <p class="page-title-2">(escultura)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE--GcJQuk/lt1wk2aoy_6l__UPg0659w/view?website#2:retornar-al-sitio-return-to-site">+fotos</a>
        </span>
    </div>

        <div class="page" id="twelft-page">
            <span id="twelft-page-items">
                <p class="page-title-2">"el origen"</p>
                <p class="page-title-2"> (cerámicas)</p>
                <a class="page-link" href="https://www.canva.com/design/DAE--KE2WDE/4JYYkp2KKr7QKYUvfNGOJA/view?website#2">+fotos</a>
            </span>
    </div>

       <div class="page" id="link-of-interest">
         <p class="page-title-2" id="links-title">enlaces de interés</p>
         <div id="svg-container">
         <svg
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="210mm"
            height="297mm"
            viewBox="0 0 210 297"><line
                id="e1_line"
                x1="102.67004"
                y1="273.38"
                x2="102.66942"
                y2="221.65308"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <line
                id="e16_line"
                x1="95.147278"
                y1="277.24744"
                x2="75.653549"
                y2="247.51927"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e38_hyperlink"
                xlink:title=""
                xlink:href="https://www.ellitoral.com/index.php/diarios/2012/07/17/escenariosysociedad/SOCI-13.html"
                target="_blank"
                class="svg_a">
               <circle
                  id="e17_circle"
                  cx="320.664"
                  cy="388.38199"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="15.1512" />
             </a>
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e39_hyperlink"
                xlink:title=""
                xlink:href="https://issuu.com/palaisdeglace/docs/folleto_16_nseiweb2"
                target="_blank"
                class="svg_a">
               <circle
                  id="e18_circle"
                  cx="373.444"
                  cy="343.56799"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="17.646" />
             </a>
             <line
                id="e19_line"
                x1="92.193253"
                y1="212.93678"
                x2="35.484447"
                y2="217.79053"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e40_hyperlink"
                xlink:title=""
                xlink:href="https://issuu.com/palaisdeglace/docs/catalogo_2014_sn"
                target="_blank"
                class="svg_a">
               <circle
                  id="e20_circle"
                  cx="248.963"
                  cy="353.52701"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="16.959" />
             </a>
             <line
                id="e21_line"
                x1="111.68755"
                y1="215.97078"
                x2="179.02975"
                y2="254.79961"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e37_hyperlink"
                xlink:title=""
                xlink:href="https://www.youtube.com/watch?v=KS19xQU00Ck&amp;feature=youtu.be"
                target="_blank"
                class="svg_a">
               <circle
                  id="e22_circle"
                  cx="516.84601"
                  cy="419.25299"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="17.813999" />
             </a>
             <line
                id="e24_line"
                x1="109.32433"
                y1="204.44286"
                x2="151.85605"
                y2="141.34579"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e41_hyperlink"
                xlink:title=""
                xlink:href="https://www.unl.edu.ar/mac/index.php?act=showMuestra&amp;idMuestra=7"
                target="_blank"
                class="svg_a">
               <circle
                  id="e25_circle"
                  cx="466.05801"
                  cy="212.116"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="17.294901" />
             </a>
             <line
                id="e26_line"
                x1="148.90259"
                y1="126.78511"
                x2="94.556465"
                y2="94.022972"
                style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e42_hyperlink"
                xlink:title=""
                xlink:href="http://lisalondebecariosprovsantafe.blogspot.com/"
                target="_blank"
                class="svg_a">
               <circle
                  id="e27_circle"
                  cx="349.543"
                  cy="142.40601"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="16.410601" />
             </a>
             <line
                id="e28_line"
                x1="79.1978"
                y1="84.922279"
                x2="40.210327"
                y2="57.620705"
                style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e43_hyperlink"
                xlink:title=""
                xlink:href="https://www.ellitoral.com/index.php/diarios/2014/10/31/escenariosysociedad/SOCI-09.html"
                target="_blank"
                class="svg_a">
               <circle
                  id="e29_circle"
                  cx="259.91699"
                  cy="82.655701"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="14.154" />
             </a>
             <line
                id="e30_line"
                x1="40.210327"
                y1="47.913055"
                x2="68.564407"
                y2="23.038179"
                style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e44_hyperlink"
                xlink:title=""
                xlink:href="https://www.youtube.com/watch?v=3bXuVWRQxos&amp;feature=youtu.be"
                target="_blank"
                class="svg_a">
               <circle
                  id="e31_circle"
                  cx="327.63501"
                  cy="22.9049"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="14.804" />
             </a>
             <line
                id="e32_line"
                x1="81.560448"
                y1="23.038324"
                x2="120.54795"
                y2="44.879879"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <line
                id="e33_line"
                x1="83.33287"
                y1="16.971437"
                x2="154.21931"
                y2="17.577625"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e46_hyperlink"
                xlink:title=""
                xlink:href="https://www.youtube.com/watch?v=KWJaF8UOK3s&amp;feature=youtu.be"
                target="_blank"
                class="svg_a">
               <circle
                  id="e34_circle"
                  cx="414.27399"
                  cy="75.684898"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="15.7876" />
             </a>
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e45_hyperlink"
                xlink:title=""
                xlink:href="https://www.rafaela.gob.ar/museo/PatrimonioVer.aspx?i=196"
                target="_blank"
                class="svg_a">
               <circle
                  id="e3_circle"
                  cx="478.008"
                  cy="25.892"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="17.294901" />
             </a>
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e36_hyperlink"
                xlink:title=""
                xlink:href="https://www.youtube.com/watch?v=DVV4Tokmhw4&amp;feature=youtu.be"
                target="_blank"
                class="svg_a">
               <circle
                  id="e2_circle"
                  cx="375.94699"
                  cy="467.97601"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="18.5277"
                  transform="matrix(0.84375,0,0,0.84375,55.9756,63.9004)" />
             </a>
           </g>
         </svg>              
         </div>
       </div>

       <div class="page" id="contact-page">
            <img src="img/contact.svg" alt="contact">
            <div id="contact-items">

                <span><i class="fa-solid fa-square-envelope"></i> benzicesar@gmail.com</span>
                <a class="page-link-2" href="https://wa.me/+34642993876"><i class="fa-brands fa-whatsapp-square"></i><span class="contact-link">+34642993876</span></a>
                <a class="page-link-2" href="https://www.instagram.com/cesar_benzi/"><i class="fa-brands fa-instagram-square"></i><span class="contact-link">cesar_benzi</span></a>
            </div>
        </div>
  `;
})

languageLinkEN.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.innerHTML = /* html */ `<!-- first page --> 
    <div class="page" id="index-page">
        <p class="page-title-1">césar benzi</p>
        <span>
        <a class="language-link" id="language-link-es" style="display:none" href="#">en español</a>
        <a class="language-link" id="language-link-en" style="display:none" href="#">for english</a>
        </span>
    </div>

    <div class="page" id="second-page">
        <span>
            <p class="page-title-2">bio</p>
            <p class="bio-text">Benzi, C.</p>
            <p class="bio-text">1981, Colonia Belgrano, Santa Fe, Argentina.</p>
            <p class="bio-text">Visual artist. Bachelor of Visual Arts. Teacher.
                </p>
            <p class="bio-text">He has participated in contests, Salons, Biennials and contests of national relevance, standing out among them the "Argentina pinta bien " Program, the Palais de Glace National Salon in the category “New Supports and Installantions”, among others. He has won awards and distinctions. He has carried out a construction clinic with Tulio de Sagastizabal, Justo Pastor Mellado, Gabriel Valansi and Lara Marmor. He has obtained scholarships from  Fondo Nacional de las Artes, Fundación Nuevo Banco de Santa Fe and the Ministry of Culture of the Province of Santa Fe. He has developed work in industries and also in projects of transdisciplinary nature, articulating proposals with electroacoustic composers. He has also participated as a member of the Jury in different contests and carried out curatorial accompaniments. His work is part of the publications by the National Academy of Fine Arts, among others, and his works of art is the patrimony of prominent museums in his region.</p>
        </span>
        <img src="img/62.jpg" alt="BIO">
    </div>

    <div class="page" id="third-page">
        <p class="page-title-1">artworks</p>
        <img src="img/artworks.svg" alt="artworks">
    </div>

    <div class="page" id="fourth-page">
        <div id="fourth-page-items">
            <p class="page-title-2">"intangible with leak"</p>
            <p class="page-title-2">(installation)</p>
            <a class="page-link" href="https://www.youtube.com/watch?v=7wdVyU1WkzY&feature=youtu.be">work in progress</a>
            <a class="page-link" href="https://www.canva.com/design/DAE_AkWK4eM/LwycXMmKoyRv-E8R4EJO7g/view?website#2:of-light-and-shadow...-by-architect-marcelo-olmos-light-and-shadow-an-endless-dialogue-established-in-art-for-centuries.-ever-since-giotto-modeled-color-and-abandoned-the-fretwork-style-the-play-of-light-has-been-a-constant.-the-dramatic-light-of-caravaggio-the-intimate-light-of-rembrandt-and-the-perceived-light-of-impressionism-are-all-ways-of-capturing-the-transience-of-the-moment.-other-times-other-lights-appear-with-new-languages-new-needs-andnew-contexts-and-they-are-no-longer-on-the-plane-in-painting.-now-they-are-present-in-space-they-materialize-and-provoke-or-invoke-us-thanks-to-new-technologies-or-old-materials-but-with-a-revamped-function.-some-artists-work-with-light-in-search-of-stimulating-sensations-in-the-observer-seeking-to-repeat-anguish-and-calls-to-the-darkest-past.-it-is-a-territory-of-lights-and-shadows-which-awaken-the-vague-sensation-that-something-disturbing-lurking-is-lurking-nearby.-the-constant-of-calling-fearsome-sensations-or-simply-causing-astonishment-by-the-complicated-handling-of-abundant-technologies-expensive-and-complex-supports-but-that-in-essence-say-nothing-or-little.-they-are-just-moments-without-answers.-it-is-only-contemplation-of-pretentious-boasts.-there-are-other-ways-to-play-with-light.-c-sar-benzi-does-it-with-glass-as-a-receiving-material-but-what-he-proposes-is-to-provoke-the-shadow-the-faint-shadow-of-the-fleeting-sunset-of-the-unique-situations-that-barely-touch-us-and-we-feel-likea-refreshing-contact.-cesar-benzi-s-domain-is-that-subtle-faded-shadow-the-border-between-the-dazzling-brilliance-and-the-fleetingness-of-his-step.-benzi-s-is-the-minimum-moment-that-the-shadow-allows-us-to-barely-glimpse-other-instances-other-movements-other-possibilities.">text arch.marcelo olmos</a>
            <a class="page-link" href="https://www.canva.com/design/DAE_AhfXVdk/taf63XmqBmRbGYiVDbi6Jg/view?website#2:object-artists-in-santa-fe-topics-11-national-academy-of-fine-arts-2013-by-arch.-carlos-mar-a-reinante-...-the-present-work-intends-to-show-the-work-carried-out-in-the-province-of-santa-fe-by-object-artists.-as-in-any-gaze-an-intentional-charge-locates-the-search-prescribes-its-scope-and-justifies-the-choice-of-works-recently-made-by-creators-from-rosario-santa-fe-esperanza-and-rafaela.-works-and-authors-that-despite-belonging-to-different-generations-coming-from-varied-backgrounds-and-experiences-and-materializing-very-different-registers-and-meanings-nonetheless-appear-centered-within-the-same-productive-microclimate-a-microclimate-in-which-the-conceptual-and-referential-consideration-of-objects-a-particular-ontology-and-unifying-contemporaneity.-the-objectualist-work-of-the-santa-fe-filmmakers-covers-a-wide-range-of-creations-of-a-three-dimensional-spatial-nature-but-none-of-them-chooses-to-literally-swindle-or-resignify-the-objects-of-consumer-society.-they-are-ad-hoc-objects-created-expressly-to-unfold-a-specific-and-properly-intentional-existence-objects-that-are-revealed-as-forms-in-the-platonic-sense-of-the-eidos-in-its-triple-productive-condition-they-start-from-an-inner-will-subjectivity-or-project-they-determine-an-ideal-ordering-of-the-world-language-or-codification-and-they-are-build-as-a-symbolic-artifact-as-the-foundation-of-a-culture-ideal-community-historical-artistic-dimension-etc.-in-this-way-and-continuing-with-the-platonic-concept-we-close-this-introduction-with-the-idea-that-the-object-is-something-that-opens-access-to-seeing.-...-c-sar-benzi-general-belgrano-colony-santa-fe-1981-benzi-affirms-the-object-brings-me-closer-to-space.-i-need-the-objectual-and-transparent-medium-to-transfer-a-concept-of-intangibility-.-as-a-configuration-of-what-is-almost-imperceptible.-articulating-a-certain-number-of-lines-and-spheres-i-create-a-structure-with-an-object-entity.">text arch.carlos m. reinante</a>
            <a class="page-link" href="https://www.canva.com/design/DAE-32KJ8Do/WrSk6JueerKL3hrxZFrUNQ/view?website#2">+photos</a>
        </div>
    </div>

    <div class="page" id="fifth-page">
        <span>
            <p class="page-title-2">"dry love"</p>
            <p class="page-title-2">(sculptures)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9llKbe4/IHnHguXS4CHH0RxrRdyASg/view?website#2">+photos</a>
        </span>
    </div>


    <div class="page" id="sixth-page">
        <span id="sixth-page-items">
            <p class="page-title-2">"expirations"</p>
            <p class="page-title-2">(unconventional
            <p class="page-title-2"> drawings)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9wdiqOo/8S1ad291KDekjWVVmD7y6Q/view?website#2:p-gina-5">+photos</a>
            <a class="page-link" href="https://www.rafaela.gob.ar/museo/PatrimonioVer.aspx?i=196">heritage</a>
        </span>
    </div>

    <div class="page" id="seventh-page">
        <span id="seventh-page-items">
            <p class="page-title-2">"death sync"</p>
            <p class="page-title-2">(unconventional
            <p class="page-title-2"> drawings)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-93xfEAA/AG0nd-bOlYkcp3PCvYgo8g/view?website#2:p-gina-2">+photos</a>
        </span>
    </div>

    <div class="page" id="eighth-page">
        <span id="eighth-page-items">
       <p class="page-title-2">"white" </p>
        <p class="page-title-2">(installation)</p>
       <a class="page-link" href="https://www.canva.com/design/DAE_PPfKmng/kR17bh91aWNT67EqZBAx5g/view?website#2:p-gina-1">+photos</a>
        </span>
    </div>

    <div class="page" id="ninth-page">
        <span id="ninth-page-items">
            <p class="page-title-2">"romance"</p>
            <p class="page-title-2">(unconventional
                <p class="page-title-2"> drawings)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-99og8Ao/ce2721gfroLlaIRR1kgoMw/view?website#2:p-gina-1">+photos</a>
        </span>
    </div>

    <div class="page" id="tenth-page">
        <span id="tenth-page-items">
            <p class="page-title-2">"the intangible"</p>
            <p class="page-title-2">(unconventional</p>
            <p class="page-title-2">drawings  - installation)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9wPxF7I/2EeK9dRihhKiW-sk5bX9Tw/view?website#2:p-gina-5">+photos</a>
        </span>
    </div>

    <div class="page" id="eleventh-page">
        <span id="eleventh-page-items">
            <p class="page-title-2">"dancing humans"</p>
            <p class="page-title-2">(sculptures)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE--GcJQuk/lt1wk2aoy_6l__UPg0659w/view?website#2:retornar-al-sitio-return-to-site">+photos</a>
        </span>
    </div>

        <div class="page" id="twelft-page">
            <span id="twelft-page-items">
                <p class="page-title-2">"the origin"</p>
                <p class="page-title-2"> (ceramics)</p>
                <a class="page-link" href="https://www.canva.com/design/DAE--KE2WDE/4JYYkp2KKr7QKYUvfNGOJA/view?website#2">+photos</a>
            </span>
        </div>

       <div class="page" id="link-of-interest">
         <p class="page-title-2" id="links-title">links of interest</p>
         <div>
         <svg
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="210mm"
            height="297mm"
            viewBox="0 0 210 297"><line
                id="e1_line"
                x1="102.67004"
                y1="273.38"
                x2="102.66942"
                y2="221.65308"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <line
                id="e16_line"
                x1="95.147278"
                y1="277.24744"
                x2="75.653549"
                y2="247.51927"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e38_hyperlink"
                xlink:title=""
                xlink:href="https://www.ellitoral.com/index.php/diarios/2012/07/17/escenariosysociedad/SOCI-13.html"
                target="_blank"
                class="svg_a">
               <circle
                  id="e17_circle"
                  cx="320.664"
                  cy="388.38199"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="15.1512" />
             </a>
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e39_hyperlink"
                xlink:title=""
                xlink:href="https://issuu.com/palaisdeglace/docs/folleto_16_nseiweb2"
                target="_blank"
                class="svg_a">
               <circle
                  id="e18_circle"
                  cx="373.444"
                  cy="343.56799"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="17.646" />
             </a>
             <line
                id="e19_line"
                x1="92.193253"
                y1="212.93678"
                x2="35.484447"
                y2="217.79053"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e40_hyperlink"
                xlink:title=""
                xlink:href="https://issuu.com/palaisdeglace/docs/catalogo_2014_sn"
                target="_blank"
                class="svg_a">
               <circle
                  id="e20_circle"
                  cx="248.963"
                  cy="353.52701"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="16.959" />
             </a>
             <line
                id="e21_line"
                x1="111.68755"
                y1="215.97078"
                x2="179.02975"
                y2="254.79961"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e37_hyperlink"
                xlink:title=""
                xlink:href="https://www.youtube.com/watch?v=KS19xQU00Ck&amp;feature=youtu.be"
                target="_blank"
                class="svg_a">
               <circle
                  id="e22_circle"
                  cx="516.84601"
                  cy="419.25299"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="17.813999" />
             </a>
             <line
                id="e24_line"
                x1="109.32433"
                y1="204.44286"
                x2="151.85605"
                y2="141.34579"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e41_hyperlink"
                xlink:title=""
                xlink:href="https://www.unl.edu.ar/mac/index.php?act=showMuestra&amp;idMuestra=7"
                target="_blank"
                class="svg_a">
               <circle
                  id="e25_circle"
                  cx="466.05801"
                  cy="212.116"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="17.294901" />
             </a>
             <line
                id="e26_line"
                x1="148.90259"
                y1="126.78511"
                x2="94.556465"
                y2="94.022972"
                style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e42_hyperlink"
                xlink:title=""
                xlink:href="http://lisalondebecariosprovsantafe.blogspot.com/"
                target="_blank"
                class="svg_a">
               <circle
                  id="e27_circle"
                  cx="349.543"
                  cy="142.40601"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="16.410601" />
             </a>
             <line
                id="e28_line"
                x1="79.1978"
                y1="84.922279"
                x2="40.210327"
                y2="57.620705"
                style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e43_hyperlink"
                xlink:title=""
                xlink:href="https://www.ellitoral.com/index.php/diarios/2014/10/31/escenariosysociedad/SOCI-09.html"
                target="_blank"
                class="svg_a">
               <circle
                  id="e29_circle"
                  cx="259.91699"
                  cy="82.655701"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="14.154" />
             </a>
             <line
                id="e30_line"
                x1="40.210327"
                y1="47.913055"
                x2="68.564407"
                y2="23.038179"
                style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e44_hyperlink"
                xlink:title=""
                xlink:href="https://www.youtube.com/watch?v=3bXuVWRQxos&amp;feature=youtu.be"
                target="_blank"
                class="svg_a">
               <circle
                  id="e31_circle"
                  cx="327.63501"
                  cy="22.9049"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="14.804" />
             </a>
             <line
                id="e32_line"
                x1="81.560448"
                y1="23.038324"
                x2="120.54795"
                y2="44.879879"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <line
                id="e33_line"
                x1="83.33287"
                y1="16.971437"
                x2="154.21931"
                y2="17.577625"
                style="fill:none;stroke:#e8e1e1;stroke-width:0.60115397px" />
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e46_hyperlink"
                xlink:title=""
                xlink:href="https://www.youtube.com/watch?v=KWJaF8UOK3s&amp;feature=youtu.be"
                target="_blank"
                class="svg_a">
               <circle
                  id="e34_circle"
                  cx="414.27399"
                  cy="75.684898"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="15.7876" />
             </a>
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e45_hyperlink"
                xlink:title=""
                xlink:href="https://www.rafaela.gob.ar/museo/PatrimonioVer.aspx?i=196"
                target="_blank"
                class="svg_a">
               <circle
                  id="e3_circle"
                  cx="478.008"
                  cy="25.892"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="17.294901" />
             </a>
             <a
                transform="matrix(0.593182,0,0,0.60923315,-119.28446,3.0169702)"
                id="e36_hyperlink"
                xlink:title=""
                xlink:href="https://www.youtube.com/watch?v=DVV4Tokmhw4&amp;feature=youtu.be"
                target="_blank"
                class="svg_a">
               <circle
                  id="e2_circle"
                  cx="375.94699"
                  cy="467.97601"
                  style="fill:#e8e1e1;stroke:#e8e1e1;stroke-width:1px"
                  r="18.5277"
                  transform="matrix(0.84375,0,0,0.84375,55.9756,63.9004)" />
             </a>
           </g>
         </svg>         
         </div>
    </div>

       <div class="page" id="contact-page">
            <img src="img/contact.svg" alt="contact">
            <div id="contact-items">
                <span><i class="fa-solid fa-square-envelope"></i> benzicesar@gmail.com</span>
                <a class="page-link-2" href="https://wa.me/+34642993876"><i class="fa-brands fa-whatsapp-square"></i><span class="contact-link">+34642993876</span></a>
                <a class="page-link-2" href="https://www.instagram.com/cesar_benzi/"><i class="fa-brands fa-instagram-square"></i><span class="contact-link">cesar_benzi</span></a>
            </div>
        </div>
  `;
})
