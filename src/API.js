import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import mutations from './graphql'

const initialFormState = {
    elementName: '',
    type: '',
    Date: '',
    rating: '',
    UserID: ''
  }

//#region Knowledge frame

async function fetchKnowledge() {
    const apiData = await API.graphql({ query: mutations.fetchKnowledge });
    const stuffFromAPI = apiData.data.listNotes.items;
    return stuffFromAPI;
}

async function createKnowledge(data) {
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
}


//#endregion 


//#region Course part

async function fetchKnowledge() {
    const apiData = await API.graphql({ query: mutations.fetchKnowledge });
    const stuffFromAPI = apiData.data.items;
    return stuffFromAPI;
}



//#endregion 