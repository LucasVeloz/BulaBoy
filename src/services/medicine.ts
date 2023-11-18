import { bulaApi } from "./bulaApi";
import { queryApi } from "./queryApi";

type Medicine = {
  idBulaPacienteProtegido: string;
  idBulaProfissionalProtegido: string;
  nomeProduto: string;
  razaoSocial: string;
}

export class MedicineApi {
  static async linkPDF(hash: string) {
    const { data } = await bulaApi.get(`bula?id=${hash}`);
    return data.pdf as string;
  }
  static async search(name: string): Promise<Medicine[]> {
    const { data } = await bulaApi.get(`pesquisar?nome=${name}`);
    return data.content;
  }
  static async barCode(barCode: string) {
    const { data } = await queryApi.get(`mercadoria/consulta/?ean=${barCode}`);
    return data;
  }
}
