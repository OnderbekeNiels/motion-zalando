import Head from 'next/head';
import React from 'react';
import Fade from 'react-reveal/Fade';
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


export default function Home() {
  return (
    <div>
      <Head>
        <title>Zalando - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Section className='o-section--md'>
          <Row className='o-row--md'>
            <Container className='u-text--align-center'>
              <h1 className="u-text-headline u-mb--sm">De nummer 1 online kledingwinkel in België</h1>
              <h2 className="u-text-subheadline u-mb--xxl">Verfris je kleerkast of accessoire collectie<br />in een paar klikken.</h2>
              <Button text='Start met shoppen' className='c-button--cta' href='https://www.zalando.be/'></Button>
            </Container>
          </Row>
          <Row className='o-row-half--md u-bg-color-accents--blue-500'>
            <Container className='u-flex-container u-flex-justify-content--center'>
              <div className="c-screencast u-bg-color-neutral--100">
              </div>
            </Container>
          </Row>
          <Row className='o-row--sm u-bg-color-accents--orange-500'>
            <Container className='u-flex-container u-flex-justify-content--space-between'>
              <DeliveryServiceIcon href='https://www.dhlexpress.be' src='/img/svg/dhl.svg' />
              <DeliveryServiceIcon href='https://www.bpost.be/' src='/img/svg/bpost.svg' />
              <DeliveryServiceIcon href='https://www.ups.com/be' src='/img/svg/ups.svg' />
              <DeliveryServiceIcon href='https://www.dpd.com/be/' src='/img/svg/dpd.svg' />
            </Container>
          </Row>
        </Section>
        <Section className='o-section--md'>
          <Row className='o-row--md'>
            <Container className='u-text--align-center'>
              <h1 className="u-text-headline">Wat maakt zalando uniek</h1>
            </Container>
          </Row>
          <Row className='o-row--md u-bg-color-accents--yellow-250'>
            <Fade bottom>
              <Container className='c-card-container'>
                <Card title='Bewaar de artikelen die je leuk vindt.' description='Geef de artikelen die jouaantrekken een hartje & vindt deze steeds terug tijdens het scrollen door ons assortiment.' animation={heartPop} />
                <Card title='Nieuw kledingstijl ? Help! ' description='Scroll door vele verschillende stijlen en vindt de look die bij jou past! Zalando sorteert ze alvast voor jou.' animation={clothesCarousel} />
                <Card title='Betalen? Mogelijkheden genoeg!' description='Betalen bij zalando is een fluitje van een cent. Betaal met Bancontact, Paypall, Meastro, Mastercard, Visa, Amex of gewoon met een overschrijving.' animation={card} />
              </Container>
            </Fade>
          </Row>
        </Section>
        <Section className='o-section--md'>
          <Row className='o-row--md'>
            <Container className='u-text--align-center'>
              <h1 className="u-text-headline">Ontdek zalando</h1>
              <h2 className="u-text-subheadline">Bekende merken, simple, accesoires, … <br />We hebben het allemaal</h2>
            </Container>
          </Row>
          <Row className='o-row-half--md o-row--splitted-right u-mb--xxxl u-bg-color-accents--green-500'>
            <Container className='o-container--splitted-right'>
              <Article title='Bekende merken' description='Bij zalando vind je alle grote merken die nu hip zijn. Altijd mee met de laatste mode en trends.' imgSrc='/img/png/branch.png' imgAlt='Foto van man in kleding van Lacoste.' imgWidth='680px' imgHeight='424px' hasButton={true} buttonTitle='Shop hier' href='https://www.zalando.be/luxe-herenkleding/' />
            </Container>
          </Row>
          <Row className='o-row-half--md o-row--splitted-left u-mb--xxxl u-bg-color-accents--cyan-500 u-flex-9-of-10'>
            <Container className='o-container--splitted-left'>
              <Article reverse={true} title='Ongezien groot aanbod' description='Scroll uren door kleding zonder je te vervelen. Hier vind je altijd wel iets dat je wil hebben.' imgSrc='/img/png/clothes.png' imgAlt='Foto van kleding op een rek.' imgWidth='680px' imgHeight='424px' />
            </Container>
          </Row>
          <Row className='o-row-half--md o-row--splitted-right u-bg-color-accents--gold-500  u-flex-9-of-10'>
            <Container className='o-container--splitted-right'>
              <Article title='zalando lounge' description='Op zoek naar een deal? Op zalando lounge vind je steeds kortingen op zowel dames als heren kleding & accesoires. Zeker het bekijken waard.' imgSrc='/img/png/lounge.png' imgAlt='Foto van accesoires.' imgWidth='680px' imgHeight='424px' hasButton={true} buttonTitle='Shop hier' href='https://www.zalando-lounge.com' />
            </Container>
          </Row>
        </Section>
        <Footer className='u-bg-color-accents--purple-500' />
      </main>
    </div>
  )
}
