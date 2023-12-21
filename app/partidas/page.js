'use client'
import Header from "../Header";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Data from "./data";
import Image from "next/image";
import { apiUrl } from '../functions';

export default function Partidas() {

    const router = useRouter();
    const [partidas, setPartidas] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            router.push('/login');
        } else {

            axios.get(apiUrl('http://api.futeboltotal.cloud/jogos'))
            .then(response => setPartidas(response.data))
            .catch(error => console.error('Erro ao obter dados do servidor:', error));
        }
      }, []);

    const filteredPartidas = partidas.filter(partida =>
        partida.nome_time_casa.toLowerCase().includes(searchQuery.toLowerCase()) ||
        partida.nome_time_visitante.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Header />



            <input
                className={styles.search}
                type="text"
                placeholder="Procure por um time"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className={styles.container}>
                <ul>
                    {filteredPartidas
                        .sort((a, b) => a.data_jogo.localeCompare(b.data_jogo))
                        .map(partida => (
                            <li key={partida.id} className={styles.match_date}>
                                Time Casa: {partida.nome_time_casa} - Time Visitante: {partida.nome_time_visitante} <br />
                                <span>Local do Jogo: </span> {partida.estadio_nome} <br />
                                <span>Árbitro: </span>  {partida.arbitro}
                                <Data partidas={[partida]} />
                            </li>
                        ))}
                </ul>

            </div>
        </>
    );
}
