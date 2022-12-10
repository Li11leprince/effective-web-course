import { IComic } from './../types/Comics';
import { IHero } from './../types/Heroes';
import axios from './helpers/axios';
import envs from '../config/environments';
import { ISeries } from '../types/Series';

const apiKey = envs.apiKey;
const hash = envs.hash;
const timeStamp = envs.timeStamp;

export default {
  async getCharactersList(offset: number = 0): Promise<IHero> {
    const response = await axios.get(
      `/characters?offset=${offset}&ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );

    return response.data;
  },

  async getCharactersSearch(
    nameStartsWith: string,
    offset: number = 0
  ): Promise<IHero> {
    const response = await axios.get(
      `/characters?offset=${offset}&nameStartsWith=${nameStartsWith}&ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );

    return response.data;
  },

  async getCharacter(id: string | undefined): Promise<IHero> {
    const response = await axios.get(
      `/characters/${id}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );

    return response.data;
  },

  async getComicsList(offset: number = 0): Promise<IComic> {
    const response = await axios.get(
      `/comics?offset=${offset}&ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );

    return response.data;
  },

  async getComicsSearch(
    nameStartsWith: string,
    offset: number = 0
  ): Promise<IComic> {
    const response = await axios.get(
      `/comics?offset=${offset}&titleStartsWith=${nameStartsWith}&ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );

    return response.data;
  },

  async getComic(id: string | undefined): Promise<IComic> {
    const response = await axios.get(
      `/comics/${id}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );

    return response.data;
  },

  async getSeriesList(offset: number = 0): Promise<ISeries> {
    const response = await axios.get(
      `/series?offset=${offset}&ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );

    return response.data;
  },

  async getSeriesSearch(
    nameStartsWith: string,
    offset: number = 0
  ): Promise<ISeries> {
    const response = await axios.get(
      `/series?offset=${offset}&titleStartsWith=${nameStartsWith}&ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );

    return response.data;
  },

  async getSerial(id: string | undefined): Promise<ISeries> {
    const response = await axios.get(
      `/series/${id}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
    );

    return response.data;
  }
};
