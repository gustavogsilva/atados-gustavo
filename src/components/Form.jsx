import React from 'react';

import Image from '../assets/svg/Icon/Image.svg';
import Place from '../assets/svg/Icon/Place.svg';
import Date from '../assets/svg/Icon/Date.svg';
import Person from '../assets/svg/Icon/Person.svg';
import Search from '../assets/svg/Icon/Search.svg';

const Form = () => {
  return (
    <form id="search-form" className="text-lg my-6 mx-3 bg-white">
      <div className="flex flex-col p-6">
        <div className="flex flex-wrap">
          <label htmlFor="ida-e-volta" className="mb-3">
            <input type="radio" id="ida-e-volta" name="ticket-type" value="ida-e-volta" />
            <span className="custom-radio flex">Ida e volta</span>
          </label>
          <label htmlFor="so-ida" className="mx-4 mb-3">
            <input type="radio" id="so-ida" name="ticket-type" value="so-ida" />
            <span className="custom-radio flex">Só ida</span>
          </label>
          <label htmlFor="so-volta" className="mb-3">
            <input type="radio" id="so-volta" name="ticket-type" value="so-volta" />
            <span className="custom-radio flex">Só volta</span>
          </label>
        </div>

        <label htmlFor="origem" className="text-sm relative">
          Origem
        </label>
        <div className="relative mt-2 mb-4">
          <Image className="input-icon" />
          <input type="text" id="origem" name="origem" placeholder="Insira a cidade" />
        </div>

        <label htmlFor="destino" className="text-sm">
          Destino
        </label>
        <div className="relative mt-2 mb-4">
          <Place className="input-icon" />
          <input type="text" id="destino" name="destino" placeholder="Insira a cidade" />
        </div>
        <label htmlFor="data" className="text-sm">
          Data de Ida / Retorno
        </label>
        <div className="relative mt-2 mb-4">
          <Date className="input-icon" />
          <input type="text" id="data" name="data" placeholder="Insira a(s) data(s)" />
        </div>
        <label htmlFor="pessoas" className="text-sm">
          Número de pessoas
        </label>
        <div className="relative mt-2">
          <Person className="input-icon" />
          <select name="pessoas" id="pessoas" form="search-form" className="appearance-none">
            <option value="1">1 pessoa</option>
            <option value="2">2 pessoas</option>
            <option value="3">3 pessoas</option>
            <option value="4">4 pessoas</option>
            <option value="5">5 pessoas</option>
          </select>
        </div>
      </div>
      <div className="flex bg-gray-200">
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 font-medium py-3 px-5 rounded inline-flex items-center text-white my-4 mr-6 ml-auto text-base"
        >
          <Search className="w-5 mr-2" />
          <span>Busque as viagens</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
