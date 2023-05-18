import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/CreateCollection.dto';
import { UpdateCollectionDto } from './dto/UpdateCollection.dto';

@Injectable()
export class CollectionService {
  create(createCollectionDto: CreateCollectionDto) {
    return 'CreateCollectionDto';
  }
  findAll() {
    return 'findAll';
  }
  findOne(id: string) {
    return 'findAll';
  }
  update(id: string, updateCollectionDto: UpdateCollectionDto) {
    return 'updateCollectionDto';
  }
  remove(id: string) {
    return 'remove';
  }
}
