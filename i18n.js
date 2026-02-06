// ================================================
// PAPER2FORM WEBSITE — Internationalization (i18n)
// Supported: English, German, French, Spanish, Italian, Portuguese
// ================================================

const TRANSLATIONS = {
    // Navigation
    nav_home: {
        en: 'Home', de: 'Startseite', fr: 'Accueil', es: 'Inicio', it: 'Home', pt: 'Início'
    },
    nav_tutorial: {
        en: 'Tutorial', de: 'Anleitung', fr: 'Tutoriel', es: 'Tutorial', it: 'Tutorial', pt: 'Tutorial'
    },
    nav_pricing: {
        en: 'Pricing', de: 'Preise', fr: 'Tarifs', es: 'Precios', it: 'Prezzi', pt: 'Preços'
    },
    nav_cta: {
        en: 'Get the App', de: 'App holen', fr: 'Télécharger', es: 'Obtener App', it: 'Scarica App', pt: 'Baixar App'
    },

    // Hero Section
    hero_tag: {
        en: 'AI-Powered', de: 'KI-gestützt', fr: 'Propulsé par IA', es: 'Impulsado por IA', it: 'Basato su IA', pt: 'Com IA'
    },
    hero_title_1: {
        en: 'Paper to', de: 'Papier zu', fr: 'Papier vers', es: 'Papel a', it: 'Carta in', pt: 'Papel para'
    },
    hero_title_2: {
        en: 'Digital Forms', de: 'Digitalen Formularen', fr: 'Formulaires Numériques', es: 'Formularios Digitales', it: 'Moduli Digitali', pt: 'Formulários Digitais'
    },
    hero_title_3: {
        en: 'in Seconds', de: 'in Sekunden', fr: 'en Secondes', es: 'en Segundos', it: 'in Secondi', pt: 'em Segundos'
    },
    hero_desc: {
        en: 'Transform handwritten documents into structured digital data. Our intelligent OCR technology works offline and integrates seamlessly with Google Forms and Microsoft Forms.',
        de: 'Verwandeln Sie handschriftliche Dokumente in strukturierte digitale Daten. Unsere intelligente OCR-Technologie funktioniert offline und integriert sich nahtlos mit Google Forms und Microsoft Forms.',
        fr: 'Transformez les documents manuscrits en données numériques structurées. Notre technologie OCR intelligente fonctionne hors ligne et s\'intègre parfaitement à Google Forms et Microsoft Forms.',
        es: 'Transforma documentos escritos a mano en datos digitales estructurados. Nuestra tecnología OCR inteligente funciona sin conexión y se integra perfectamente con Google Forms y Microsoft Forms.',
        it: 'Trasforma documenti scritti a mano in dati digitali strutturati. La nostra tecnologia OCR intelligente funziona offline e si integra perfettamente con Google Forms e Microsoft Forms.',
        pt: 'Transforme documentos manuscritos em dados digitais estruturados. Nossa tecnologia OCR inteligente funciona offline e se integra perfeitamente ao Google Forms e Microsoft Forms.'
    },
    hero_cta_primary: {
        en: 'Get Started Free', de: 'Kostenlos starten', fr: 'Commencer gratuitement', es: 'Comenzar gratis', it: 'Inizia gratis', pt: 'Comece grátis'
    },
    hero_cta_secondary: {
        en: 'See How It Works', de: 'So funktioniert es', fr: 'Voir comment ça marche', es: 'Ver cómo funciona', it: 'Scopri come funziona', pt: 'Veja como funciona'
    },

    // Features Section
    features_tag: {
        en: 'Features', de: 'Funktionen', fr: 'Fonctionnalités', es: 'Características', it: 'Funzionalità', pt: 'Recursos'
    },
    features_title_1: {
        en: 'Built for', de: 'Entwickelt für', fr: 'Conçu pour', es: 'Diseñado para', it: 'Progettato per', pt: 'Feito para'
    },
    features_title_2: {
        en: 'Business', de: 'Geschäfts', fr: 'Entreprise', es: 'Negocios', it: 'Business', pt: 'Negócios'
    },
    features_title_3: {
        en: 'Efficiency', de: 'Effizienz', fr: 'Efficacité', es: 'Eficiencia', it: 'Efficienza', pt: 'Eficiência'
    },
    features_desc: {
        en: 'Eliminate manual data entry. Our AI understands context, handwriting, and form structures automatically.',
        de: 'Eliminieren Sie manuelle Dateneingabe. Unsere KI versteht Kontext, Handschrift und Formularstrukturen automatisch.',
        fr: 'Éliminez la saisie manuelle des données. Notre IA comprend automatiquement le contexte, l\'écriture manuscrite et les structures de formulaires.',
        es: 'Elimine la entrada manual de datos. Nuestra IA entiende automáticamente el contexto, la escritura a mano y las estructuras de formularios.',
        it: 'Elimina l\'inserimento manuale dei dati. La nostra IA comprende automaticamente contesto, scrittura a mano e strutture dei moduli.',
        pt: 'Elimine a entrada manual de dados. Nossa IA entende automaticamente contexto, escrita à mão e estruturas de formulários.'
    },
    feature_scan_title: {
        en: 'Smart Scanning', de: 'Intelligentes Scannen', fr: 'Numérisation intelligente', es: 'Escaneo inteligente', it: 'Scansione intelligente', pt: 'Digitalização inteligente'
    },
    feature_scan_desc: {
        en: 'Advanced camera integration with automatic edge detection and perspective correction.',
        de: 'Fortschrittliche Kameraintegration mit automatischer Kantenerkennung und Perspektivkorrektur.',
        fr: 'Intégration de caméra avancée avec détection automatique des bords et correction de perspective.',
        es: 'Integración de cámara avanzada con detección automática de bordes y corrección de perspectiva.',
        it: 'Integrazione fotocamera avanzata con rilevamento automatico dei bordi e correzione della prospettiva.',
        pt: 'Integração de câmera avançada com detecção automática de bordas e correção de perspectiva.'
    },
    feature_ocr_title: {
        en: 'Intelligent OCR', de: 'Intelligentes OCR', fr: 'OCR intelligent', es: 'OCR inteligente', it: 'OCR intelligente', pt: 'OCR inteligente'
    },
    feature_ocr_desc: {
        en: 'AI-powered text recognition that works offline with support for multiple languages.',
        de: 'KI-gestützte Texterkennung, die offline funktioniert und mehrere Sprachen unterstützt.',
        fr: 'Reconnaissance de texte alimentée par IA qui fonctionne hors ligne avec support multilingue.',
        es: 'Reconocimiento de texto impulsado por IA que funciona sin conexión con soporte para múltiples idiomas.',
        it: 'Riconoscimento del testo basato su IA che funziona offline con supporto per più lingue.',
        pt: 'Reconhecimento de texto com IA que funciona offline com suporte para vários idiomas.'
    },
    feature_mapping_title: {
        en: 'Smart Field Mapping', de: 'Intelligente Feldzuordnung', fr: 'Mappage intelligent', es: 'Mapeo inteligente', it: 'Mappatura intelligente', pt: 'Mapeamento inteligente'
    },
    feature_mapping_desc: {
        en: 'Automatically matches extracted data to your form fields using fuzzy logic and neural networks.',
        de: 'Ordnet extrahierte Daten automatisch Ihren Formularfeldern zu mit Fuzzy-Logik und neuronalen Netzen.',
        fr: 'Associe automatiquement les données extraites à vos champs de formulaire avec logique floue et réseaux neuronaux.',
        es: 'Asocia automáticamente los datos extraídos a los campos de formulario usando lógica difusa y redes neuronales.',
        it: 'Associa automaticamente i dati estratti ai campi del modulo usando logica fuzzy e reti neurali.',
        pt: 'Associa automaticamente os dados extraídos aos campos do formulário usando lógica fuzzy e redes neurais.'
    },
    feature_integration_title: {
        en: 'Seamless Integration', de: 'Nahtlose Integration', fr: 'Intégration transparente', es: 'Integración perfecta', it: 'Integrazione perfetta', pt: 'Integração perfeita'
    },
    feature_integration_desc: {
        en: 'Native support for Google Forms and Microsoft Forms. Export data where you need it.',
        de: 'Native Unterstützung für Google Forms und Microsoft Forms. Exportieren Sie Daten, wo Sie sie brauchen.',
        fr: 'Support natif pour Google Forms et Microsoft Forms. Exportez les données où vous en avez besoin.',
        es: 'Soporte nativo para Google Forms y Microsoft Forms. Exporte datos donde los necesite.',
        it: 'Supporto nativo per Google Forms e Microsoft Forms. Esporta i dati dove ti servono.',
        pt: 'Suporte nativo para Google Forms e Microsoft Forms. Exporte dados onde precisar.'
    },
    feature_privacy_title: {
        en: 'Privacy First', de: 'Datenschutz zuerst', fr: 'Confidentialité d\'abord', es: 'Privacidad primero', it: 'Privacy prima di tutto', pt: 'Privacidade em primeiro lugar'
    },
    feature_privacy_desc: {
        en: 'All processing happens on-device. Your sensitive documents never leave your phone.',
        de: 'Alle Verarbeitung erfolgt auf dem Gerät. Ihre sensiblen Dokumente verlassen nie Ihr Telefon.',
        fr: 'Tout le traitement se fait sur l\'appareil. Vos documents sensibles ne quittent jamais votre téléphone.',
        es: 'Todo el procesamiento ocurre en el dispositivo. Sus documentos sensibles nunca salen de su teléfono.',
        it: 'Tutta l\'elaborazione avviene sul dispositivo. I tuoi documenti sensibili non lasciano mai il telefono.',
        pt: 'Todo o processamento acontece no dispositivo. Seus documentos sensíveis nunca saem do seu telefone.'
    },
    feature_offline_title: {
        en: 'Offline Ready', de: 'Offline-fähig', fr: 'Fonctionne hors ligne', es: 'Funciona sin conexión', it: 'Funziona offline', pt: 'Funciona offline'
    },
    feature_offline_desc: {
        en: 'Works without internet connection. Sync when you\'re back online.',
        de: 'Funktioniert ohne Internetverbindung. Synchronisieren Sie, wenn Sie wieder online sind.',
        fr: 'Fonctionne sans connexion internet. Synchronisez quand vous êtes de nouveau en ligne.',
        es: 'Funciona sin conexión a internet. Sincronice cuando vuelva a estar en línea.',
        it: 'Funziona senza connessione internet. Sincronizza quando torni online.',
        pt: 'Funciona sem conexão com a internet. Sincronize quando estiver online novamente.'
    },

    // How It Works
    process_tag: {
        en: 'Process', de: 'Prozess', fr: 'Processus', es: 'Proceso', it: 'Processo', pt: 'Processo'
    },
    process_title_1: {
        en: 'How It', de: 'So', fr: 'Comment ça', es: 'Cómo', it: 'Come', pt: 'Como'
    },
    process_title_2: {
        en: 'Works', de: 'funktioniert es', fr: 'marche', es: 'funciona', it: 'funziona', pt: 'funciona'
    },
    process_desc: {
        en: 'Three simple steps to digitize any document.',
        de: 'Drei einfache Schritte, um jedes Dokument zu digitalisieren.',
        fr: 'Trois étapes simples pour numériser n\'importe quel document.',
        es: 'Tres pasos simples para digitalizar cualquier documento.',
        it: 'Tre semplici passaggi per digitalizzare qualsiasi documento.',
        pt: 'Três passos simples para digitalizar qualquer documento.'
    },
    step1_title: {
        en: 'Scan Document', de: 'Dokument scannen', fr: 'Scanner le document', es: 'Escanear documento', it: 'Scansiona documento', pt: 'Digitalizar documento'
    },
    step1_desc: {
        en: 'Use your camera or import from gallery. Our AI handles any lighting condition.',
        de: 'Verwenden Sie Ihre Kamera oder importieren Sie aus der Galerie. Unsere KI bewältigt jede Lichtsituation.',
        fr: 'Utilisez votre caméra ou importez depuis la galerie. Notre IA gère toutes les conditions d\'éclairage.',
        es: 'Use su cámara o importe desde la galería. Nuestra IA maneja cualquier condición de iluminación.',
        it: 'Usa la fotocamera o importa dalla galleria. La nostra IA gestisce qualsiasi condizione di luce.',
        pt: 'Use sua câmera ou importe da galeria. Nossa IA lida com qualquer condição de iluminação.'
    },
    step2_title: {
        en: 'Auto-Extract Data', de: 'Daten automatisch extrahieren', fr: 'Extraction automatique', es: 'Extracción automática', it: 'Estrazione automatica', pt: 'Extração automática'
    },
    step2_desc: {
        en: 'Text is recognized and intelligently mapped to your form fields.',
        de: 'Text wird erkannt und intelligent Ihren Formularfeldern zugeordnet.',
        fr: 'Le texte est reconnu et mappé intelligemment à vos champs de formulaire.',
        es: 'El texto se reconoce y se mapea inteligentemente a los campos de su formulario.',
        it: 'Il testo viene riconosciuto e mappato intelligentemente ai campi del modulo.',
        pt: 'O texto é reconhecido e mapeado inteligentemente para seus campos de formulário.'
    },
    step3_title: {
        en: 'Review & Submit', de: 'Prüfen & Absenden', fr: 'Vérifier & Soumettre', es: 'Revisar y Enviar', it: 'Rivedi e Invia', pt: 'Revisar e Enviar'
    },
    step3_desc: {
        en: 'Verify the results and submit directly to Google or Microsoft Forms.',
        de: 'Überprüfen Sie die Ergebnisse und senden Sie direkt an Google oder Microsoft Forms.',
        fr: 'Vérifiez les résultats et soumettez directement à Google ou Microsoft Forms.',
        es: 'Verifique los resultados y envíe directamente a Google o Microsoft Forms.',
        it: 'Verifica i risultati e invia direttamente a Google o Microsoft Forms.',
        pt: 'Verifique os resultados e envie diretamente para Google ou Microsoft Forms.'
    },

    // Download Section
    download_tag: {
        en: 'Download', de: 'Download', fr: 'Télécharger', es: 'Descargar', it: 'Scarica', pt: 'Baixar'
    },
    download_title_1: {
        en: 'Ready to Go', de: 'Bereit für', fr: 'Prêt à passer au', es: 'Listo para', it: 'Pronto per', pt: 'Pronto para'
    },
    download_title_2: {
        en: 'Paperless', de: 'Papierlos', fr: 'Zéro Papier', es: 'Sin Papel', it: 'Senza Carta', pt: 'Sem Papel'
    },
    download_desc: {
        en: 'Download Paper2Form and start digitizing your documents today. Free to try, no credit card required.',
        de: 'Laden Sie Paper2Form herunter und beginnen Sie noch heute mit der Digitalisierung. Kostenlos testen, keine Kreditkarte erforderlich.',
        fr: 'Téléchargez Paper2Form et commencez à numériser vos documents dès aujourd\'hui. Essai gratuit, sans carte de crédit.',
        es: 'Descargue Paper2Form y comience a digitalizar sus documentos hoy. Prueba gratuita, sin tarjeta de crédito.',
        it: 'Scarica Paper2Form e inizia a digitalizzare i tuoi documenti oggi. Prova gratuita, nessuna carta di credito richiesta.',
        pt: 'Baixe Paper2Form e comece a digitalizar seus documentos hoje. Teste grátis, sem cartão de crédito.'
    },
    store_apple_label: {
        en: 'Download on the', de: 'Laden im', fr: 'Télécharger sur', es: 'Descargar en', it: 'Scarica su', pt: 'Baixar na'
    },
    store_apple_name: {
        en: 'App Store', de: 'App Store', fr: 'App Store', es: 'App Store', it: 'App Store', pt: 'App Store'
    },
    store_google_label: {
        en: 'Get it on', de: 'Jetzt bei', fr: 'Disponible sur', es: 'Disponible en', it: 'Disponibile su', pt: 'Disponível no'
    },
    store_google_name: {
        en: 'Google Play', de: 'Google Play', fr: 'Google Play', es: 'Google Play', it: 'Google Play', pt: 'Google Play'
    },

    // Footer
    footer_brand_desc: {
        en: 'Transform paper documents into digital forms with AI-powered precision.',
        de: 'Verwandeln Sie Papierdokumente mit KI-gestützter Präzision in digitale Formulare.',
        fr: 'Transformez les documents papier en formulaires numériques avec une précision alimentée par l\'IA.',
        es: 'Transforme documentos en papel en formularios digitales con precisión impulsada por IA.',
        it: 'Trasforma documenti cartacei in moduli digitali con precisione basata su IA.',
        pt: 'Transforme documentos em papel em formulários digitais com precisão baseada em IA.'
    },
    footer_product: {
        en: 'Product', de: 'Produkt', fr: 'Produit', es: 'Producto', it: 'Prodotto', pt: 'Produto'
    },
    footer_features: {
        en: 'Features', de: 'Funktionen', fr: 'Fonctionnalités', es: 'Características', it: 'Funzionalità', pt: 'Recursos'
    },
    footer_download: {
        en: 'Download', de: 'Download', fr: 'Télécharger', es: 'Descargar', it: 'Scarica', pt: 'Baixar'
    },
    footer_support: {
        en: 'Support', de: 'Support', fr: 'Support', es: 'Soporte', it: 'Supporto', pt: 'Suporte'
    },
    footer_help: {
        en: 'Help Center', de: 'Hilfe', fr: 'Centre d\'aide', es: 'Centro de ayuda', it: 'Centro assistenza', pt: 'Central de ajuda'
    },
    footer_contact: {
        en: 'Contact', de: 'Kontakt', fr: 'Contact', es: 'Contacto', it: 'Contatto', pt: 'Contato'
    },
    footer_legal: {
        en: 'Legal', de: 'Rechtliches', fr: 'Mentions légales', es: 'Legal', it: 'Legale', pt: 'Legal'
    },
    footer_privacy: {
        en: 'Privacy Policy', de: 'Datenschutz', fr: 'Politique de confidentialité', es: 'Política de privacidad', it: 'Informativa sulla privacy', pt: 'Política de privacidade'
    },
    footer_terms: {
        en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: 'Conditions d\'utilisation', es: 'Términos de servicio', it: 'Termini di servizio', pt: 'Termos de serviço'
    },
    footer_imprint: {
        en: 'Imprint', de: 'Impressum', fr: 'Mentions légales', es: 'Aviso legal', it: 'Impronta', pt: 'Impressão'
    },
    footer_copyright: {
        en: '© 2026 Paper2Form. All rights reserved.',
        de: '© 2026 Paper2Form. Alle Rechte vorbehalten.',
        fr: '© 2026 Paper2Form. Tous droits réservés.',
        es: '© 2026 Paper2Form. Todos los derechos reservados.',
        it: '© 2026 Paper2Form. Tutti i diritti riservati.',
        pt: '© 2026 Paper2Form. Todos os direitos reservados.'
    },

    // Privacy Page
    privacy_tag: {
        en: 'Legal', de: 'Rechtliches', fr: 'Légal', es: 'Legal', it: 'Legale', pt: 'Legal'
    },
    privacy_title: {
        en: 'Privacy Policy', de: 'Datenschutz', fr: 'Politique de confidentialité', es: 'Política de privacidad', it: 'Informativa sulla privacy', pt: 'Política de privacidade'
    },
    privacy_updated: {
        en: 'Last updated: February 2026', de: 'Zuletzt aktualisiert: Februar 2026', fr: 'Dernière mise à jour: Février 2026', es: 'Última actualización: Febrero 2026', it: 'Ultimo aggiornamento: Febbraio 2026', pt: 'Última atualização: Fevereiro 2026'
    },

    // Terms Page
    terms_tag: {
        en: 'Legal', de: 'Rechtliches', fr: 'Légal', es: 'Legal', it: 'Legale', pt: 'Legal'
    },
    terms_title: {
        en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: 'Conditions d\'utilisation', es: 'Términos de servicio', it: 'Termini di servizio', pt: 'Termos de serviço'
    },
    terms_updated: {
        en: 'Last updated: February 2026', de: 'Zuletzt aktualisiert: Februar 2026', fr: 'Dernière mise à jour: Février 2026', es: 'Última actualización: Febrero 2026', it: 'Ultimo aggiornamento: Febbraio 2026', pt: 'Última atualização: Fevereiro 2026'
    },

    // Imprint Page
    imprint_tag: {
        en: 'Legal', de: 'Rechtliches', fr: 'Légal', es: 'Legal', it: 'Legale', pt: 'Legal'
    },
    imprint_title: {
        en: 'Imprint', de: 'Impressum', fr: 'Mentions légales', es: 'Aviso legal', it: 'Impronta', pt: 'Impressão'
    },
    imprint_subtitle: {
        en: 'Legal Notice', de: 'Impressum', fr: 'Mentions légales', es: 'Aviso legal', it: 'Avviso legale', pt: 'Aviso legal'
    },
    imprint_info_title: {
        en: 'Information according to § 5 TMG', de: 'Angaben gemäß § 5 TMG', fr: 'Informations conformément au § 5 TMG', es: 'Información según § 5 TMG', it: 'Informazioni secondo § 5 TMG', pt: 'Informações de acordo com § 5 TMG'
    },
    imprint_contact: {
        en: 'Contact', de: 'Kontakt', fr: 'Contact', es: 'Contacto', it: 'Contatto', pt: 'Contato'
    },
    imprint_email: {
        en: 'Email', de: 'E-Mail', fr: 'E-mail', es: 'Correo electrónico', it: 'E-mail', pt: 'E-mail'
    },
    imprint_responsible: {
        en: 'Responsible for content', de: 'Verantwortlich für den Inhalt', fr: 'Responsable du contenu', es: 'Responsable del contenido', it: 'Responsabile del contenuto', pt: 'Responsável pelo conteúdo'
    },
    imprint_dispute_title: {
        en: 'EU Dispute Resolution', de: 'EU-Streitschlichtung', fr: 'Résolution des litiges UE', es: 'Resolución de disputas UE', it: 'Risoluzione delle controversie UE', pt: 'Resolução de disputas UE'
    },
    imprint_dispute_text: {
        en: 'Online dispute resolution platform:', de: 'Plattform zur Online-Streitbeilegung:', fr: 'Plateforme de règlement des litiges en ligne:', es: 'Plataforma de resolución de disputas en línea:', it: 'Piattaforma per la risoluzione delle controversie online:', pt: 'Plataforma de resolução de disputas online:'
    },
    imprint_consumer_title: {
        en: 'Consumer Dispute Resolution', de: 'Verbraucherstreitbeilegung', fr: 'Règlement des litiges consommateurs', es: 'Resolución de disputas con consumidores', it: 'Risoluzione delle controversie dei consumatori', pt: 'Resolução de disputas do consumidor'
    },
    imprint_consumer_text: {
        en: 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
        de: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        fr: 'Nous ne sommes pas disposés ou obligés de participer à des procédures de règlement des litiges devant une commission d\'arbitrage des consommateurs.',
        es: 'No estamos dispuestos ni obligados a participar en procedimientos de resolución de disputas ante una junta de arbitraje de consumidores.',
        it: 'Non siamo disposti o obbligati a partecipare a procedimenti di risoluzione delle controversie davanti a un collegio arbitrale dei consumatori.',
        pt: 'Não estamos dispostos ou obrigados a participar de procedimentos de resolução de disputas perante um conselho de arbitragem do consumidor.'
    },

    // Language Selector
    lang_select: {
        en: 'Language', de: 'Sprache', fr: 'Langue', es: 'Idioma', it: 'Lingua', pt: 'Idioma'
    }
};

