import {Item} from "./models/items.model";
import {Args, Int, Query, Resolver} from "@nestjs/graphql";
import {ItemsService} from "./items.service";
import {ItemsArgs} from "./dto/items.args";

@Resolver(of => Item)
export class ItemsResolver {
    constructor(
        private itemsService: ItemsService,
    ) {}

    @Query(returns => Item)
    async item(@Args('id', { type: () => Int }) id: number) {
        return this.itemsService.findOneById(id);
    }

    @Query(returns => [Item])
    async items(@Args() itemsArgs: ItemsArgs): Promise<Item[]> {
        return this.itemsService.findAll(itemsArgs);
    }
}
