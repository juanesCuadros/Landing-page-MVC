# Brief de diseño — Landing de servicios para MVC

> Referencia analizada: landing "Software a la medida" de Cidenet (cidenet.com.co/lp-software-a-la-medida), revisada el 22-sep-2026 en escritorio (1436 px).
> Objetivo: construir una landing **parecida en estructura y estilo** para MVC, con marca, textos, fotos e íconos propios (no copiar logo, imágenes ni textos de Cidenet).

---

## 1. Concepto general

- Landing de **generación de leads B2B** para una empresa de desarrollo de software a la medida + outsourcing de talento TI.
- Una sola página larga (~7.600 px en escritorio), un solo objetivo: que el visitante llene el formulario de asesoría al final.
- Estética **corporativa-tech limpia**: fondo gris muy claro, mucho aire, tipografía grotesca grande, un único color de acento azul eléctrico, y una fuente monoespaciada para botones y etiquetas (el guiño "developer").
- Tono del copy: tuteo, directo, orientado a dolor → solución ("¿Tu software ya no responde…?", "sin interrumpir tu operación").
- Repite el CTA cada 1–2 secciones.

---

## 2. Design tokens

### Colores

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#F7F7F7` | Fondo general de la página |
| `--surface` | `#FFFFFF` | Tarjetas, chips, logos de clientes |
| `--surface-alt` | `#EEEEEE` / `#F1F1F1` | Franja "¿Qué hacemos?" |
| `--primary` | `#0070F5` | Botones, íconos de beneficios, logo, links |
| `--primary-soft` | `#EBF4FF` | Fondo de los mini-íconos en tarjetas de servicios |
| `--form-bg` | `#EEF0F4` aprox. | Panel del formulario |
| `--text` | `#2D2D2D` | Todo el texto (títulos y cuerpo) |
| `--text-muted` | `#43474E` / `#989B9F` | Labels secundarios, placeholders |
| `--border` | `#000000` 1 px | Borde de tarjetas de "Perfiles" y "Sectores" |
| `--overlay` | `rgba(0,0,0,.55–.6)` | Sobre fotos de fondo en el banner CTA |
| `--whatsapp` | `#2DB742` | Botón flotante de WhatsApp |

Regla: **un solo color de acento**. Todo lo demás es escala de grises.

### Tipografía

- **Display / cuerpo:** `neue-haas-grotesk-display` (Adobe Fonts). Alternativas libres: **Inter Tight**, **Manrope**, **Hanken Grotesk** o **Inter**.
- **Mono (botones, chips, eyebrows, menú):** `Roboto Mono`, siempre en MAYÚSCULAS con `letter-spacing` ~1 px.
- `letter-spacing: 1px` global en el cuerpo (le da un aire "técnico").

| Elemento | Tamaño / peso / line-height |
|---|---|
| H1 hero (es un h2 en el sitio) | 48 px / 600 / 58 px |
| H2 de sección | 40 px / 600 |
| H3 beneficio | 32 px / **400** (ligero, contraste con los H2) |
| H4 tarjeta | 24 px / 600 / 30 px |
| Lead / subtítulo | 20–22 px / 400 |
| Cuerpo | 16 px / 400 / 20–24 px |
| Botón / chip / eyebrow | Roboto Mono 12–16 px, uppercase |

### Forma y espaciado

- Botón: `background: var(--primary); color:#fff; border-radius: 20px; padding: 12px 24px;` Roboto Mono uppercase. Algunos llevan un ícono circular de flecha (→) a la derecha.
- Tarjeta de servicio: blanca, `border-radius: 10px`, `padding: 15–24px`, **sin sombra**.
- Tarjeta outline (perfiles/sectores): fondo transparente, `border: 1px solid #000`, `border-radius: 15px`, `padding: 45px`, contenido centrado.
- Chip de tecnología: blanco, `border-radius: 20px`, `padding: 12px 24px`, Roboto Mono 12 px uppercase + ícono pequeño.
- Imágenes: esquinas redondeadas 10–40 px (la foto del formulario tiene radio grande, ~40 px).
- Contenedor máx. ~1280 px, centrado. Secciones con 80–120 px de padding vertical.
- Sin sombras en casi nada; la jerarquía se hace con fondo blanco sobre gris claro.

---

## 3. Estructura sección por sección

1. **Header** (≈88 px, fijo al hacer scroll, fondo claro con sombra suave al estar fijo)
   - Izquierda: logo (isotipo + wordmark en azul primario).
   - Derecha: `MENÚ ☰` en Roboto Mono (menú hamburguesa también en escritorio → abre overlay).

