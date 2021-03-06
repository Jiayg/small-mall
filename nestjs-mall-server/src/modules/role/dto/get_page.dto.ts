import { ApiProperty } from "@nestjs/swagger";
import { PageInDto } from "@/common/basemodel";

export class GetPageDto extends PageInDto {
    @ApiProperty({ title: '角色名称' })
    name?: string
}