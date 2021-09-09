/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createKnowledge = /* GraphQL */ `
  mutation CreateKnowledge(
    $input: CreateKnowledgeInput!
    $condition: ModelKnowledgeConditionInput
  ) {
    createKnowledge(input: $input, condition: $condition) {
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
export const updateKnowledge = /* GraphQL */ `
  mutation UpdateKnowledge(
    $input: UpdateKnowledgeInput!
    $condition: ModelKnowledgeConditionInput
  ) {
    updateKnowledge(input: $input, condition: $condition) {
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
export const deleteKnowledge = /* GraphQL */ `
  mutation DeleteKnowledge(
    $input: DeleteKnowledgeInput!
    $condition: ModelKnowledgeConditionInput
  ) {
    deleteKnowledge(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      userName
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createPreference = /* GraphQL */ `
  mutation CreatePreference(
    $input: CreatePreferenceInput!
    $condition: ModelPreferenceConditionInput
  ) {
    createPreference(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
    }
  }
`;
export const updatePreference = /* GraphQL */ `
  mutation UpdatePreference(
    $input: UpdatePreferenceInput!
    $condition: ModelPreferenceConditionInput
  ) {
    updatePreference(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
    }
  }
`;
export const deletePreference = /* GraphQL */ `
  mutation DeletePreference(
    $input: DeletePreferenceInput!
    $condition: ModelPreferenceConditionInput
  ) {
    deletePreference(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
    }
  }
`;
