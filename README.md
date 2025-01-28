# Product Owner

Licenciado en Relaciones Internacionales en la Universidad de San Andrés (2020) y futuro Analista en Sistemas en la Escuela Da Vinci (2025)


# Proyectos

## **Errepar: Migración de Sharepoint a Teamsite Cloud** 

Errepar es una editorial argentina reconocida por su especialización en contenido técnico y profesional en las áreas de contabilidad, finanzas, derecho, tributación, y recursos humanos. Publica libros, revistas, y material de consulta tanto en formato físico como digital, dirigido a profesionales contables como judiciales.

![Errepar2019](https://github.com/user-attachments/assets/49dbafed-39bc-40bc-abf0-57ede0cc7d1a)
*Errepar en el 2019. Interfaz desactualizada, no responsive y con una paleta de colores antigua*. 
            
Errepar utilizaba servidores on-premise y su contenido comentado por prestigiosos profesionales (el activo de mayor valor de la organización) estaba alojado en SharePoint 2008. A pesar de que el ciclo de vida oficial del producto finalizó en 2012, Errepar continuó manteniendo operativo los servidores en esta versión, añadiendo add-ons y haciendo customizaciones. En el 2019, tanto los servidores como los numerosos workaround implementados para mantener el SharePoint "actualizado", llegaron a su fin y empezaron a generar interrupciones en el servicio para los clientes. Esto se consideró critico y amenazaba seriamente el principal ingreso de la organización. 

Por tal razón, la dirección de la organización decidió migrar todo sus activos digitales a la nube (AWS), comenzar a gestionar sus documentos con Teamsite Cloud y aprovechar este cambio de tecnología para actualizar desde el Login hasta el look and feel de la web y sus millones de documentos de jurisprudencia comentada. Esta decisión aceleró el proceso de transformación digital que estaba llevando adelante la empresa, que debido a la magnitud del proyecto debió crear un área dedicada a la Gestión de la Demanda de los diversos requerimientos que surgían en el día a día de las diversas gerencias. 

Desde mi posición como Analista de Seguimiento y Gestión de la Demanda llevamos adelante tres cambios trascendentales en la organización: 

1. La implementación de metodologías agiles en todos los equipos de desarrollo de la organización con sus ceremonias correspondientes.
2. La estandarización del pedido de nuevos requerimientos, su priorización de cara al proyecto y generación de casos de uso.
3. La implementación de una Mesa de Ayuda (MDA) que permitió a los equipos de desarrollo distribuir su tiempo efectivamente entre los problemas del día a día y el desarrollo requerido para la migración. 

### Implementación de nuevo login

La organización utilizaba un sistema de login muy antiguo: Al adquirir los servicios de Errepar, al cliente se le asignaba un número de suscriptor y contraseña que debían recordar. Posteriormente, al ingresar por primera vez a la web, se le solicitaba generar una nueva clave. Este mecanismo generaba numerosos llamados diarios a Atención al Cliente, lo que reducia seriamente la efectividad de la postventa, que perdía el tiempo solucionando errores mundanos. 
![imagen](https://github.com/user-attachments/assets/7a04201f-6ff1-4e7c-b896-8123a2b45b6f)
 
Desde el área de Gestión de la Demanda, llevamos adelante la recolección de los requisitos para el nuevo login, la generación de sus casos de uso y nuevos procesos vinculados. Nuestros criterios y casos de uso se resumen en la siguiente lista:

1. El usuario ya no ingresará por medio de un número de suscriptor, sino a través del email con el cual compartio cuando contrató el servicio.
2. El cliente, al adquirir el producto, recibirá un email con una pieza gráfica donde se detalla el email y su primera contraseña en el sistema
3. Al loguearse por primera vez, se le solicitará generar una nueva contraseña siguiendo ciertos estándares de seguridad
4. Al clickear en *Restablecer Contraseña*, dispondrá de medios para renovar su clave sin necesidad de llamar a Atención al Cliente.
5. En futuras iteraciones se integrará la API de Google para loguearse a través del mismo correo.

El trabajo que realizamos desde el área con el proveedor y los desarrolladores de Errepar culminó con el siguiente login:

![imagen](https://github.com/user-attachments/assets/c192bfb5-78d2-4bc4-8ac2-d1c3ac803578)


### Actualización del look and feel de la jurisprudencia comentada

Errepar es reconocida como una de las principales fuentes de información sobre novedades contables y jurídicas en la República Argentina. Esta reputación se basa en la calidad de sus activos digitales, que incluyen desde interpretaciones de leyes e implicancias jurisprudenciales de fallos hasta artículos de blog. Todos estos comentarios son elaborados por los mayores expertos en la materia en el país, y el acceso a estas explicaciones ha sido el eje central del modelo de negocio de Errepar desde su fundación.

Por esta razón, al iniciar la tarea de renovar el diseño y formato de la jurisprudencia, enfrentamos una fuerte resistencia dentro de la organización. Desde nuestra área, decidimos actualizar tanto la tipografía como la maquetación de los diversos activos digitales para alinearlos con las tendencias actuales. El principal desafío fue que esta jurisprudencia, al estar comentada por múltiples profesionales con estilos de escritura particulares, requería definir de manera masiva y consistente qué elementos correspondían al título de un documento y cuáles al cuerpo de la jurisprudencia.

Ante la magnitud de este desafio, definimos las prioridades de clara a sobre que documentos trabajaríamos en una primera iteración de este look and feel nuevo:

1. Adoptaremos una estrategia lo más consistente posible para los documentos que son más visitados (Top 2000).
2. Debido a los millones de documentos comentados que ya no poseen visitas, consideramos necesario comenzar un proceso de saneamiento. Esto permitirá ahorrar dinero en almacenamiento y reducir costos operativos a Errepar.
3. Sobre el margen derecho del documento, generaremos un algoritmo que le brinde al usuario jurisprudencia y/o notas de interés basada en sus últimos documentos visitados
4. La metadata de los archivos formarán parte del hipervinculo de estos documentos, de cara a poder aplicar técnicas SEO más efectivas.  

Además, propusimos a la dirección un cambio estratégico en el modelo de negocio mediante la adopción de un enfoque freemium. Este modelo permitiría a los usuarios acceder a jurisprudencia comentada con ciertos límites, algo que hasta entonces solo estaba disponible para suscriptores. Esta restricción no solo dificultaba la captación de nuevos clientes, sino que también impedía que el contenido fuera indexado por Google, lo que limitaba su visibilidad en búsquedas orgánicas.

Con el nuevo modelo, podríamos implementar técnicas de SEO para generar tráfico orgánico hacia la web de Errepar y sus contenidos, incrementando la posibilidad de atraer nuevos clientes y fomentar la adquisición de productos y servicios de la organización. La propuesta fue aceptada por la dirección y consideró que esta nueva estrategia podía ser muy positiva de cara a captar usuarios más jovenes, que poseen otros habitos de búsqueda de jurisprudencia. 

### Resultados del proyecto
Una vez implementadas estas mejoras, **el tráfico en los distintos sitios web de Errepar aumentó, en promedio, un 17% interanual (YoY), mientras que las suscripciones de nuevos clientes crecieron un 13% YoY**. Estos resultados evidenciaron una reversión sostenida en la disminución de suscriptores y en la pérdida de tráfico orgánico que se había registrado en años anteriores.
Con respecto a los procesos, la organización adoptó las metodologías ágiles y sinceró que la productividad de sus equipos de desarrolladores había aumentado de manera significativa. Los entregables comenzaron a ser trackeados y medibles. La adopción de una Mesa de Ayuda permitió formalizar y generar reportes sobre los tickets más usuales del día a día de la organización, lo que permitió priorizar que procesos eran más urgenten y debían ser solucionados. 


## **Errepar: Nueva herramienta para contadores: Mi Estudio** 

