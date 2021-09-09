/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKnowledge = /* GraphQL */ `
  query GetKnowledge($id: ID!) {
    getKnowledge(id: $id) {
      id
      elementName
      type
      Date
      rating
      UserID
      ownedBy {
        id
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listKnowledges = /* GraphQL */ `
  query ListKnowledges(
    $filter: ModelKnowledgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKnowledges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        elementName
        type
        Date
        rating
        UserID
        ownedBy {
          id
          userName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      Name
      rating
      ownedBy {
        id
        userName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        rating
        ownedBy {
          id
          userName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPreference = /* GraphQL */ `
  query GetPreference($id: ID!) {
    getPreference(id: $id) {
      id
      Name
      createdAt
      updatedAt
    }
  }
`;
export const listPreferences = /* GraphQL */ `
  query ListPreferences(
    $filter: ModelPreferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
