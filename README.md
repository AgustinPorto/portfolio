# Product Owner

Licenciado en Relaciones Internacionales en la Universidad de San Andrés (2020) y futuro Analista en Sistemas en la Escuela Da Vinci (2025)


## Proyectos

**Errepar: Migración de Sharepoint a Teamsite Cloud** 

Errepar es una editorial argentina reconocida por su especialización en contenido técnico y profesional en las áreas de contabilidad, finanzas, derecho, tributación, y recursos humanos. Publica libros, revistas, y material de consulta tanto en formato físico como digital, dirigido a profesionales contables como judiciales.

![Errepar2019](https://github.com/user-attachments/assets/49dbafed-39bc-40bc-abf0-57ede0cc7d1a)
            Errepar en el 2019. Interfaz desactualizada, no responsive y con una paleta de colores antigua. 
            
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

Errepar es considerada una de las principales fuentes de información para todos los temas relacionados a las novedades contables y juridicas en la República Argentina. Esta consideración se basa en la calidad de sus activos digitales, que incluyen desde explicaciones de interpretación de leyes e implicaciones jurisprudenciales de fallos hasta notas de blog. Toda esta serie de comentarios se encuentra realizada por los mayores expertos en la materia de la Argentina y el acceso a estos comentarios y explicaciones ha sido el centro del negocio de Errepar desde su fundación. 

Por esta razón, al comenzar con la tarea de renovar el look and feel de la jurisprudencia nos encontramos con mucha resistencia dentro de la organización. 
