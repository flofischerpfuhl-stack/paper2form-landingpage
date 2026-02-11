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
        en: 'Transform handwritten documents into structured digital data. Our intelligent OCR technology processes your data securely in the cloud and integrates seamlessly with Google Forms and Microsoft Forms.',
        de: 'Verwandeln Sie handschriftliche Dokumente in strukturierte digitale Daten. Unsere intelligente OCR-Technologie verarbeitet Ihre Daten sicher in der Cloud und integriert sich nahtlos mit Google Forms und Microsoft Forms.',
        fr: 'Transformez les documents manuscrits en données numériques structurées. Notre technologie OCR intelligente traite vos données en toute sécurité dans le cloud et s\'intègre parfaitement à Google Forms et Microsoft Forms.',
        es: 'Transforma documentos escritos a mano en datos digitales estructurados. Nuestra tecnología OCR inteligente procesa sus datos de forma segura en la nube y se integra perfectamente con Google Forms y Microsoft Forms.',
        it: 'Trasforma documenti scritti a mano in dati digitali strutturati. La nostra tecnologia OCR intelligente elabora i tuoi dati in modo sicuro nel cloud e si integra perfettamente con Google Forms e Microsoft Forms.',
        pt: 'Transforme documentos manuscritos em dados digitais estruturados. Nossa tecnologia OCR inteligente processa seus dados com segurança na nuvem e se integra perfeitamente ao Google Forms e Microsoft Forms.'
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

    // Privacy Section
    privacy_sect_tag: {
        en: 'Privacy', de: 'Datenschutz', fr: 'Confidentialité', es: 'Privacidad', it: 'Privacy', pt: 'Privacidade'
    },
    privacy_sect_title_1: {
        en: 'Your Data', de: 'Ihre Daten', fr: 'Vos Données', es: 'Sus Datos', it: 'I Tuoi Dati', pt: 'Seus Dados'
    },
    privacy_sect_title_2: {
        en: 'is Safe', de: 'sind sicher', fr: 'sont en sécurité', es: 'están seguros', it: 'sono al sicuro', pt: 'estão seguros'
    },
    privacy_sect_desc: {
        en: 'We prioritize your privacy and data security above all else.',
        de: 'Wir priorisieren Ihre Privatsphäre und Datensicherheit über alles andere.',
        fr: 'Nous priorisons votre confidentialité et la sécurité de vos données avant tout.',
        es: 'Priorizamos su privacidad y seguridad de datos por encima de todo.',
        it: 'Diamo priorità alla tua privacy e alla sicurezza dei dati sopra ogni altra cosa.',
        pt: 'Priorizamos sua privacidade e segurança de dados acima de tudo.'
    },
    privacy_point1_title: {
        en: 'No Data Storage', de: 'Keine Datenspeicherung', fr: 'Pas de stockage', es: 'Sin almacenamiento', it: 'Nessuna memorizzazione', pt: 'Sem armazenamento'
    },
    privacy_point1_desc: {
        en: 'Paper2Form never sees your data. When it is processed by the AI, it is not used for training and gets deleted as soon as possible.',
        de: 'Paper2Form sieht Ihre Daten niemals. Bei der KI-Verarbeitung werden sie nicht zum Training verwendet und sofort gelöscht.',
        fr: 'Paper2Form ne voit jamais vos données. L\'IA ne les utilise pas pour l\'entraînement et les supprime dès que possible.',
        es: 'Paper2Form nunca ve sus datos. La IA no los usa para entrenamiento y se eliminan lo antes posible.',
        it: 'Paper2Form non vede mai i tuoi dati. L\'IA non li usa per l\'addestramento e vengono eliminati il prima possibile.',
        pt: 'Paper2Form nunca vê seus dados. A IA não os usa para treinamento e são excluídos o mais rápido possível.'
    },
    privacy_point2_title: {
        en: 'Server Location', de: 'Serverstandort', fr: 'Emplacement serveur', es: 'Ubicación servidor', it: 'Posizione server', pt: 'Localização do servidor'
    },
    privacy_point2_desc: {
        en: 'You can also choose the location of the server that processes it.',
        de: 'Sie können den Standort des verarbeitenden Servers selbst wählen.',
        fr: 'Vous pouvez également choisir l\'emplacement du serveur qui les traite.',
        es: 'También puede elegir la ubicación del servidor que los procesa.',
        it: 'Puoi anche scegliere la posizione del server che li elabora.',
        pt: 'Você também pode escolher a localização do servidor que os processa.'
    },
    privacy_point3_title: {
        en: 'GDPR Compliant', de: 'DSGVO-konform', fr: 'Conforme RGPD', es: 'Cumple RGPD', it: 'Conforme GDPR', pt: 'Compatível com RGPD'
    },
    privacy_point3_desc: {
        en: 'In the EU, you can be completely GDPR compliant.',
        de: 'In der EU können Sie vollkommen DSGVO-konform arbeiten.',
        fr: 'Dans l\'UE, vous pouvez être entièrement conforme au RGPD.',
        es: 'En la UE, puede cumplir completamente con el RGPD.',
        it: 'Nell\'UE, puoi essere completamente conforme al GDPR.',
        pt: 'Na UE, você pode estar totalmente em conformidade com o RGPD.'
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
        en: 'Master Paper2Form in simple steps. Click each step to expand.',
        de: 'Meistern Sie Paper2Form in einfachen Schritten. Klicken Sie zum Erweitern.',
        fr: 'Maîtrisez Paper2Form en étapes simples. Cliquez pour développer.',
        es: 'Domine Paper2Form en pasos sencillos. Haga clic para expandir.',
        it: 'Padroneggia Paper2Form in semplici passaggi. Clicca per espandere.',
        pt: 'Domine Paper2Form em passos simples. Clique para expandir.'
    },
    // Step 1
    tutorial_step1_title: {
        en: 'Create Form', de: 'Formular erstellen', fr: 'Créer un formulaire', es: 'Crear formulario', it: 'Crea modulo', pt: 'Criar formulário'
    },
    tutorial_step1_p1: {
        en: 'Go to <a href="https://docs.google.com/forms" target="_blank">https://docs.google.com/forms</a>.',
        de: 'Gehen Sie zu <a href="https://docs.google.com/forms" target="_blank">https://docs.google.com/forms</a>.',
        fr: 'Allez sur <a href="https://docs.google.com/forms" target="_blank">https://docs.google.com/forms</a>.',
        es: 'Vaya a <a href="https://docs.google.com/forms" target="_blank">https://docs.google.com/forms</a>.',
        it: 'Vai su <a href="https://docs.google.com/forms" target="_blank">https://docs.google.com/forms</a>.',
        pt: 'Acesse <a href="https://docs.google.com/forms" target="_blank">https://docs.google.com/forms</a>.'
    },
    tutorial_step1_p2: {
        en: 'Create a new empty form.',
        de: 'Erstellen Sie ein neues leeres Formular.',
        fr: 'Créez un nouveau formulaire vide.',
        es: 'Cree un nuevo formulario vacío.',
        it: 'Crea un nuovo modulo vuoto.',
        pt: 'Crie um novo formulário vazio.'
    },
    tutorial_step1_p3: {
        en: 'Create fields for the information you need from your paper documents. You can recreate all the fields from your physical form here, or you can pursue a more generalized unstructured approach. For example, you could create a Form for physical mail where one of your fields is "Summary of Content", and the AI will automatically summarize the letter you received.',
        de: 'Erstellen Sie Felder für die Informationen, die Sie aus Ihren Papierdokumenten benötigen. Sie können alle Felder Ihres physischen Formulars hier nachbilden oder einen allgemeineren, unstrukturierten Ansatz wählen. Zum Beispiel könnten Sie ein Formular für physische Post erstellen, bei dem eines Ihrer Felder "Zusammenfassung des Inhalts" ist, und die KI fasst den erhaltenen Brief automatisch zusammen.',
        fr: 'Créez des champs pour les informations dont vous avez besoin à partir de vos documents papier. Vous pouvez recréer tous les champs de votre formulaire physique ici, ou adopter une approche non structurée plus générale. Par exemple, vous pouvez créer un formulaire pour le courrier physique où l\'un des champs est "Résumé du contenu", et l\'IA résumera automatiquement la lettre reçue.',
        es: 'Cree campos para la información que necesita de sus documentos en papel. Puede recrear todos los campos de su formulario físico aquí o seguir un enfoque no estructurado más generalizado. Por ejemplo, podría crear un formulario para correo físico donde uno de sus campos sea "Resumen del contenido", y la IA resumirá automáticamente la carta que recibió.',
        it: 'Crea campi per le informazioni necessarie dai tuoi documenti cartacei. Puoi ricreare tutti i campi del tuo modulo fisico qui, o seguire un approccio non strutturato più generalizzato. Ad esempio, potresti creare un modulo per la posta fisica in cui uno dei campi è "Riepilogo del contenuto" e l\'IA riassumerà automaticamente la lettera ricevuta.',
        pt: 'Crie campos para as informações que você precisa de seus documentos em papel. Você pode recriar todos os campos do seu formulário físico aqui ou seguir uma abordagem não estruturada mais generalizada. Por exemplo, você poderia criar um formulário para correspondência física onde um de seus campos é "Resumo do Conteúdo", e a IA resumirá automaticamente a carta que você recebeu.'
    },
    tutorial_step1_p4: {
        en: 'For this example, we\'ll stay with a more structured form. We want to digitize the answers to a volunteer registration form, so we create a field for every question in the paper form that is relevant to us.',
        de: 'Für dieses Beispiel bleiben wir bei einem strukturierteren Formular. Wir wollen die Antworten eines Anmeldeformulars für Freiwillige digitalisieren, also erstellen wir für jede relevante Frage im Papierformular ein Feld.',
        fr: 'Pour cet exemple, nous resterons avec un formulaire plus structuré. Nous voulons numériser les réponses à un formulaire d\'inscription de bénévoles, nous créons donc un champ pour chaque question du formulaire papier qui est pertinente pour nous.',
        es: 'Para este ejemplo, nos quedaremos con un formulario más estructurado. Queremos digitalizar las respuestas a un formulario de registro de voluntarios, por lo que creamos un campo para cada pregunta en el formulario en papel que sea relevante para nosotros.',
        it: 'Per questo esempio, rimarremo con un modulo più strutturato. Vogliamo digitalizzare le risposte a un modulo di registrazione volontari, quindi creiamo un campo per ogni domanda nel modulo cartaceo che è rilevante per noi.',
        pt: 'Para este exemplo, ficaremos com um formulário mais estruturado. Queremos digitalizar as respostas de um formulário de inscrição de voluntários, então criamos um campo para cada pergunta no formulário em papel que seja relevante para nós.'
    },
    tutorial_step1_p5: {
        en: 'We want to have all documents listed in a table, so in the responses tab click on "Link to Sheets" and select either a new or an already existing Sheets document.',
        de: 'Wir wollen alle Dokumente in einer Tabelle aufgelistet haben, also klicken Sie im Tab "Antworten" auf "Mit Sheets verknüpfen" und wählen Sie entweder ein neues oder ein bereits bestehendes Sheets-Dokument.',
        fr: 'Nous voulons avoir tous les documents listés dans un tableau, donc dans l\'onglet réponses cliquez sur "Lier à Sheets" et sélectionnez soit un nouveau document Sheets, soit un existant.',
        es: 'Queremos tener todos los documentos listados en una tabla, así que en la pestaña de respuestas haga clic en "Vincular a Sheets" y seleccione un documento de Sheets nuevo o uno existente.',
        it: 'Vogliamo avere tutti i documenti elencati in una tabella, quindi nella scheda risposte clicca su "Collega a Sheets" e seleziona un nuovo documento Sheets o uno già esistente.',
        pt: 'Queremos ter todos os documentos listados em uma tabela, então na guia de respostas clique em "Vincular ao Sheets" e selecione um documento Sheets novo ou já existente.'
    },
    tutorial_step1_p6: {
        en: 'After that, just click "Send" or ensure permissions are set. If the person using the Paper2Form App is not the author of the Form, ensure they have access by adding their Gmail address or keeping the form public. Also, if they are not the author, you need to copy the link and send it to them.',
        de: 'Danach klicken Sie einfach auf "Senden" oder stellen sicher, dass die Berechtigungen gesetzt sind. Wenn die Person, die die Paper2Form App nutzt, nicht der Autor des Formulars ist, stellen Sie sicher, dass sie Zugriff hat, indem Sie ihre Gmail-Adresse hinzufügen oder das Formular öffentlich halten. Wenn sie nicht der Autor ist, müssen Sie außerdem den Link kopieren und ihnen senden.',
        fr: 'Ensuite, cliquez simplement sur "Envoyer" ou assurez-vous que les permissions sont définies. Si la personne utilisant l\'application Paper2Form n\'est pas l\'auteur du formulaire, assurez-vous qu\'elle y a accès en ajoutant son adresse Gmail ou en gardant le formulaire public. De plus, si elle n\'est pas l\'auteur, vous devez copier le lien et le lui envoyer.',
        es: 'Después de eso, simplemente haga clic en "Enviar" o asegúrese de que los permisos estén configurados. Si la persona que usa la aplicación Paper2Form no es el autor del formulario, asegúrese de que tenga acceso agregando su dirección de Gmail o manteniendo el formulario público. Además, si no es el autor, debe copiar el enlace y enviárselo.',
        it: 'Dopodiché, clicca semplicemente su "Invia" o assicurati che i permessi siano impostati. Se la persona che utilizza l\'app Paper2Form non è l\'autore del modulo, assicurati che abbia accesso aggiungendo il suo indirizzo Gmail o mantenendo il modulo pubblico. Inoltre, se non è l\'autore, devi copiare il link e inviarglielo.',
        pt: 'Depois disso, basta clicar em "Enviar" ou garantir que as permissões estejam definidas. Se a pessoa usando o aplicativo Paper2Form não for o autor do formulário, certifique-se de que ela tenha acesso adicionando seu endereço Gmail ou mantendo o formulário público. Além disso, se ela não for o autor, você precisa copiar o link e enviá-lo para ela.'
    },
    // Microsoft Step 1
    tutorial_ms_step1_p1: {
        en: 'Go to <a href="https://forms.cloud.microsoft/" target="_blank">https://forms.cloud.microsoft/</a>.'
    },
    tutorial_ms_step1_p2: {
        en: 'Create a new empty form.'
    },
    tutorial_ms_step1_p3: {
        en: 'Create fields for the information you need from your paper documents. You can recreate all the fields from your physical form here, or you can pursue a more generalized unstructured approach. For example, you could create a Form for physical mail where one of your fields is "Summary of Content", and the AI will automatically summarize the letter you received.'
    },
    tutorial_ms_step1_p4: {
        en: 'For this example, we\'ll stay with a more structured form. We want to digitize the answers to a volunteer registration form, so we create a field for every question in the paper form that is relevant to us.'
    },
    tutorial_ms_step1_p5: {
        en: 'After that, we just need to click "Collect responses". If the person using the Paper2Form App is not the author of the Form, you need to ensure they have access, by either adding their Microsoft account or by keeping the form public.'
    },
    tutorial_ms_step1_p6: {
        en: 'It is important that you activate a prefilled link. If the person using Paper2Form is not the author, you can copy the prefilled link and send it to them.'
    },

    // Microsoft Step 2
    tutorial_ms_step2_p1: {
        en: 'In the Paper2Form app, you need to login with your Microsoft Account in the WebView.'
    },
    tutorial_ms_step2_p2: {
        en: 'To add the Form we just created, you can select it by browsing your forms in the webview and copying the prefilled link if you\'re the author. If not, you paste the link of the prefilled form.'
    },

    // Microsoft Step 3
    tutorial_ms_step3_p3: {
        en: 'After sending the first response, you can now link the responses to an Excel table. From now on, any new response will automatically appear here.'
    },

    // Step 2
    tutorial_step2_title: {
        en: 'Import Form', de: 'Formular importieren', fr: 'Importer le formulaire', es: 'Importar formulario', it: 'Importa modulo', pt: 'Importar formulário'
    },
    tutorial_step2_p1: {
        en: 'In the Paper2Form app, you need to login with your Google Account two times. First with the Google Authentication dialogue and then in the WebView.',
        de: 'In der Paper2Form App müssen Sie sich zweimal mit Ihrem Google-Konto anmelden. Zuerst über den Google-Authentifizierungsdialog und dann in der WebView.',
        fr: 'Dans l\'application Paper2Form, vous devez vous connecter avec votre compte Google deux fois. D\'abord avec la boîte de dialogue d\'authentification Google, puis dans la WebView.',
        es: 'En la aplicación Paper2Form, debe iniciar sesión con su cuenta de Google dos veces. Primero con el diálogo de autenticación de Google y luego en la WebView.',
        it: 'Nell\'app Paper2Form, devi accedere con il tuo account Google due volte. Prima con la finestra di autenticazione Google e poi nella WebView.',
        pt: 'No aplicativo Paper2Form, você precisa fazer login com sua conta do Google duas vezes. Primeiro com a caixa de diálogo de autenticação do Google e depois na WebView.'
    },
    tutorial_step2_p2: {
        en: 'To add the Form we just created, select it by browsing your forms if you\'re the author. If not, paste the link of the form here.',
        de: 'Um das gerade erstellte Formular hinzuzufügen, wählen Sie es aus Ihren Formularen aus, wenn Sie der Autor sind. Wenn nicht, fügen Sie den Link zum Formular hier ein.',
        fr: 'Pour ajouter le formulaire que nous venons de créer, sélectionnez-le en parcourant vos formulaires si vous en êtes l\'auteur. Sinon, collez le lien du formulaire ici.',
        es: 'Para agregar el formulario que acabamos de crear, selecciónelo navegando por sus formularios si es el autor. Si no, pegue el enlace del formulario aquí.',
        it: 'Per aggiungere il modulo appena creato, selezionalo sfogliando i tuoi moduli se sei l\'autore. In caso contrario, incolla qui il link del modulo.',
        pt: 'Para adicionar o formulário que acabamos de criar, selecione-o navegando em seus formulários se você for o autor. Se não, cole o link do formulário aqui.'
    },

    // Step 3
    tutorial_step3_title: {
        en: 'Scan Document', de: 'Dokument scannen', fr: 'Scanner le document', es: 'Escanear documento', it: 'Scansiona documento', pt: 'Digitalizar documento'
    },
    tutorial_step3_p1: {
        en: 'Now you can fill out your form. Manual Fill lets you type in the form by hand. Single Scan is the fastest, it just takes one photo and fills out the form. If your document has multiple pages, or you want to process multiple documents in parallel, you can choose "Scan (Multiple)".',
        de: 'Jetzt können Sie Ihr Formular ausfüllen. Manuelles Ausfüllen lässt Sie das Formular von Hand eingeben. Einzelscan ist am schnellsten, es nimmt nur ein Foto auf und füllt das Formular aus. Wenn Ihr Dokument mehrere Seiten hat oder Sie mehrere Dokumente parallel verarbeiten möchten, können Sie "Scannen (Mehrere)" wählen.',
        fr: 'Maintenant, vous pouvez remplir votre formulaire. Le remplissage manuel vous permet de taper dans le formulaire à la main. Le balayage unique est le plus rapide, il prend juste une photo et remplit le formulaire. Si votre document comporte plusieurs pages, ou si vous souhaitez traiter plusieurs documents en parallèle, vous pouvez choisir "Scanner (Multiple)".',
        es: 'Ahora puede completar su formulario. El llenado manual le permite escribir en el formulario a mano. El escaneo único es el más rápido, solo toma una foto y completa el formulario. Si su documento tiene varias páginas, o desea procesar varios documentos en paralelo, puede elegir "Escanear (Múltiple)".',
        it: 'Ora puoi compilare il tuo modulo. Compilazione manuale ti consente di digitare nel modulo a mano. Scansione singola è la più veloce, scatta solo una foto e compila il modulo. Se il tuo documento ha più pagine, o vuoi elaborare più documenti in parallelo, puoi scegliere "Scansione (Multipla)".',
        pt: 'Agora você pode preencher seu formulário. O Preenchimento Manual permite digitar no formulário à mão. A Digitalização Única é a mais rápida, tira apenas uma foto e preenche o formulário. Se seu documento tiver várias páginas, ou você quiser processar vários documentos em paralelo, pode escolher "Digitalizar (Múltiplo)".'
    },
    tutorial_step3_p2: {
        en: 'Once the photos are processed, you can verify and correct any possible mistakes and then just click on send.',
        de: 'Sobald die Fotos verarbeitet sind, können Sie mögliche Fehler überprüfen und korrigieren und dann einfach auf Senden klicken.',
        fr: 'Une fois les photos traitées, vous pouvez vérifier et corriger les éventuelles erreurs, puis cliquer simplement sur envoyer.',
        es: 'Una vez procesadas las fotos, puede verificar y corregir cualquier posible error y luego simplemente hacer clic en enviar.',
        it: 'Una volta elaborate le foto, puoi verificare e correggere eventuali errori e poi cliccare semplicemente su invia.',
        pt: 'Uma vez processadas as fotos, você pode verificar e corrigir quaisquer erros possíveis e então apenas clicar em enviar.'
    },
    tutorial_step3_p3: {
        en: 'The responses will pop up immediately in the Google Sheets table.',
        de: 'Die Antworten erscheinen sofort in der Google Sheets Tabelle.',
        fr: 'Les réponses apparaîtront immédiatement dans le tableau Google Sheets.',
        es: 'Las respuestas aparecerán inmediatamente en la tabla de Google Sheets.',
        it: 'Le risposte appariranno immediatamente nella tabella di Google Sheets.',
        pt: 'As respostas aparecerão imediatamente na tabela do Google Sheets.'
    },

    // Step 4
    tutorial_step4_title: {
        en: 'The Scans Tab', de: 'Der Scans-Tab', fr: 'L\'onglet Scans', es: 'La pestaña Escaneos', it: 'La scheda Scansioni', pt: 'A aba Digitalizações'
    },
    tutorial_step4_p1: {
        en: 'The picture will also automatically be added to your scan tab.',
        de: 'Das Bild wird auch automatisch zu Ihrem Scan-Tab hinzugefügt.',
        fr: 'L\'image sera également ajoutée automatiquement à votre onglet de scan.',
        es: 'La imagen también se agregará automáticamente a su pestaña de escaneo.',
        it: 'L\'immagine verrà anche aggiunta automaticamente alla tua scheda di scansione.',
        pt: 'A imagem também será adicionada automaticamente à sua aba de digitalização.'
    },
    tutorial_step4_p2: {
        en: 'Here you can take pictures when you\'re currently offline for later processing.',
        de: 'Hier können Sie Bilder machen, wenn Sie gerade offline sind, um sie später zu verarbeiten.',
        fr: 'Ici, vous pouvez prendre des photos lorsque vous êtes hors ligne pour un traitement ultérieur.',
        es: 'Aquí puede tomar fotos cuando esté desconectado para procesarlas más tarde.',
        it: 'Qui puoi scattare foto quando sei offline per l\'elaborazione successiva.',
        pt: 'Aqui você pode tirar fotos quando estiver offline para processamento posterior.'
    },
    tutorial_step4_p3: {
        en: 'Or you can select images from your gallery to process.',
        de: 'Oder Sie können Bilder aus Ihrer Galerie zur Verarbeitung auswählen.',
        fr: 'Ou vous pouvez sélectionner des images de votre galerie à traiter.',
        es: 'O puede seleccionar imágenes de su galería para procesar.',
        it: 'O puoi selezionare immagini dalla tua galleria da elaborare.',
        pt: 'Ou você pode selecionar imagens da sua galeria para processar.'
    },

    // Step 5
    tutorial_step5_title: {
        en: 'Settings', de: 'Einstellungen', fr: 'Paramètres', es: 'Configuración', it: 'Impostazioni', pt: 'Configurações'
    },
    tutorial_step5_p1: {
        en: 'In the settings, you can choose which server should process your pictures to extract the data. Your data is sent encrypted and only stays on the server for processing as long as needed before it is deleted. Your data is not used for training the AI.',
        de: 'In den Einstellungen können Sie wählen, welcher Server Ihre Bilder verarbeiten soll, um die Daten zu extrahieren. Ihre Daten werden verschlüsselt gesendet und bleiben nur so lange zur Verarbeitung auf dem Server, wie nötig, bevor sie gelöscht werden. Ihre Daten werden nicht zum Trainieren der KI verwendet.',
        fr: 'Dans les paramètres, vous pouvez choisir quel serveur doit traiter vos images pour extraire les données. Vos données sont envoyées cryptées et ne restent sur le serveur pour traitement que le temps nécessaire avant d\'être supprimées. Vos données ne sont pas utilisées pour entraîner l\'IA.',
        es: 'En la configuración, puede elegir qué servidor debe procesar sus imágenes para extraer los datos. Sus datos se envían encriptados y solo permanecen en el servidor para el procesamiento el tiempo necesario antes de ser eliminados. Sus datos no se utilizan para entrenar la IA.',
        it: 'Nelle impostazioni, puoi scegliere quale server deve elaborare le tue immagini per estrarre i dati. I tuoi dati vengono inviati crittografati e rimangono sul server per l\'elaborazione solo il tempo necessario prima di essere eliminati. I tuoi dati non vengono utilizzati per addestrare l\'IA.',
        pt: 'Nas configurações, você pode escolher qual servidor deve processar suas imagens para extrair os dados. Seus dados são enviados criptografados e permanecem no servidor para processamento apenas o tempo necessário antes de serem excluídos. Seus dados não são usados para treinar a IA.'
    },
    tutorial_step5_p2: {
        en: 'You can also choose your theme preferences and your language.',
        de: 'Sie können auch Ihre Themenpräferenzen und Ihre Sprache wählen.',
        fr: 'Vous pouvez également choisir vos préférences de thème et votre langue.',
        es: 'También puede elegir sus preferencias de tema y su idioma.',
        it: 'Puoi anche scegliere le tue preferenze di tema e la tua lingua.',
        pt: 'Você também pode escolher suas preferências de tema e seu idioma.'
    },
    tutorial_step5_p3: {
        en: 'Under "Performance" you can choose scan quality and resolution. Higher values will mean better results but longer processing time.',
        de: 'Unter "Leistung" können Sie Scanqualität und Auflösung wählen. Höhere Werte bedeuten bessere Ergebnisse, aber längere Verarbeitungszeit.',
        fr: 'Sous "Performance", vous pouvez choisir la qualité et la résolution de numérisation. Des valeurs plus élevées signifient de meilleurs résultats mais un temps de traitement plus long.',
        es: 'Bajo "Rendimiento" puede elegir la calidad y resolución de escaneo. Valores más altos significarán mejores resultados pero mayor tiempo de procesamiento.',
        it: 'Sotto "Prestazioni" puoi scegliere qualità e risoluzione di scansione. Valori più alti significano risultati migliori ma tempi di elaborazione più lunghi.',
        pt: 'Em "Desempenho", você pode escolher qualidade e resolução de digitalização. Valores mais altos significam melhores resultados, mas maior tempo de processamento.'
    },

    // Step 6
    tutorial_step6_title: {
        en: 'Subscription', de: 'Abonnement', fr: 'Abonnement', es: 'Suscripción', it: 'Abbonamento', pt: 'Assinatura'
    },
    tutorial_step6_p1: {
        en: 'Choose a subscription that fits your needs. After 5 test scans, you will have to buy a subscription to continue using the app.',
        de: 'Wählen Sie ein Abonnement, das Ihren Bedürfnissen entspricht. Nach 5 Testscans müssen Sie ein Abonnement kaufen, um die App weiterhin nutzen zu können.',
        fr: 'Choisissez un abonnement adapté à vos besoins. Après 5 scans de test, vous devrez acheter un abonnement pour continuer à utiliser l\'application.',
        es: 'Elija una suscripción que se adapte a sus necesidades. Después de 5 escaneos de prueba, tendrá que comprar una suscripción para seguir usando la aplicación.',
        it: 'Scegli un abbonamento adatto alle tue esigenze. Dopo 5 scansioni di prova, dovrai acquistare un abbonamento per continuare a utilizzare l\'app.',
        pt: 'Escolha uma assinatura que atenda às suas necessidades. Após 5 digitalizações de teste, você terá que comprar uma assinatura para continuar usando o aplicativo.'
    },
    tutorial_step6_p2: {
        en: 'If you plan on occasionally using the app for single documents, we recommend the Basic plan where you can process 4 documents every day.',
        de: 'Wenn Sie die App gelegentlich für einzelne Dokumente nutzen möchten, empfehlen wir den Basic-Plan, mit dem Sie 4 Dokumente pro Tag verarbeiten können.',
        fr: 'Si vous prévoyez d\'utiliser l\'application occasionnellement pour des documents uniques, nous recommandons le plan Basique où vous pouvez traiter 4 documents par jour.',
        es: 'Si planea usar la aplicación ocasionalmente para documentos individuales, recomendamos el plan Básico donde puede procesar 4 documentos cada día.',
        it: 'Se prevedi di utilizzare l\'app occasionalmente per singoli documenti, ti consigliamo il piano Base dove puoi elaborare 4 documenti al giorno.',
        pt: 'Se você planeja usar o aplicativo ocasionalmente para documentos únicos, recomendamos o plano Básico, onde você pode processar 4 documentos por dia.'
    },
    tutorial_step6_p3: {
        en: 'If you plan on using daily with multiple documents, we recommend Premium where you can process 40 documents every day.',
        de: 'Wenn Sie die App täglich mit mehreren Dokumenten nutzen möchten, empfehlen wir Premium, wo Sie 40 Dokumente pro Tag verarbeiten können.',
        fr: 'Si vous prévoyez d\'utiliser quotidiennement avec plusieurs documents, nous recommandons Premium où vous pouvez traiter 40 documents par jour.',
        es: 'Si planea usar diariamente con múltiples documentos, recomendamos Premium donde puede procesar 40 documentos cada día.',
        it: 'Se prevedi di utilizzare quotidianamente con più documenti, ti consigliamo Premium dove puoi elaborare 40 documenti al giorno.',
        pt: 'Se você planeja usar diariamente com vários documentos, recomendamos o Premium, onde você pode processar 40 documentos por dia.'
    },
    tutorial_step6_p4: {
        en: 'If you\'re in an office where you need to process many documents from many sources, or you\'re the person many documents need to go through every day, the Business plan is right for you.',
        de: 'Wenn Sie in einem Büro sind, wo Sie viele Dokumente aus vielen Quellen verarbeiten müssen, oder Sie die Person sind, durch die jeden Tag viele Dokumente gehen müssen, ist der Business-Plan das Richtige für Sie.',
        fr: 'Si vous êtes dans un bureau où vous devez traiter de nombreux documents provenant de nombreuses sources, ou si vous êtes la personne par qui de nombreux documents doivent passer chaque jour, le plan Affaires est fait pour vous.',
        es: 'Si está en una oficina donde necesita procesar muchos documentos de muchas fuentes, o es la persona por la que deben pasar muchos documentos todos los días, el plan de Negocios es el adecuado para usted.',
        it: 'Se sei in un ufficio dove devi elaborare molti documenti da molte fonti, o sei la persona attraverso la quale devono passare molti documenti ogni giorno, il piano Business è giusto per te.',
        pt: 'Se você está em um escritório onde precisa processar muitos documentos de muitas fontes, ou é a pessoa por quem muitos documentos precisam passar todos os dias, o plano de Negócios é ideal para você.'
    },
    tutorial_step6_p5: {
        en: 'If you plan on digitizing a larger backlog of paper documents, or have infrequent spikes in usage, we recommend the Enterprise plan.',
        de: 'Wenn Sie planen, einen größeren Rückstand an Papierdokumenten zu digitalisieren oder seltene Nutzungsspitzen haben, empfehlen wir den Enterprise-Plan.',
        fr: 'Si vous prévoyez de numériser un arriéré important de documents papier, ou si vous avez des pics d\'utilisation peu fréquents, nous recommandons le plan Entreprise.',
        es: 'Si planea digitalizar una gran acumulación de documentos en papel o tiene picos de uso poco frecuentes, recomendamos el plan Empresarial.',
        it: 'Se prevedi di digitalizzare un ampio arretrato di documenti cartacei o hai picchi di utilizzo infrequenti, ti consigliamo il piano Enterprise.',
        pt: 'Se você planeja digitalizar um grande acúmulo de documentos em papel ou tem picos de uso pouco frequentes, recomendamos o plano Empresarial.'
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
        en: '$2 <span>/month</span>', de: '$2 <span>/month</span>'
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
        en: '$20 <span>/month</span>', de: '$20 <span>/month</span>'
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
        en: '$100 <span>/month</span>', de: '$100 <span>/month</span>'
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
        en: '$200 <span>/month</span>', de: '$200 <span>/month</span>'
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
        en: 'You get 5 free scans to test the app. Upgrade anytime for more daily scans.',
        de: 'Sie erhalten 5 kostenlose Scans zum Testen der App. Upgraden Sie jederzeit für mehr tägliche Scans.',
        fr: 'Vous obtenez 5 scans gratuits pour tester l\'application. Passez à la version supérieure à tout moment pour plus de scans quotidiens.',
        es: 'Obtiene 5 escaneos gratuitos para probar la aplicación. Actualice en cualquier momento para obtener más escaneos diarios.',
        it: 'Ottieni 5 scansioni gratuite per testare l\'app. Aggiorna in qualsiasi momento per più scansioni giornaliere.',
        pt: 'Você recebe 5 digitalizações gratuitas para testar o aplicativo. Faça upgrade a qualquer momento para mais digitalizações diárias.'
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
        en: 'Your scanned images are processed by Google\'s Gemini AI in your chosen region (EU or US). We don\'t store your documents.',
        de: 'Ihre gescannten Bilder werden von Googles Gemini KI in Ihrer gewählten Region (EU oder USA) verarbeitet. Wir speichern Ihre Dokumente nicht.',
        fr: 'Vos images numérisées sont traitées par l\'IA Gemini de Google dans la région de votre choix (UE ou US). Nous ne stockons pas vos documents.',
        es: 'Sus imágenes escaneadas son procesadas por la IA Gemini de Google en la región elegida (UE o EE.UU.). No almacenamos sus documentos.',
        it: 'Le tue immagini scansionate vengono elaborate dall\'IA Gemini di Google nella regione scelta (UE o USA). Non memorizziamo i tuoi documenti.',
        pt: 'Suas imagens digitalizadas são processadas pela IA Gemini do Google na região escolhida (UE ou EUA). Não armazenamos seus documentos.'
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
