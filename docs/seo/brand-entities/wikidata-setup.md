# Wikidata Entity Setup — TotalGains

**Objetivo**: crear entrada Wikidata oficial para "TotalGains" como entidad SaaS. Esto desbloquea:

- Knowledge Panel de Google (caja lateral en SERP cuando alguien busca "totalgains")
- Citación en ChatGPT/Perplexity/Gemini (los LLMs priorizan entidades con Wikidata para respuestas)
- Atribución verificable en otros wikis y servicios de IA
- Mejora brand query "totalgains" que lleva 10 audits invisible

**Tiempo estimado**: 30-60 min de trabajo manual.

> Wikidata acepta entradas para marcas/empresas con presencia verificable: web pública + listings en directorios + casos de prensa. TotalGains cumple los criterios al tener web pública, casos de éxito documentados, y blog activo.

---

## Paso 1 · Crear cuenta Wikidata (5 min)

1. Ve a https://www.wikidata.org/wiki/Special:CreateAccount
2. Username sugerido: `TotalGainsES` o tu nombre real (Wikidata recomienda nombres reales para confianza editorial)
3. Email: `soporte@totalgains.es`
4. Verifica email y haz login

**Importante**: Wikidata permite editar SIN cuenta pero las contribuciones registradas tienen más peso para evitar reverts.

---

## Paso 2 · Crear el item TotalGains (15 min)

1. Ve a https://www.wikidata.org/wiki/Special:NewItem
2. **Label** (en español): `TotalGains`
3. **Description** (en español): `Plataforma SaaS para entrenadores personales fundada en 2025 en España`
4. **Aliases** (en español, separados por `|`): `Total Gains | TotalGains.es | TotalGains Fitness`
5. Clic en **Crear**

Te asignará un identificador único tipo `Q123456789`. **APÚNTALO** — lo necesitarás para añadirlo al sameAs del schema del sitio.

---

## Paso 3 · Añadir propiedades (Statements) (20 min)

En la página de tu nuevo item, clic en **+ añadir declaración** para cada propiedad. Pega cada una:

### Identidad

| Propiedad | Valor a buscar | Notas |
|---|---|---|
| **P31** (instance of / es:instancia de) | `software-as-a-service` (Q1058914) | Tipo de entidad |
| **P31** (instance of) | `business` (Q4830453) | Segunda declaración del mismo P31 |

### Datos básicos

| Propiedad | Valor | Notas |
|---|---|---|
| **P571** (inception / fecha de fundación) | `2025` | Año exacto |
| **P17** (country / país) | `Spain` (Q29) | Buscar y seleccionar |
| **P159** (headquarters location / sede) | `La Zubia` (Q1004528) o `Granada` (Q5290) | El que aparezca |
| **P112** (founded by / fundado por) | `Germán Martínez Calvente` (texto libre si no existe item) | |

### Web y enlaces

| Propiedad | Valor |
|---|---|
| **P856** (official website / sitio web oficial) | `https://totalgains.es` |
| **P2002** (Twitter username) | N/A (skip si no usas Twitter) |
| **P2003** (Instagram username) | `totalgainsfitness` |
| **P2013** (Facebook ID) | N/A |
| **P2397** (YouTube channel ID) | `UCOJehcX1G6jABjONKmXCmbQ` |
| **P3933** (App Store app ID) | `6756856683` |
| **P3418** (Google Play package) | `com.german92.titofitapp` |

### Industria

| Propiedad | Valor |
|---|---|
| **P452** (industry / sector industrial) | `Software industry` (Q880198) |
| **P452** (industry) | `Fitness industry` (Q5454097) |

### Productos

| Propiedad | Valor |
|---|---|
| **P1056** (product / producto) | `Personal trainer software` (texto libre) |

---

## Paso 4 · Añadir referencias (importante para no ser revertido)

Wikidata reverteer cualquier declaración sin **reference** (fuente verificable). Para cada Statement que añadas:

1. Clic en **+ añadir referencia**
2. Propiedad: **P854** (reference URL)
3. Valor: una URL pública de totalgains.es que pruebe el dato. Ejemplos:
   - Para `inception 2025`: `https://totalgains.es/sobre-nosotros/`
   - Para `founded by Germán`: `https://totalgains.es/sobre-nosotros/`
   - Para `headquarters La Zubia`: `https://totalgains.es/aviso-legal/`
   - Para `Instagram username`: `https://www.instagram.com/totalgainsfitness/`

Sin referencias, otros editores Wikidata pueden marcar como "unsourced" y borrar.

---

## Paso 5 · Pegar la URL Wikidata al sitio (5 min)

Una vez creada la entry, tendrá URL tipo:
```
https://www.wikidata.org/wiki/Q123456789
```

Cópiala y **pásamela en el chat para que la añada a Organization.sameAs en**:
- `src/app/page.js`
- `src/app/sobre-nosotros/page.js`

Esto cierra el bucle: el sitio declara la entrada Wikidata, y Wikidata declara el sitio. Google detecta el match bidireccional y desbloquea Knowledge Panel.

---

## Tips Wikidata

- **Empieza con poca información** y ve añadiendo en sesiones de 5-10 min. Mejor 5 statements bien sourced que 30 sin referencias.
- **No borres ni reescribas declaraciones de otros editores** sin justificación. Wikidata es comunidad colaborativa.
- **Si rechazan tu item por "no notability"**: añade más fuentes secundarias (menciones en prensa, podcasts, libros). Para SaaS pequeño puede ser tricky pero TotalGains tiene casos de éxito y blog activo, suficiente.
- **Plazo de aparición en Google Knowledge Panel**: 4-12 semanas tras crear el item con statements completos y referenced.

---

## Siguiente

Tras Wikidata, sigue con [linkedin-company-setup.md](linkedin-company-setup.md) para crear LinkedIn Company Page. Las 2 entidades combinadas son el 80% del trabajo para activar el Knowledge Panel.
