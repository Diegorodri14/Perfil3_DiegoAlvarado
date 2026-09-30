import { useState, useEffect } from 'react';

export default function UsePanelEstudiante() {
  const [estudiante, setEstudiante] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una pequeña carga o consumo de datos locales
    const timer = setTimeout(() => {
      setEstudiante({
        nombre: 'Diego Josue Rodriguez Alvarado',
        carnet: '20210032', 
        seccion: '3º Desarrollo de Software - Grupo B'
      });
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return { estudiante, loading };
}