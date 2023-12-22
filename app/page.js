'use client'

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from './Header';
import { apiUrl } from './functions';
import Footer from './footer';

const Noticia = ({ title, image, href }) => (
  <a href={href} className={styles.noticia_1} target='_blank'>
    <img src={image} className={styles.imageFirstPage} alt={title} />
    <h2 className={styles.titleFirstPage}>{title}</h2>
  </a>
);


const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const [noticiasComImagem, setNoticiasComImagem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl('http://api.futeboltotal.cloud/noticias'));

        const noticiasComImagem = response.data.filter((item) => item.imageUrl && item.imageUrl !== '');

        setNoticiasComImagem(noticiasComImagem);
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
          {noticiasComImagem.length > 0 && (
            <div className={styles.noticiasComImagem}>
                <div className={styles.noticiaContainer}>
                  <Noticia title={noticiasComImagem[0].title} image={noticiasComImagem[0].imageUrl} href={noticiasComImagem[0].url} />
                </div>
                <div className={styles.noticiaContainer}>
                  <Noticia title={noticiasComImagem[1].title} image={noticiasComImagem[1].imageUrl} href={noticiasComImagem[1].url} />
                </div>
                <div className={styles.noticiaContainer}>
                  <Noticia title={noticiasComImagem[2].title} image={noticiasComImagem[2].imageUrl} href={noticiasComImagem[2].url} />
                </div>
                <div className={styles.noticiaContainer}>
                  <Noticia title={noticiasComImagem[3].title} image={noticiasComImagem[3].imageUrl} href={noticiasComImagem[3].url} />
                </div>
                <div className={styles.noticiaContainer}>
                  <Noticia title={noticiasComImagem[4].title} image={noticiasComImagem[4].imageUrl} href={noticiasComImagem[4].url} />
                </div>
                <div className={styles.noticiaContainer}>
                  <Noticia title={noticiasComImagem[5].title} image={noticiasComImagem[5].imageUrl} href={noticiasComImagem[5].url} />
                </div>

            </div>
          )}
        </div>
      </div>

      <Footer />

    </>
  );
};

export default Home;