2. **Hero** (≈600–700 px)
   - Foto a sangre completa con una persona + elementos HUD/holográficos; degradado blanco→transparente desde la izquierda para que el texto sea legible.
   - Columna izquierda (~50 %): H1 pregunta de dolor (2 líneas), 2 bullets con ✔ azul separados por una línea fina, botón `SOLICITA ASESORÍA →`.

3. **"¿Qué hacemos?"** — franja gris un tono más oscuro
   - 2 columnas: título H3 bold a la izquierda, párrafo descriptivo a la derecha.

4. **"Nuestros servicios incluyen:"**
   - Grid: 2/3 izquierda con tarjetas blancas 2×3 (mini-ícono azul en cuadrado `--primary-soft` + título H4 bold); 1/3 derecha con una foto vertical grande de equipo en oficina, bordes redondeados.
   - 5 servicios (una celda queda vacía — en MVC mejor usar 6 o 4).

5. **"¿Qué gana tu empresa?"** — beneficios
   - H2 centrado. 4 columnas: ícono azul relleno (~48 px), H3 ligero de 2 líneas, texto corto centrado.
   - Botón `DESCUBRE MÁS` centrado.

6. **Bloque imagen + texto (caso específico)**
   - Imagen izquierda (laptop + íconos holográficos), a la derecha H3 bold con pregunta ("¿Tienes sistemas legacy…?") y párrafo 20 px.

7. **Banner CTA con foto de fondo**
   - Foto de equipo programando a ancho completo con overlay oscuro; H2 blanco centrado de 2 líneas + botón `QUIERO SABER MÁS`.

8. **"Perfiles TI disponibles"**
   - H2 + subtítulo centrados. Grid 3×2 de tarjetas outline (borde negro 1 px, radio 15), ícono negro, título bold centrado, descripción opcional.
   - Botón `SOLICITA UNA ASESORÍA SIN COSTO`.

9. **"Tecnologías en las que trabajamos"**
   - Chips blancos tipo pill en 2 filas centradas, con ícono + nombre en mono uppercase.

10. **"Sectores donde generamos valor"**
    - Mismo estilo de tarjetas outline: 3 arriba + 2 anchas abajo, ícono negro + título.

11. **Clientes**
    - Eyebrow `CLIENTES QUE HAN CONFIADO` en mono, centrado. Fila/carrusel de logos en cajas blancas del mismo tamaño.

12. **Formulario de conversión**
    - Izquierda: H2 "¿Listo para llevar tu **software** al siguiente nivel?" (palabra clave en negrita extra) + foto de una persona del equipo, radio grande.
    - Derecha: panel gris-azulado con título "Perfil de tu proyecto" y campos: nombre, apellido, correo, empresa, celular (selector de país +57), selects de calificación (tipo de solución, estado del proyecto, necesidad principal, rango de presupuesto), checkbox de tratamiento de datos (Ley 1581 Colombia) y botón azul ancho.
    - Inputs: fondo blanco, `border-radius: 20px` (píldora), borde gris claro, ícono a la izquierda.

13. **Footer**
    - Logo arriba. 4 tarjetas con borde gris muy suave: Visítanos (dirección), Contáctanos (tel/correo), Síguenos (redes con íconos), Menú (links, algunos con submenú ▾).

14. **Flotantes**
    - Botón WhatsApp verde + burbuja "Escríbenos ahora / ¿En qué puedo ayudarte?" abajo a la derecha. Banner de cookies oscuro fijo abajo.

---

## 4. Íconos e imágenes

- Íconos estilo **Font Awesome sólido** (servicios: línea fina azul; beneficios: sólidos azules; perfiles/sectores: sólidos negros). Alternativa: Lucide / Phosphor.
- Fotos: stock corporativo latino, oficinas modernas, pantallas con código, detalles holográficos azules. Tratamiento frío, con predominio de azul/gris.

---

## 5. Responsive (móvil)

- Grids → 1 columna; beneficios 2×2 o 1 columna.
- Hero: texto sobre la foto con overlay más fuerte, o foto debajo del texto.
- H1 ~32 px, H2 ~28 px. Botones a ancho completo.
- Chips de tecnología hacen wrap centrado.
- Formulario debajo de la foto (o esconder la foto).

---

## 6. Adaptación a MVC

Mantener la **estructura y el sistema visual**, cambiar identidad y contenido:

