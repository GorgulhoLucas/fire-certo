export interface Produto {
  codigo: string;
  imagem: string;
  dimensoes: string;
  capacidade_c100?: string;
  capacidade_c20: string;
  capacidade_c10?: string;
  capacidade_c120?: string;
  polaridade?: string;
  cca_menos_18?: string;
  cca_menos_10?: string; // Adicionando este campo
  ca_mais_25?: string;
  rc?: string;
  garantia: string;
  tensao?: string;
  terminal: string;
  peso: string;
  manutencao: string;
  modeloId: string;
  tempo_ate_6v?: string;  // Adicionando este campo
  carga_lenta?: string;   // Adicionando este campo
  carga_rapida?: string;  // Adicionando este campo
  posicao_instalacao?: string; // Adicionando este campo
}


export interface Modelo {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  produtos: Produto[];
}

export interface Bateria {
  tipo: string;
  titulo: string;
  descricao: string;
  imagem: string;
  modelos: Modelo[];
}

export interface ProdutosData {
  baterias: Bateria[];
}
