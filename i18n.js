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
    feature_ai_title: {
        en: 'AI Form Recognition', de: 'KI-Formularerkennung', fr: 'Reconnaissance IA', es: 'Reconocimiento con IA', it: 'Riconoscimento IA', pt: 'Reconhecimento com IA'
    },
    feature_ai_desc: {
        en: 'Gemini AI reads handwritten and printed text from your scanned documents.',
        de: 'Gemini KI liest handgeschriebenen und gedruckten Text aus Ihren gescannten Dokumenten.',
        fr: 'L\'IA Gemini lit le texte manuscrit et imprimé de vos documents numérisés.',
        es: 'La IA Gemini lee texto manuscrito e impreso de sus documentos escaneados.',
        it: 'L\'IA Gemini legge testo manoscritto e stampato dai tuoi documenti scansionati.',
        pt: 'A IA Gemini lê texto manuscrito e impresso de seus documentos digitalizados.'
    },
    feature_integration_title: {
        en: 'Google & Microsoft Forms', de: 'Google & Microsoft Forms', fr: 'Google & Microsoft Forms', es: 'Google y Microsoft Forms', it: 'Google e Microsoft Forms', pt: 'Google e Microsoft Forms'
    },
    feature_integration_desc: {
        en: 'Submit scanned data directly to your forms with one tap.',
        de: 'Senden Sie gescannte Daten mit einem Tippen direkt an Ihre Formulare.',
        fr: 'Soumettez les données numérisées directement à vos formulaires en un clic.',
        es: 'Envíe datos escaneados directamente a sus formularios con un toque.',
        it: 'Invia i dati scansionati direttamente ai tuoi moduli con un tocco.',
        pt: 'Envie dados digitalizados diretamente para seus formulários com um toque.'
    },
    feature_batch_title: {
        en: 'Batch Scanning', de: 'Stapelverarbeitung', fr: 'Numérisation par lot', es: 'Escaneo por lotes', it: 'Scansione batch', pt: 'Digitalização em lote'
    },
    feature_batch_desc: {
        en: 'Scan multiple pages and submit them all at once.',
        de: 'Scannen Sie mehrere Seiten und senden Sie alle auf einmal ab.',
        fr: 'Numérisez plusieurs pages et soumettez-les toutes en une fois.',
        es: 'Escanee múltiples páginas y envíelas todas de una vez.',
        it: 'Scansiona più pagine e inviale tutte insieme.',
        pt: 'Digitalize várias páginas e envie todas de uma vez.'
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
    pricing_basic_name: {
        en: 'Basic', de: 'Basic', fr: 'Basique', es: 'Básico', it: 'Base', pt: 'Básico'
    },
    pricing_basic_desc: {
        en: 'For occasional use',
        de: 'Für gelegentliche Nutzung',
        fr: 'Pour une utilisation occasionnelle',
        es: 'Para uso ocasional',
        it: 'Per uso occasionale',
        pt: 'Para uso ocasional'
    },
    pricing_basic_price: {
        en: '$2 <span>/month</span>', de: '2€ <span>/Monat</span>'
    },
    pricing_basic_f1: {
        en: '4 scans per day', de: '4 Scans pro Tag'
    },
    pricing_basic_f2: {
        en: 'Google Forms integration', de: 'Google Forms Integration'
    },
    pricing_basic_f3: {
        en: 'Basic OCR recognition', de: 'Einfache OCR-Erkennung'
    },
    pricing_basic_f4: {
        en: 'Community support', de: 'Community-Support'
    },
    pricing_premium_name: {
        en: 'Premium', de: 'Premium', fr: 'Premium', es: 'Premium', it: 'Premium', pt: 'Premium'
    },
    pricing_premium_badge: {
        en: 'Most Popular', de: 'Am beliebtesten', fr: 'Le plus populaire', es: 'Más popular', it: 'Più popolare', pt: 'Mais popular'
    },
    pricing_premium_desc: {
        en: 'For regular users',
        de: 'Für regelmäßige Nutzer',
        fr: 'Pour les utilisateurs réguliers',
        es: 'Para usuarios habituales',
        it: 'Per utenti abituali',
        pt: 'Para usuários regulares'
    },
    pricing_premium_price: {
        en: '$20 <span>/month</span>', de: '20€ <span>/Monat</span>'
    },
    pricing_premium_f1: {
        en: '40 scans per day', de: '40 Scans pro Tag'
    },
    pricing_premium_f2: {
        en: 'Google + Microsoft Forms', de: 'Google + Microsoft Forms'
    },
    pricing_premium_f3: {
        en: 'Advanced AI recognition', de: 'Erweiterte KI-Erkennung'
    },
    pricing_premium_f4: {
        en: 'Priority support', de: 'Prioritäts-Support'
    },
    pricing_premium_cta: {
        en: 'Start Free Trial', de: 'Kostenlos testen', fr: 'Essai gratuit', es: 'Prueba gratis', it: 'Prova gratis', pt: 'Teste grátis'
    },
    pricing_business_name: {
        en: 'Business', de: 'Business', fr: 'Affaires', es: 'Negocios', it: 'Business', pt: 'Negócios'
    },
    pricing_business_desc: {
        en: 'For small teams and power users',
        de: 'Für kleine Teams und Power-User',
        fr: 'Pour les petites équipes et les utilisateurs avancés',
        es: 'Para pequeños equipos y usuarios avanzados',
        it: 'Per piccoli team e utenti esperti',
        pt: 'Para pequenas equipes e usuários avançados'
    },
    pricing_business_price: {
        en: '$80 <span>/month</span>', de: '80€ <span>/Monat</span>'
    },
    pricing_business_f1: {
        en: '400 scans per day', de: '400 Scans pro Tag'
    },
    pricing_business_f2: {
        en: 'Team management', de: 'Team-Management'
    },
    pricing_business_f3: {
        en: 'API Access', de: 'API-Zugriff'
    },
    pricing_business_f4: {
        en: 'Dedicated support', de: 'Dedizierter Support'
    },
    pricing_enterprise_name: {
        en: 'Enterprise', de: 'Enterprise', fr: 'Entreprise', es: 'Empresarial', it: 'Enterprise', pt: 'Empresarial'
    },
    pricing_enterprise_price: {
        en: '$200 <span>/month</span>', de: '200€ <span>/Monat</span>'
    },
    pricing_enterprise_desc: {
        en: 'For large organizations',
        de: 'Für große Organisationen',
        fr: 'Pour les grandes organisations',
        es: 'Para grandes organizaciones',
        it: 'Per grandi organizzazioni',
        pt: 'Para grandes organizações'
    },
    pricing_enterprise_f1: {
        en: '1200 scans per day', de: '1200 Scans pro Tag'
    },
    pricing_enterprise_f2: {
        en: 'Custom integrations', de: 'Individuelle Integrationen'
    },
    pricing_enterprise_f3: {
        en: 'SLA guarantee', de: 'SLA-Garantie'
    },
    pricing_enterprise_f4: {
        en: 'Volume licensing', de: 'Volumenlizenzen'
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
        en: 'How does the free version work?', de: 'Wie funktioniert die kostenlose Version?', fr: 'Comment fonctionne la version gratuite?', es: '¿Cómo funciona la versión gratuita?', it: 'Come funziona la versione gratuita?', pt: 'Como funciona a versão gratuita?'
    },
    pricing_faq1_a: {
        en: 'You get 5 free scans to test the app. Upgrade anytime for unlimited daily usage.',
        de: 'Sie erhalten 5 kostenlose Scans zum Testen der App. Upgraden Sie jederzeit für unbegrenzte tägliche Nutzung.',
        fr: 'Vous obtenez 5 scans gratuits pour tester l\'application. Passez à la version supérieure à tout moment.',
        es: 'Obtiene 5 escaneos gratuitos para probar la aplicación. Actualice en cualquier momento.',
        it: 'Ottieni 5 scansioni gratuite per testare l\'app. Aggiorna in qualsiasi momento.',
        pt: 'Você recebe 5 digitalizações gratuitas para testar o aplicativo. Faça upgrade a qualquer momento.'
    },
    pricing_faq2_q: {
        en: 'Can I cancel my subscription?', de: 'Kann ich mein Abonnement kündigen?', fr: 'Puis-je annuler mon abonnement?', es: '¿Puedo cancelar mi suscripción?', it: 'Posso annullare il mio abbonamento?', pt: 'Posso cancelar minha assinatura?'
    },
    pricing_faq2_a: {
        en: 'Yes! Cancel anytime through the App Store or Google Play. Your access continues until the billing period ends.',
        de: 'Ja! Kündigen Sie jederzeit über den App Store oder Google Play. Ihr Zugang bleibt bis zum Ende des Abrechnungszeitraums.',
        fr: 'Oui! Annulez à tout moment via l\'App Store ou Google Play. Votre accès continue jusqu\'à la fin de la période de facturation.',
        es: '¡Sí! Cancele en cualquier momento a través de App Store o Google Play. Su acceso continúa hasta que finalice el período de facturación.',
        it: 'Sì! Annulla in qualsiasi momento tramite App Store o Google Play. Il tuo accesso continua fino alla fine del periodo di fatturazione.',
        pt: 'Sim! Cancele a qualquer momento pela App Store ou Google Play. Seu acesso continua até o fim do período de cobrança.'
    },
    pricing_faq3_q: {
        en: 'Which form services are supported?', de: 'Welche Formulardienste werden unterstützt?', fr: 'Quels services de formulaires sont pris en charge?', es: '¿Qué servicios de formularios son compatibles?', it: 'Quali servizi di moduli sono supportati?', pt: 'Quais serviços de formulários são suportados?'
    },
    pricing_faq3_a: {
        en: 'Paper2Form works with Google Forms and Microsoft Forms. Sign in with your account to connect.',
        de: 'Paper2Form funktioniert mit Google Forms und Microsoft Forms. Melden Sie sich mit Ihrem Konto an, um sich zu verbinden.',
        fr: 'Paper2Form fonctionne avec Google Forms et Microsoft Forms. Connectez-vous avec votre compte pour vous connecter.',
        es: 'Paper2Form funciona con Google Forms y Microsoft Forms. Inicie sesión con su cuenta para conectarse.',
        it: 'Paper2Form funziona con Google Forms e Microsoft Forms. Accedi con il tuo account per connetterti.',
        pt: 'Paper2Form funciona com Google Forms e Microsoft Forms. Faça login com sua conta para conectar.'
    },
    pricing_faq4_q: {
        en: 'How does the AI processing work?', de: 'Wie funktioniert die KI-Verarbeitung?', fr: 'Comment fonctionne le traitement par IA?', es: '¿Cómo funciona el procesamiento de IA?', it: 'Come funziona l\'elaborazione IA?', pt: 'Como funciona o processamento de IA?'
    },
    pricing_faq4_a: {
        en: 'Your scanned images are processed by Google\'s Gemini AI in EU data centers. We don\'t store your documents.',
        de: 'Ihre gescannten Bilder werden von Googles Gemini KI in EU-Rechenzentren verarbeitet. Wir speichern Ihre Dokumente nicht.',
        fr: 'Vos images numérisées sont traitées par l\'IA Gemini de Google dans des centres de données européens. Nous ne stockons pas vos documents.',
        es: 'Sus imágenes escaneadas son procesadas por la IA Gemini de Google en centros de datos de la UE. No almacenamos sus documentos.',
        it: 'Le tue immagini scansionate vengono elaborate dall\'IA Gemini di Google in data center UE. Non memorizziamo i tuoi documenti.',
        pt: 'Suas imagens digitalizadas são processadas pela IA Gemini do Google em data centers da UE. Não armazenamos seus documentos.'
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
        const translation = t(key);
        if (translation) {
            el.innerHTML = translation;
        }
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
