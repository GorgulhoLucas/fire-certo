interface SpecRowProps {
    label: string;
    value?: string;
  }
  
  const SpecRow = ({ label, value }: SpecRowProps) => {
    if (!value) return null;
    return (
      <tr className="border border-black">
        <td className="p-2 font-bold bg-gray-200 border-r border-black text-left text-black">{label}</td>
        <td className="p-2 border-black text-left text-black">{value}</td>
      </tr>
    );
  };
  
  export default SpecRow;
  