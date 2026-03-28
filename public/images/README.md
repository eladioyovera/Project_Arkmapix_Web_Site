# ARKMAPIX — Image Assets

## Estructura de carpetas

### /hero/
- `hero-bg.jpg` — Fondo del hero: abstracto, datos/arquitectura, tonos azul-oscuro.
  Resolución: 1920×1080px mínimo. Sugerencia: visualización 3D de red de datos o
  ciudad futurista nocturna sobre montaña andina.

### /about/
- `team-photo.jpg`              — Foto del equipo o fundador en contexto profesional. 800×600px.
- `machu-picchu-abstract.jpg`   — Machu Picchu o textura de piedra inca geométrica. 1200×800px.

### /cases/
- `case-01.jpg` — Caso RetailCo. Captura o visualización. 800×500px.
- `case-02.jpg` — Caso IA Supply Chain. 800×500px.
- `case-03.jpg` — Caso Data Mesh Finanzas. 800×500px.
- `case-04.jpg` — Caso Analytics Salud. 800×500px.

### /clients/
Logos de clientes (SVG preferido, PNG fallback, fondo transparente).
Nombrar: `client-[nombre].svg` (todo minúsculas, sin tildes).
Ejemplos: `client-retailco.svg`, `client-bancandino.svg`

## Mientras no existan las imágenes reales

Los componentes usan placeholders con `<div>` + gradientes que representan
el espacio visual correcto. No se usan servicios externos.
Para reemplazar un placeholder, simplemente depositar la imagen en la ruta
indicada y actualizar el componente correspondiente con `next/image`.
