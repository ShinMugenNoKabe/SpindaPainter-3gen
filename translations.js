// Constantes de traducción
const TRANSLATIONS = {
    es: {
        natureLabel: "Naturaleza",
        genderLabel: "Género",
        abilityLabel: "Habilidad",
        gridLabel: "Mostrar cuadrícula",
        aboutButtonText: "Acerca de",
        authorText: "Creado por JDamianCabello",
        modal: {
            title: "Sobre Spinda Painter",
            description: "Spinda Painter es una herramienta web inspirada en el Spinda Painter original de la tercera generación (Gen III) de Pokémon.",
            whatIsTitle: "¿Qué es Spinda Painter?",
            whatIsDescription: "Es una aplicación que te permite personalizar las manchas de un Spinda basándote en su PID (Personal Identification). Cada Spinda tiene un patrón de manchas único determinado por su identificador.",
            featuresTitle: "Características",
            features: [
                "Modifica la posición de las manchas de Spinda",
                "Visualiza en tiempo real los cambios",
                "Obtén información sobre la naturaleza, género y habilidad"
            ],
            additionalNote: "Originalmente, la herramienta estaba en chino y el sitio web original ha caído. Esta versión web busca preservar la funcionalidad del Spinda Painter.exe original de la tercera generación."
        },
        natures: [
            { name: "Fuerte" },
            { name: "Huraña" },
            { name: "Audaz" },
            { name: "Firme" },
            { name: "Agitada" },
            { name: "Osada" },
            { name: "Dócil" },
            { name: "Plácida" },
            { name: "Alocada" },
            { name: "Floja" },
            { name: "Miedosa" },
            { name: "Activa" },
            { name: "Seria" },
            { name: "Alegre" },
            { name: "Ingenua" },
            { name: "Modesta" },
            { name: "Afable" },
            { name: "Serena" },
            { name: "Tímida" },
            { name: "Cauta" },
            { name: "Amable" },
            { name: "Mansa" },
            { name: "Grosera" },
            { name: "Pícara" },
            { name: "Rara" }
        ],
        genders: {
            female: "♀ Hembra",
            male: "♂ Macho"
        },
        abilities: {
            ownTempo: "Ritmo Propio",
            runAway: "Huída"
        }
    },
    en: {
        natureLabel: "Nature",
        genderLabel: "Gender",
        abilityLabel: "Ability",
        gridLabel: "Show Grid",
        aboutButtonText: "About",
        authorText: "Created by JDamianCabello",
        modal: {
            title: "About Spinda Painter",
            description: "Spinda Painter is a web tool inspired by the original Spinda Painter from the third generation (Gen III) of Pokémon.",
            whatIsTitle: "What is Spinda Painter?",
            whatIsDescription: "It's an application that allows you to customize a Spinda's spots based on its PID (Personal Identification). Each Spinda has a unique spot pattern determined by its identifier.",
            featuresTitle: "Features",
            features: [
                "Modify Spinda's spot positions",
                "Visualize changes in real-time",
                "Get information about nature, gender, and ability"
            ],
            additionalNote: "Originally, the tool was in Chinese and the original website has gone down. This web version seeks to preserve the functionality of the original Spinda Painter.exe from the third generation."
        },
        natures: [
            { name: "Hardy" },
            { name: "Lonely" },
            { name: "Brave" },
            { name: "Adamant" },
            { name: "Impish" },
            { name: "Bold" },
            { name: "Docile" },
            { name: "Relaxed" },
            { name: "Rash" },
            { name: "Lax" },
            { name: "Timid" },
            { name: "Hasty" },
            { name: "Serious" },
            { name: "Jolly" },
            { name: "Naive" },
            { name: "Modest" },
            { name: "Mild" },
            { name: "Calm" },
            { name: "Bashful" },
            { name: "Careful" },
            { name: "Gentle" },
            { name: "Quiet" },
            { name: "Sassy" },
            { name: "Naughty" },
            { name: "Quirky" }
        ],
        genders: {
            female: "♀ Female",
            male: "♂ Male"
        },
        abilities: {
            ownTempo: "Own Tempo",
            runAway: "Run Away"
        }
    }
};

// Variable para el idioma actual
let currentLanguage = 'es';

// Función para cambiar el idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Elementos de interfaz principal
    document.getElementById('natureLabel').textContent = TRANSLATIONS[lang].natureLabel;
    document.getElementById('genderLabel').textContent = TRANSLATIONS[lang].genderLabel;
    document.getElementById('abilityLabel').textContent = TRANSLATIONS[lang].abilityLabel;
    document.getElementById('gridLabel').textContent = TRANSLATIONS[lang].gridLabel;
    
    // Botón "Acerca de"
    const aboutButton = document.getElementById('aboutButton');
    if (aboutButton) {
        aboutButton.textContent = TRANSLATIONS[lang].aboutButtonText;
    }
    
    // Texto de autor
    const authorText = document.getElementById('authorText');
    if (authorText) {
        authorText.textContent = TRANSLATIONS[lang].authorText;
    }
    
    // Elementos del modal
    const modalElements = [
        { id: 'modalTitle', key: 'title' },
        { id: 'modalDescription', key: 'description' },
        { id: 'modalWhatIsTitle', key: 'whatIsTitle' },
        { id: 'modalWhatIsDescription', key: 'whatIsDescription' },
        { id: 'modalFeaturesTitle', key: 'featuresTitle' },
        { id: 'modalAdditionalNote', key: 'additionalNote' }
    ];
    
    modalElements.forEach(elem => {
        const element = document.getElementById(elem.id);
        if (element) {
            element.textContent = TRANSLATIONS[lang].modal[elem.key];
        }
    });
    
    // Lista de características
    const featuresList = document.getElementById('modalFeaturesList');
    if (featuresList) {
        featuresList.innerHTML = TRANSLATIONS[lang].modal.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
    }

    // Actualizar naturaleza
    updateNatureText();

    // Actualizar banderas
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Configurar eventos de selección de idioma
function setupLanguageSelection() {
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });

    // Inicialmente establecer español como activo
    document.querySelector('.language-btn[data-lang="es"]').classList.add('active');
}

// Función modificada para usar traducciones globales
function updateNatureText() {
    const pidNum = parseInt(pid, 16);
    const lang = currentLanguage;
    
    const nature = TRANSLATIONS[lang].natures[pidNum % 25];
    const gender = (pidNum & 0xff) < 0x7f ? 
        TRANSLATIONS[lang].genders.female : 
        TRANSLATIONS[lang].genders.male;
    const ability = (pidNum & 1) === 0 ? 
        TRANSLATIONS[lang].abilities.ownTempo : 
        TRANSLATIONS[lang].abilities.runAway;
    
    const natureNameText = document.getElementById('natureNameText');
    const genderText = document.getElementById('genderText');
    const abilityText = document.getElementById('abilityText');
    
    natureNameText.textContent = nature.name;
    genderText.textContent = gender;
    abilityText.textContent = ability;
}

// Inicialización de traducciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageSelection();
});

// Exportar funciones para uso global si es necesario
window.changeLanguage = changeLanguage;
window.setupLanguageSelection = setupLanguageSelection;