import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const defaultPhoneNumber = "5511999999999";
  const defaultMessage = "Olá! Gostaria de mais informações sobre as baterias.";

  const whatsappUrl = `https://wa.me/${defaultPhoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '120px',
        height: '120px',
      }}
    >
      <Image
        src="/botaowhats.png"
        alt="WhatsApp"
        width={120}
        height={120}
        className="hover:scale-105 transition-transform"
      />
      <FaWhatsapp 
        size={36} 
        color="#25D366"
        style={{
          position: 'absolute',
          top: '0%',
          left: '70%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
