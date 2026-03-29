# Guía de edición de contenido — ARKMAPIX Web

Documento de referencia para editar textos, imágenes y contenido del sitio en español e inglés.

---

## Estructura general

```
arkmapix-web/
├── messages/
│   ├── es.json                          ← Todo el texto en español
│   └── en.json                          ← Todo el texto en inglés
├── public/
│   ├── brand/                           ← Logo oficial
│   └── images/                          ← Imágenes del sitio
└── app/[locale]/
    ├── nosotros/page.tsx                ← Página Nosotros/About
    ├── servicios/[slug]/page.tsx        ← Detalle de cada servicio
    ├── casos/[slug]/page.tsx            ← Detalle de cada caso de uso
    └── academia/page.tsx               ← Página Academia
```

---

## Regla de oro

| Tipo de contenido | Dónde editar | ¿Ambos idiomas? |
|---|---|---|
| Textos del homepage | `messages/es.json` + `messages/en.json` | Sí, ambos archivos |
| Página Nosotros | `messages/es.json` + `messages/en.json` | Sí, ambos archivos |
| Detalle de servicios | `app/[locale]/servicios/[slug]/page.tsx` | En el mismo archivo (objeto `SERVICE_CONTENT`) |
| Detalle de casos | `app/[locale]/casos/[slug]/page.tsx` | En el mismo archivo (objeto `CASE_CONTENT`) |
| Academia | `messages/es.json` + `messages/en.json` | Sí, ambos archivos |
| Navbar y Footer | `messages/es.json` + `messages/en.json` | Sí, ambos archivos |
| Imágenes | `public/images/` | Un solo archivo para ambos idiomas |

> **Nota:** Los archivos `messages/es.json` y `messages/en.json` deben tener **exactamente las mismas claves**. Solo cambia el valor del texto.

---

## 1. Homepage

### Hero (banner principal)

Archivo: `messages/es.json` y `messages/en.json` — clave `hero`

```json
"hero": {
  "badge": "ARKMAPIX · Data & AI Architecture",
  "headline_1": "Arquitectura de datos.",
  "headline_2": "Inteligencia sin límites.",
  "subheadline": "Transformamos datos en ventajas competitivas...",
  "cta_primary": "Ver nuestros servicios",
  "cta_secondary": "Conocer más",
  "scroll_hint": "Desplázate hacia abajo"
}
```

### Sección Nosotros (homepage)

Archivo: `messages/es.json` y `messages/en.json` — clave `about`

```json
"about": {
  "headline": "Construidos en la cima. Diseñados para el futuro.",
  "body": "Como la ciudadela de Machu Picchu...",
  "stat_projects_num": "50+",
  "stat_countries_num": "8",
  "stat_years_num": "6+",
  "stat_projects": "proyectos",
  "stat_countries": "países",
  "stat_years": "años de experiencia",
  "cta": "Conocer nuestra historia"
}
```

### Cards de servicios (homepage)

Archivo: `messages/es.json` y `messages/en.json` — clave `services.items`

```json
"services": {
  "headline": "Soluciones de datos de alto impacto",
  "subheadline": "Desde la arquitectura hasta la IA...",
  "items": {
    "data_architecture":      { "name": "Arquitectura de Datos" },
    "data_engineering":       { "name": "Data Engineering" },
    "advanced_analytics":     { "name": "Analítica Avanzada" },
    "artificial_intelligence":{ "name": "Inteligencia Artificial" },
    "cloud_devops":           { "name": "Cloud & DevOps de Datos" },
    "academy":                { "name": "ARKMAPIX Academy" }
  }
}
```

> Los 3 bullets de cada card están en `components/sections/ServicesGrid.tsx`,
> objeto `SERVICE_DETAILS` al inicio del archivo.

### Cards de casos de uso (homepage)

Archivo: `messages/es.json` y `messages/en.json` — clave `cases.items`

