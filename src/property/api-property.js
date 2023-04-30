import { URL } from '../base'
const queryString = require('query-string');

const create = async (params, credentials, property) => {
    try {
      let response = await fetch(`${URL}/api/property/by/`+ params.userId, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
          },
          body: property
        })
        return response.json()
      }catch(err) {
        console.log(err)
      }
  }

  //API to list property by landlord
const listByLandlord = async (params, credentials, signal) => {
  try {
    let response = await fetch(`${URL}/api/property/by/`+ params.userId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return response.json()
  } catch(err) {
    console.log(err)
  } 
}

// API endpoint for listing all properties
const listAllProperties = async (signal) => {
  try {
    let response = await fetch(`${URL}/api/property/allproperty`,{
      method: 'GET',
      signal: signal
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

//search property API
const searchProperty = async (params, signal) => {
  const query = queryString.stringify(params)
  try {
    let response = await fetch(`${URL}/api/property/searchproperty?`+query, {
      method: 'GET',
    })
    return response.json()
  } catch(err){
    console.log(err)
  }
}

//list properties by categories
const listCategories = async (signal) => {
  try {
    let response = await fetch(`${URL}/api/property/categories`, {
      method: 'GET',
      signal: signal
    })
    return response.json()
  } catch(err) {
    console.log(err)
  }
}

// notify api
const like = async (params, credentials, propertyId) => {
  try {
    let response = await fetch(`${URL}/api/property/like`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify({userId:params.userId, propertyId: propertyId})
    })
    return await response.json()
  } catch(err){
    console.log(err)
  }
}

const unlike = async (params, credentials, propertyId) => {
  try {
    let response = await fetch(`${URL}/api/property/unlike`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify({userId:params.userId, propertyId: propertyId})
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

//favourite API /api/property/favourite
const favourite  = async (signal) => {
  try {
    let response = await fetch(`${URL}/api/property/favourite`, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }  
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const readPropertyViews = async (params, signal) => {
  try {
    let response = await fetch(`${URL}/api/property/` + params.propertyId, {
      method: 'GET',
      signal: signal
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const SavedProperty = async (params, credentials, signal) => {
  try {
    let response = await fetch(`${URL}/api/likescount/` + params.userId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const searchPrice = async (params, signal) => {
  const query = queryString.stringify(params)
  try {
    let response = await fetch(`${URL}/api/property/pricesearch?`+query, {
      method: 'GET',
    })
    return response.json()
  } catch(err) {
    console.log(err)
  }
}

const update = async (params, credentials, property) => {
  try {
    let response = await fetch(`${URL}/api/property/` + params.userId +'/'+params.propertyId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: property
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const remove = async (params, credentials) => {
  try {
    let response = await fetch(`${URL}/api/property/` + params.userId +'/'+params.propertyId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return response.json()
  } catch(err) {
    console.log(err)
  }
}

export {
    create,
    listByLandlord,
    listAllProperties,
    searchProperty,
    listCategories,
    like,
    unlike,
    favourite,
    readPropertyViews,
    SavedProperty,
    searchPrice,
    update,
    remove
}