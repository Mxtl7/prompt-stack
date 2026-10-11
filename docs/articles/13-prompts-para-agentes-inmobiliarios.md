---
title: "Prompts para Agentes Inmobiliarios: 11 Flujos de Trabajo Listos para Copiar"
description: "Prompts para agentes inmobiliarios: copiá y pegá flujos para fichas de propiedades, seguimiento de leads, CMA y campaña de venta. Incluye un prompt gratis completo."
date: 2026-10-11
slug: "prompts-para-agentes-inmobiliarios"
tags: ["prompts", "bienes raices", "inmobiliaria", "chatgpt"]
---

# Prompts para Agentes Inmobiliarios: 11 Flujos de Trabajo Listos para Copiar

## Introducción

La mayoría de los agentes inmobiliarios no pierde el tiempo mostrando propiedades. Lo pierde en todo lo que está alrededor: la ficha que hay que escribir para cada nueva exclusiva, el correo de seguimiento que el lead del domingo sigue esperando el miércoles, el comparativo de mercado que el vendedor pidió "para mañana". Un agente con 8 propiedades activas y 40 leads en seguimiento genera decenas de documentos por semana, y casi todos comparten la misma estructura.

Ahí es donde los prompts para agentes inmobiliarios hacen la diferencia real. No venden propiedades por vos, pero eliminan el tiempo de página en blanco: los cuatro minutos que gastás intentando recordar cómo redactaste la descripción de ese departamento similar el mes pasado, o qué información le prometiste al comprador en el último mensaje.

Esta guía está escrita para agentes y brokers que trabajan con clientes reales, no para coleccionistas de prompts. Cubre dónde la ayuda de la IA es genuinamente útil en una inmobiliaria, dónde es un riesgo, un prompt completo que podés usar hoy, y cómo armar una biblioteca que tu equipo entero pueda compartir.

## Por qué la carga administrativa no baja

### Documentos que nadie te enseñó a escribir

La formación inmobiliaria enseña tasación, negociación y cierre. Casi nadie enseña cómo escribir una ficha que posicione en portales, un correo de reactivación de lead frío que no suene desesperado, o un resumen de CMA que un vendedor nervioso pueda entender sin llamarte. Ese vacío es la razón por la que el trabajo administrativo crece hasta llenar las noches: cada portal nuevo, cada par de ojos nuevo sobre tu cartera, agrega otro formato de documento.

### El costo real por propiedad

Medilo con honestidad durante una semana. Un agente que escribe cada ficha en 25 minutos y procesa 6 propiedades nuevas al mes gasta 2,5 horas mensuales solo en descripciones. Sumá seguimientos, informes de mercado y respuestas a consultas repetidas, y la cifra se acerca a 8 horas: una jornada completa de trabajo no remunerado dedicada a redactar en lugar de a cerrar.

## Las reglas antes de pegar nada en una IA

### Datos del cliente fuera del prompt

Nunca pegues nombres completos, direcciones exactas de propiedades con acuerdo de exclusiva vigente, teléfonos ni datos financieros de tus clientes. Usá placeholders — "Propiedad A, 3 ambientes, zona norte, valor de referencia X" — y mantené los datos identificatorios en tu CRM, donde pertenecen. La información de una negociación en curso es tu activo más sensible: no la entregues a una herramienta de terceros sin pensarla dos veces.

### El agente firma, la IA redacta

Todo lo que sale de un modelo de lenguaje es un borrador. Cada ficha que se publica, cada correo que se envía, debe pasar por tu lectura: verificá superficie, ambientes, expensas y medidas contra la documentación real de la propiedad. Un dato inventado en una ficha no es solo un error de redacción — es una responsabilidad legal tuya.

### Nada de promesas que la propiedad no cumple

El error más común no es la mala gramática sino la invención confiada: pedirle a la IA que "escriba una descripción atractiva" termina en "oportunidad única de inversión con plusvalía garantizada". Frases así te pueden costar una demanda por publicidad engañosa. Cada prompt de esta lista está construido para trabajar solo con lo que vos suministrás y marcar los vacíos en lugar de rellenarlos.

## Dónde los prompts ahorran tiempo en una inmobiliaria

### 1. Fichas y descripciones de propiedades

Dale al modelo la lista de atributos reales — ambientes, superficie, antigüedad, amenities, estado — y pedile una ficha en tu formato y para el portal específico. Un borrador bien estructurado en 20 segundos; vos corregís los datos, que toma mucho menos que redactar desde cero.

