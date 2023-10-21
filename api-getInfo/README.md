Esta **API** permite obtener la información de un cliente que haya sido subida previamente con el método **POST**. 

# Endpoint
**URL**: https://e18ivakiog.execute-api.us-east-1.amazonaws.com/getInfo/{id}
**Método**: GET

# Ejemplo de Solicitud
https://e18ivakiog.execute-api.us-east-1.amazonaws.com/getInfo/1

# Respuesta
El cliente con identificador pasado por parámetro em la url

    {
        "gender":"M",
        "name":"John",
        "Id":"1",
        "age":"25"
    }