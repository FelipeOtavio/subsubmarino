import { useEffect, useState, useCallback } from "react";
import { formataValor } from "../../components/Main";
import { useHistory, Link } from "react-router-dom";

export const Sobre = () => {


    return(
        <>

            <h1 className="text-center">Sobre</h1>
            <div className="container text-center">
                <p> Sua história começou quando Antônio Bonchristiano (presidente), Marcelo Ballona
                 (vice-presidente de marketing) e Flávio Jansen (diretor de tecnologia) a idealizaram criando a
                  empresa TBL S.A. Em vez de começar do zero, e como parte do investimento inicial, compraram
                   uma das primeiras e maiores livrarias virtuais da época, a Booknet. Adquiriam, assim, os seus
                    ativos, a marca, o site de domínio da empresa, uma carteira de 50 mil clientes cadastrados e a 
                    experiência de trabalho de mais de quatro anos no ramo.</p>
                <p>Submarino é uma empresa brasileira de comércio  eletrônico. Criada em 1999,
                 foi uma das pioneiras do Brasil neste segmento. Em 2006, juntou-se com a Americanas.com,
                criando a B2W. É uma loja virtual oficializada pela Associação Brasileira dos Produtores de Discos
                 e pela Federação Internacional da Indústria Fonográfica.</p>
            </div>
        </>
    )
}