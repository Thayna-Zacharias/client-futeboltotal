'use client'

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from './Header';

const Noticia = ({ title, image, href }) => (
  <a href={href} className={styles.noticia_1} target='_blank'>
    <img src={image} className={styles.imageFirstPage} alt={title} />
    <h2 className={styles.titleFirstPage}>{title}</h2>
  </a>
);

const Home = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://api.futeboltotal.cloud/noticias');

        setNoticias(response.data.filter((item) => { return item.imageUrl && item.imageUrl != '' }));
      } catch (error) {
        console.error('Erro ao buscar API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.noticiasContainerMaxWidth}>
        <div className={styles.noticias}>
          {noticias && noticias.length > 0 ? (
            noticias.map((noticia, index) => (
              <div key={index} className={styles.noticiaContainer}>
                <Noticia title={noticia.title} image={noticia.imageUrl} href={noticia.url} />
              </div>
            ))
          ) : (
            <p>Nenhuma notícia encontrada.</p>
          )}
        </div>

      </div>
    </>
  );
};

export default Home;
