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
  