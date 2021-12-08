# U4 - Entregable - Curso 2021 - 2022

Crea una única página web para que un **Youtuber** pueda gestionar sus subidas a la plataforma. Para ello, contendrá un formulario con las siguiente opciones:

- Título del vídeo
- Descripción del vídeo (`textarea`)
- Contenido para niños (`checkbox`)
- Etiquetas del vídeo (`input text`)
- Fecha de publicación del vídeo (debe ser de tipo `date`)
- Hora de publicación del vídeo  (debe ser de tipo `time`)
- Password de la plataforma  (con información oculta)
- Un botón de reset que se llame "`Limpiar`".
- Un botón de submit que se llame "`Enviar`".

Adicionalmente, el HTML tendrá que tener un elemento `<div>` para indicar los errores de cada una de las validaciones.

Reglas de elaboración y validación:

- Todos los campos son obligatorios para rellenar (salvo el de etiquetas -mirar más abajo-) y no podrá hacerse mediante "required" de HTML5.

- La descripción del vídeo será un `textarea` que tendrá un máximo de 400 caracteres y un mínimo de 50 caracteres.

- Las etiquetas del vídeo serán un `input text` y estará por defecto deshabilitado (propiedad `disabled`). El input text en su totalidad tendrá que tener máximo de 100 caracteres y un mínimo de 3 caracteres. Contendrá palabras separadas por comas (sin ningún espacio entre comas y palabras), cada una de ellas tendrá que tener un mínimo de 3 caracteres y un máximo de 100. Ejemplo: `cocina,arguiñano,recetas`. Elabora la expresión regular correspondiente para validar la entrada de las etiquetas.

- El checkbox de contenido para niños estará sin marcar por defecto. Cuando el usuario lo marque, el input de etiquetas del vídeo pasarán a habilitarse (propiedad `disabled`).

- La fecha de publicación del vídeo será un control de tipo `date` al que nos suscribiremos a su evento onchange para obtener la fecha y guardarla en un objeto Date (que será el mismo que el de la hora de publicación).

- La hora de publicación del vídeo será un control de tipo `time` al que nos suscribiremos a su evento onchange para obtener la hora, minutos y segundos y guardarla en un objeto Date (que será el mismo que el de la fecha de publicación).

- El objeto Date utilizado anteriormente sirve única y exclusivamente para guardar la información de los dos controles anteriores.

- El password debe cumplir las siguientes reglas:

  - Un número de 3 cifras cualesquiera.
  - El símbolo del euro (`€`)
  - Una palabra de mínimo 4 caracteres de largo y 14 de máximo
  - Un número de 2 cifras, pero los números de las cifras varían de 2 a 6. Es decir, los números válidos de cifras son el 2, 3, 4, 5 y 6.
  - Un carácter que no sea ni letra ni número.
  - Tres letras, la primera y la última mayúsculas, y la de enmedio minúsucula.

Cuando se pulse enviar, se deberán validar todos los campos. Si el campo está correcto, se pondrá en borde verde, si está incorrecto, se pondrá en borde rojo y se pondrá el foco en él.

Antes de enviar, se preguntará mediante `confirm` si se quiere enviar la información del formulario. Si se responde afirmativamente, y si el formulario está correcto, realizará la acción por defecto que será reenviar la información a yahoo.com. Si está incorrecto, no se deberá ejecutar la acción por defecto, y señalar aquellos campos que estén incorrectos según se ha dicho anteriormente.

Adicionalmente a todo, el formulario tendrá un campo oculto que se llamará `username` que incluirá el nombre de usuario por defecto (se debe codificar directamente en el HTML). Deberá incluirse en el envío del formulario, siempre que todo lo anterior esté correcto, obviamente.