// Language names for the selector
const LANGUAGE_NAMES = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
    it: 'Italiano',
    pt: 'Português'
};

// Current language (default to browser language or English)
let currentLang = localStorage.getItem('p2f_lang') ||
    (navigator.language.split('-')[0] in TRANSLATIONS.nav_home ? navigator.language.split('-')[0] : 'en');

// Get translation
function t(key) {
    if (TRANSLATIONS[key] && TRANSLATIONS[key][currentLang]) {
        return TRANSLATIONS[key][currentLang];
    }
    // Fallback to English
    if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
        return TRANSLATIONS[key]['en'];
    }
    return key;
}

// Set language
function setLanguage(lang) {
    if (LANGUAGE_NAMES[lang]) {
        currentLang = lang;
        localStorage.setItem('p2f_lang', lang);
        document.documentElement.lang = lang;
        applyTranslations();
        updateLanguageSelector();
    }
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Handle placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Handle titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });
}

// Update language selector display
function updateLanguageSelector() {
    const selector = document.getElementById('langSelector');
    if (selector) {
        selector.value = currentLang;
    }

    const currentLangDisplay = document.getElementById('currentLang');
    if (currentLangDisplay) {
        currentLangDisplay.textContent = LANGUAGE_NAMES[currentLang];
    }
}

// Create language selector HTML
function createLanguageSelector() {
    const container = document.createElement('div');
    container.className = 'lang-selector';
    container.innerHTML = `
        <select id="langSelector" aria-label="Select language">
            ${Object.entries(LANGUAGE_NAMES).map(([code, name]) =>
        `<option value="${code}" ${code === currentLang ? 'selected' : ''}>${name}</option>`
    ).join('')}
        </select>
    `;

    const select = container.querySelector('select');
    select.addEventListener('change', (e) => setLanguage(e.target.value));

    return container;
}

// Initialize i18n on page load
function initI18n() {
    // Add language selector to nav
    const navInner = document.querySelector('.nav-inner');
    if (navInner) {
        const langSelector = createLanguageSelector();
        const navCta = navInner.querySelector('.nav-cta');
        if (navCta) {
            navInner.insertBefore(langSelector, navCta);
        } else {
            navInner.appendChild(langSelector);
        }
    }

    // Set document language
    document.documentElement.lang = currentLang;

    // Apply translations
    applyTranslations();
}

// Export for use
window.P2F_i18n = {
    t,
    setLanguage,
    getCurrentLang: () => currentLang,
    TRANSLATIONS,
    LANGUAGE_NAMES
};
