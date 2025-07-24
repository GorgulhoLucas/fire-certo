import Image from "next/image";
import { Produto } from "./types";
import SpecRow from "./SpecRow";

const ProdutoTabela = ({ produto }: { produto: Produto }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md relative w-full h-auto mx-auto p-4">
      <div className="bg-gray-600 text-white flex items-center p-4 relative">
        <div className="absolute -top-4 lg:-top-8 left-0">
          <Image
            src={produto.imagem}
            alt={produto.codigo}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
        <h3 className="ml-auto text-lg font-bold pr-4">{produto.codigo}</h3>
      </div>

      <table className="w-full text-center border-collapse border border-black mt-4">
        <tbody>
          <SpecRow label="DIMENSÕES" value={produto.dimensoes} />
          <SpecRow label="CAPACIDADE C100" value={produto.capacidade_c100} />
          <SpecRow label="CAPACIDADE C20" value={produto.capacidade_c20} />
          <SpecRow label="CAPACIDADE C10" value={produto.capacidade_c10} />
          <SpecRow label="CAPACIDADE C120" value={produto.capacidade_c120} />
          <SpecRow label="POLARIDADE" value={produto.polaridade} />
          <SpecRow label="CCA (-18°C)" value={produto.cca_menos_18} />
          <SpecRow label="CA (+25°C)" value={produto.ca_mais_25} />
          <SpecRow label="RESERVA (RC)" value={produto.rc} />
          <SpecRow label="CCA (-10°C)" value={produto.cca_menos_10} />
          <SpecRow label="TEMPO ATÉ 6V" value={produto.tempo_ate_6v} />
          <SpecRow label="CARGA LENTA" value={produto.carga_lenta} />
          <SpecRow label="CARGA RÁPIDA" value={produto.carga_rapida} />
          <SpecRow label="POSIÇÃO DE INSTALAÇÃO" value={produto.posicao_instalacao} />
          <SpecRow label="GARANTIA" value={produto.garantia} />
          <SpecRow label="TENSÃO" value={produto.tensao} />
          <SpecRow label="TIPO DE TERMINAL" value={produto.terminal} />
          <SpecRow label="PESO" value={produto.peso} />

          <tr className="border border-black">
            <td colSpan={2} className="p-2 font-bold bg-gray-200 text-black text-center">
              {produto.manutencao}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProdutoTabela;
