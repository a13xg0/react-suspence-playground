import { Item } from './models/items.model'
import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { ItemsService } from './items.service'
import { ItemsArgs } from './dto/items.args'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

@Resolver((of) => Item)
export class ItemsResolver {
  constructor(private itemsService: ItemsService) {}

  @Query((returns) => Item)
  async item(@Args('id', { type: () => Int }) id: number) {
    return this.itemsService.findOneById(id)
  }

  @Query((returns) => [Item])
  async items(@Args() itemsArgs: ItemsArgs): Promise<Item[]> {
    await delay(2000)
    return this.itemsService.findAll(itemsArgs)
  }
}
