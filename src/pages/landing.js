import React from 'react';
import Live from '../images/live.jpg';
import Play from '../images/play.jpg';
import Work from '../images/work.jpg';

export const styles = {
  masthead: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '@media only screen and (max-width: 800px)': {
      minHeight: '100vh'
    }
  },
  card: {
    margin: '0.3em',
    position: 'relative',
    '@media only screen and (max-width: 800px)': {
      minWidth: '100%',
      height: 'auto',
      paddingTop: '2em',
      paddingBottom: '2em'
    }
  },
  cardImage: {
    maxWidth: '100%',
    marginLeft: '15px',
    borderBottom: '10px solid var(--gosea-primary-red)',
    '@media only screen and (max-width: 1024px)': {
      marginLeft: '0px',
      width: '100%',
    }
  },
  heading: {
    width: '37px',
    height: '28px',
    fontFamily: 'Helvetica',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333333',
    paddingTop: '0.5em',
    paddingLeft: '0.7em'
  },
  ventureOutofSinga: {
    width: '100%',
    height: '50px',
    fontFamily: 'Helvetica',
    fontSize: '14px',
    color: '#666666',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '0.3em',
  },
  borderLineFull: {
    width: '86%',
    height: '1px',
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '1em',
    backgroundColor: '#a2a2a2'
  },
  cardImageText: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: 'auto',
    color: 'white',
    bottom: '30%',
    right: '13px',
    fontSize: '36',
    fontWeight: 'bold',
    padding: '15px',
    borderLeft: '10px solid var(--gosea-primary-red)',
    '@media only screen and (max-width: 1024px)': {
      right: '0px',
    },
  }
};

export const LandingCard = () => (
  <div className="masthead-component" >
      <div className="ui three column grid container">
        <div className="column" >
          <div className="ui" style={styles.card} >
            <div style={styles.cardImageText}>
                  LIVE
            </div>
            <div>
              <img style={styles.cardImage} src={Live} />
            </div>
            <div style={styles.heading}>Live</div>
            <div style={styles.ventureOutofSinga}>
            Venture out of Singapore and experience local life in another city.
            Live like a local and immerse in its culture.
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui" style={styles.card} >
            <div style={styles.cardImageText}>
                 WORK
            </div>
            <div>
              <img style={styles.cardImage} src={Work} />
            </div>
            <div style={styles.heading}>Work</div>
            <div style={styles.ventureOutofSinga}>
              Work in Southeast Asia through a selected internship,
              one of the fastest growing region in the world.
              Level up your skills and gain a regional network in another city.
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui" style={styles.card} >
            <div style={styles.cardImageText}>
                  PLAY
            </div>
            <div className="ui">
              <img style={styles.cardImage} src={Play} />
            </div>
            <div style={styles.heading}>Play</div>
            <div style={styles.ventureOutofSinga}>
              Connect with local friends and explore the country.
              Explore, wander and have unforgettable experiences.
            </div>
          </div>
        </div>
      </div>
  </div>);

export default LandingCard;
