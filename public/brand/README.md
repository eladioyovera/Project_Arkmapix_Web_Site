# ARKMAPIX Brand Assets

Depositar aquí los siguientes archivos cuando estén listos:

- `logo-dark.svg`  — Logo completo (wordmark + ícono) versión clara sobre fondo oscuro
- `logo-light.svg` — Logo completo versión oscura sobre fondo claro (si aplica)
- `logo-icon.svg`  — Solo el ícono "A" sin wordmark (para favicon y usos compactos)

## Notas de uso

- El componente `<Logo />` en `components/layout/Navbar.tsx` está listo para
  intercambiar el placeholder por `logo-dark.svg` una vez exista el archivo.
- El favicon se configura en `app/[locale]/layout.tsx` bajo `icons`.
- Formato: SVG vectorial, fondo transparente.
- Colores recomendados para logo-dark.svg: blanco puro (#FFFFFF) o gradiente signature.
