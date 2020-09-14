import React from "react";
import Date from "../assets/svg/Icon/Date.svg";
import Image from "../assets/svg/Icon/Image.svg";
import Logo from "../assets/svg/Icon/Logo.svg";
import Menu from "../assets/svg/Icon/Menu.svg";
import Person from "../assets/svg/Icon/Person.svg";
import Place from "../assets/svg/Icon/Place.svg";
import Search from "../assets/svg/Icon/Search.svg";

const Home = () => {
  return (
    <div className="p-12 container max-w-lg px-4 mx-auto">
      <h1 className="text-4xl font-bold text-indigo-500">Teste de UI</h1>
      <h3 className="text-left text-2xl font-medium text-gray-700 mb-4">
        Desafio
      </h3>
      <p className="text-lg text-gray-800 mb-3 leading-normal">
        Você deve implementar o design a seguir. Contém uma barra do topo, um
        formulário e a visualização dos valores do form. Você deve mostrar os
        valores aonde está escrito "Valores do Formulário" para demonstrar seu
        conhecimento com gerenciamento de Forms.
      </p>
      <p className="text-lg text-gray-800 mb-3 leading-normal">
        Este projeto já vem com TailwindCSS instalado, porém você não é obrigado
        a usá-lo.
      </p>
      <p className="text-lg text-gray-800 mb-8 leading-normal">
        Assim que você terminar o teste, coloque-o no Github e envie um email
        para pacheco@atados.com.br
      </p>

      <h3 className="text-left text-2xl font-medium text-gray-700 mb-4">
        Ícones
      </h3>
      <div className="mb-8">
        <div className="space-x-4 mb-4">
          <Date size={24} className="inline-block" />
          <Image size={24} className="inline-block" />
          <Logo size={24} className="inline-block" />
          <Menu size={24} className="inline-block" />
          <Person size={24} className="inline-block" />
          <Place size={24} className="inline-block" />
          <Search size={24} className="inline-block text-indigo-500" />
        </div>
        <span className="text-gray-600 text-sm">
          Para definir a cor do ícone você deve definir o atributo color no css
        </span>
        <Logo className="inline-block ml-2 text-orange-500" />
      </div>
      <h3 className="text-left text-2xl font-medium text-gray-700 mb-4">
        Design a ser implementado
      </h3>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FHnYiTmDSL2Mq66kcLFMCOo%2FTeste-UI%3Fnode-id%3D4%253A24&chrome=DOCUMENTATION"
        allowFullScreen
        className="mx-auto w-full"
      ></iframe>
    </div>
  );
};

Home.displayName = "Home";
export default Home;
