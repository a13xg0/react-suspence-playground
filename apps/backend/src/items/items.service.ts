import { Injectable } from '@nestjs/common'
import { Item } from './models/items.model'
import { NewItemInput } from './dto/new-item.input'
import { ItemsArgs } from './dto/items.args'
import mockedItems from './models/items.mock'

@Injectable()
export class ItemsService {
  private readonly items: Item[] = []
  constructor() {
    // initialize items array with itemsMocks
    this.items.push(...mockedItems)
  }

  async create(data: NewItemInput): Promise<Item> {
    return {} as any
  }

  async findOneById(id: number): Promise<Item> {
    return {} as any
  }

  async findAll(itemsArgs: ItemsArgs): Promise<Item[]> {
    return this.items.slice(itemsArgs.skip, itemsArgs.skip + itemsArgs.take)
  }

  async remove(id: string): Promise<boolean> {
    return true
  }
}