```json
"cases": {
  "headline": "Resultados que hablan por sí solos",
  "subheadline": "Proyectos reales con impacto medible...",
  "items": {
    "case_1": {
      "title": "Plataforma de Datos Unificada para Retailer Multinacional",
      "result": "70% reducción en tiempo de procesamiento",
      "description": "Migración de data warehouse legacy..."
    },
    "case_2": { ... },
    "case_3": { ... },
    "case_4": { ... }
  }
}
```

### Testimonios

Archivo: `messages/es.json` y `messages/en.json` — clave `testimonials.items`

```json
"testimonials": {
  "items": {
    "t1": {
      "quote": "ARKMAPIX transformó completamente nuestra capacidad analítica...",
      "name": "Carlos Mendoza",
      "role": "CTO",
      "company": "RetailCo Latinoamérica"
    },
    "t2": { ... },
    "t3": { ... }
  }
}
```

### Proceso de trabajo (5 pasos)

Archivo: `messages/es.json` y `messages/en.json` — clave `process.steps`

```json
"process": {
  "headline": "Un proceso probado para resultados reales",
  "steps": {
    "diagnosis":      { "title": "Diagnóstico",     "description": "..." },
    "architecture":   { "title": "Arquitectura",    "description": "..." },
    "implementation": { "title": "Implementación",  "description": "..." },
    "validation":     { "title": "Validación",      "description": "..." },
    "scaling":        { "title": "Escalamiento",    "description": "..." }
  }
}
```

### Banner CTA (fondo degradado al fondo del homepage)

Archivo: `messages/es.json` y `messages/en.json` — clave `cta_banner`

```json
"cta_banner": {
  "headline": "¿Listo para transformar tus datos?",
  "subheadline": "Agenda una llamada con nuestros arquitectos...",
  "cta_primary": "Agendar llamada",
  "cta_secondary": "Ver servicios"
}
```

---

## 2. Página Nosotros (`/nosotros`)

Archivo: `messages/es.json` y `messages/en.json` — clave `about_page`

```json
"about_page": {
  "page_title": "Sobre ARKMAPIX",
  "mission_label": "Nuestra Misión",
  "mission_body": "Democratizar la inteligencia de datos en América Latina...",
  "vision_label": "Nuestra Visión",
  "vision_body": "Ser la consultora de datos de referencia en LATAM...",
  "values_label": "Nuestros Valores",
  "v1_title": "Excelencia técnica",    "v1_body": "...",
  "v2_title": "Transparencia radical", "v2_body": "...",
  "v3_title": "Transferencia de conocimiento", "v3_body": "...",
  "v4_title": "Orgullo latinoamericano", "v4_body": "...",
  "team_label": "El equipo",
  "team_body": "Somos un equipo de arquitectos de datos...",
  "cta_headline": "¿Listo para trabajar juntos?",
  "cta_btn": "Hablemos de tu proyecto"
}
```

Los badges de tecnología del equipo están hardcodeados en `app/[locale]/nosotros/page.tsx`
en el array que contiene `["Azure Databricks", "Microsoft Fabric", ...]`.

---

## 3. Páginas de detalle de servicios (`/servicios/[slug]`)

**Archivo único para ambos idiomas:**
`app/[locale]/servicios/[slug]/page.tsx`

Al inicio del archivo hay un objeto `SERVICE_CONTENT` con 6 entradas.
Cada entrada tiene una versión `es` y una versión `en`:

```
Slug en la URL           → Clave en SERVICE_CONTENT
/servicios/arquitectura-datos      → "arquitectura-datos"
/servicios/data-engineering        → "data-engineering"
/servicios/analitica-avanzada      → "analitica-avanzada"
/servicios/inteligencia-artificial → "inteligencia-artificial"
/servicios/cloud-devops            → "cloud-devops"
/servicios/academy                 → "academy"
```

### Estructura de cada servicio

