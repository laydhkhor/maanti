import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './hero'
import { categoryType } from './category'
import { productType } from './product'
import { postType } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, categoryType, productType, postType],
}
