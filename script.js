const languageLinkES = document.getElementById('language-link-es');
const languageLinkEN = document.getElementById('language-link-en');

languageLinkES.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.innerHTML = /* html */ `<!-- first page --> 
    <div class="page" id="index-page">
        <p class="page-title-1">césar benzi</p>
        <span>
        <a class="language-link" id="language-link-es" style="display:none"href="#">en español</a>
        <a class="language-link" id="language-link-en" style="display:none" href="#">for english</a>
        </span>
    </div>

    <!-- second page --> 
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

    <!-- third page -->
    <div class="page" id="third-page">
        <p class="page-title-1">obras</p>
        <span></span>
        <span></span>
    </div>

    <!-- fourth page -->
    <div class="page" id="fourth-page">
        <div id="fourth-page-items">
            <p class="page-title-2">"intangible con fuga"</p>
            <p class="page-title-2">(instalación)</p>
            <a class="page-link" href="https://www.youtube.com/watch?v=7wdVyU1WkzY&feature=youtu.be">work in progress</a>
            <a class="page-link" href="https://www.canva.com/design/DAE_AkWK4eM/LwycXMmKoyRv-E8R4EJO7g/view?website#2:of-light-and-shadow...-by-architect-marcelo-olmos-light-and-shadow-an-endless-dialogue-established-in-art-for-centuries.-ever-since-giotto-modeled-color-and-abandoned-the-fretwork-style-the-play-of-light-has-been-a-constant.-the-dramatic-light-of-caravaggio-the-intimate-light-of-rembrandt-and-the-perceived-light-of-impressionism-are-all-ways-of-capturing-the-transience-of-the-moment.-other-times-other-lights-appear-with-new-languages-new-needs-andnew-contexts-and-they-are-no-longer-on-the-plane-in-painting.-now-they-are-present-in-space-they-materialize-and-provoke-or-invoke-us-thanks-to-new-technologies-or-old-materials-but-with-a-revamped-function.-some-artists-work-with-light-in-search-of-stimulating-sensations-in-the-observer-seeking-to-repeat-anguish-and-calls-to-the-darkest-past.-it-is-a-territory-of-lights-and-shadows-which-awaken-the-vague-sensation-that-something-disturbing-lurking-is-lurking-nearby.-the-constant-of-calling-fearsome-sensations-or-simply-causing-astonishment-by-the-complicated-handling-of-abundant-technologies-expensive-and-complex-supports-but-that-in-essence-say-nothing-or-little.-they-are-just-moments-without-answers.-it-is-only-contemplation-of-pretentious-boasts.-there-are-other-ways-to-play-with-light.-c-sar-benzi-does-it-with-glass-as-a-receiving-material-but-what-he-proposes-is-to-provoke-the-shadow-the-faint-shadow-of-the-fleeting-sunset-of-the-unique-situations-that-barely-touch-us-and-we-feel-likea-refreshing-contact.-cesar-benzi-s-domain-is-that-subtle-faded-shadow-the-border-between-the-dazzling-brilliance-and-the-fleetingness-of-his-step.-benzi-s-is-the-minimum-moment-that-the-shadow-allows-us-to-barely-glimpse-other-instances-other-movements-other-possibilities.">texto arq. marcelo olmos</a>
            <a class="page-link" href="https://www.canva.com/design/DAE_AhfXVdk/taf63XmqBmRbGYiVDbi6Jg/view?website#2:object-artists-in-santa-fe-topics-11-national-academy-of-fine-arts-2013-by-arch.-carlos-mar-a-reinante-...-the-present-work-intends-to-show-the-work-carried-out-in-the-province-of-santa-fe-by-object-artists.-as-in-any-gaze-an-intentional-charge-locates-the-search-prescribes-its-scope-and-justifies-the-choice-of-works-recently-made-by-creators-from-rosario-santa-fe-esperanza-and-rafaela.-works-and-authors-that-despite-belonging-to-different-generations-coming-from-varied-backgrounds-and-experiences-and-materializing-very-different-registers-and-meanings-nonetheless-appear-centered-within-the-same-productive-microclimate-a-microclimate-in-which-the-conceptual-and-referential-consideration-of-objects-a-particular-ontology-and-unifying-contemporaneity.-the-objectualist-work-of-the-santa-fe-filmmakers-covers-a-wide-range-of-creations-of-a-three-dimensional-spatial-nature-but-none-of-them-chooses-to-literally-swindle-or-resignify-the-objects-of-consumer-society.-they-are-ad-hoc-objects-created-expressly-to-unfold-a-specific-and-properly-intentional-existence-objects-that-are-revealed-as-forms-in-the-platonic-sense-of-the-eidos-in-its-triple-productive-condition-they-start-from-an-inner-will-subjectivity-or-project-they-determine-an-ideal-ordering-of-the-world-language-or-codification-and-they-are-build-as-a-symbolic-artifact-as-the-foundation-of-a-culture-ideal-community-historical-artistic-dimension-etc.-in-this-way-and-continuing-with-the-platonic-concept-we-close-this-introduction-with-the-idea-that-the-object-is-something-that-opens-access-to-seeing.-...-c-sar-benzi-general-belgrano-colony-santa-fe-1981-benzi-affirms-the-object-brings-me-closer-to-space.-i-need-the-objectual-and-transparent-medium-to-transfer-a-concept-of-intangibility-.-as-a-configuration-of-what-is-almost-imperceptible.-articulating-a-certain-number-of-lines-and-spheres-i-create-a-structure-with-an-object-entity.">texto arq. carlos m. reinante</a>
            <a class="page-link" href="https://www.canva.com/design/DAE-32KJ8Do/WrSk6JueerKL3hrxZFrUNQ/view?website#2">+fotos</a>
        </div>
    </div>

    <!-- fifth page -->
    <div class="page" id="fifth-page">
        <span>
            <p class="page-title-2">"amor seco"</p>
            <p class="page-title-2">(escultura)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9llKbe4/IHnHguXS4CHH0RxrRdyASg/view?website#2">+fotos</a>
        </span>
    </div>

    <!-- sixth page -->
    <div class="page" id="sixth-page">
        <span id="sixth-page-items">
            <p class="page-title-2">"expiraciones"</p>
            <p class="page-title-2">(dibujos no
            <p class="page-title-2"> convencionales)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9wdiqOo/8S1ad291KDekjWVVmD7y6Q/view?website#2:p-gina-5">+fotos</a>
            <a class="page-link" href="https://www.rafaela.gob.ar/museo/PatrimonioVer.aspx?i=196">patrimonio</a>
        </span>
    </div>

    <!-- seventh page -->
    <div class="page" id="seventh-page">
        <span id="seventh-page-items">
            <p class="page-title-2">"sincronización de"</p>
            <p class="page-title-2">"muerte"</p>
            <p class="page-title-2">(dibujos no
            <p class="page-title-2"> convencionales)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-93xfEAA/AG0nd-bOlYkcp3PCvYgo8g/view?website#2:p-gina-2">+fotos</a>
        </span>
    </div>

    <!-- eighth page -->
    <div class="page" id="eighth-page">
        <span id="eighth-page-items">
       <p class="page-title-2">"blanco"</p>
        <p class="page-title-2">(instalación)</p>
       <a class="page-link" href="https://www.canva.com/design/DAE_PPfKmng/kR17bh91aWNT67EqZBAx5g/view?website#2:p-gina-1">+fotos</a>
        </span>
    </div>

    <!-- ninth page -->
    <div class="page" id="ninth-page">
        <span id="ninth-page-items">
            <p class="page-title-2">"romanza"</p>
            <p class="page-title-2">(dibujos no
                <p class="page-title-2"> convencionales)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-99og8Ao/ce2721gfroLlaIRR1kgoMw/view?website#2:p-gina-1">+fotos</a>
        </span>
    </div>

       <!-- tenth page -->
    <div class="page" id="tenth-page">
        <span id="tenth-page-items">
            <p class="page-title-2">"lo intangible"</p>
            <p class="page-title-2">(dibujos no</p>
            <p class="page-title-2">convencionales  - instalación)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9wPxF7I/2EeK9dRihhKiW-sk5bX9Tw/view?website#2:p-gina-5">+fotos</a>
        </span>
    </div>

    <!-- eleventh page -->
    <div class="page" id="eleventh-page">
        <span id="eleventh-page-items">
            <p class="page-title-2">"humanos"</p>
            <p class="page-title-2">danzantes</p>
            <p class="page-title-2">(escultura)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE--GcJQuk/lt1wk2aoy_6l__UPg0659w/view?website#2:retornar-al-sitio-return-to-site">+fotos</a>
        </span>
    </div>

    <!-- twelft page -->
        <div class="page" id="twelft-page">
            <span id="twelft-page-items">
                <p class="page-title-2">"el origen"</p>
                <p class="page-title-2"> (cerámicas)</p>
                <a class="page-link" href="https://www.canva.com/design/DAE--KE2WDE/4JYYkp2KKr7QKYUvfNGOJA/view?website#2">+fotos</a>
            </span>
    </div>

       <!-- Link of Interests page -->
       <div class="page" id="link-of-interest">
         <p class="page-title-2">enlaces de interés</p>
         <span></span>
         <span></span>
       </div>

       <!-- contact page -->
       <div class="page" id="contact-page">
        <div id="contact-items">
            <span><i class="fa-solid fa-square-envelope"></i> benzicesar@gmail.com</span>
            <a class="page-link-2" href="https://wa.me/+393491177129"><i class="fa-brands fa-whatsapp-square"></i><span class="contact-link">+393491177129</span></a>
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

    <!-- second page --> 
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

    <!-- third page -->
    <div class="page" id="third-page">
        <p class="page-title-1">artworks</p>
        <span></span>
        <span></span>
    </div>

    <!-- fourth page -->
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

    <!-- fifth page -->
    <div class="page" id="fifth-page">
        <span>
            <p class="page-title-2">"dry love"</p>
            <p class="page-title-2">(sculptures)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9llKbe4/IHnHguXS4CHH0RxrRdyASg/view?website#2">+photos</a>
        </span>
    </div>

    <!-- sixth page -->
    <div class="page" id="sixth-page">
        <span id="sixth-page-items">
            <p class="page-title-2">"expirations"</p>
            <p class="page-title-2">(unconventional
            <p class="page-title-2"> drawings)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9wdiqOo/8S1ad291KDekjWVVmD7y6Q/view?website#2:p-gina-5">+photos</a>
            <a class="page-link" href="https://www.rafaela.gob.ar/museo/PatrimonioVer.aspx?i=196">heritage</a>
        </span>
    </div>

    <!-- seventh page -->
    <div class="page" id="seventh-page">
        <span id="seventh-page-items">
            <p class="page-title-2">"death sync"</p>
            <p class="page-title-2">(unconventional
            <p class="page-title-2"> drawings)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-93xfEAA/AG0nd-bOlYkcp3PCvYgo8g/view?website#2:p-gina-2">+photos</a>
        </span>
    </div>

    <!-- eighth page -->
    <div class="page" id="eighth-page">
        <span id="eighth-page-items">
       <p class="page-title-2">"white" </p>
        <p class="page-title-2">(installation)</p>
       <a class="page-link" href="https://www.canva.com/design/DAE_PPfKmng/kR17bh91aWNT67EqZBAx5g/view?website#2:p-gina-1">+photos</a>
        </span>
    </div>

    <!-- ninth page -->
    <div class="page" id="ninth-page">
        <span id="ninth-page-items">
            <p class="page-title-2">"romance"</p>
            <p class="page-title-2">(unconventional
                <p class="page-title-2"> drawings)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-99og8Ao/ce2721gfroLlaIRR1kgoMw/view?website#2:p-gina-1">+photos</a>
        </span>
    </div>

       <!-- tenth page -->
    <div class="page" id="tenth-page">
        <span id="tenth-page-items">
            <p class="page-title-2">"the intangible"</p>
            <p class="page-title-2">(unconventional</p>
            <p class="page-title-2">drawings  - installation)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE-9wPxF7I/2EeK9dRihhKiW-sk5bX9Tw/view?website#2:p-gina-5">+photos</a>
        </span>
    </div>

    <!-- eleventh page -->
    <div class="page" id="eleventh-page">
        <span id="eleventh-page-items">
            <p class="page-title-2">"dancing humans"</p>
            <p class="page-title-2">(sculptures)</p>
            <a class="page-link" href="https://www.canva.com/design/DAE--GcJQuk/lt1wk2aoy_6l__UPg0659w/view?website#2:retornar-al-sitio-return-to-site">+photos</a>
        </span>
    </div>

    <!-- twelft page -->
        <div class="page" id="twelft-page">
            <span id="twelft-page-items">
                <p class="page-title-2">"the origin"</p>
                <p class="page-title-2"> (ceramics)</p>
                <a class="page-link" href="https://www.canva.com/design/DAE--KE2WDE/4JYYkp2KKr7QKYUvfNGOJA/view?website#2">+photos</a>
            </span>
    </div>

       <!-- Link of Interests page -->
       <div class="page" id="link-of-interest">
         <p class="page-title-2">links of interest</p>
         <span></span>
         <span></span>
       </div>

       <!-- contact page -->
       <div class="page" id="contact-page">
        <div id="contact-items">
            <span><i class="fa-solid fa-square-envelope"></i> benzicesar@gmail.com</span>
            <a class="page-link-2" href="https://wa.me/+393491177129"><i class="fa-brands fa-whatsapp-square"></i><span class="contact-link">+393491177129</span></a>
            <a class="page-link-2" href="https://www.instagram.com/cesar_benzi/"><i class="fa-brands fa-instagram-square"></i><span class="contact-link">cesar_benzi</span></a>
        </div>
        </div>
  `;
})