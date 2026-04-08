import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "app_title": "LSIS Protocol",
      "app_subtitle": "Living Soil Intelligence System",
      "logout": "Log out",
      "or": "OR",
      "email_placeholder": "Email address",
      "password_placeholder": "Password",
      "full_name_placeholder": "Full Name",
      "sign_in": "Sign In",
      "init_account": "Initialize Account",
      "continue_google": "Continue with Google",
      "no_account": "Don't have an access code? ",
      "has_account": "Already authenticated? ",
      "sign_up_link": "Sign Up",
      "log_in_link": "Log In",
      "capture_btn": "Initialize Camera",
      "stop_capture": "Stop Scanning",
      "take_photo": "Capture Visual Data",
      "retake": "Discard & Retake",
      "attach_scan": "Attach to Analysis",
      "upload_text": "Click or drag high-resolution files to upload visual data (.jpg, .png)",
      "chat_placeholder": "Ask me about soil or fertilizers...",
      "chat_image_placeholder": "Add a message with your image...",
      "image_ready": "Image ready to send. Type a message or press Enter.",
      "welcome_message": "Welcome to the Living Soil Intelligence System. Please ask me any questions about your soil, or upload a photo to get AI-powered analysis with a focus on organic practices."
    }
  },
  es: {
    translation: {
      "app_title": "Protocolo LSIS",
      "app_subtitle": "Sistema de Inteligencia de Suelo Vivo",
      "logout": "Cerrar sesión",
      "or": "O",
      "email_placeholder": "Correo electrónico",
      "password_placeholder": "Contraseña",
      "full_name_placeholder": "Nombre completo",
      "sign_in": "Iniciar sesión",
      "init_account": "Inicializar cuenta",
      "continue_google": "Continuar con Google",
      "no_account": "¿No tienes un código de acceso? ",
      "has_account": "¿Ya estás autenticado? ",
      "sign_up_link": "Regístrate",
      "log_in_link": "Acceder",
      "capture_btn": "Inicializar cámara",
      "stop_capture": "Detener escaneo",
      "take_photo": "Capturar datos visuales",
      "retake": "Descartar y volver a tomar",
      "attach_scan": "Adjuntar al análisis",
      "upload_text": "Haz clic o arrastra archivos de alta resolución para subir datos visuales (.jpg, .png)",
      "chat_placeholder": "Pregúntame sobre suelo o fertilizantes...",
      "chat_image_placeholder": "Añade un mensaje con tu imagen...",
      "image_ready": "Imagen lista para enviar. Escribe un mensaje o presiona Enter.",
      "welcome_message": "Bienvenido al Sistema de Inteligencia de Suelo Vivo. Haz cualquier pregunta sobre tu suelo o sube una foto para obtener un análisis de IA con enfoque en prácticas orgánicas."
    }
  },
  fr: {
    translation: {
      "app_title": "Protocole LSIS",
      "app_subtitle": "Système d'Intelligence de Sol Vivant",
      "logout": "Se déconnecter",
      "or": "OU",
      "email_placeholder": "Adresse e-mail",
      "password_placeholder": "Mot de passe",
      "full_name_placeholder": "Nom complet",
      "sign_in": "Se connecter",
      "init_account": "Initialiser le compte",
      "continue_google": "Continuer avec Google",
      "no_account": "Vous n'avez pas de code d'accès ? ",
      "has_account": "Déjà authentifié ? ",
      "sign_up_link": "S'inscrire",
      "log_in_link": "Connexion",
      "capture_btn": "Initialiser la caméra",
      "stop_capture": "Arrêter le scan",
      "take_photo": "Capturer des données visuelles",
      "retake": "Jeter & Reprendre",
      "attach_scan": "Joindre à l'analyse",
      "upload_text": "Cliquez ou glissez des fichiers haute résolution pour télécharger des données visuelles (.jpg, .png)",
      "chat_placeholder": "Posez-moi des questions sur le sol ou les engrais...",
      "chat_image_placeholder": "Ajoutez un message avec votre image...",
      "image_ready": "Image prête à être envoyée. Tapez un message ou appuyez sur Entrée.",
      "welcome_message": "Bienvenue dans le Système d'Intelligence de Sol Vivant. Veuillez me poser des questions sur votre sol ou télécharger une photo pour obtenir une analyse par IA axée sur les pratiques biologiques."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
