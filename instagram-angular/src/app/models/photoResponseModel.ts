import { Photo } from "./photo.component";
import { ResponseModel } from "./responseModel";

export interface PhotoResponseModel extends ResponseModel{
    data:Photo[]
}