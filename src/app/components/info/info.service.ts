// src/app/components/info/info.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  // ASEGÚRATE DE QUE ESTO EXISTA:
  async getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/132');
    return await response.json();
  }
}