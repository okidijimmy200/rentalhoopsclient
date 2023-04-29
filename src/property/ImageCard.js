import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { SliderData } from './../components/SliderData'
import {Link} from 'react-router-dom'


const useStyles = makeStyles(theme => ({ 
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(12)
    }),
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px ${theme.spacing(1)}px`,
        color: theme.palette.protectedTitle,
        fontSize: '1.2em'
    },
    addButton: {
        float: 'right'
    },
    leftIcon: {
        marginRight: '8px'
    },
    avatar: {
        borderRadius: 0,
        width: 65,
        height: 40
    },
    listText: {
        marginLeft: 15
    },
    paper: {
        // padding: theme.spacing(2),
        height: '355px',
        width: 'auto',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        boxShadow: '0px 0px 0px 0px'
      },
      card: {
        height: '355px',
        width: '100%',
        margin: '0',
        padding: '0',
        border: '1px solid #d8d8d8',
        backgroundColor: '#fff',
        backgroundRepeat: 'repeat',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: '0px 0px 0px 0px'
      },
      media:{
        width:' 100%',
        height: '70%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top:' 0',
        zIndex:' 0'
      },
      data: {
        padding: '14px 15px 20px 10px',
        fontFamily: 'ConduitMdITCTTMedium',
        color:' #404040',
        textAlign: 'left',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        borderTop: '1px solid #d8d8d8',
        backgroundColor: '#fff',
      },
      location: {
        order: '1',
        marginBottom: '5px'
      },
      neighbourhood: {
        fontSize:' 20px',
        lineHeight: '20px',
        whiteSpace: 'normal',
        color: '#404040'
      },
      Text: {
        top: '231px',
        height:' 30%',
        width: '100%',
        position: 'absolute'
      },
      arrowLeft: {
        borderRadius: '3px',
        padding: '16px 32px',
        fontFamily: 'OpenSans-semibold',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
        height: '70%',
        position: 'absolute',
        left: '3px',
        top: '2px'
      },
      arrowWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        right: '0',
        left: '0',
        top: '0',
        bottom: '0'
      },
      arrowRight: {
        borderRadius: '3px',
        padding: '16px 32px',
        fontFamily: 'OpenSans-semibold',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
        height: '70%',
        position: 'absolute',
        top: '2px',
        right: '2px'
      },
      hood: {
        fontSize: '14px',
        lineHeight: '18px',
        color: '#767676'
      },
      listInfo: {
        order: '2',
        fontSize: '0'
      },
      price: {
        fontSize: '15px',
        fontWeight: 'bold',
        lineHeight: '20px',
        color:' #404040',
        display:'inline-block'
      },
      summary: {
        fontSize: '14px',
        lineHeight: '14px',
        color: '#767676'
      },
      btn: {
        minWidth: '280px',
        color: '#fff',
        backgroundColor: '#BA265D',
        textAlign: 'center',
        width:' 100%',
        maxWidth: '325px',
        whiteSpace: 'nowrap',
        borderRadius: '3px',
        padding: '16px 32px',
        fontFamily: 'OpenSans-semibold',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#ca5376'
        }
      },
      btnDiv: {
        width: '100%',
        margin: '45px auto 0 auto',
        textAlign: 'center'
      },
}))

export default function ImageCard( {slides , property}) {
    const classes = useStyles()
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = (e) => {
      e.preventDefault()
        //  console.log('event.currentTarget.dataset.id', event.currentTarget.dataset.id);
        if (current ===  length -1 ) {
          setCurrent(0)
        }
        else {
          setCurrent(current + 1)
        }
      }
  
      const prevSlide = (e) => {
        e.preventDefault()
        setCurrent(current === 0 ? length - 1 : current - 1);
      }
  
      if (!Array.isArray(slides) || slides.length <= 0){
        return null
      }
    return (
        <>
           <Link to={"/property/"+property.owner._id+"/" +property._id+"/edit"} style={{zIndex: -10, position: 'relative'}}>
                <Paper className={classes.paper} component='div'>
                              <Card className={classes.card}>
                              {SliderData.map((slide, index) => {
                              return(
                                <>
                                  {index === current && (
                                    <img className={classes.media} key={index} alt="pic" src={slide.image + property._id} />
                                  )}
                                  
                                </>
                              
                              )
                            })}
                              <Button component='div' className={classes.arrowLeft} disableRipple onClick={prevSlide}>
                              <div className={classes.arrowWrap}  >
                              <svg viewBox="0 0 18 18" role="img" alt='pic' aria-label="Previous" focusable="false" 
                              style={{
                                  display: 'block ',
                                  fill: 'rgb(255, 255, 255)',
                                  height: '24px',
                                  width: '24px'
                                  }}> 
                                  <path fillRule="evenodd" d="M13.703 16.293a1 1 0 1 1-1.415 1.414l-7.995-8a1 1 0 0 1 0-1.414l7.995-8a1 1 0 1 1 1.415 1.414L6.413 9l7.29 7.293z">
                                  </path> </svg>
                              </div>
                              </Button>
                              <Button className={classes.arrowRight} disableRipple  onClick={nextSlide}>
                              <div className={classes.arrowWrap}>
                              <svg viewBox="0 0 18 18" role="img" alt='pic' aria-label="Next" focusable="false" style={{
                                  display: 'block',
                                  fill:' rgb(255, 255, 255) ',
                                  height: '24px', 
                                  width: '24px'
                                  }}>                    
                              <path fillRule="evenodd" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z"></path>                
                              </svg>
                              </div>
                              </Button>
                              <CardContent className={classes.Text}>
                              <div className={classes.data}>
                              <div className={classes.location}>
                                  <Typography  component="p">
                                      <span className={classes.neighbourhood}> {property.name} {property.regionCategory}</span>
                                  </Typography>
                                  <Typography className={classes.hood}>
                                      {property.location}
                                  </Typography>
                              </div>
                              <div className={classes.listInfo}>
                                  <Typography className={classes.price}>
                                      Shs. {property.price}
                                  </Typography>
                                  <Typography component='div' className={classes.summary}>
                                  {property.bedRooms} BD {property.bathRooms} BA {property.familyNumber} FAMILY
                                  </Typography>
                                  
                              </div>
                              </div>
                              
                              </CardContent>
                              </Card>
                              
                              </Paper>
                            </Link>
        </>
    )
}
