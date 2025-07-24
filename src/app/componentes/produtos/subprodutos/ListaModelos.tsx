import { useState, useEffect } from "react";
import ListaDeProdutos from "./Listaprodutos";
import ModeloCard from "./ModeloCard";
import { Modelo, ProdutosData } from "./types";  // Importando os tipos de types.ts

interface ListaModelosProps {
  tipoBateria: string;
}

const ListaModelos = ({ tipoBateria }: ListaModelosProps) => {
  const [modelosData, setModelosData] = useState<Modelo[]>([]);
  const [modeloSelecionado, setModeloSelecionado] = useState<Modelo | null>(null);
  const [error, setError] = useState<string | null>(null); // Estado para exibir mensagens de erro

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/produtos.json");
        const data: ProdutosData = await response.json();
        
        console.log("Dados carregados:", data); // Verificar estrutura do JSON
  
        const bateriaSelecionada = data.baterias.find((bateria) => bateria.tipo === tipoBateria);
        
        if (bateriaSelecionada) {
          setModelosData(bateriaSelecionada.modelos);
          setModeloSelecionado(bateriaSelecionada.modelos[0]);
        } else {
          console.error("Tipo de bateria não encontrado:", tipoBateria);
        }
      } catch (error) {
        console.error("Erro ao carregar modelos:", error);
      }
    };

    if (tipoBateria && tipoBateria !== "") {
      fetchData();
    }
  }, [tipoBateria]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!modeloSelecionado) {
    return <p>Carregando modelos...</p>;
  }

  return (
    <div className="mb-8">
      <div className="flex gap-4 mt-8 overflow-x-auto whitespace-nowrap pr-5">
        {modelosData.map((modelo) => (
          <div key={modelo.id} className="flex-shrink-0 flex flex-col items-center min-w-[200px] ml-5">
            <ModeloCard
              modelo={modelo}
              isSelected={modeloSelecionado.id === modelo.id}
              onSelect={() => setModeloSelecionado(modelo)}
            />
          </div>
        ))}
      </div>

      <ListaDeProdutos
        modeloSelecionado={modeloSelecionado.id}
        tipoBateria={tipoBateria}
        descricaoModelo={modeloSelecionado.descricao}
        produtos={modeloSelecionado.produtos} // Passando produtos do modelo selecionado
      />
    </div>
  );
};

export default ListaModelos;
