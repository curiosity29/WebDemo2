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