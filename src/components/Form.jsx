import React from 'react';
import { Formik } from 'formik';

import Image from '../assets/svg/Icon/Image.svg';
import Place from '../assets/svg/Icon/Place.svg';
import Date from '../assets/svg/Icon/Date.svg';
import Person from '../assets/svg/Icon/Person.svg';
import Search from '../assets/svg/Icon/Search.svg';
import { useGlobalState } from '../contexts/GlobalState';

const Form = () => {
  const [state, setState] = useGlobalState();
  console.log(state);

  return (
    <Formik
      initialValues={{ tipoPassagem: '', origem: '', destino: '', data: '', pessoas: 1 }}
      onSubmit={formValues => setState(prevState => ({ ...prevState, ...formValues }))}
    >
      {({ handleChange, handleSubmit }) => (
        <form
          id="search-form"
          className="text-lg my-6 lg:mt-12 lg:mb-20 bg-white overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col p-6">
            <div className="flex flex-wrap">
              <label htmlFor="ida-e-volta" className="cursor-pointer mb-3">
                <input
                  type="radio"
                  id="ida-e-volta"
                  name="tipoPassagem"
                  value="ida-e-volta"
                  onChange={handleChange('tipoPassagem')}
                />
                <span className="custom-radio flex">Ida e volta</span>
              </label>
              <label htmlFor="so-ida" className="cursor-pointer mx-4 mb-3">
                <input
                  type="radio"
                  id="so-ida"
                  name="tipoPassagem"
                  value="so-ida"
                  onChange={handleChange('tipoPassagem')}
                />
                <span className="custom-radio flex">Só ida</span>
              </label>
              <label htmlFor="so-volta" className="cursor-pointer mb-3">
                <input
                  type="radio"
                  id="so-volta"
                  name="tipoPassagem"
                  value="so-volta"
                  onChange={handleChange('tipoPassagem')}
                />
                <span className="custom-radio flex">Só volta</span>
              </label>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex flex-col">
                <label htmlFor="origem" className="text-sm font-medium text-gray-700">
                  Origem
                </label>
                <div className="relative mt-2 mb-4">
                  <Image className="input-icon" />
                  <input
                    type="text"
                    id="origem"
                    name="origem"
                    placeholder="Insira a cidade"
                    onChange={handleChange('origem')}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="destino" className="text-sm font-medium text-gray-700">
                  Destino
                </label>
                <div className="relative mt-2 mb-4">
                  <Place className="input-icon" />
                  <input
                    type="text"
                    id="destino"
                    name="destino"
                    placeholder="Insira a cidade"
                    onChange={handleChange('destino')}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="data" className="text-sm font-medium text-gray-700">
                  Data de Ida / Retorno
                </label>
                <div className="relative mt-2 mb-4">
                  <Date className="input-icon" />
                  <input
                    type="text"
                    id="data"
                    name="data"
                    placeholder="Insira a(s) data(s)"
                    onChange={handleChange('data')}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="pessoas" className="text-sm font-medium text-gray-700">
                  Número de pessoas
                </label>
                <div className="relative mt-2">
                  <Person className="input-icon" />
                  <select
                    name="pessoas"
                    id="pessoas"
                    form="search-form"
                    className="appearance-none"
                    onChange={handleChange('pessoas')}
                  >
                    <option value={1}>1 pessoa</option>
                    <option value={2}>2 pessoas</option>
                    <option value={3}>3 pessoas</option>
                    <option value={4}>4 pessoas</option>
                    <option value={5}>5 pessoas</option>
                  </select>
                </div>
              </div>
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
      )}
    </Formik>
  );
};

export default Form;
