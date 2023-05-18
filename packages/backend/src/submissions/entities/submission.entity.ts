import { Submission_Status } from "@prisma/client"
import { ArrayMinSize, IsEnum, IsNotEmpty, IsString, IsUUID, isNotEmpty, isString } from "class-validator"

export class SubmissionEntitiy {
    @IsUUID()
    id:string

    @IsNotEmpty()
    @IsString()
    linkId:string

    @IsString()
    @IsNotEmpty()
    linkName:string

    @IsNotEmpty()
    @IsString()
    description:string

    @IsString()
    adminComment:string

    @IsEnum(Submission_Status)
    status:Submission_Status
}
