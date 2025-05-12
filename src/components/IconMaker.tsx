interface IconMakerProps {
  fillColor: string;
  icon: React.ReactNode;
  alt: string;
}

export default function IconMaker({ fillColor}: IconMakerProps) {
  return (
    <svg
      width="50"
      height="70"
      viewBox="0 0 50 70"
      transform="scale(1.2)"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo colorido (fundo)  */}
      <circle cx="25" cy="25" r="20" fill={fillColor} />

      {/* Círculo branco (opcional)  */}
      <circle cx="25" cy="25" r="16" fill="white" />
      <circle cx="25" cy="25" r="14" fill={fillColor} />

      {/* Triângulo inferior  */}
      <polygon points="25,55 15,45 35,45" fill={fillColor} />

      {/* Ícone centralizado e ampliado  */}
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
        <g transform="translate(25, 25) scale(1.1)">
          <g
            transform="translate(-10, -10)"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10L6 7H14L16 10" />
            <path d="M3 10H17C18.1 10 19 10.9 19 12V14C19 14.6 18.6 15 18 15H17C17 16.7 15.7 18 14 18C12.3 18 11 16.7 11 15H9C9 16.7 7.7 18 6 18C4.3 18 3 16.7 3 15H2C1.4 15 1 14.6 1 14V12C1 10.9 1.9 10 3 10Z" />
            <circle cx="6" cy="17" r="1.8" fill="white" />
            <circle cx="14" cy="17" r="1.8" fill="white" />
          </g>
        </g>
      </svg>
    </svg>
  );
}
