export const filterKnowledge = /* GraphQL */ `
query FilterKnowledge(
    $id: ID, 
    $elementName: ElementName,
    $type: Type
    ) 
{
    getKnowledge 
        (
        id: $id,
        elementname: $ElementName,
        type: $type
        ) 
    {
        Knowledge
        ( 
            where elementName == elementName
        )
    {
      id
      elementName 
      type
      Date
      rating
      UserID
      ownedBy {
        userName
      }
    }
}
`;

export const UserKnowledge = /* GraphQL */ `
query userKnowledge(
    $preference: Preference
    ) 
    getKnowledge 
        (
            preference: $preference
        ) 
    {
    Knowledge(
        where Knowledge.preference == preference
    )
        {
            elementName
            type
        }

`

