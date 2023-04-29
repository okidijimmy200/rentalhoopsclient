import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import fakeMap from './../assets/images/fake-map2.jpg'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'
import Skeleton from './skeleton'
import { priceSearch } from '../store/actions/propertyActions'
import {useDispatch, useSelector } from 'react-redux'
import ImageCards from './ImageCards'
import {SliderData} from '../components/SliderData'
import SearchNav from '../contents/SearchNav'

const useStyles = makeStyles(theme => ({
    cardMap: {
        maxWidth: 600,
        margin: 'auto',
    },
    mediaMap: {
        width: '100%',
        height: '81vh',
        marginTop: '-2px'
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
      
}))

export default function PriceSearch({ match }) {
    const classes = useStyles()
    // const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const query = match.params.query

    const searchPrice = useSelector(state => state.priceSearchList)
    const {propertyPrice, error} = searchPrice

    useEffect(() => {
        dispatch(priceSearch(query))
    }, [dispatch, query ])
    return (
        <>
            <SearchNav />
                <section >
                    <Grid container spacing={0} style={{marginTop: '115px'}} >
                            <Grid item xs={12} sm={8} md={8} >
                                {/* {loading  ? <Skeleton /> :  */}
                                        <Grid container spacing={0}>
                                        {propertyPrice.map((property, i)=> {
                                            return <Grid item xs={12} sm={6} md={6} style={{marginTop: '5px', marginBottom: '10px'}} key={i}>            
                                                       <ImageCards property={property} slides={SliderData}/>
                                                    </Grid>
                                        })}
                                    </Grid>
                                {/* }    */}
                          </Grid>
                          <Grid item xs={12} md={4} sm={4}>
                                <Card className={classes.cardMap}>
                                    <CardMedia
                                    className={classes.mediaMap}
                                    image={fakeMap} 
                                    style={{position: 'fixed'}}
                                    />
                                </Card>
                         </Grid>
                    </Grid>
                    
                </section>
                              
        </>
    )
}