### 2. Seguimiento de leads y reactivación

Los leads inmobiliarios se enfrían rápido: el que consultó por un 2 ambientes hoy compra con otro agente en tres semanas si nadie lo contactó. Un prompt que redacte el mensaje de seguimiento con el historial de la consulta como único insumo convierte 30 correos genéricos en 30 mensajes con contexto, en el tiempo que antes te tomaba escribir uno.

### 3. Informes comparativos de mercado (CMA)

El vendedor no entiende tu análisis de comparables; entiende una tabla clara con tres rangos de precio y una recomendación. Un prompt que transforme tus datos en un informe legible reduce de 40 minutos a 10 la preparación de cada presentación de captación.

### 4. Respuestas a consultas frecuentes de portales

"¿Incluye cochera?", "¿cuál es la expensa?", "¿aceptan mascotas?". Las mismas diez preguntas por propiedad, respondidas a cualquier hora. Un prompt con las respuestas maestras de cada propiedad genera borradores de respuesta que vos revisás y enviás en segundos.

### 5. Publicaciones para redes sociales

Una foto de propiedad nueva merece más que "¡Nueva exclusiva!". Un prompt que genere 5 variantes de post para Instagram con enfoques distintos — inversión, estilo de vida, ubicación, primera vivienda, renovación — te da un mes de contenido de una sola tarde de fotografía.

### 6. Correos a propietarios (reportes de actividad)

El propietario que te dio la exclusiva quiere saber qué hiciste esta semana. Un prompt que convierta tus métricas reales — visitas, consultas, mostrados — en un reporte quincenal claro evita que el silencio se lea como desinterés.

### 7. Preparación de visitas y objeciones

Las mismas 5 objeciones aparecen en cada operación: precio, ubicación, expensas, antigüedad, financiación. Un prompt que prepare argumentos basados en los datos reales de la propiedad te hace llegar a cada visita con respuestas, no con improvisaciones.

## Prompt gratis: redactor de fichas de propiedad

