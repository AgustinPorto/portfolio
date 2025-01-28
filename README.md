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

La organización utilizaba un sistema de login muy antiguo: Al adquirir los servicios de Errepar, al cliente se le asignaba un número de suscriptor y contraseña que debían recordar. Posteriormente, al ingresar por primera vez a la web, se le solicitaba generar una nueva clave. Este mecanismo generaba numerosos llamados diarios a Atención al Cliente, lo que reducia seriamente la efectividad de la postventa, que perdía el tiempo solucionando este error fácilmente corregible. 
![imagen](https://github.com/user-attachments/assets/7a04201f-6ff1-4e7c-b896-8123a2b45b6f)
 
Desde el área de Gestión de la Demanda, llevamos adelante la recolección de los requisitos para el nuevo login, la generación de sus casos de uso y nuevos procesos vinculados. Nuestros criterios y casos de uso se resumen en la siguiente lista:

1. El usuario ya no ingresará por medio de un número de suscriptor, sino a través del email con el cual compartio cuando contrató el servicio.
2. El cliente, al adquirir el producto, recibirá un email con una pieza gráfica donde se detalla el email y su primera contraseña en el sistema
3. Al loguearse por primera vez, se le solicitará generar una nueva contraseña siguiendo ciertos estándares de seguridad
4. Al clickear en *Restablecer Contraseña*, dispondrá de medios para renovar su clave sin necesidad de llamar a Atención al Cliente.
5. En futuras iteraciones se integrará la API de Google para loguearse a través del mismo correo.

El trabajo que realizamos desde el área con el proveedor y los desarrolladores de Errepar culminó con el siguiente login:

![imagen](https://github.com/user-attachments/assets/c192bfb5-78d2-4bc4-8ac2-d1c3ac803578)
*Nueva interfaz de login de Errepar. Responsive y una paleta de colores más adaptada a la actualidad*

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
Con respecto a los procesos, **la organización adoptó las metodologías ágiles y sinceró que la productividad de sus equipos de desarrolladores había aumentado de manera significativa. Los entregables comenzaron a ser trackeados y medibles**. La adopción de una Mesa de Ayuda permitió **formalizar y generar reportes sobre los tickets más usuales del día a día de la organización, lo que permitió priorizar que errores eran más urgentes y debían ser solucionados**. 


## **Errepar: Mi Estudio** 

Mi Estudio es una plataforma para gestionar, simplificar y organizar las tareas operativas y diarias del sector contable. Cuenta con un administrador de tareas, el calendario de vencimientos, una mensajería privada, un espacio de almacenamiento de archivos en la nube para interactuar con los clientes y diversos módulos para la liquidación de impuestos. La plataforma nace gracias al cambio de enfoque en el negocio que la dirección consideró era necesario para adaptarse a los nuevos tiempos. 

![imagen](https://github.com/user-attachments/assets/ce51f864-30e2-4592-952e-3256f7853f08)

Desde nuestra área, y siguiendo los procesos previamente establecidos, nos encargamos de la recopilación de requerimientos para la nueva herramienta. Además de los módulos ya planificados con anterioridad (uno por cada impuesto), la priorización de funcionalidades se realizó a partir de un estudio de mercado llevado a cabo por el área de Research de Errepar.

Este estudio reveló que los clientes estaban principalmente interesados en dos módulos:

1. Ganancias y Bienes Personales: Este módulo aborda en profundidad estos impuestos, proporcionando información detallada y herramientas específicas para su confección, gestión y presentación al ARCA. 
2. Calendario Interactivo: Una funcionalidad que permite a los usuarios cargar deadlines personalizados para los impuestos de sus clientes. Además, al estar vinculado con la AFIP, el calendario notifica automáticamente qué impuesto corresponde a cada cliente y cuándo debe ser gestionado.
   
Para llevar a cabo este desarrollo, fue necesario expandir el equipo de desarrolladores de Errepar. Esto dio lugar a la creación de una nueva Gerencia de Sistemas, que trabajaría en conjunto con nuestra área. Este cambio buscó independizar a los desarrolladores encargados de los procesos diarios de la organización de aquellos asignados a proyectos derivados de la creación de nuevos productos.

En este proyecto, implementamos metodologías ágiles, gestionando el trabajo a través de Sprints. En cada uno de estos, nos enfocamos en realizar mejoras incrementales en los módulos, asegurando así una evolución continua del producto que continúa hasta el día de hoy.

Además, la plataforma incluye funcionalidades como mensajería entre el usuario y sus clientes, la creación de roles dentro de un mismo estudio contable, un espacio de almacenamiento y un módulo de tareas estilo tablero.

### Resultados del proyecto

**Este nuevo producto atrajo a un público más joven que no conocía ni utilizaba Errepar, marcando el inicio de una nueva etapa para la organización como proveedor de aplicaciones**. Actualmente, la herramienta sigue incorporando funcionalidades y ganando relevancia en los ingresos de la empresa, con un amplio mercado potencial aún por explorar.

Ante la necesidad de nuevos desarrollos, se amplió el equipo de desarrolladores. Esto implicó la creación y afinación de los procesos nuevos y existentes para la generación de requerimientos, seguimiento, establecimiento de plazos y criterios de aprobación, diferenciando claramente a los equipos dedicados a las tareas diarias de aquellos enfocados exclusivamente en los proyectos.

## **Thomson Reuters: CoCounsel** 

CoCounsel es una herramienta de inteligencia artificial diseñada para acelerar la práctica del derecho. Basada en la tecnología de GPT-4, CoCounsel ofrece asistencia en diversas tareas esenciales del trabajo jurídico. Sus capacidades abarcan desde el análisis detallado de documentos hasta la redacción de contratos y la creación de resúmenes de textos legales, esta herramienta mejora la eficiencia y ahorra tiempo al abogado. Su objetivo es simplificar los procesos repetitivos, permitiendo que se concentren en lo que realmente importa: la estrategia y el asesoramiento a sus clientes.

![imagen](https://github.com/user-attachments/assets/3907b546-bbfa-41b9-bf02-dfb64bd30fc0)
*Pantalla de chat de CoCounsel*

En mi rol como Business Consultant para los productos de Inteligencia Artificial de Thomson Reuters Argentina, se me encargó llevar adelante la regionalización de la herramienta CoCounsel, adaptándola al derecho romano. Originalmente, CoCounsel estaba entrenada en base a la jurisprudencia del derecho anglosajón, el cual se basa en precedentes y casos anteriores. En cambio, el derecho romano se estructura principalmente en códigos, como el penal o civil. Esta diferencia clave requiere ajustar la herramienta para que pueda trabajar de manera eficiente con las particularidades del sistema legal romano.

Para comenzar con la regionalización de CoCounsel, decidi seguir varios pasos:

1. Realizar el requerimiento formal a los equipos de desarrollo de Casetext (empresa creadora de CoCounsel, adquirida por Thomson Reuters, de origen británico) para traducir y entrenar la herramienta en español de manera parcial.
2. Integrar CoCounsel con La Ley, la mayor base de datos de jurisprudencia comentada en temas legales de la República Argentina.
3. Iniciar pruebas piloto con algunos de los estudios de abogados más grandes de la región, con el fin de evaluar su desempeño en un entorno real.
4. Desarrollar estrategias de posicionamiento específicas para el mercado de América Latina, con el objetivo de maximizar su alcance y adopción en la región.

Al ser un producto internacional, fue necesario impulsar y gestionar para que estos desarrollos fueran considerados y finalmente se llevaran a cabo. Debido a la diferencia de contextos y estructuras legales, logramos generar el entendimiento y la alineación con los equipos de desarrollo de Casetext, asegurando que la adaptación de CoCounsel al derecho romano y al mercado latinoamericano fuera una prioridad. Fue clave garantizar que la herramienta se adaptara tanto lingüística como funcionalmente a las necesidades específicas de la región para su implementación exitosa.

### Resultados del proyecto
**La herramienta fue traducida al español y comenzó el desarrollo de su integración con el contenido de La Ley. Esto permitirá incorporar un RAG (retrieval-augmented generation) que optimizará aún más la calidad de las respuestas del asistente. Como resultado de las pruebas piloto realizadas, varios estudios de abogados en la República Argentina y Brasil decidieron adquirir el producto**. Para posicionar la herramienta en América Latina, recopilamos testimonios de estos estudios, destacando casos de éxito que muestran cómo el asistente contribuye a reducir los tiempos de tareas repetitivas, permitiendo que los abogados puedan centrarse en lo realmente importante: asesorar a sus clientes.

## **Claro Argentina: Claro IoT y Claro Connect** 

Claro Argentina segmenta su mercado en dos categorías principales: Clientes Individuales y Empresas, con un portafolio diferenciado de productos y servicios para cada segmento.

En el ecosistema empresarial, Claro Argentina ofrece dos plataformas especializadas para la autogestión de líneas IoT: Claro IoT y Claro Connect. Estas soluciones están diseñadas para atender diferentes niveles de complejidad en la administración de servicios IoT. Claro IoT se posiciona como una solución optimizada para empresas con requerimientos de gestión más específicos y flujos de trabajo simplificados, mientras que Connect suple a aquellos con necesidades más avanzadas. 