```typescript
"arquitectura-datos": {
  es: {
    name: "Arquitectura de Datos",          // título de la página
    tagline: "La plataforma sobre la que...", // frase corta debajo del título
    description: "Diseñamos plataformas...", // párrafo largo de descripción
    capabilities: [                          // lista en el panel derecho (checklist)
      "Medallion Architecture (Bronze/Silver/Gold)",
      "Data Mesh & Lakehouse Design",
      // ...hasta 6 items
    ],
    benefits: [                              // 4 tarjetas de beneficios
      { title: "Escalabilidad garantizada", body: "Arquitecturas diseñadas para..." },
      { title: "Governance desde el día uno", body: "..." },
      { title: "Reducción de costos", body: "..." },
      { title: "Time-to-insight acelerado", body: "..." },
    ],
    tech: [                                  // badges de tecnología al fondo
      "Azure Databricks", "Microsoft Fabric", "Delta Lake", ...
    ],
  },
  en: {
    // misma estructura en inglés
  }
}
```

---

## 4. Páginas de detalle de casos (`/casos/[slug]`)

**Archivo único para ambos idiomas:**
`app/[locale]/casos/[slug]/page.tsx`

```
Slug en la URL                    → Clave en CASE_CONTENT
/casos/retailco-data-platform     → "retailco-data-platform"
/casos/ai-supply-chain            → "ai-supply-chain"
/casos/data-mesh-finanzas         → "data-mesh-finanzas"
/casos/analytics-salud            → "analytics-salud"
```

### Estructura de cada caso

```typescript
"retailco-data-platform": {
  es: {
    title: "Plataforma de Datos Unificada para Retailer Multinacional",
    industry: "Retail",            // badge de industria
    accent: "#00C6FF",             // color del badge (no cambia)
    result: "70% reducción en tiempo de procesamiento",  // resultado destacado
    challenge: "RetailCo operaba con 15 sistemas...",    // párrafo El Desafío
    solution: "Diseñamos e implementamos una arquitectura...", // párrafo La Solución
    results: [                     // lista de resultados (bullets)
      "70% de reducción en tiempo de procesamiento...",
      "15 fuentes de datos unificadas...",
      // hasta 5 items
    ],
    tech: ["Azure Databricks", "Delta Lake", ...], // badges de tecnología
  },
  en: {
    // misma estructura en inglés
  }
}
```

---

## 5. Página Academia (`/academia`)

Archivo: `messages/es.json` y `messages/en.json` — clave `academy_page`

```json
"academy_page": {
  "subtitle": "Formación técnica certificada...",

  "programs_label": "Programas de formación",
  "p1_badge": "Databricks",
  "p1_title": "Data Engineer Associate",
  "p1_body": "Certificación oficial Databricks...",
  "p1_duration": "40 horas",

  "p2_badge": "Microsoft Fabric",
  "p2_title": "Microsoft Fabric Analyst",
  "p2_body": "...",
  "p2_duration": "32 horas",

  "p3_badge": "AI & MLOps",
  "p3_title": "AI Engineer on Azure",
  "p3_body": "...",
  "p3_duration": "48 horas",

  "why_label": "¿Por qué ARKMAPIX Academy?",
  "w1_title": "Instructores certificados", "w1_body": "...",
  "w2_title": "Contenido práctico",        "w2_body": "...",
  "w3_title": "Formato flexible",          "w3_body": "...",

  "cta_headline": "Capacita a tu equipo con ARKMAPIX Academy",
  "cta_body": "Diseñamos el programa ideal para tu empresa...",
  "cta_btn": "Solicitar información"
}
```

---

## 6. Navbar y Footer

Archivo: `messages/es.json` y `messages/en.json`

```json
"nav": {
  "services": "Servicios",
  "cases": "Casos",
  "academy": "Academia",
  "about": "Nosotros",
  "cta": "Hablemos"
}

"footer": {
  "tagline": "Built at the summit. Engineered for the future.",
  "services_title": "Servicios",
  "company_title": "Empresa",
  "contact_title": "Contacto",
  "newsletter_label": "Insights de datos cada semana",
  "newsletter_placeholder": "Tu email corporativo",
  "newsletter_cta": "Suscribirse",
  "copyright": "© 2025 ARKMAPIX. Todos los derechos reservados.",
  "location": "Medellín, Colombia",
  "privacy": "Privacidad",
  "terms": "Términos"
}
```

