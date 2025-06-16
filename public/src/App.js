document.addEventListener('DOMContentLoaded', function() {
    const aviso = document.getElementById('aviso');
    const privacyNotice = document.getElementById('privacy-notice');
    const acceptButton = document.getElementById('accept-conditions');
    const declineButton = document.getElementById('decline-conditions');
    const appContent = document.getElementById('app');

    // Mostrar o aviso de privacidade
    privacyNotice.style.display = 'block';

    // Previr acceso ao formulario
    appContent.classList.remove('active');

    acceptButton.addEventListener('click', function() {
        // Engadir clase que fai o fade out
        aviso.classList.add('fade-out');

        // Agardar que a animación de opacidade remate antes de ocultar completamente
        setTimeout(() => {
            aviso.style.display = 'none';
        }, 500); // 500ms coincide co tempo de transición definido en CSS

        // Ocultar o aviso e activar o acceso ao formulario
        
        appContent.classList.add('active'); // Activar acceso ao contido
    });

    declineButton.addEventListener('click', function() {
        // Redirixir a "despedida.html" se se rexeita
        window.location.href = 'despedida.html';
    });
    
    document.getElementById('app').innerHTML += `
        
        <div id="titulo">
            <img src="../img/logo_v3.png" class="logo" alt="Logo de VAKaloura">
            <h1>VAKaloura</h1>
        </div>
        <h2>Test Diagnóstico de Estilos de Aprendizaxe VAK</h2>
        <form id="vakTestForm">
            <div class="general">
                <!-- Desplegable para seleccionar a idade -->
                <div class="question" class="seccionXeral">
                    <label for="age"><b>Selecciona a túa idade:</b></label>
                    <select id="age" name="age" required>
                        ${Array.from({ length: 99 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                    </select>
                </div>

                <!-- Opción para seleccionar o xénero -->
                <div class="question" class="seccionXeral">
                    <label><b>Selecciona o teu xénero:</b></label>
                    <label><input type="radio" name="gender" value="male" required>Masculino</label>
                    <label><input type="radio" name="gender" value="female" required>Feminino</label>
                    <label><input type="radio" name="gender" value="nonbinary" required>Non binarie</label>
                    <label><input type="radio" name="gender" value="other" required>Outro/Prefiro non dicilo</label>
                </div>
            </div>

            <!-- Es universitario? -->
            <div class="question" style="display: block;">
                <label><b>Es estudante na universidade?</b></label>
                <label><input type="radio" name="universitario" value="true" required>Si</label>
                <label><input type="radio" name="universitario" value="false" required>Non</label>
            </div>
            <!-- Estudas Enxeñaría Informática? -->
            <div class="question" id="informaticaQuestion" style="display: none;">
                <label><b>Estudas enxeñaría informática?</b></label>
                <label><input type="radio" name="informatico" value="true">Si</label>
                <label><input type="radio" name="informatico" value="false">Non</label>
            </div>
        
            <div class="question">
                <label><b>1. Queres aprender a letra dunha canción. Cómo o fas?</b></label>
                <label><input type="radio" name="question1" value="visual" required> Escribes a letra e/ou lela mentres soa a música.</label>
                <label><input type="radio" name="question1" value="auditory" required> Escoitas a música e cántala na túa cabeza.</label>
                <label><input type="radio" name="question1" value="kinesthetic" required> Reproduces a música e intentas cantala dende o primeiro momento.</label>
                <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Pregunta traducida de AhaSlides</p>
            </div>

            <div class="question">
                <label><b>2. Coñeceche moita xente onte. Hoxe, é mais probable que recordes…</b></label>
                <label><input type="radio" name="question2" value="visual" required>As súas caras, pero non os seus nomes.</label>
                <label><input type="radio" name="question2" value="auditory" required>Os seus nomes, pero non as súas caras.</label>
                <label><input type="radio" name="question2" value="kinesthetic" required>As interaccións entre vós e o que fixéstedes xuntos.</label>
                <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Pregunta traducida de AhaSlides</p>
            </div>

            <div class="question">
                <label><b>3. Que estilo de clases che gustan máis?</b></label>
                <label><input type="radio" name="question3" value="visual" required>A mestra dá unha explicación no encerado.</label>
                <label><input type="radio" name="question3" value="auditory" required>Discutides o tema do que estades a aprender en grupo.</label>
                <label><input type="radio" name="question3" value="kinesthetic" required>Involucrádesvos directamente na materia (laboratorios, educación física, …).</label>
                <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Pregunta traducida de AhaSlides</p>
            </div>

            <div class="question">
                <label><b>4. Recordas, principalmente…</b></label>
                <label><input type="radio" name="question4" value="visual" required>As cousas que ves.</label>
                <label><input type="radio" name="question4" value="auditory" required>As cousas que escoitas.</label>
                <label><input type="radio" name="question4" value="kinesthetic" required>As cousas que fas.</label>
                <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Pregunta traducida de AhaSlides</p>
            </div>

            <div class="question">
                <label><b>5. Se te perdes nun museo, que é o primeiro que fas?</b></label>
                <label><input type="radio" name="question5" value="visual" required>Buscar un mapa.</label>
                <label><input type="radio" name="question5" value="auditory" required>Pedirlle axuda a outra persoa.</label>
                <label><input type="radio" name="question5" value="kinesthetic" required>Ubicarte ti mesma camiñando.</label>
                <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Pregunta traducida de AhaSlides</p>
            </div>

            <div class="question">
                <label><b>6. Estás construíndo unha maqueta que recibiche como pezas separadas. Prefires…</b></label>
                <label><input type="radio" name="question6" value="visual" required>Ler as instrucións e ir seguindo os pasos.</label>
                <label><input type="radio" name="question6" value="auditory" required>Que outra persoa che explique cómo a tes que montar.</label>
                <label><input type="radio" name="question6" value="kinesthetic" required>Ir colocando as pezas intuitivamente.</label>
            </div>

            <div class="question">
                <label><b>7. Cando pensas na palabra “gato”, que ocorre?</b></label>
                <label><input type="radio" name="question7" value="visual" required>Imaxinas un gato.</label>
                <label><input type="radio" name="question7" value="auditory" required>Dis a palabra “gato” para ti mesmo.</label>
                <label><input type="radio" name="question7" value="kinesthetic" required>Pensas en estar cun gato (acaricialo ou escoitalo maullar, por exemplo).</label>
                <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Pregunta traducida de educationplanner.org</p>
            </div>

            <div class="question">
                <label><b>8. Que é o que máis te distrae na aula ou cando estás estudando?</b></label>
                <label><input type="radio" name="question8" value="visual" required>Unha mala iluminación: as luces son demasiado brillantes ou escuras.</label>
                <label><input type="radio" name="question8" value="auditory" required>Un ambiente ruidoso: dende os corredores ou o exterior (conversas, cortacéspedes, …).</label>
                <label><input type="radio" name="question8" value="kinesthetic" required>Unha temperatura incómoda: demasiado fría ou demasiado quente.</label>
                <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Pregunta traducida de educationplanner.org</p>
            </div>

            <div class="question">
                <label><b>9. Onde preferirías ir a pasar a tarde?</b></label>
                <label><input type="radio" name="question9" value="visual" required>Ao cine.</label>
                <label><input type="radio" name="question9" value="auditory" required>A un concerto.</label>
                <label><input type="radio" name="question9" value="kinesthetic" required>A un parque de atraccións.</label>
                <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Pregunta traducida de educationplanner.org</p>
            </div>

            <div class="question">
                <label><b>10. Cando escoitas música…</b></label>
                <label><input type="radio" name="question10" value="visual" required>Visualizas as letras ou imaxinas escenas.</label>
                <label><input type="radio" name="question10" value="auditory" required>Céntraste nos sons e os instrumentos.</label>
                <label><input type="radio" name="question10" value="kinesthetic" required>Móveste ou bailas ao seu ritmo.</label>
            </div>


            <h2>Proba de Preferencia de Contidos</h2>
            <p><strong>Tema:</strong> "O ciclo da auga".</p>
            <div style="margin: auto; max-width: 600px;">
                <p style="margin: 5px;">Imaxina que estás a aprender sobre o ciclo da auga nunha clase de ciencias.</p>
                <p style="margin: 5px;">Tes tres opcións para aprender sobre o tema:</p>
                <p style="margin: 5px; margin-bottom: 15px;">Preme nos botóns para ver, escoitar e xogar coas tres presentacións.</p>
            </div>

            <div id="content-options" class="content-buttons">
                <button type="button" data-content="visual" class="botonBorde" id="visualContent">Mostrar Contido Visual</button>
                <button type="button" data-content="auditory" class="botonBorde" id="auditoryContent">Mostrar Contido Auditivo</button>
                <button type="button" data-content="kinesthetic" class="botonBorde" id="kinestheticContent">Mostrar Contido Kinestésico</button>
            </div>
            <div id="selectedContent"></div>

            <div class="question">
                <label><b>11. Que presentación de contido prefires?</b></label>
                <select name="question11" required>
                    <option value="visual">Contido Visual (Diagrama)</option>
                    <option value="auditory">Contido Auditivo (Podcast)</option>
                    <option value="kinesthetic">Contido Kinestésico (Actividade Interactiva)</option>
                </select>
            </div>


            <h2>Actividades de Memorización</h2>
            <div class="question">
                <label><b>12. Exercicio de memorización visual:</b></label>
                <button type="button" data-memoria="visual" id="visualMemory">Comezar Exercicio Visual</button>
            </div>
            <div id="memoryContent12" style="display: flex;align-items: center;flex-direction: column;"></div>

            <div class="question">
                <label><b>13. Exercicio de memorización auditivo:</b></label>
                <button type="button" data-memoria="auditory" id="auditoryMemory">Comezar Exercicio Auditivo</button>
            </div>
            <div id="memoryContent13" style="display: flex;align-items: center;flex-direction: column;"></div>

            <div class="question">
                <label><b>14. Exercicio de memorización kinestésico:</b></label>
                <button type="button" data-memoria="kinesthetic" id="kinestheticMemory">Comezar Exercicio Kinestésico</button>
            </div>
            <div id="memoryContent14" style="display: flex; align-items: center; flex-direction: column;"></div>

            
            <!-- Pregunta de resposta libre -->
            <h2>Pregunta de Resposta Libre</h2>
            
            <div class="question">
                <label><b>15. Escribe un -ou máis- parágrafos falando dos teus hobbies:</b></label>
                <textarea name="freeResponse" rows="4" cols="50" required></textarea>
            </div>

            <div id="result"></div>
            <div id="botonEnviar">
                <button type="submit" class="submit-button">Enviar</button>
            </div>
        </form>
    `;

    // Mostrar/ocultar pregunta de informática
    document.querySelectorAll('input[name="universitario"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const informaticaQuestion = document.getElementById('informaticaQuestion');
            if (this.value === 'true') {
                informaticaQuestion.style.display = 'block';
                // Hacer obligatoria la subpregunta
                document.querySelectorAll('input[name="informatico"]').forEach(input => input.required = true);
            } else {
                informaticaQuestion.style.display = 'none';
                // Limpiar y deshabilitar la subpregunta
                document.querySelectorAll('input[name="informatico"]').forEach(input => {
                    input.checked = false;
                    input.required = false;
                });
            }
        });
    });
    
    document.getElementById('vakTestForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        // comprobación de campos de resposta libre
        const freeResponse = document.querySelector('textarea[name="freeResponse"]').value;
        if (freeResponse.length < 100) {
            alert("Non te esquezas de responder a última pregunta! Debe conter, polo menos, 100 caracteres.");
            return; // Detén o proceso se as condicións non se cumpren.
        }

        // Comprobar se se realizaron os exercicios de memoria
        if (recallTempo.tVisual === 0 || recallTempo.tAuditory === 0 || recallTempo.tKinesthetic === 0) {
            alert("Por favor, completa os tres exercicios de memorización antes de enviar o formulario.");
            return;
        }

        const formData = new FormData(event.target);
        const result = processFormData(formData);

        // Obter idade e xénero
        const age = formData.get('age');
        const gender = formData.get('gender');
        const genderOptions = document.querySelectorAll('input[name="gender"]');
        // Check if any gender option is selected
        const genderSelected = [...genderOptions].some(option => option.checked);
        if (!genderSelected) {
            genderOptions[0].setCustomValidity("Por favor, selecciona o teu xénero.");
        } else {
            for (const option of genderOptions) {
                option.setCustomValidity(""); // Limpar a mensaxe se o xénero foi seleccionado
            }
        }
        // Obter comunidade universitaria
        const universitario = formData.get('universitario') === 'true';
        const informatico = formData.get('informatico') === 'true';

        let msx="(Enviado!) O teu estilo de aprendizaxe é mixto.";
        if(result=="v") msx = '(Enviado!) Es un aprendiz Visual.';
        if(result=="a") msx = '(Enviado!) Es un aprendiz Auditivo.';
        if(result=="k") msx = '(Enviado!) Es un aprendiz Kinestésico.';

        document.getElementById('result').innerText = msx;

        if (!result) {
            console.error("Erro: O diagnóstico (result) non se calculou correctamente.");
            return;
        }
        // Enviar datos a Supabase (solicitude POST ao backend Express)
        fetch('/.netlify/functions/submit-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ visual_count: Math.round(visual), auditory_count: Math.round(auditory), kinesthetic_count: Math.round(kinesthetic), resposta_libre: formData.get('freeResponse'), age: age, gender: gender, diagnostico: result, universitario: universitario, informatico: informatico }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));        
    });

    function countResponses(formData, type) {
        let count = 0;
        formData.forEach((value, key) => {
            if (value === type) {
                if (key === 'question11') { // Aumentar peso da pregunta 11
                    count += 2; // Sumar o dobre dunha pregunta normal
                } else {
                    count += 1; // Sumar 1 normalmente nas demais preguntas
                }
            }
        });
        return count;
    }

    const contentButtons = document.querySelectorAll('#content-options button');
    const memoryButtons = document.querySelectorAll('button[data-memoria]');
    let visual = 0;
    let auditory = 0;
    let kinesthetic = 0;
    let recallCount = { visual: 0, auditory: 0, kinesthetic: 0 };
    let recallTempo = {tVisual: 0, tAuditory: 0, tKinesthetic: 0};
    let selectedImage = null;
    let selectedConcept = null;

    // definir termos correctos
    const correctTerms = {
        visual: ['maza', 'abella', 'vaca', 'porco', 'cenoria', 'barril', 'ovella', 'patacas', 'coello', 'tomate', 'cabalo', 'mel', 'muino', 'seta', 'ovos'],
        auditory: ['mesa', 'cadeira', 'libro', 'cama', 'lapis', 'boligrafo', 'goma', 'telefono', 'pizarra', 'reloxo', 'porta', 'armario', 'alfombra', 'sofa', 'espello'],
        kinesthetic: ['estrela', 'alga', 'candorca', 'coral', 'ancora', 'golfinho', 'cabalinho', 'ameixas', 'temon', 'lura', 'peixe', 'salvavidas', 'raia', 'quenlla', 'medusa']
    };

    contentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contentType = this.getAttribute('data-content');
            showContent(contentType);
        });
    });

    memoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const memoryType = this.getAttribute('data-memoria');
            startMemoryExercise(memoryType);
        });
    });

    function showContent(type) {
        let contentHTML = '';
        if (type === 'visual') {
            contentHTML =`<div style="display: flex;align-items: center;flex-direction: column;">
            <img src="../img/ciclo_auga.png" alt="Infografía do ciclo da auga" style="width: 500px; height: auto;">
            <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px;">Imaxe traducida de Cuéntame México</p>
            </div>
            `;
        } else if (type === 'auditory') {
            contentHTML = `<div style="display: flex;align-items: center;flex-direction: column;">
            <audio controls><source src="../audio/digochinho.mp3" type="audio/mpeg">O teu navegador non soporta o elemento de audio.</audio>
            <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px;">Audio cedido pola CRTVG</p>
            </div>
            `;
        } else if (type === 'kinesthetic') {
            contentHTML = `
                <p>Arrastra e solta as fases do ciclo da auga na área correcta.</p>
                <div id="interactiveActivity" style="margin-bottom: 20px;">
                    <div id="draggables" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(125px, 1fr)); text-align: center;">
                        <div class="draggable" draggable="true" data-phase="evaporation">Evaporación</div>
                        <div class="draggable" draggable="true" data-phase="condensation">Condensación</div>
                        <div class="draggable" draggable="true" data-phase="precipitation">Precipitación</div>
                        <div class="draggable" draggable="true" data-phase="recollection">Recolección</div>
                    </div>
                    <div id="dropAreas" class="dropzone-grid" style="justify-items: center; align-items: center;">
                        <div id="evaporacion" class="dropzone" data-phase="evaporation"></div>
                        <div id="condensacion" class="dropzone" data-phase="condensation"></div>
                        <div id="precipitacion" class="dropzone" data-phase="precipitation"></div>
                        <div id="recoleccion" class="dropzone" data-phase="recollection"></div>
                    </div>
                </div>
            `;
        }

        document.getElementById('selectedContent').innerHTML = contentHTML;

        if (type === 'kinesthetic') {
            setupDragAndDrop();
        }
    }

    function startMemoryExercise(type) {
        let memoryHTML = '';
        if (type === 'visual') {
            memoryHTML = `<p>Memoriza esta lista de palabras con imaxes durante <span id="countdown12">60</span> segundos.</p>
            <img src="../img/memoria_visual_granxa.png" alt="Tarxeta de granxa para memorizar" style="width: 600px; height: auto;">
            <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Iconos feitos por Freepik</p>
            `;
            document.getElementById('memoryContent12').innerHTML = memoryHTML;
            startCountdown(60, 'visual', 'countdown12');
        } else if (type === 'auditory') {
            memoryHTML = `<p>Escoita esta lista de palabras durante <span id="countdown13">60</span> segundos.</p>
            <audio controls><source src="../audio/palabras.mp3" type="audio/mpeg">Tu navegador no soporta el elemento de audio.</audio>
            `;
            document.getElementById('memoryContent13').innerHTML = memoryHTML;
            startCountdown(60, 'auditory', 'countdown13');
        } else if (type === 'kinesthetic') {
            memoryHTML = `<p>Relaciona os nomes coa imaxe correcta durante <span id="countdown14">60</span> segundos.</p>
                <div id="kinestheticActivity">
                    <div id="imageOptions" class="options" style="justify-items: center; margin-bottom: 20px; display: grid; gap: 10px; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; aling-content:center;">
                        <img src="../img/peixe.png" alt="Peixe" class="match-image" data-concept="peixe" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/ancora.png" alt="Áncora" class="match-image" data-concept="ancora" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/golfinho.png" alt="Golfiño" class="match-image" data-concept="golfinho" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/salvavidas.png" alt="Salvavidas" class="match-image" data-concept="salvavidas" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/raia.png" alt="Raia" class="match-image" data-concept="raia" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/quenlla.png" alt="Quenlla" class="match-image" data-concept="quenlla" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/candorca.png" alt="Candorca" class="match-image" data-concept="candorca" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/medusa.png" alt="Medusa" class="match-image" data-concept="medusa" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/temon.png" alt="Temón" class="match-image" data-concept="temon" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/estrela.png" alt="Estrela" class="match-image" data-concept="estrela" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/cabalinho.png" alt="Cabaliño" class="match-image" data-concept="cabalinho" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/lura.png" alt="Lura" class="match-image" data-concept="lura" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/alga.png" alt="Alga" class="match-image" data-concept="alga" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/ameixas.png" alt="Ameixas" class="match-image" data-concept="ameixas" style="width: 60px; height: auto; cursor: pointer;">
                        <img src="../img/coral.png" alt="Coral" class="match-image" data-concept="coral" style="width: 60px; height: auto; cursor: pointer;">
                    </div>
                    <div id="nameOptions" class="options" style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr 1fr 1fr 1fr; aling-content:center;">
                        <button type="button" class="match-name" class="botonBorde" data-concept="estrela">Estrela</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="alga">Alga</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="candorca">Candorca</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="coral">Coral</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="ancora">Áncora</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="golfinho">Golfiño</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="cabalinho">Cabaliño</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="ameixas">Ameixas</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="temon">Temón</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="lura">Lura</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="peixe">Peixe</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="salvavidas">Salvavidas</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="raia">Raia</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="quenlla">Quenlla</button>
                        <button type="button" class="match-name" class="botonBorde" data-concept="medusa">Medusa</button>
                    </div>
                    <p style="font-size: 9px; font-style: italic; text-align:center; margin-top: 15px; margin-bottom: -1px;">Iconos feitos por Freepik</p>
                    <p id="matchFeedback"></p>
                </div>
            `;
            document.getElementById('memoryContent14').innerHTML = memoryHTML;
            setupMatchingExercise();
            startCountdown(60, 'kinesthetic', 'countdown14');
        }

    }

    function setupMatchingExercise() {
        const images = document.querySelectorAll('.match-image');
        const names = document.querySelectorAll('.match-name');

        images.forEach(image => {
            image.addEventListener('click', function() {
                selectedImage = image.dataset.concept;
                checkMatch();
            });
        });

        names.forEach(name => {
            name.addEventListener('click', function() {
                selectedConcept = name.dataset.concept;
                checkMatch();
            });
        });
    }

    function startCountdown(seconds, type, countdownElementId) {
        const countdownElement = document.getElementById(countdownElementId);
        let timeLeft = seconds;

        const timerInterval = setInterval(() => {
            timeLeft--;
            countdownElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                promptRecallTest(type);
            }
        }, 1000);
    }

    function checkMatch() {
        if (selectedImage && selectedConcept) {
            if (selectedImage === selectedConcept) {
                document.getElementById('matchFeedback').innerText = 'Correcto!';

                // Colorear o botón correspondente de verde
                const matchedButton = document.querySelector(`button[data-concept="${selectedConcept}"]`);
                if (matchedButton) {
                    matchedButton.style.backgroundColor = 'green';
                    matchedButton.style.color = 'white';
                }
            } else {
                document.getElementById('matchFeedback').innerText = 'Incorrecto. Inténtao de novo.';
            }

            // Reset seleccións despois de comprobar
            selectedImage = null;
            selectedConcept = null;
        }
    }

    function promptRecallTest(type) {
        let recallTestHTML = `
            <p>Escribe os elementos que recordas.</p>
        `;

        if (type === 'visual') {
            tempoVisualRecall = new Date();
            recallTestHTML += `
                <textarea id="recallInputvisual" rows="4" cols="50"></textarea>
                <button type="button" class="botonBorde" id="submitRecallVisual">Enviar memorización visual</button>
            `;

            document.getElementById('memoryContent12').innerHTML = recallTestHTML;

            document.getElementById('submitRecallVisual').addEventListener('click', function() {
                recallTempo.tVisual = new Date() - tempoVisualRecall;
                evaluateRecall(type);
            });
        }
        else if (type === 'auditory') {
            tempoAuditoryRecall = new Date();
            recallTestHTML += `
                <textarea id="recallInputauditory" rows="4" cols="50"></textarea>
                <button type="button" class="botonBorde" id="submitRecallAuditory">Enviar memorización auditiva</button>
            `;

            document.getElementById('memoryContent13').innerHTML = recallTestHTML;

            document.getElementById('submitRecallAuditory').addEventListener('click', function() {
                recallTempo.tAuditory = new Date() - tempoAuditoryRecall;
                evaluateRecall(type);
            });
        }
        else {
            tempoKinestheticRecall = new Date();
            recallTestHTML += `
                <textarea id="recallInputkinesthetic" rows="4" cols="50"></textarea>
                <button type="button" class="botonBorde" id="submitRecallKinesthetic">Enviar memorización kinestésica</button>
            `;

            document.getElementById('memoryContent14').innerHTML = recallTestHTML;

            document.getElementById('submitRecallKinesthetic').addEventListener('click', function() {
                recallTempo.tKinesthetic = new Date() - tempoKinestheticRecall;
                evaluateRecall(type);
            });
        }

    }

    function evaluateRecall(type) {
        if (document.getElementById('recallInput'+type).value === '') {
            document.getElementById('recallInput'+type).value = ' ';
        }
        const recallInput = document.getElementById('recallInput'+type).value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const recallTerms = [...new Set(recallInput.split(/[\s,]+/))]; // Termos non repetidos
        const correctList = correctTerms[type].map(term => term.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

        let correctCount = 0;
        recallTerms.forEach(term => {
            if (correctList.includes(term)) {
                correctCount++;
            }
        });

        recallCount[type] = correctCount;

        const memoryContentId = type === 'visual' ? 'memoryContent12' : type === 'auditory' ? 'memoryContent13' : 'memoryContent14';
        document.getElementById(memoryContentId).innerHTML = `Recordache ${correctCount} elementos correctos.`;
    }

    function setupDragAndDrop() {
        const draggables = document.querySelectorAll('.draggable');
        const dropzones = document.querySelectorAll('.dropzone');

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', dragStart);
            draggable.addEventListener('dragend', dragEnd);
        });

        dropzones.forEach(dropzone => {
            dropzone.addEventListener('dragover', dragOver);
            dropzone.addEventListener('drop', drop);
        });
    }

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.dataset.phase);
        setTimeout(() => {
            event.target.style.visibility = 'hidden';
        }, 0);
    }

    function dragEnd(event) {
        event.target.style.visibility = 'visible';
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const phase = event.dataTransfer.getData('text');
        const dropzonePhase = event.target.closest('.dropzone').dataset.phase;

        const droppedElement = document.querySelector(`[data-phase="${phase}"]`);
        if (droppedElement) {
            droppedElement.style.visibility = 'visible';
            if (phase === dropzonePhase) {
                event.target.closest('.dropzone').appendChild(droppedElement);
                console.log(`Fase ${phase} foi colocada correctamente.`);
                droppedElement.classList.remove('incorrect');
                droppedElement.classList.add('correct');
            } else {
                console.log(`Fase ${phase} foi colocada incorrectamente.`);
                droppedElement.classList.add('incorrect');
            }
        }
    }

    function processFormData(formData) {
        // Resultado do tipo test + selección de contido
        visual = countResponses(formData, 'visual');
        auditory = countResponses(formData, 'auditory');
        kinesthetic = countResponses(formData, 'kinesthetic');

        // Resultado da actividade de memorización
        if(recallCount['visual'] > recallCount['auditory'] && recallCount['visual'] > recallCount['kinesthetic']) {
            visual+=3;
            if(recallCount['auditory'] > recallCount['kinesthetic']) auditory+=2;
            else if(recallCount['kinesthetic'] > recallCount['auditory']) kinesthetic+=2;
        }
        else if(recallCount['auditory'] > recallCount['visual'] && recallCount['auditory'] > recallCount['kinesthetic']) {
            auditory+=3;
            if(recallCount['visual'] > recallCount['kinesthetic']) visual+=2;
            else if(recallCount['kinesthetic'] > recallCount['visual']) kinesthetic+=2;
        }
        else if(recallCount['kinesthetic'] > recallCount['visual'] && recallCount['kinesthetic'] > recallCount['auditory']) {
            kinesthetic+=3;
            if(recallCount['visual'] > recallCount['auditory']) visual+=2;
            else if(recallCount['auditory'] > recallCount['visual']) auditory+=2;
        }
        else if(recallCount['visual'] === recallCount['auditory'] && recallCount['visual'] > recallCount['kinesthetic']) {
            visual+=2;
            auditory+=2;
        } else if(recallCount['visual'] === recallCount['kinesthetic'] && recallCount['visual'] > recallCount['auditory']) {
            visual+=2;
            kinesthetic+=2;
        } else if(recallCount['auditory'] === recallCount['kinesthetic'] && recallCount['auditory'] > recallCount['visual']) {
            auditory+=2;
            kinesthetic+=2;
        }
        // Puntuación extra: maior proporción entre respostas correctas e tempo que lle levou acadalas
        // número de respostas correctas por segundo
        const propVisual = recallCount['visual']/(recallTempo.tVisual/1000);
        const propAuditory = recallCount['auditory']/(recallTempo.tAuditory/1000);
        const propKinesthetic = recallCount['kinesthetic']/(recallTempo.tKinesthetic/1000);

        if (propVisual > propAuditory && propVisual > propKinesthetic) visual++;
        else if (propAuditory > propVisual && propAuditory > propKinesthetic) auditory++;
        else if (propKinesthetic > propVisual && propKinesthetic > propAuditory) kinesthetic++;
        
        // Determinar o resultado final baseado no maior número
        if (visual > auditory && visual > kinesthetic) return "v";
        if (auditory > visual && auditory > kinesthetic) return "a";
        if (kinesthetic > visual && kinesthetic > auditory) return "k";
        return "m";

    }
});
