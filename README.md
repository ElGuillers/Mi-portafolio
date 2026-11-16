# Guillermo Gil — Portafolio Profesional

Portafolio web profesional y bilingüe de **Guillermo Andres Gil Rozo**, desarrollador de software.

Desarrollado con React, TypeScript y Vite. Incluye modo oscuro, soporte bilingüe (español e inglés), animaciones sutiles y diseño responsive.

🌐 **[Ver en línea →](https://elguillers.github.io/Mi-portafolio/)**

---

## Tecnologías

- **React** — Interfaz de usuario basada en componentes.
- **TypeScript** — Tipado estático para mayor robustez.
- **Vite** — Build tool rápido y moderno.
- **Lucide Icons** — Iconografía consistente.
- **CSS Modular** — Estilos organizados por componente.

## Características

- ✅ Diseño responsive (móvil, tablet, escritorio).
- ✅ Modo oscuro y modo claro.
- ✅ Soporte bilingüe (español e inglés).
- ✅ Navegación suave con anclas.
- ✅ Animaciones de entrada sutiles.
- ✅ SEO y metadatos Open Graph.
- ✅ Datos separados y fácilmente editables.
- ✅ Despliegue automático con GitHub Actions.

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ElGuillers/Mi-portafolio.git
cd Mi-portafolio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa del build
npm run preview
```

## Personalización

Los datos personales, proyectos, laboratorios y traducciones están en archivos separados para facilitar la edición:

| Archivo | Contenido |
| --- | --- |
| `src/data/config.ts` | Nombre, enlaces, universidad, SEO |
| `src/data/projects.ts` | Proyectos destacados |
| `src/data/labs.ts` | Laboratorios personales |
| `src/data/skills.ts` | Tecnologías y habilidades |
| `src/data/experience.ts` | Experiencia profesional |
| `src/data/certifications.ts` | Licencias y certificaciones |
| `src/data/translations.ts` | Textos en español e inglés |

## Publicación en GitHub Pages

1. Ve a **Settings → Pages** en tu repositorio de GitHub.
2. En **Source**, selecciona **GitHub Actions**.
3. Haz push a la rama `main` y el despliegue se ejecutará automáticamente.

El workflow está configurado en `.github/workflows/deploy.yml`.

## Estructura del Proyecto

```
src/
├── components/       # Componentes React
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Labs.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── BackToTop.tsx
├── data/             # Datos editables
│   ├── config.ts
│   ├── projects.ts
│   ├── labs.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── translations.ts
├── hooks/            # Custom hooks
│   ├── useLanguage.tsx
│   ├── useTheme.tsx
│   ├── useActiveSection.ts
│   └── useScrollAnimation.ts
├── styles/           # Estilos CSS
│   ├── globals.css
│   ├── navbar.css
│   ├── hero.css
│   ├── sections.css
│   ├── projects.css
│   ├── labs.css
│   └── rest.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Licencia

© 2026 Guillermo Andres Gil Rozo. Todos los derechos reservados.