---

## 7. Formulario de contacto (`/contacto`)

Archivo: `messages/es.json` y `messages/en.json` — clave `contact`

```json
"contact": {
  "hero_title": "Hablemos de tu proyecto",
  "hero_subtitle": "Cuéntanos qué estás construyendo...",
  "info": {
    "email_value": "hola@arkmapix.com",     // ← cambia tu email aquí
    "response_time": "Respondemos en menos de 24 horas",
    "location_value": "Medellín, Colombia"
  }
}
```

---

## 8. Imágenes

Las imágenes actualmente son placeholders visuales (gradientes CSS).
Para reemplazarlas, coloca el archivo en `public/` y edita el componente correspondiente.

### Archivos esperados

| Descripción | Ruta en `public/` | Tamaño sugerido |
|---|---|---|
| Logo SVG oficial | `brand/logo-dark.svg` | — |
| Ícono del logo | `brand/logo-icon.svg` | 32×32 px |
| Fondo del hero | `images/hero/hero-bg.jpg` | 1920×1080 px |
| Foto equipo/about | `images/about/team.jpg` | 1200×800 px |
| Imagen caso 1 | `images/cases/case-01.jpg` | 800×500 px |
| Imagen caso 2 | `images/cases/case-02.jpg` | 800×500 px |
| Imagen caso 3 | `images/cases/case-03.jpg` | 800×500 px |
| Imagen caso 4 | `images/cases/case-04.jpg` | 800×500 px |
| Logos de clientes | `images/clients/cliente-01.svg` | SVG, fondo transparente |

### Cómo reemplazar un placeholder por imagen real

Ejemplo para la card de un caso de uso en `components/sections/CaseStudiesGrid.tsx`:

```tsx
// ANTES (placeholder con gradiente):
<div
  className="relative h-44 flex items-end p-5"
  style={{ background: `linear-gradient(135deg, ${c.bg} 0%, #0A0D14 100%)` }}
>

// DESPUÉS (imagen real):
import Image from "next/image";

<div className="relative h-44 flex items-end p-5 overflow-hidden">
  <Image
    src={`/images/cases/case-0${i + 1}.jpg`}
    alt={title}
    fill
    className="object-cover"
  />
  <div className="absolute inset-0" style={{ background: "rgba(10,13,20,0.5)" }} />
  {/* badge encima */}
</div>
```

---

## 9. Colores y marca

Los colores de la marca están definidos en `app/globals.css`:

```css
@theme {
  --color-cyan:          #00C6FF;   /* azul claro */
  --color-blue-brand:    #0072FF;   /* azul medio */
  --color-violet-brand:  #7B2FF7;   /* violeta */
  --color-magenta-brand: #C026B0;   /* magenta */
  --color-bg-primary:    #0A0D14;   /* fondo principal */
  --color-bg-card:       #0F1825;   /* fondo de cards */
  --color-bg-border:     #1A2840;   /* color de bordes */
}
```

---

## Resumen rápido

```
¿Qué quiero cambiar?                         ¿Dónde?
─────────────────────────────────────────────────────────────────────
Hero, about, servicios (cards), casos (cards)  messages/es.json + en.json
Testimonios, proceso, CTA banner               messages/es.json + en.json
Página /nosotros completa                      messages/es.json + en.json  (clave about_page)
Academia                                       messages/es.json + en.json  (clave academy_page)
Navbar y footer                                messages/es.json + en.json  (claves nav, footer)
Bullets de cards de servicios                  components/sections/ServicesGrid.tsx → SERVICE_DETAILS
Detalle de cada servicio                       app/[locale]/servicios/[slug]/page.tsx → SERVICE_CONTENT
Detalle de cada caso                           app/[locale]/casos/[slug]/page.tsx → CASE_CONTENT
Imágenes                                       public/images/  (luego reemplazar el placeholder en el componente)
Email de contacto                              messages/es.json + en.json  (clave contact.info.email_value)
Colores de marca                               app/globals.css
```
