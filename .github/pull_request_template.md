- Completa la plantilla. Considera que cualquier pull request que no incluya suficiente información para ser revisado a tiempo será cerrado acorde al criterio del revisor.
- Borrar  información innecesaria que viene con la plantilla acorde a su caso.

### TIPO DE PULL REQUEST 
Indique si el pull request es:

- Nueva funcionalidad
- Retiro de Funcionalidad
- Solo Maquetación
- Mejora/actualización no funcional (ejem: performance o actualización de paquetes)
- Corrección de bug.
- Documentación


### DESCRIPCIÓN DEL CAMBIO
Explique brevemente en que consiste el cambio realizado, considerando

 - El problema  a solucionar
 - Estrategia aplicada que solucionará el problema

Puedes ayudarte de la funcionaldiad summary de copilot chat disponible solo desde el cliente web de Github

### IMAGEN DE REFERENCIA

Si es un componente nuevo o  maquetación, adjuntar una captura del resultado y/o storybook. 

### DIAGRAMA
Colocar un diagrama en sintaxis mermaid **apoyándose de copilot** chat que explique uno o más de los siguientes puntos:
- Flujo de la información
- Acciones e interacciones que se disparan con la interacción
- Secuencia de comunicación con APIs externas y del navegador.

### BREAKING CHANGES
Indica si tu PR tiene cambios importantes (no menores), caso contrario, coloca: "Sin breaking changes" 


### AUTOREVISIÓN
El pull request debe cumplir con los siguientes criterios:

- [ ] Máximo 500 lineas modificadas (sin contar archivos de documentación, package-lock.json, assets estáticos como imágenes, y tests).
- [ ] Las variables tienen nombres claros y descriptivos. 
- [ ] Comentarios breves y explícitos en la documentación.  
- [ ] Los algoritmos más conocidos, deben contemplar las versiones más óptimas (ordenamiento, filtrado y búsqueda).
- [ ] Uso correcto de los elementos de optimización y singletons.
- [ ] Un build local efectuado que garantice que  los cambios fueron exitosos.
- [ ] Funciones, y métodos deben respetar la Ley de Demeter y el principio de Responsabilidad Única.