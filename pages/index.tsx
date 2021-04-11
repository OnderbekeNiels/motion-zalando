import Head from 'next/head';
import React from 'react';

import { GoogleFonts } from "next-google-fonts";

import Article from '../components/Article';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/objects/Container';
import Header from '../components/Header';
import Row from '../components/objects/Row';
import Section from '../components/objects/Section';
import Footer from '../components/Footer';
import DeliveryServiceIcon from '../components/DeliveryServiceIcon';
import heartPop from '../lotties/heartPop.json';
import clothesCarousel from '../lotties/clothesCarousel.json';
import card from '../lotties/card.json';
import Screencast from '../components/Screencast';


export default function Home() {
  return (
    <div>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Taviraj:wght@400;700&display=swap"/>
      <Head>
        <title>Zalando - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Section className='o-section--md'>
          <Row className='o-row--md'>
            <Container className='u-text--align-center'>
              <h1 className="u-text-headline u-mb--md">De nummer 1 online kledingwinkel in België</h1>
              <h2 className="u-text-subheadline u-mb--xxl">Verfris je kleerkast of accessoire collectie<br />in een paar klikken.</h2>
              <Button text='Start met shoppen' className='c-button--cta' href='https://www.zalando.be/'></Button>
            </Container>
          </Row>
          <Row className='o-row-half--md u-bg-color-accents--blue-500'>
            <Container className='u-flex-container u-flex-justify-content--center'>
              <Screencast/>
            </Container>
          </Row>
          <Row className='o-row--sm u-bg-color-accents--orange-500'>
            <Container className='u-flex-container u-flex-justify-content--center'>
              <DeliveryServiceIcon href='https://www.dhlexpress.be' svg={<svg xmlns="http://www.w3.org/2000/svg" className='c-delivery-service-icon__svg' viewBox="0 0 240 33.976">
                <g id="dhl" transform="translate(-26.001 -223.44)">
                  <g id="Group_3" data-name="Group 3" transform="translate(26.001 223.44)">
                    <path id="Path_11" data-name="Path 11" d="M115.251,257.378h22.012l8.363-11.325H123.614ZM26,250.515v2.4H56.676l1.762-2.4Zm64.837-4.462c-3.263,0-2.25-1.351-1.725-2.063,1.05-1.424,2.85-3.9,3.9-5.287s1.05-2.213-1.05-2.213H72.838L57.426,257.415H94.963c12.412,0,19.312-8.438,21.45-11.362ZM209.9,243.466l14.738-20.026H201.313l-14.737,20.026ZM61.739,246.053H26v2.4H59.976Zm41.625-9.975c-1.05,1.424-2.812,3.9-3.862,5.325-.525.75-1.538,2.063,1.725,2.063h17.1s2.738-3.751,5.062-6.9c3.151-4.275.262-13.124-10.95-13.124H68.227l-7.65,10.424h41.775C104.451,233.865,104.414,234.69,103.363,236.078ZM26,257.378H53.413l1.763-2.4H26Zm121.124,0h22.013l8.362-11.325H155.488C155.451,246.053,147.125,257.378,147.125,257.378Zm83.252.038H266v-2.4H232.139Zm8.362-11.363-1.762,2.4H266v-2.4Zm-5.062,6.862H266v-2.4H235.438ZM172.1,223.44l-8.438,11.475h-9.825l8.439-11.475H140.263l-14.738,20.026h53.85l14.737-20.026Zm12.564,22.613s-1.614,2.212-2.4,3.263c-2.775,3.749-.339,8.1,8.7,8.1h35.363l8.361-11.362Z" transform="translate(-26.001 -223.44)" fill="#fff" />
                  </g>
                </g>
              </svg>
              } />
              <DeliveryServiceIcon href='https://www.bpost.be/' svg={<svg xmlns="http://www.w3.org/2000/svg" className='c-delivery-service-icon__svg' viewBox="0 0 99.203 78.775">
                <g id="bpost" transform="translate(-6.399 -12.493)">
                  <path id="Path_14" data-name="Path 14" d="M86.125,53.543c-.351,6.41-2.378,13.906-6.315,22.063-9.924,20.508-29.019,34.359-42.417,29.38C27.143,101.17,25.36,86.964,30.712,70.3L42.681,66.7a52.818,52.818,0,0,0-2.983,4.97C32.973,84.453,32.508,97.8,38.68,101.482c6.157,3.683,16.609-3.7,23.343-16.467C67.1,75.374,68.616,65.42,66.4,59.521l19.721-5.978" transform="translate(-10.162 -19.699)" fill="#fff" />
                  <path id="Path_15" data-name="Path 15" d="M112.78,42.187a3.132,3.132,0,0,1-.086.327C101.182,86.8,58.259,117.248,32.38,106.362c-13.839-5.831-18.969-18.577-18.8-34.161l10.294-3.125c-3.56,16.069-.561,29.611,9.773,34.288,14.6,6.589,37.543-10.593,48.445-32.878a80.367,80.367,0,0,0,7.3-21.221l23.386-7.077" transform="translate(-7.178 -17.312)" fill="#fff" />
                  <path id="Path_16" data-name="Path 16" d="M45.058,51.84C55.568,39.985,70.465,32.1,77.594,38.659l6.074-8.243c-11.534-10.2-29.642,1.024-40.856,16.711l2.246,4.714" transform="translate(-13.326 -14.014)" fill="#fff" />
                  <path id="Path_17" data-name="Path 17" d="M48.756,61.459c6.176-7.675,13.459-11.38,18.188-8.551a7.238,7.238,0,0,1,2.107,1.94l7-9.609c-6.626-6.777-20.268.518-29.753,11.056l2.459,5.164" transform="translate(-14.058 -17.401)" fill="#fff" />
                </g>
              </svg>} />
              <DeliveryServiceIcon href='https://www.ups.com/be' svg={<svg xmlns="http://www.w3.org/2000/svg" className='c-delivery-service-icon__svg' viewBox="0 0 71.772 88">
                <g id="ups" transform="translate(0 0.008)">
                  <path id="Path_18" data-name="Path 18" d="M35.557,84.134c.729-.364,19.674-8.562,25.685-13.48,6.194-5.1,9.472-12.387,9.472-21.131V8.536l-.546-.182C55.049.157,36.286.7,35.375.7,34.647.7,15.884.157.764,8.354L.4,8.536V49.705c0,8.744,3.279,16.03,9.472,21.131,6.011,4.918,24.956,13.116,25.685,13.3" transform="translate(0.329 0.579)" fill="none" />
                  <path id="Path_19" data-name="Path 19" d="M35.886,85.623S15.848,76.88,9.655,71.961C3.1,66.5,0,59.028,0,50.466V7.84C15.848-.722,35.886.007,35.886.007S55.924-.722,71.772,7.84V50.284c0,8.562-3.1,16.03-9.655,21.5-6.194,5.1-26.231,13.844-26.231,13.844M2.915,50.466c0,8.015,2.915,14.573,8.562,19.127,5.1,4.19,20.22,10.93,24.41,12.751,4.19-1.822,19.491-8.744,24.41-12.751,5.647-4.554,8.562-11.294,8.562-19.127V8.569c-21.131-2-46.269-.911-65.943,17.305V50.466Z" transform="translate(0 0)" fill="#fff" />
                  <path id="Path_20" data-name="Path 20" d="M53.395,32.131c2.732,1.639,3.825,2.732,4.008,4.736,0,2.186-1.457,3.461-3.825,3.461a9.85,9.85,0,0,1-6.011-2.55v5.829a14.622,14.622,0,0,0,6.922,2c6.194,0,9.108-4.372,9.108-8.379.182-3.643-.911-6.558-6.194-9.655-2.368-1.457-4.19-2.368-4.19-4.554s2-3.1,3.643-3.1a8.6,8.6,0,0,1,5.647,2.55V17.012a10.054,10.054,0,0,0-6.922-2c-4.19.182-8.562,3.1-8.562,8.2.182,3.461,1.275,6.011,6.376,8.926M31.9,45.247a9.356,9.356,0,0,0,2.915.364c7.1,0,11.112-6.376,11.112-15.484,0-9.29-4.19-14.937-11.658-14.937a15.733,15.733,0,0,0-8.562,2.186V58.545H31.9v-13.3Zm0-24.774a7.688,7.688,0,0,1,2.186-.546c3.643,0,5.1,2.915,5.1,10.019,0,6.922-1.822,10.2-5.465,10.2a4.875,4.875,0,0,1-2-.364V20.473ZM12.772,45.611a16.63,16.63,0,0,0,9.472-2.55V15.554H15.869V39.418a4.622,4.622,0,0,1-2.915.729c-2.915,0-3.279-2.732-3.279-4.372V15.554H3.3V35.41c0,6.74,3.279,10.2,9.472,10.2M55.216,70.2v4.19h.729V72.754h.182l1.093,1.639h.911s-1.093-1.639-1.275-1.822a1.155,1.155,0,0,0,.911-1.093A1.293,1.293,0,0,0,56.309,70.2H55.216Zm1.093.546c.546,0,.729.364.729.546,0,.364-.182.729-.911.729h-.182V70.75h.364Z" transform="translate(2.711 12.323)" fill="#fff" />
                  <path id="Path_21" data-name="Path 21" d="M36.794,47.961a2.732,2.732,0,1,1-2.732-2.732,2.683,2.683,0,0,1,2.732,2.732M34.061,44.5a3.461,3.461,0,1,0,3.461,3.461A3.583,3.583,0,0,0,34.061,44.5" transform="translate(25.142 36.569)" fill="#fff" />
                </g>
              </svg>
              } />
              <DeliveryServiceIcon href='https://www.dpd.com/be/' svg={<svg xmlns="http://www.w3.org/2000/svg" className='c-delivery-service-icon__svg' viewBox="0 0 160 70.06">
                <g id="dpd" transform="translate(-5.086 -20.993)">
                  <path id="Path_23" data-name="Path 23" d="M6.6,36.26a17.578,17.578,0,0,1,1.953,1.107l7.879,4.59c.684.407,1.319.749,1.986,1.156L20.4,44.268c.342.179.635.391.993.57l9.328,5.453c.2.1.325.179.521.293.342.211.651.374.993.57l1.969,1.156c.358.212.668.375,1.009.57l1.97,1.156a1.086,1.086,0,0,1,.618.96V81.009a1.117,1.117,0,0,1-.342.749,6.968,6.968,0,0,1-.716.423c-1.774,1.058-1.53.879-3.207.016-.488-.26-1.058-.472-1.074-1.123-.065-1.449,0-3.044,0-4.493V58.756c0-1.644.065-1.189-2-2.442-2.556-1.53-5.177-2.963-7.749-4.493l-6.349-3.7c-.456-.26-.912-.553-1.384-.83l-2.084-1.2c-.26-.146-.456-.26-.716-.423-.5-.277-.96-.537-1.449-.814-.472-.293-.928-.554-1.4-.831L6.518,42.38c-.26-.163-.456-.277-.716-.423a5.914,5.914,0,0,1-.716-.407V71.339c0,1.986.033,2.377,1.628,3.337L32.5,89.88a6.264,6.264,0,0,0,2.6,1.172,3.681,3.681,0,0,0,1.872-.716L63.542,74.66c1.676-1.009,1.644-1.514,1.644-3.321V41.55c-.212.114-.374.2-.586.325l-1.156.684c-1.172.683-4.134,2.458-5.258,3.044-1.123.6-2.425,1.4-3.516,2.051l-2.328,1.351c-1.726,1.042-3.516,2.019-5.242,3.077-.961.57-1.335.1-2.393-.537-1.351-.8-.944-1.074-1.075-2.556a1.711,1.711,0,0,1,.179-1.074,1.887,1.887,0,0,1,.651-.521l2.328-1.335c2.034-1.2,4.1-2.344,6.1-3.565.277-.163.488-.277.749-.439.277-.163.521-.309.8-.456L59.8,38.473c.375-.228,3.581-2.149,3.874-2.214a1.2,1.2,0,0,0-.39-.277L41.175,23.921c-.733-.407-1.53-.765-2.247-1.2-.846-.521-1.774-.977-2.653-1.465a2.709,2.709,0,0,0-1.693-.212,3.282,3.282,0,0,0-.521.179c-.912.439-1.791.96-2.654,1.449l-9.751,5.307a3.308,3.308,0,0,1-.472.244l-3.516,1.937c-.179.081-.26.147-.456.244-1.2.6-3.142,1.726-4.444,2.425L9.237,34.746A20.02,20.02,0,0,0,6.6,36.26" transform="translate(0 0)" fill="#fff" fillRule="evenodd" />
                  <path id="Path_24" data-name="Path 24" d="M87.134,48.717a7.1,7.1,0,0,1,1.872-5.144l.2-.2.016-.016A6.767,6.767,0,0,1,93.45,41.7a10.413,10.413,0,0,1,4.8.765V56.009c-.472.049-1.026.179-1.514.212-2.588.211-5.648-.033-7.488-1.889a6.243,6.243,0,0,1-1.53-2.312A9.011,9.011,0,0,1,87.134,48.717ZM98.252,36.361l-.863-.309a10.463,10.463,0,0,0-1.026-.228,16.248,16.248,0,0,0-8.595.846,11.862,11.862,0,0,0-5.274,4.167,13.8,13.8,0,0,0-1.6,3.175,12.226,12.226,0,0,0-.342,1.27,16.527,16.527,0,0,0,.325,8.546,11.938,11.938,0,0,0,1.661,3.207,10.793,10.793,0,0,0,.814.96l1.254,1.172a11.253,11.253,0,0,0,1.888,1.2,15.226,15.226,0,0,0,4.541,1.514c.814.163,1.579.163,2.165.26.374.049.846.016,1.172.065l3.5-.114c.325-.032.765-.065,1.139-.1.325-.016.749-.065,1.074-.1,1.189-.146,2.556-.325,3.7-.57l.961-.228c.2-.049.423-.033.423-.228V24.8c0-.114-.049-.163-.163-.163H98.252Zm-57.69,5.584,1.579.521V56.009l-1.514.212c-.277.033-.57.016-.814.049l-1.058.016a9.833,9.833,0,0,1-3.174-.5A6.746,6.746,0,0,1,33.22,54.4C28.093,49.254,31.836,39.714,40.562,41.945Zm1.579-5.584a4.526,4.526,0,0,1-.423-.163C35.271,33.805,27.539,37.11,25,43.41c-.147.375-.293.814-.407,1.2a15.365,15.365,0,0,0,1.286,11.623,11.678,11.678,0,0,0,5.8,4.737,17.594,17.594,0,0,0,6.218,1.188,6.636,6.636,0,0,0,1.172.049c.846-.1,2.556-.049,3.5-.179.391-.049.733-.049,1.14-.1,1.774-.228,2.539-.342,4.281-.683l1.026-.228V24.641H42.141Zm10.695,1.465V71.881h6.918V42.4a15.328,15.328,0,0,1,1.677-.423c3.532-.586,7.586.081,9.034,3.76,1.091,2.784.538,6.821-1.986,8.855-.1.082-.163.114-.277.2s-.163.13-.277.212c-.114.065-.2.1-.293.146a4.327,4.327,0,0,1-.993.472,10,10,0,0,1-3.207.553v5.893c0,.309.912.1,1.514.1.309,0,.456-.033.814-.049a16.659,16.659,0,0,0,4.982-1.221c.228-.114.358-.163.586-.277.244-.114.374-.2.6-.325A9.2,9.2,0,0,0,73,59.607c3.435-2.6,4.949-6.186,4.949-11.525a12.071,12.071,0,0,0-4.037-9.262,10.154,10.154,0,0,0-1.628-1.172,12.957,12.957,0,0,0-2.2-1.042,15.959,15.959,0,0,0-3.972-.9c-.5-.016-.928-.1-1.514-.1A31.1,31.1,0,0,0,53.34,37.5c-.326.146-.5.13-.5.325" transform="translate(59.915 11.554)" fill="#fff" fillRule="evenodd" />
                </g>
              </svg>
              } />
            </Container>
          </Row>
        </Section>
        <Section className='o-section--md'>
          <Row className='o-row--md'>
            <Container className='u-text--align-center'>
              <h1 className="u-text-headline">Wat maakt zalando zo uniek?</h1>
            </Container>
          </Row>
          <Row className='o-row--md u-bg-color-accents--yellow-250'>
            
              <Container className='c-card-container'>
                <Card title='Bewaar de artikelen die je leuk vindt.' description='Geef de artikelen die jou aantrekken een hartje & vindt deze steeds terug na het scrollen door ons assortiment.' animation={heartPop} />
                <Card title='Nieuw kledingstijl ? Help! ' description='Scroll door vele verschillende stijlen en vindt de look die bij jou past! Zalando sorteert ze alvast voor jou.' animation={clothesCarousel} />
                <Card title='Betalen? Mogelijkheden genoeg!' description='Betalen bij zalando is een fluitje van een cent. Betaal met Bancontact, Paypal, Meastro, Mastercard, Visa, Amex of gewoonweg met een overschrijving.' animation={card} />
              </Container>
          </Row>
        </Section>
        <Section className='o-section--md'>
          <Row className='o-row--md'>
            <Container className='u-text--align-center'>
              <h1 className="u-text-headline">Ontdek zalando!</h1>
              <h2 className="u-text-subheadline">Bekende merken, simple, accesoires, … <br />We hebben het allemaal</h2>
            </Container>
          </Row>
          <Row className='o-row-half--md o-row--splitted-right u-mb--xxxl u-bg-color-accents--green-500'>
            <Container className='o-container--splitted-right'>
              <Article title='Bekende merken' description='Bij zalando vind je alle grote merken die nu hip zijn. Zo ben je altijd mee met de laatste mode en trends.' imgSrc='/img/png/branch.png' imgAlt='Foto van man in kleding van Lacoste.' imgWidth='680px' imgHeight='424px' hasButton={true} buttonTitle='Shop hier' href='https://www.zalando.be/luxe-herenkleding/' />
            </Container>
          </Row>

          <Row className='o-row-half--md o-row--splitted-left u-mb--xxxl u-bg-color-accents--cyan-500 u-flex-9-of-10'>
            <Container className='o-container--splitted-left'>
              <Article reverse={true} title='Ongezien groot aanbod' description='Scroll uren door kleding zonder je te vervelen. Hier vind je altijd wel iets dat je wil hebben.' imgSrc='/img/png/clothes.png' imgAlt='Foto van kleding op een rek.' imgWidth='680px' imgHeight='424px' />
            </Container>
          </Row>
          <Row className='o-row-half--md o-row--splitted-right u-bg-color-accents--gold-500  u-flex-9-of-10'>
            <Container className='o-container--splitted-right'>
              <Article title='zalando lounge' description='Op zoek naar een deal? Op zalando lounge vindt je steeds kortingen op zowel dames als heren kleding & accesoires. Zeker het bekijken waard.' imgSrc='/img/png/lounge.png' imgAlt='Foto van accesoires.' imgWidth='680px' imgHeight='424px' hasButton={true} buttonTitle='Shop hier' href='https://www.zalando-lounge.com' />
            </Container>
          </Row>
        </Section>
        <Footer className='u-bg-color-accents--purple-500' />
      </main>
    </div>
  )
}
