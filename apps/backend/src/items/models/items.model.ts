import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Item {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    title?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    completed?: boolean;
}
