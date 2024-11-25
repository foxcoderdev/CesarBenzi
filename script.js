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
            <a target="blank" class="page-link" href="https://www.youtube.com/watch?v=7wdVyU1WkzY&feature=youtu.be">trabajo en progreso</a>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE_AkWK4eM/DLsqkcxK9_re8Z81igGd4A/view?website#2">texto arq. marcelo olmos</a>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE_AhfXVdk/wQ-fbmbpSPLjNhtqBAOGrQ/view?website#2">texto arq. carlos m. reinante</a>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-32KJ8Do/b-uhGMiZ621qZBJ94Fuj-g/view">+fotos</a>
        </div>
    </div>

    <div class="page" id="fifth-page">
        <span>
            <p class="page-title-2">"amor seco"</p>
            <p class="page-title-2">(escultura)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-9llKbe4/E6hj4UTULYSGH7XdMx1J1A/view">+fotos</a>
        </span>
    </div>
    <div class="page" id="sixth-page">
        <span id="sixth-page-items">
            <p class="page-title-2">"expiraciones"</p>
            <p class="page-title-2">(dibujos no
            <p class="page-title-2"> convencionales)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-9wdiqOo/ucD8h7z9eIOdoyeqnPOfLA/view">+fotos</a>
            <a target="blank" class="page-link" href="https://www.rafaela.gob.ar/museo/PatrimonioVer.aspx?i=196">patrimonio</a>
        </span>
    </div>
    <div class="page" id="seventh-page">
        <span id="seventh-page-items">
            <p class="page-title-2">"sincronización de</p>
            <p class="page-title-2">muerte"</p>
            <p class="page-title-2">(dibujos no
            <p class="page-title-2"> convencionales)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-93xfEAA/SG7OCUmPMWifVRNFzsZeDA/view">+fotos</a>
        </span>
    </div>
    <div class="page" id="eighth-page">
        <span id="eighth-page-items">
       <p class="page-title-2">"blanco"</p>
        <p class="page-title-2">(instalación)</p>
       <a target="blank" class="page-link" href="https://www.canva.com/design/DAE_PPfKmng/SbLNWnIZ7scoShNfGCh5Hg/view">+fotos</a>
        </span>
    </div>

    <div class="page" id="ninth-page">
        <span id="ninth-page-items">
            <p class="page-title-2">"romanza"</p>
            <p class="page-title-2">(dibujos no
                <p class="page-title-2"> convencionales)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-99og8Ao/39ZG4wHNoOI-e0MmzAOeGA/view">+fotos</a>
        </span>
    </div>
    <div class="page" id="tenth-page">
        <span id="tenth-page-items">
            <p class="page-title-2">"lo intangible"</p>
            <p class="page-title-2">(dibujos no</p>
            <p class="page-title-2">convencionales  - instalación)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-9wPxF7I/X8MMgfuUB0AFLSxBzYEdUA/view">+fotos</a>
        </span>
    </div>

    <div class="page" id="eleventh-page">
        <span id="eleventh-page-items">
            <p class="page-title-2">"humanos</p>
            <p class="page-title-2">danzantes"</p>
            <p class="page-title-2">(escultura)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE--GcJQuk/dIslXdPHsYozRvx24JIBzw/view">+fotos</a>
        </span>
    </div>

        <div class="page" id="twelft-page">
            <span id="twelft-page-items">
                <p class="page-title-2">"el origen"</p>
                <p class="page-title-2"> (cerámicas)</p>
                <a target="blank" class="page-link" href="https://www.canva.com/design/DAE--KE2WDE/vV9uCdSfcetjGheFZ7A8WA/view">+fotos</a>
            </span>
    </div>

       <div class="page" id="link-of-interest">
       <div id="link-div"><p class="page-title-2" id="links-title">enlaces de interés</p>
         <p>Haga click en los puntos para ver más</p></div>
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
                <a target="blank" class="page-link-2" href="https://wa.me/+34642993876"><i class="fa-brands fa-whatsapp-square"></i><span class="contact-link">+34642993876</span></a>
                <a target="blank" class="page-link-2" href="https://www.instagram.com/cesar_benzi/"><i class="fa-brands fa-instagram-square"></i><span class="contact-link">cesar_benzi</span></a>
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
            <a target="blank" class="page-link" href="https://www.youtube.com/watch?v=7wdVyU1WkzY&feature=youtu.be">work in progress</a>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE_AkWK4eM/DLsqkcxK9_re8Z81igGd4A/view?website#2">text arch.marcelo olmos</a>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE_AhfXVdk/wQ-fbmbpSPLjNhtqBAOGrQ/view?website#2">text arch.carlos m. reinante</a>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-32KJ8Do/b-uhGMiZ621qZBJ94Fuj-g/view">+photos</a>
        </div>
    </div>

    <div class="page" id="fifth-page">
        <span>
            <p class="page-title-2">"dry love"</p>
            <p class="page-title-2">(sculptures)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-9llKbe4/E6hj4UTULYSGH7XdMx1J1A/view">+photos</a>
        </span>
    </div>


    <div class="page" id="sixth-page">
        <span id="sixth-page-items">
            <p class="page-title-2">"expirations"</p>
            <p class="page-title-2">(unconventional
            <p class="page-title-2"> drawings)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-9wdiqOo/ucD8h7z9eIOdoyeqnPOfLA/view">+photos</a>
            <a target="blank" class="page-link" href="https://www.rafaela.gob.ar/museo/PatrimonioVer.aspx?i=196">heritage</a>
        </span>
    </div>

    <div class="page" id="seventh-page">
        <span id="seventh-page-items">
            <p class="page-title-2">"death sync"</p>
            <p class="page-title-2">(unconventional
            <p class="page-title-2"> drawings)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-93xfEAA/SG7OCUmPMWifVRNFzsZeDA/view">+photos</a>
        </span>
    </div>

    <div class="page" id="eighth-page">
        <span id="eighth-page-items">
       <p class="page-title-2">"white" </p>
        <p class="page-title-2">(installation)</p>
       <a target="blank" class="page-link" href="https://www.canva.com/design/DAE_PPfKmng/SbLNWnIZ7scoShNfGCh5Hg/view">+photos</a>
        </span>
    </div>

    <div class="page" id="ninth-page">
        <span id="ninth-page-items">
            <p class="page-title-2">"romance"</p>
            <p class="page-title-2">(unconventional
                <p class="page-title-2"> drawings)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-99og8Ao/39ZG4wHNoOI-e0MmzAOeGA/view">+photos</a>
        </span>
    </div>

    <div class="page" id="tenth-page">
        <span id="tenth-page-items">
            <p class="page-title-2">"the intangible"</p>
            <p class="page-title-2">(unconventional</p>
            <p class="page-title-2">drawings  - installation)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE-9wPxF7I/X8MMgfuUB0AFLSxBzYEdUA/view">+photos</a>
        </span>
    </div>

    <div class="page" id="eleventh-page">
        <span id="eleventh-page-items">
            <p class="page-title-2">"dancing humans"</p>
            <p class="page-title-2">(sculptures)</p>
            <a target="blank" class="page-link" href="https://www.canva.com/design/DAE--GcJQuk/dIslXdPHsYozRvx24JIBzw/view">+photos</a>
        </span>
    </div>

        <div class="page" id="twelft-page">
            <span id="twelft-page-items">
                <p class="page-title-2">"the origin"</p>
                <p class="page-title-2"> (ceramics)</p>
                <a target="blank" class="page-link" href="https://www.canva.com/design/DAE--KE2WDE/vV9uCdSfcetjGheFZ7A8WA/view">+photos</a>
            </span>
        </div>

       <div class="page" id="link-of-interest">
        <div id="link-div"><p class="page-title-2" id="links-title">links of interest</p>
         <p>Click on the dots to see more</p></div>
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
                <a target="blank" class="page-link-2" href="https://wa.me/+34642993876"><i class="fa-brands fa-whatsapp-square"></i><span class="contact-link">+34642993876</span></a>
                <a target="blank" class="page-link-2" href="https://www.instagram.com/cesar_benzi/"><i class="fa-brands fa-instagram-square"></i><span class="contact-link">cesar_benzi</span></a>
            </div>
        </div>
  `;
})
