import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const initialFormState = {
  elementName: '1',
  type: '1',
  Date: '1',
  rating: '1',
  UserID: '1'
}

const note1 = {
  elementName: '1111111',
  type: '1',
  Date: '1',
  rating: '1',
  UserID: '11111111'
}

const note2 = {
  elementName: '1',
  type: '2',
  Date: '2',
  rating: '2',
  UserID: '1'
}


const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        elementName
        type
      }
      nextToken
    }
  }
`;

const createNoteMutation = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      elementName
      type
    }
  }
`;

const deleteNoteMutation = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      elementName
      type
    }
  }
`;

//const initialFormState = { name: '', description: '' }
// const Header = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <App2 />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

const notesFromAPI = {
  note1,
  note2
}

function App2() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);


  async function onChange(e) {
    fetchNotes();
  }

  async function OnLoad(e) {
    fetchNotes();
    console.log(notesFromAPI);
  }


  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    //notesFromAPI = apiData.data.listNotes.items;
    // notesFromAPI = {
    //   note1,
    //   note2
    // }


    setNotes(notesFromAPI);
  }





  return (
    <div className="App">
      <h1>My another stupid App</h1>

      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value })}
        placeholder="element name"
        value={formData.elementName}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value })}
        placeholder="type"
        value={formData.type}
      />
      
      <div style={{ marginBottom: 30 }}>

      {
          notes.map(note => (
            <div key={note.elementName || note.type}>
              <h2>{note.elementName}</h2>
              <p>{note.type}</p>
            </div>
          ))
      }
      </div>

      

    </div>
  );
}

export default App2;