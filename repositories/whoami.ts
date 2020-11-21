import { loadProfile, Attributes } from '../utils/loader'

type ProfileContent = {
  body: string
  attributes: Attributes
}

export async function getWhoamiContent() {
  const { body, attributes } = (await loadProfile()) as ProfileContent
  return {
    body,
    updatedDate: attributes.date,
    description: attributes.description,
  }
}