Este es un prompt del set inmobiliario del [pack de prompts para trabajar más rápido](https://mxtl7.github.io/prompt-stack/). Sigue la estructura del pack: instrucción de sistema, especificación de salida, parámetros entre corchetes que llenás por propiedad, y banderas que le dicen al modelo cuándo detenerse y preguntarte.

```
INSTRUCCIÓN DE SISTEMA
Sos un asistente de redacción inmobiliaria que trabaja para un agente matriculado.
Escribís fichas de propiedades SOLO con los datos que el agente suministra. Nunca
inventas medidas, antigüedad, amenities, precios ni condiciones de financiación.
Cuando falta un dato necesario, insertás la bandera [CONFIRMAR: qué falta] en lugar
de completarlo. Tu salida es un borrador para revisión del agente, no texto final.

ENTRADAS (sin datos identificatorios de clientes)
- Tipo de propiedad: [departamento | casa | PH | oficina | lote | local]
- Operación: [venta | alquiler | alquiler temporario]
- Ambientes y distribución: [ej. 3 ambientes, 2 dormitorios, living-comedor]
- Superficie total / cubierta: [m2 según escritura o plano]
- Antigüedad: [años | a estrenar]
- Estado general: [impecable | muy bueno | a refaccionar — solo lo observado]
- Amenities reales: [lista — dejar vacío si no hay]
- Cocheras / bauleras: [cantidad o "no tiene"]
- Expensas: [monto o "a confirmar"]
- Orientación / luz: [solo si el agente lo observó]
- Barrio o zona de referencia: [zona general, sin dirección exacta]
- Portal de destino: [PortalX | PortalY | web propia]
- Tono: [cercano | profesional | premium]

ESPECIFICACIÓN DE SALIDA
1. Título de máximo 60 caracteres con el atributo más fuerte REAL de la propiedad.
2. Descripción de 120–160 palabras: primer párrafo con distribución y luz, segundo
   con amenities y entorno verificado. Sin adjetivos vacíos ("espectacular",
   "única", "oportunidad").
3. Lista de datos clave: superficie, ambientes, antigüedad, expensas, cochera.
   Todo dato no suministrado va como [CONFIRMAR: …], nunca estimado.
4. Tres versiones del primer renglón para el portal, con enfoques distintos:
   habitacional, inversión, ubicación.
5. Una línea final: "BORRADOR — revisión y verificación de datos por el agente."
6. Si la expensa es "a confirmar" o falta superficie cubierta, agregá al final:
   [CONFIRMAR: datos de expensa/superficie antes de publicar].

REGLAS
- Prohibido: "oportunidad única", "plusvalía garantizada", "inversión sin riesgo".
- Si un dato sensible (medidas, expensas) no fue suministrado, la ficha se devuelve
  incompleta con las banderas. No rellenar con promedios de mercado.
```

Uso: pegá los atributos reales en el bloque ENTRADAS, ejecutalo y leé el borrador contra la documentación de la propiedad. Cada [CONFIRMAR] es un dato real que te falta, no un problema de la computadora — resolvélo en tu CRM antes de publicar. Los agentes con cartera grande suelen mantener dos variantes: una para venta y una para alquiler, porque el comprador y el inquilino leen distinto.

## Dos prompts más, gratis

El segundo flujo más repetido en una inmobiliaria es el seguimiento de leads. Este va del set inmobiliario del [pack de prompts](https://mxtl7.github.io/prompt-stack/):

```
INSTRUCCIÓN DE SISTEMA
Sos un asistente de seguimiento comercial para un agente inmobiliario. Redactás
mensajes SOLO con los datos de la consulta y la propiedad que el agente suministra.
Nunca inventás disponibilidad, precios ni promesas de gestión. Datos faltantes:
[CONFIRMAR: …]. Tu salida es un borrador para revisión del agente.

ENTRADAS
- Lead: [consulta original, en sus palabras — anonimizada]
- Propiedad de referencia: [tipo, zona general, valor de referencia]
- Última interacción: [fecha relativa y qué pasó]
- Novedad real desde entonces: [propiedad nueva, ajuste de precio, "sin novedad"]
- Canal: [WhatsApp | email | portal]
- Objetivo del mensaje: [reactivar | agendar visita | avisar novedad]

SALIDA
1. Tres variantes del mensaje (máx. 60 palabras c/u): directa, de valor, de
   cierre suave. Cada una termina con una pregunta concreta.
2. Sin promesas de exclusividad ni presiones falsas ("última unidad" solo si
   está en las entradas).
3. Cierre: "BORRADOR — el agente personaliza y envía."
```

El tercero cubre el reporte al propietario, el documento que evita que el silencio se lea como desinterés:

```
INSTRUCCIÓN DE SISTEMA
Sos un asistente de reportes para un agente inmobiliario. Convertís las métricas
que el agente suministra en un reporte quincenal para el propietario. Nunca
inventás visitas, consultas ni recomendaciones de precio. Faltantes:
[CONFIRMAR: …]. Borrador para revisión.

ENTRADAS
- Propiedad: [tipo, zona general, tiempo en cartera]
- Métricas reales: [visitas del portal, consultas recibidas, mostrados]
- Feedback de interesados: [lo que dijeron, sin identificar a nadie]
- Recomendación del agente: [si hay ajuste de precio o de estrategia]
- Canal: [email | WhatsApp]

SALIDA
1. Resumen de actividad en 3 líneas, solo con las métricas suministradas.
2. Tabla: métrica, valor, cambio vs. quincena anterior (si fue suministrada).
3. Feedback del mercado en 2 líneas, en lenguaje neutro.
4. Recomendación SOLO si el agente la suministró; si no, línea con
   [CONFIRMAR: recomendación pendiente].
5. Cierre: "BORRADOR — revisión del agente antes de enviar."
```

## Cómo adaptar los prompts a tu mercado y portales

### Parametrizar en lugar de reescribir

No reescribás el prompt por propiedad. Cambiá el bloque ENTRADAS y dejá el resto intacto. Eso mantiene el formato estable, las fichas comparables entre sí y tu revisión rápida.

### Adaptar el lenguaje al portal y al lector

Cada portal tiene su cultura: hay portales donde "a refaccionar" asusta y otros donde filtra al comprador equivocado si lo disfrazás. Un prompt que reciba el portal como parámetro produce la ficha correcta para cada canal sin que reescribas a mano.

### Mantener una biblioteca compartida

Si trabajás en equipo, las fichas inconsistentes delatan quién las escribió. Un documento compartido con los prompts acordados — mismo tono, mismas banderas, mismos datos obligatorios — hace que la salida de los tres agentes parezca de una sola oficina.

## Cómo saber si te está ahorrando tiempo de verdad

Medí dos semanas: minutos por ficha antes y después, minutos por correo de seguimiento, horas por informe de CMA. Los agentes que cronometran honestamente suelen reportar las mayores ganancias en fichas y correos (40 a 60 por ciento más rápido) y ganancias más modestas en informes, donde el trabajo duro es el análisis de datos, no la redacción. Anotá tus propios números en lugar de confiar en la estimación de nadie, incluida esta.

## Modos de falla comunes y cómo detectarlos

**Datos inventados.** El modelo agrega un amenities que la propiedad no tiene o redondea la superficie "para que suene mejor". Solución: la instrucción explícita de nunca inventar más una pasada de revisión contra la ficha catastral.

**Publicidad engañosa.** "A 2 cuadras del subte" cuando son 6, o "zona de alta demanda" sin fuente. Solución: prohibir adjetivos de mercado en el prompt y escribir solo atributos observados o documentados.

**Salida genérica y sin vida.** Fichas que parecen escritas por un formulario. Solución: suministrá detalles reales — la luz del mediodía en el living, el baulera que resolvería el problema de almacenamiento del comprador típico. Entradas vagas producen borradores vagos.

**Textos que comprometen al agente.** El modelo redacta una condición de financiación o una política de reserva que vos nunca acordaste. Solución: tratar toda salida comercial como borrador que necesita tu firma, y cotejarla con tu lista de precios y condiciones reales.

## Preguntas frecuentes

### ¿Puedo usar ChatGPT para escribir fichas de propiedades?

Sí, como borrador a partir de los datos reales que vos suministrás, y revisando cada dato contra la documentación antes de publicar. No podés pegar datos identificatorios de clientes ni datos de negociaciones en curso sin pensar el riesgo. La ficha publicada es responsabilidad tuya ante el cliente y ante el organismo que te matricula.

### ¿Es legal usar IA para redactar contenido inmobiliario?

Redactar con IA no está prohibido; publicar información falsa o engañosa sí, con o sin IA. La regla práctica: cada dato de la ficha debe tener origen en tu documentación, no en la inventiva del modelo. Revisá la normativa publicitaria de tu colegio profesional, que en varios países ya menciona explícitamente el contenido generado con IA.

### ¿Cuál es el mejor prompt para agentes inmobiliarios?

Los que mejor funcionan comparten cuatro rasgos: prohíben datos inventados, especifican el formato exacto de salida, usan parámetros editables para propiedad y portal, y marcan la información faltante en lugar de rellenarla. Un prompt de redacción estructurado, usado con constancia, le gana a diez prompts ingeniosos usados una vez.

### ¿Mis fichas van a sonar iguales a las de otros agentes?

Solo si usás entradas genéricas. Las fichas se vuelven distintivas por los detalles que les cargás: la orientación real, el motivo del vendedor, la característica que nadie más destaca. El modelo maneja la estructura; el conocimiento de la propiedad es tuyo.

### ¿Cuánto tiempo se ahorra en realidad?

Quienes lo miden con honestidad reportan los mayores ahorros en fichas y seguimientos (40 a 60 por ciento más rápido) y ahorros moderados en informes de mercado. Registrá tus propios tiempos dos semanas y decidí con datos, no con entusiasmo.

### ¿Sirve para captar propiedades o solo para publicar?

Sirve para las dos cosas, pero con distinto valor. En publicación ahorra tiempo; en captación mejora la primera impresión: un CMA claro y legible en la reunión de captación transmite profesionalismo antes de que hables de honorarios. La IA prepara el material; la confianza se la ganás vos.

## Dónde están los demás prompts

El redactor de fichas de arriba es uno de once flujos de trabajo del [pack de prompts en español](https://mxtl7.github.io/prompt-stack/). Los demás cubren seguimiento de leads, informes de mercado, reportes a propietarios, contenido para redes y preparación de objeciones, todos con el mismo formato de instrucción de sistema / salida / parámetros / banderas que podés levantar a tu herramienta favorita.

Si te llevás una sola cosa de este artículo: construí el prompt una vez, parametrizalo, y cargale solo datos que puedas defender. El ahorro de tiempo es real y moderado. El riesgo de datos inventados no lo es.

---
*Este artículo es parte de [Prompt Stack](https://mxtl7.github.io/prompt-stack/), una biblioteca de sistemas de prompts documentados para profesionales. Ver también: [guía de prompts para freelancers](https://mxtl7.github.io/prompt-stack/articles/01-ai-prompts-for-freelancers/).*
