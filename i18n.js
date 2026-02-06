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

    // Tutorial Page
    tutorial_tag: {
        en: 'Learn', de: 'Lernen', fr: 'Apprendre', es: 'Aprender', it: 'Impara', pt: 'Aprenda'
    },
    tutorial_title: {
        en: 'Getting Started', de: 'Erste Schritte', fr: 'Premiers pas', es: 'Primeros pasos', it: 'Per iniziare', pt: 'Primeiros passos'
    },
    tutorial_subtitle: {
        en: 'Master Paper2Form in five simple steps. Click each step to expand.',
        de: 'Meistern Sie Paper2Form in fünf einfachen Schritten. Klicken Sie auf jeden Schritt zum Erweitern.',
        fr: 'Maîtrisez Paper2Form en cinq étapes simples. Cliquez sur chaque étape pour la développer.',
        es: 'Domine Paper2Form en cinco sencillos pasos. Haga clic en cada paso para expandir.',
        it: 'Padroneggia Paper2Form in cinque semplici passaggi. Clicca su ogni passaggio per espanderlo.',
        pt: 'Domine Paper2Form em cinco passos simples. Clique em cada passo para expandir.'
    },
    tutorial_step1_title: {
        en: 'Download & Install', de: 'Herunterladen & Installieren', fr: 'Télécharger et installer', es: 'Descargar e instalar', it: 'Scarica e installa', pt: 'Baixar e instalar'
    },
    tutorial_step1_desc: {
        en: 'Get Paper2Form from the App Store or Google Play. Installation takes just seconds.',
        de: 'Holen Sie sich Paper2Form aus dem App Store oder Google Play. Die Installation dauert nur Sekunden.',
        fr: 'Obtenez Paper2Form sur l\'App Store ou Google Play. L\'installation ne prend que quelques secondes.',
        es: 'Obtenga Paper2Form desde App Store o Google Play. La instalación solo toma segundos.',
        it: 'Scarica Paper2Form dall\'App Store o Google Play. L\'installazione richiede solo pochi secondi.',
        pt: 'Baixe Paper2Form na App Store ou Google Play. A instalação leva apenas segundos.'
    },
    tutorial_step2_title: {
        en: 'Connect Your Forms', de: 'Formulare verbinden', fr: 'Connectez vos formulaires', es: 'Conecte sus formularios', it: 'Collega i tuoi moduli', pt: 'Conecte seus formulários'
    },
    tutorial_step2_desc: {
        en: 'Link your Google or Microsoft account to access your forms securely.',
        de: 'Verbinden Sie Ihr Google- oder Microsoft-Konto, um sicher auf Ihre Formulare zuzugreifen.',
        fr: 'Liez votre compte Google ou Microsoft pour accéder à vos formulaires en toute sécurité.',
        es: 'Vincule su cuenta de Google o Microsoft para acceder a sus formularios de forma segura.',
        it: 'Collega il tuo account Google o Microsoft per accedere ai tuoi moduli in modo sicuro.',
        pt: 'Vincule sua conta Google ou Microsoft para acessar seus formulários com segurança.'
    },
    tutorial_step3_title: {
        en: 'Scan Your Document', de: 'Dokument scannen', fr: 'Numérisez votre document', es: 'Escanee su documento', it: 'Scansiona il documento', pt: 'Digitalize seu documento'
    },
    tutorial_step3_desc: {
        en: 'Use your camera to capture any paper document. Our AI handles the rest.',
        de: 'Verwenden Sie Ihre Kamera, um jedes Papierdokument zu erfassen. Unsere KI erledigt den Rest.',
        fr: 'Utilisez votre appareil photo pour capturer n\'importe quel document papier. Notre IA s\'occupe du reste.',
        es: 'Use su cámara para capturar cualquier documento en papel. Nuestra IA se encarga del resto.',
        it: 'Usa la fotocamera per catturare qualsiasi documento cartaceo. La nostra IA fa il resto.',
        pt: 'Use sua câmera para capturar qualquer documento em papel. Nossa IA cuida do resto.'
    },
    tutorial_step4_title: {
        en: 'Review Field Mapping', de: 'Feldzuordnung prüfen', fr: 'Vérifier le mappage', es: 'Revisar mapeo', it: 'Rivedi mappatura', pt: 'Revisar mapeamento'
    },
    tutorial_step4_desc: {
        en: 'Our AI automatically maps extracted text to your form fields.',
        de: 'Unsere KI ordnet den extrahierten Text automatisch Ihren Formularfeldern zu.',
        fr: 'Notre IA associe automatiquement le texte extrait à vos champs de formulaire.',
        es: 'Nuestra IA mapea automáticamente el texto extraído a los campos de su formulario.',
        it: 'La nostra IA mappa automaticamente il testo estratto ai campi del modulo.',
        pt: 'Nossa IA mapeia automaticamente o texto extraído para os campos do formulário.'
    },
    tutorial_step5_title: {
        en: 'Submit & Done', de: 'Absenden & Fertig', fr: 'Soumettre et terminé', es: 'Enviar y listo', it: 'Invia e fatto', pt: 'Enviar e pronto'
    },
    tutorial_step5_desc: {
        en: 'When satisfied, submit directly to your form. The response is recorded instantly.',
        de: 'Wenn Sie zufrieden sind, senden Sie direkt an Ihr Formular. Die Antwort wird sofort aufgezeichnet.',
        fr: 'Une fois satisfait, soumettez directement à votre formulaire. La réponse est enregistrée instantanément.',
        es: 'Cuando esté satisfecho, envíe directamente a su formulario. La respuesta se registra al instante.',
        it: 'Quando sei soddisfatto, invia direttamente al modulo. La risposta viene registrata istantaneamente.',
        pt: 'Quando satisfeito, envie diretamente para seu formulário. A resposta é registrada instantaneamente.'
    },
    tutorial_tips_tag: {
        en: 'Tips', de: 'Tipps', fr: 'Conseils', es: 'Consejos', it: 'Suggerimenti', pt: 'Dicas'
    },
    tutorial_tips_title: {
        en: 'Get the Best Results', de: 'Beste Ergebnisse erzielen', fr: 'Obtenez les meilleurs résultats', es: 'Obtenga los mejores resultados', it: 'Ottieni i migliori risultati', pt: 'Obtenha os melhores resultados'
    },
    tutorial_tip1_title: {
        en: 'Good Lighting', de: 'Gute Beleuchtung', fr: 'Bon éclairage', es: 'Buena iluminación', it: 'Buona illuminazione', pt: 'Boa iluminação'
    },
    tutorial_tip1_desc: {
        en: 'Natural light works best. Avoid harsh shadows and reflections.',
        de: 'Natürliches Licht funktioniert am besten. Vermeiden Sie harte Schatten und Reflexionen.',
        fr: 'La lumière naturelle fonctionne mieux. Évitez les ombres dures et les reflets.',
        es: 'La luz natural funciona mejor. Evite sombras duras y reflejos.',
        it: 'La luce naturale funziona meglio. Evita ombre dure e riflessi.',
        pt: 'A luz natural funciona melhor. Evite sombras fortes e reflexos.'
    },
    tutorial_tip2_title: {
        en: 'Flat Surface', de: 'Flache Oberfläche', fr: 'Surface plane', es: 'Superficie plana', it: 'Superficie piana', pt: 'Superfície plana'
    },
    tutorial_tip2_desc: {
        en: 'Place documents on a contrasting surface for best edge detection.',
        de: 'Legen Sie Dokumente auf eine kontrastierende Oberfläche für beste Kantenerkennung.',
        fr: 'Placez les documents sur une surface contrastante pour une meilleure détection des bords.',
        es: 'Coloque documentos sobre una superficie contrastante para mejor detección de bordes.',
        it: 'Posiziona i documenti su una superficie contrastante per il miglior rilevamento dei bordi.',
        pt: 'Coloque documentos em uma superfície contrastante para melhor detecção de bordas.'
    },
    tutorial_tip3_title: {
        en: 'Batch Scanning', de: 'Stapel-Scannen', fr: 'Numérisation par lots', es: 'Escaneo por lotes', it: 'Scansione batch', pt: 'Digitalização em lote'
    },
    tutorial_tip3_desc: {
        en: 'Process multiple pages in succession for efficient bulk work.',
        de: 'Verarbeiten Sie mehrere Seiten nacheinander für effiziente Massenarbeit.',
        fr: 'Traitez plusieurs pages successivement pour un travail en masse efficace.',
        es: 'Procese múltiples páginas sucesivamente para trabajo en masa eficiente.',
        it: 'Elabora più pagine in successione per un lavoro di massa efficiente.',
        pt: 'Processe várias páginas em sucessão para trabalho em massa eficiente.'
    },
    tutorial_cta_title: {
        en: 'Ready to Start?', de: 'Bereit zu starten?', fr: 'Prêt à commencer?', es: '¿Listo para comenzar?', it: 'Pronto per iniziare?', pt: 'Pronto para começar?'
    },
    tutorial_cta_desc: {
        en: 'Download Paper2Form and digitize your first document today.',
        de: 'Laden Sie Paper2Form herunter und digitalisieren Sie noch heute Ihr erstes Dokument.',
        fr: 'Téléchargez Paper2Form et numérisez votre premier document dès aujourd\'hui.',
        es: 'Descargue Paper2Form y digitalice su primer documento hoy.',
        it: 'Scarica Paper2Form e digitalizza il tuo primo documento oggi.',
        pt: 'Baixe Paper2Form e digitalize seu primeiro documento hoje.'
    },
    tutorial_cta_button: {
        en: 'Download Free', de: 'Kostenlos herunterladen', fr: 'Télécharger gratuitement', es: 'Descargar gratis', it: 'Scarica gratis', pt: 'Baixar grátis'
    },

    // Pricing Page
    pricing_tag: {
        en: 'Plans', de: 'Pläne', fr: 'Forfaits', es: 'Planes', it: 'Piani', pt: 'Planos'
    },
    pricing_title: {
        en: 'Simple, Transparent Pricing', de: 'Einfache, transparente Preise', fr: 'Tarification simple et transparente', es: 'Precios simples y transparentes', it: 'Prezzi semplici e trasparenti', pt: 'Preços simples e transparentes'
    },
    pricing_subtitle: {
        en: 'Start free, upgrade when you need more.',
        de: 'Starten Sie kostenlos, upgraden Sie bei Bedarf.',
        fr: 'Commencez gratuitement, passez à la version supérieure si nécessaire.',
        es: 'Comience gratis, actualice cuando necesite más.',
        it: 'Inizia gratis, aggiorna quando hai bisogno di più.',
        pt: 'Comece grátis, faça upgrade quando precisar de mais.'
    },
    pricing_free_name: {
        en: 'Free', de: 'Kostenlos', fr: 'Gratuit', es: 'Gratis', it: 'Gratis', pt: 'Grátis'
    },
    pricing_free_desc: {
        en: 'Get started with the basics',
        de: 'Starten Sie mit den Grundlagen',
        fr: 'Commencez avec les bases',
        es: 'Comience con lo básico',
        it: 'Inizia con le basi',
        pt: 'Comece com o básico'
    },
    pricing_free_f1: {
        en: '5 scans per month', de: '5 Scans pro Monat', fr: '5 numérisations par mois', es: '5 escaneos por mes', it: '5 scansioni al mese', pt: '5 digitalizações por mês'
    },
    pricing_free_f2: {
        en: 'Google Forms integration', de: 'Google Forms Integration', fr: 'Intégration Google Forms', es: 'Integración con Google Forms', it: 'Integrazione Google Forms', pt: 'Integração Google Forms'
    },
    pricing_free_f3: {
        en: 'Basic OCR recognition', de: 'Einfache OCR-Erkennung', fr: 'Reconnaissance OCR de base', es: 'Reconocimiento OCR básico', it: 'Riconoscimento OCR base', pt: 'Reconhecimento OCR básico'
    },
    pricing_free_f4: {
        en: 'Community support', de: 'Community-Support', fr: 'Support communautaire', es: 'Soporte comunitario', it: 'Supporto della community', pt: 'Suporte da comunidade'
    },
    pricing_pro_name: {
        en: 'Pro', de: 'Pro', fr: 'Pro', es: 'Pro', it: 'Pro', pt: 'Pro'
    },
    pricing_pro_badge: {
        en: 'Most Popular', de: 'Am beliebtesten', fr: 'Le plus populaire', es: 'Más popular', it: 'Più popolare', pt: 'Mais popular'
    },
    pricing_pro_desc: {
        en: 'For professionals and small teams',
        de: 'Für Profis und kleine Teams',
        fr: 'Pour les professionnels et petites équipes',
        es: 'Para profesionales y equipos pequeños',
        it: 'Per professionisti e piccoli team',
        pt: 'Para profissionais e pequenas equipes'
    },
    pricing_pro_f1: {
        en: 'Unlimited scans', de: 'Unbegrenzte Scans', fr: 'Numérisations illimitées', es: 'Escaneos ilimitados', it: 'Scansioni illimitate', pt: 'Digitalizações ilimitadas'
    },
    pricing_pro_f2: {
        en: 'Google + Microsoft Forms', de: 'Google + Microsoft Forms', fr: 'Google + Microsoft Forms', es: 'Google + Microsoft Forms', it: 'Google + Microsoft Forms', pt: 'Google + Microsoft Forms'
    },
    pricing_pro_f3: {
        en: 'Advanced AI recognition', de: 'Erweiterte KI-Erkennung', fr: 'Reconnaissance IA avancée', es: 'Reconocimiento IA avanzado', it: 'Riconoscimento IA avanzato', pt: 'Reconhecimento IA avançado'
    },
    pricing_pro_f4: {
        en: 'Batch processing', de: 'Stapelverarbeitung', fr: 'Traitement par lots', es: 'Procesamiento por lotes', it: 'Elaborazione batch', pt: 'Processamento em lote'
    },
    pricing_pro_f5: {
        en: 'Priority support', de: 'Prioritäts-Support', fr: 'Support prioritaire', es: 'Soporte prioritario', it: 'Supporto prioritario', pt: 'Suporte prioritário'
    },
    pricing_pro_cta: {
        en: 'Start Free Trial', de: 'Kostenlos testen', fr: 'Essai gratuit', es: 'Prueba gratis', it: 'Prova gratis', pt: 'Teste grátis'
    },
    pricing_enterprise_name: {
        en: 'Enterprise', de: 'Enterprise', fr: 'Entreprise', es: 'Empresarial', it: 'Enterprise', pt: 'Empresarial'
    },
    pricing_enterprise_price: {
        en: 'Custom', de: 'Individuell', fr: 'Sur mesure', es: 'Personalizado', it: 'Personalizzato', pt: 'Personalizado'
    },
    pricing_enterprise_desc: {
        en: 'For organizations with specific needs',
        de: 'Für Organisationen mit spezifischen Anforderungen',
        fr: 'Pour les organisations aux besoins spécifiques',
        es: 'Para organizaciones con necesidades específicas',
        it: 'Per organizzazioni con esigenze specifiche',
        pt: 'Para organizações com necessidades específicas'
    },
    pricing_enterprise_f1: {
        en: 'Everything in Pro', de: 'Alles aus Pro', fr: 'Tout dans Pro', es: 'Todo en Pro', it: 'Tutto in Pro', pt: 'Tudo do Pro'
    },
    pricing_enterprise_f2: {
        en: 'Custom integrations', de: 'Individuelle Integrationen', fr: 'Intégrations personnalisées', es: 'Integraciones personalizadas', it: 'Integrazioni personalizzate', pt: 'Integrações personalizadas'
    },
    pricing_enterprise_f3: {
        en: 'Dedicated support', de: 'Dedizierter Support', fr: 'Support dédié', es: 'Soporte dedicado', it: 'Supporto dedicato', pt: 'Suporte dedicado'
    },
    pricing_enterprise_f4: {
        en: 'SLA guarantee', de: 'SLA-Garantie', fr: 'Garantie SLA', es: 'Garantía SLA', it: 'Garanzia SLA', pt: 'Garantia SLA'
    },
    pricing_enterprise_f5: {
        en: 'Volume licensing', de: 'Volumenlizenzen', fr: 'Licences en volume', es: 'Licencias por volumen', it: 'Licenze volume', pt: 'Licenciamento por volume'
    },
    pricing_enterprise_cta: {
        en: 'Contact Sales', de: 'Vertrieb kontaktieren', fr: 'Contacter les ventes', es: 'Contactar ventas', it: 'Contatta vendite', pt: 'Contatar vendas'
    },
    pricing_faq_tag: {
        en: 'FAQ', de: 'FAQ', fr: 'FAQ', es: 'FAQ', it: 'FAQ', pt: 'FAQ'
    },
    pricing_faq_title: {
        en: 'Common Questions', de: 'Häufige Fragen', fr: 'Questions fréquentes', es: 'Preguntas frecuentes', it: 'Domande frequenti', pt: 'Perguntas frequentes'
    },
    pricing_faq1_q: {
        en: 'Can I cancel anytime?', de: 'Kann ich jederzeit kündigen?', fr: 'Puis-je annuler à tout moment?', es: '¿Puedo cancelar en cualquier momento?', it: 'Posso annullare in qualsiasi momento?', pt: 'Posso cancelar a qualquer momento?'
    },
    pricing_faq1_a: {
        en: 'Yes! You can cancel your subscription at any time. Your access continues until the end of your billing period.',
        de: 'Ja! Sie können Ihr Abonnement jederzeit kündigen. Ihr Zugang bleibt bis zum Ende Ihres Abrechnungszeitraums bestehen.',
        fr: 'Oui! Vous pouvez annuler votre abonnement à tout moment. Votre accès continue jusqu\'à la fin de votre période de facturation.',
        es: '¡Sí! Puede cancelar su suscripción en cualquier momento. Su acceso continúa hasta el final de su período de facturación.',
        it: 'Sì! Puoi annullare il tuo abbonamento in qualsiasi momento. Il tuo accesso continua fino alla fine del periodo di fatturazione.',
        pt: 'Sim! Você pode cancelar sua assinatura a qualquer momento. Seu acesso continua até o final do período de cobrança.'
    },
    pricing_faq2_q: {
        en: 'Is there a free trial?', de: 'Gibt es eine kostenlose Testversion?', fr: 'Y a-t-il un essai gratuit?', es: '¿Hay una prueba gratuita?', it: 'C\'è una prova gratuita?', pt: 'Há uma avaliação gratuita?'
    },
    pricing_faq2_a: {
        en: 'The Pro plan includes a 14-day free trial. No credit card required to start.',
        de: 'Der Pro-Plan beinhaltet eine 14-tägige kostenlose Testversion. Keine Kreditkarte erforderlich.',
        fr: 'Le forfait Pro comprend un essai gratuit de 14 jours. Aucune carte de crédit requise.',
        es: 'El plan Pro incluye una prueba gratuita de 14 días. No se requiere tarjeta de crédito.',
        it: 'Il piano Pro include una prova gratuita di 14 giorni. Nessuna carta di credito richiesta.',
        pt: 'O plano Pro inclui uma avaliação gratuita de 14 dias. Sem necessidade de cartão de crédito.'
    },
    pricing_faq3_q: {
        en: 'What payment methods do you accept?', de: 'Welche Zahlungsmethoden akzeptieren Sie?', fr: 'Quels modes de paiement acceptez-vous?', es: '¿Qué métodos de pago aceptan?', it: 'Quali metodi di pagamento accettate?', pt: 'Quais métodos de pagamento vocês aceitam?'
    },
    pricing_faq3_a: {
        en: 'Payments are handled through the App Store and Google Play, so you can use any payment method they support.',
        de: 'Zahlungen werden über den App Store und Google Play abgewickelt, sodass Sie jede von ihnen unterstützte Zahlungsmethode nutzen können.',
        fr: 'Les paiements sont gérés via l\'App Store et Google Play, vous pouvez donc utiliser n\'importe quel mode de paiement qu\'ils prennent en charge.',
        es: 'Los pagos se manejan a través de App Store y Google Play, por lo que puede usar cualquier método de pago que admitan.',
        it: 'I pagamenti sono gestiti tramite App Store e Google Play, quindi puoi usare qualsiasi metodo di pagamento che supportano.',
        pt: 'Os pagamentos são processados pela App Store e Google Play, então você pode usar qualquer método de pagamento que eles suportam.'
    },
    pricing_faq4_q: {
        en: 'Do you offer discounts for teams?', de: 'Bieten Sie Rabatte für Teams an?', fr: 'Offrez-vous des réductions pour les équipes?', es: '¿Ofrecen descuentos para equipos?', it: 'Offrite sconti per i team?', pt: 'Vocês oferecem descontos para equipes?'
    },
    pricing_faq4_a: {
        en: 'Yes! Contact us for volume licensing and team discounts.',
        de: 'Ja! Kontaktieren Sie uns für Volumenlizenzen und Teamrabatte.',
        fr: 'Oui! Contactez-nous pour les licences en volume et les réductions d\'équipe.',
        es: '¡Sí! Contáctenos para licencias por volumen y descuentos para equipos.',
        it: 'Sì! Contattaci per licenze volume e sconti per team.',
        pt: 'Sim! Entre em contato para licenciamento por volume e descontos para equipes.'
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
        const navToggle = document.getElementById('navToggle');

        // Insert before toggle if it exists (so toggle is rightmost on mobile)
        if (navToggle) {
            navInner.insertBefore(langSelector, navToggle);
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
