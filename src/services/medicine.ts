import { bulaApi } from "./bulaApi";
import { queryApi } from "./queryApi";

export class MedicineApi {
  static async linkPDF(hash: string) {
    const { data } = await bulaApi.get(`bula?id=${hash}`);
    return data;
  }
  static async search(name: string) {
    const { data } = await bulaApi.get(`pesquisar?nome=${name}`);
    return data;
  }
  static async barCode(barCode: string) {
    const { data } = await queryApi.get(`mercadoria/consulta/?ean=${barCode}`);
    return data;
  }
}
