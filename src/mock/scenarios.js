export const initialScenario = {
  title: "Sala de Decisiones",
  description: "Frente a ti hay tres puertas. Un cartel dice: 'No pasar por la puerta roja'",
  doors: [
    { color: "red", label: "", disabled: false },
    { color: "blue", label: "", disabled: false },
    { color: "green", label: "", disabled: false }
  ]
};

export const blueDoorScenario = {
  title: "Elige una puerta",
  description: "Has elegido sabiamente. Ahora hay tres puertas frente a ti. No pases por la marrón",
  doors: [
    { color: "skyblue", label: "", disabled: false },
    { color: "brown", label: "", disabled: false },
    { color: "green", label: "", disabled: false }
  ]
};

export const successScenario = {
  isSuccess: true,
  title: "¡Salida encontrada!",
  message: "Felicitaciones, has tomado las decisiones correctas y encontrado la salida."
};

export const errorScenarios = {
  initialRedDoor: {
    isSuccess: false,
    title: "Error",
    message: "Ignoraste la advertencia. No hay salida por aquí."
  },
  wrongPath: {
    isSuccess: false,
    title: "Camino incorrecto",
    message: "Este no es el camino. Intenta desde el inicio."
  },
  noExit: {
    isSuccess: false,
    title: "Sin salida",
    message: "Aquí no hay salida. Debiste elegir con atención."
  }
};
