// Servir los datos de los peces
exports.handler = async (event, context) => {
    const pecesData = [
      {
        "id": "1",
        "url": "/imagenes/atun.png",
        "nombre": "Atún",
        "precio": 5
      },
      {
        "id": "2",
        "url": "/imagenes/merluza.png",
        "nombre": "Merluza",
        "precio": 10
      },
      {
        "id": "3",
        "url": "/imagenes/salmon.png",
        "nombre": "Salmón",
        "precio": 15
      }
    ];
  
    // Devuelve solo los peces
    return {
      statusCode: 200,
      headers: {
        'ContentType':'application/json'
      },
      body: JSON.stringify(pecesData),
    };
  };