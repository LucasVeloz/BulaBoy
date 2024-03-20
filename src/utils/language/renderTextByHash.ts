import { getLocales } from 'expo-localization';
import backup from './backup.json';
import { AvaiablesHash } from './types';


export const renderTextByHash =  (hash: AvaiablesHash) => {
  const [{ languageTag }] =  getLocales();
  if (languageTag === 'pt-BR'){
    return backup[hash]['pt-br']
  }
  return backup[hash]['en-us']
}
