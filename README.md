Nombre: Adrian Tene

| Identificar gráficamente la arquitectura y el patrón de diseño de la aplicación a desarrollar. |
|------------------------------------------------------------------------------------------------|


>   Arquitectura

![](media/d217f866cb86b89122ceaf3590555256.png)

>   Patron

![](media/e22f8e02abb8361226be82f915ba4c2d.png)

>   Patrones:

>   1.- El usuario envia la solicitud de petición al servidor.

>   2.- El controlador se he encarga de leer la perticion del usuario, y le
>   solicita al modelo.

>   3.- El modelo se comunica con la base de datos donde este le envía la
>   solicitud realizada

>   4.-El modelo envia estos datos al controlador

>   5.- El controlador recibe la información a la vista, y la vista se encarga
>   de mostrar los datos que el al cliente solicito

| Generar una llave para consumir los servicios web de la API de OMDb. "http://www.omdbapi.com/?apikey=eabd474&s="                                                                                                                                                                                         |   |   |   |   |   |   |   |   |   |   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|---|---|---|---|---|---|---|---|---|
| Crear un repositorio en GitHub con el nombre “Practica00 – Consumo de APIs en la nube”                                                                                                                                                                                                                   |   |   |   |   |   |   |   |   |   |   |
| La aplicación Web debe permitir buscar la información de las películas tanto por el nombre (listado) como por el código (id) de cada película. Se recupera el nombre de la película a buscar y se le envia a java script donde realizara la búsqueda de la película por el nombre que el usuario digite. |   |   |   |   |   |   |   |   |   |   |
| Además, se deberá visualizar toda la información disponible (plot=full) de la base de datos de películas.                                                                                                                                                                                                |   |   |   |   |   |   |   |   |   |   |
| También, la aplicación deberá presentar un máximo de 5 películas por búsqueda. Es decir, si la búsqueda retorna más de 5 películas se deberá paginar los resultados. La página se encuentra paginizada y realiza la búsqueda de 5 películas.                                                             |   |   |   |   |   |   |   |   |   |   |
| Por último, la interfaz gráfica de aplicada debe ser intuitiva y sencilla aplicando conceptos de experiencia de usuario. En la pagina realizada se ingresa el nombre de la película que el usuario solicita                                                                                              |   |   |   |   |   |   |   |   |   |   |

![](media/70a9a6e8599fbad6cb624ce1e2314d2f.png)

![](media/79068a464d683642e0fefba54b09f538.png)

JavaScript

![](media/346d500d66c4946785cc1927da694ccc.png)

>   Para lograr este punto de la practica se realiza el siguiente método donde
>   básicamente es verificar si la página existe, dicho esto se le pasa a la
>   petición y realiza la búsqueda de películas.

![](media/c3d6b759bdf3642dc9fba82ada0eb7d4.png)

>   MAS DETALLES

![](media/e22f8e02abb8361226be82f915ba4c2d.png)

![](media/49ef893324398f8e18b256304af2b9bd.png)

![](media/85da5add3472e5574d4d5f37f7760f1f.png)

![](media/5cafff78733dd7d49136b4c5ce6cff84.png)

Si el usuario quiere obtener un poco mas de información de la película, oprime
mas detalles y obtiene el resultado.

![](media/5d18641e556e55dfe5662c59e192de16.png)
