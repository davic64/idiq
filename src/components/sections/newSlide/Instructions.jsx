export const Instructions = () => {
  return (
    <div className="space-y-2 px-5">
      <p className="leading-relaxed">
        1. Ingresa el título de la canción en el primer campo.
      </p>
      <p className="leading-relaxed">
        2. En el área de texto, ingresa la letra siguiendo este formato:
      </p>
      <div className="bg-blue-300/20 rounded-lg p-4 font-mono text-sm text-blue-500">
        Estrofa normal
        <br />
        Con sus líneas
        <br />
        <br />
        -CORO-
        <br />
        Aquí va el coro
        <br />
        De la canción
        <br />
        -CORO-
        <br />
        <br />
        Nueva estrofa
        <br />
        Con más líneas
        <br />
        <br />
        [CORO]
      </div>
      <ul className="list-disc space-y-1 pl-5 text-sm">
        <li>
          Usa <span className="font-semibold">-CORO-</span> para definir el coro
          por primera vez
        </li>
        <li>
          Usa <span className="font-semibold">[CORO]</span> para repetir el coro
          en otras partes
        </li>
        <li>Deja una línea en blanco entre estrofas</li>
      </ul>
    </div>
  );
};
