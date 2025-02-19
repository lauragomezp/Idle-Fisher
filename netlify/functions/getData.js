exports.handler = async (event, context) => {
    // Aquí puedes generar los datos que deseas enviar como respuesta
    const data = {
      peces: [
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
      ],

      usuarios: [
        {
          "id": "17e9",
          "nombre": "v1",
          "clicks": 12,
          "pescadores": [
            {
              "pez": "Atún",
              "precio": 100,
              "cantidad": 0
            },
            {
              "pez": "Merluza",
              "precio": 500,
              "cantidad": 0
            },
            {
              "pez": "Salmón",
              "precio": 1000,
              "cantidad": 0
            }
          ],
          "peces": [
            {
              "nombre": "Atún",
              "cantidad": 12
            },
            {
              "nombre": "Merluza",
              "cantidad": 9
            },
            {
              "nombre": "Salmón",
              "cantidad": 9
            }
          ],
          "dinero": 0
        }
      ]
    };

    // Devuelve la respuesta en el formato adecuado
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  };