- **Marca:** logo propio de MVC; elegir un acento propio (p. ej. mantener un azul, o cambiar a otro color único) y conservar la regla de "un solo acento + grises".
- **Hero:** dolor del cliente objetivo de MVC (ej. procesos manuales, sistemas que no escalan, falta de datos para decidir).
- **Servicios sugeridos** (según lo que hace MVC): desarrollo web a la medida (Java Spring Boot + React), APIs y arquitectura hexagonal/reactiva, automatización de procesos con n8n, BI y data engineering (ETL, data warehouse, dashboards), integraciones con CRMs (ej. Kommo).
- **Beneficios:** 4 columnas (ej. entregas incrementales, código mantenible, automatización que ahorra horas, datos accionables).
- **Bloque caso específico:** reemplazar "legacy Oracle" por un caso real de MVC (ej. dashboard BI o automatización con n8n).
- **"Perfiles TI" →** puede convertirse en "Cómo trabajamos" (descubrimiento → diseño → desarrollo → despliegue) si MVC no ofrece outsourcing.
- **Tecnologías:** Java, Spring Boot, React, PostgreSQL, Docker, n8n, Python, etc.
- **Clientes/proyectos:** solo proyectos y logos reales con autorización; si aún no hay, usar "Proyectos destacados" con capturas propias.
- **Formulario:** mismos campos de calificación; conectar a n8n / correo; incluir autorización de datos personales (Ley 1581).

---

## 7. Prompt listo para pegar en otra IA

```
Construye una landing page de una sola página para "MVC", un estudio de desarrollo de software a la medida en Colombia (Java Spring Boot, React, automatización con n8n y BI/data engineering). Objetivo: captar leads mediante un formulario de asesoría.

Stack: [React + Tailwind / HTML + CSS — elige]. Mobile-first y totalmente responsive.

Sistema visual:
- Fondo #F7F7F7, superficies #FFFFFF, texto #2D2D2D, un único acento [#0070F5 o el color de MVC]; acento suave #EBF4FF para fondos de íconos.
- Tipografía: grotesca tipo Inter Tight/Manrope para todo (H1 48/600, H2 40/600, H3 32/400, H4 24/600, cuerpo 16, letter-spacing 1px). Roboto Mono UPPERCASE para botones, chips, menú y eyebrows.
- Botones píldora (radius 20px, padding 12x24, acento con texto blanco). Tarjetas blancas radius 10 sin sombra; tarjetas outline con borde 1px negro, radius 15, padding 45, contenido centrado. Chips blancos radius 20. Inputs tipo píldora.
- Mucho espacio en blanco, sin sombras, jerarquía con blanco sobre gris claro.

Secciones en orden:
1. Header: logo izquierda, "MENÚ ☰" mono derecha, sticky.
2. Hero: foto a sangre con degradado claro a la izquierda; H1 en forma de pregunta de dolor, 2 bullets con check del acento, botón "SOLICITA ASESORÍA →".
3. Franja "¿Qué hacemos en MVC?": título izquierda / párrafo derecha.
4. "Nuestros servicios incluyen:": grid 2x3 de tarjetas blancas con mini-ícono + título, y foto vertical del equipo a la derecha.
5. "¿Qué gana tu empresa?": 4 columnas con ícono del acento, título ligero y texto corto; botón "DESCUBRE MÁS".
6. Bloque imagen izquierda + texto derecha con un caso concreto.
7. Banner a ancho completo con foto + overlay oscuro, frase en blanco y botón.
8. "Cómo trabajamos" (o perfiles): grid 3x2 de tarjetas outline con ícono negro.
9. "Tecnologías": chips pill con ícono + nombre en mono.
10. "Sectores": tarjetas outline 3 + 2.
11. "Proyectos / clientes": eyebrow mono + fila de logos en cajas blancas.
12. Formulario: izquierda H2 con palabra clave en negrita + foto redondeada; derecha panel gris-azulado con nombre, apellido, correo, empresa, celular (+57), selects (tipo de solución, estado del proyecto, necesidad, presupuesto), checkbox de tratamiento de datos (Ley 1581) y botón ancho.
13. Footer: logo + 4 tarjetas (Ubicación, Contacto, Redes, Menú).
14. Botón flotante de WhatsApp abajo a la derecha.

Usa íconos de Lucide o Font Awesome e imágenes placeholder. Escribe el copy en español, tuteando, frases cortas orientadas a dolor → solución.
```
