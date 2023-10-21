Esta **API** permite subir un archivo a través de una solicitud **POST**. El archivo debe ser proporcionado en formato base64 en el cuerpo de la solicitud.

# Endpoint
**URL**: https://7nuqn6lkn5.execute-api.us-east-1.amazonaws.com/uploadFile

# Cuerpo Solicitud
**Método**: POST
**Formato de Datos**: JSON

# Ejemplo de Solicitud

    {
        "file": "archivo-en-formato-base64"
    }

Reemplazar "archivo-en-formato-base64" con el contenido real del archivo en formato base64.

    {
        "file": "SWQsIG5hbWUsIGFnZSxnZW5kZXINCjEsSm9obiwyNSxNDQoyLERhdmlkLDM3LE0NCjMsSmVubmlmZXIsMjgsRg0KNCxUaW5hLDIzLEYNCjUsUGF0cmljayw0MyxN"
    }


# Respuesta
"Datos insertados correctamente"