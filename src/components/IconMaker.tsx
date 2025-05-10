interface IconMakerProps {
  fillColor: string;
  icon: React.ReactNode;
}

export default function IconMaker({ fillColor, icon }: IconMakerProps) {
  return (
    <svg width="50" height="70" viewBox="0 0 50 70" xmlns="http://www.w3.org/2000/svg">
    {/* Círculo colorido (fundo) */}
    <circle cx="25" cy="25" r="20" fill={fillColor} />

    {/* Círculo branco (opcional, se necessário) */}
    <circle cx="25" cy="25" r="16" fill="white" />
    
    {/* Círculo branco (opcional, se necessário) */}
    <circle cx="25" cy="25" r="14" fill={fillColor}/>

    {/* Triângulo inferior */}
    <polygon points="25,55 15,45 35,45"fill={fillColor} />

    {/* Ícone centralizado e branco */}
    
    <g transform="translate(25, 25)">
        <g transform="translate(-10, -10)" fill="none" stroke="white" strokeWidth={2} strokeLinecap='round' strokeLinejoin="round">
            <path d="M5 14H3c-.6 0-1-.4-1-1v-2c0-.5.3-.9.8-1l1.2-2c.2-.4.6-.6 1-.6h8c.4 0 .8.2 1 .6l1 2c.3.6.2 1.3-.2 1.8" fill="white"/>
            <path d="M18 14h-8" fill="white"/>
            <circle cx="6" cy="17" r="2" fill="white"/>
            <circle cx="16" cy="17" r="2" fill="white"/>
            <path d="M4 14h12" fill="white"/>
        </g>
    </g>
    </svg>
  );
}
    