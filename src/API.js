import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import {createKnowledge, deleteKnowledge} from './graphql/mutations';
import { getKnowledge, listKnowledges } from './graphql/queries';
import {filterKnowledge, UserKnowledge} from './graphql/customQuery';


//#region Knowledge frame

async function FetchKnowledge() {
    const apiData = await API.graphql({ query: listKnowledges });
    const stuffFromAPI = apiData.data.listKnowledges.items;
    //console.log(stuffFromAPI);
    return stuffFromAPI;

}

async function CreateKnowledge(data) {
    const apiData = await API.graphql({ query: createKnowledge, variables: { input: data } });
    //const stuffFromAPI = apiData.data.listKnowledges.items;
}

async function DeleteKnowledge(id) {
    await API.graphql({ query: deleteKnowledge, variables: { input: { id } } });
}

async function SearchKnowLedge(inputData){
    const apiData = await API.graphql({ query: filterKnowledge, variables: { input: {elementName: '1'} } });
    console.log(apiData)
    const stuffFromAPI = apiData.data.listKnowledges.items;
    return stuffFromAPI;
}

function SearchKnowLedgeName(name, knowledgeList){
    return knowledgeList.filter(knowledge => knowledge.elementName == name)
}

//#endregion 


//#region Course part

async function SearchUserKnowLedge(inputData){
    const apiData = await API.graphql({ query: UserKnowledge, variables: { input: { inputData } } });
    const stuffFromAPI = apiData.data.listKnowledges.items;
    return stuffFromAPI;
}





//#endregion 



//#region export

export {SearchUserKnowLedge, FetchKnowledge, CreateKnowledge, DeleteKnowledge, SearchKnowLedge};

//#endregion