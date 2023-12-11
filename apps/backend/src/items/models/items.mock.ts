import { faker } from '@faker-js/faker'
import { Item } from './items.model'

const mockedItems: Item[] = []

const ITEMS_TO_MOCK = 50

for (let i = 0; i < ITEMS_TO_MOCK; i++) {
  mockedItems.push({
    id: i,
    title: faker.lorem.sentence(4),
    description: faker.lorem.sentence(),
    completed: faker.datatype.boolean(),
  })
}

export default mockedItems
