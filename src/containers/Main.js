import React, { Component } from 'react';
import { TopSection } from '../components/TopSection/index';
import FilterSection from '../components/FilterSection/Filter';
import Cases from '../components/Cases/Cases';
import Clients from '../components/Clients/Clients';
import ContactForm from '../components/ContactForm/ContactForm';
import { Footer } from '../components/Footer/index';

class Main extends Component {
  state = {
    cases: [],
    sortedCases: {
      smallCases: [],
      normalCases: [],
      bigCases: [],
    },
    clients: [],
    isScrolled: false,
    menuShown: false,

    quote: {
      text: 'Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.',
      name: 'Matthijs ten Brink',
      position: 'CEO, Transavia',
    },
  };

  checkScrollEvent = (event) => {
    if (window.scrollY > 20) {
      this.setState({
        isScrolled: true,
      });
    } else {
      this.setState({
        isScrolled: false,
      });
    }
  };

  componentDidMount = () => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cases: data[0].cases,
          clients: data[0].clients,
        });
      })
      .catch(console.log);

    window.addEventListener('scroll', this.checkScrollEvent);
  };

  render() {
    return (
      <>
        <TopSection />
        <FilterSection />

        <div className='cases-list'>
          <Cases cases={this.state.cases} quote={this.state.quote} />
        </div>

        <section className='clients'>
          <Clients clients={this.state.clients} />
        </section>

        <ContactForm />

        <Footer />
      </>
    );
  }
}
export default Main;
