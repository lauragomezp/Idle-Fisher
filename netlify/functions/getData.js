// Servir los datos de los peces
exports.handlerPeces = async (event, context) => {
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
    body: JSON.stringify(pecesData),
  };
};

// Servir los datos de los usuarios
exports.handlerUsuarios = async (event, context) => {
  const usuariosData = [
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
  ];

  // Devuelve solo los usuarios
  return {
    statusCode: 200,
    body: JSON.stringify(usuariosData),
  };
};
