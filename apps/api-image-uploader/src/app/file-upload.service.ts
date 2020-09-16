import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import {
  Column,
  Entity,
  LessThanOrEqual,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Entity()
export class UploadFile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  image: string;
  @Column()
  createdAt: Date;
  @Column()
  ttl: Date;
}
const IMAGE_AVAILABILITY_SECONDS = 60;
@Injectable()
export class FileUploadService {
  constructor(
    @InjectRepository(UploadFile)
    private readonly uploadRepo: Repository<UploadFile>
  ) {}
  async uploadFile(image: any) {
    await this.removeOldFiles();
    const img = await this.transformImage(image);
    return await this.uploadRepo.save(img);
  }
  async getImage(id: number) {
    return await this.uploadRepo.findOne(id);
  }
  private async transformImage(image: any) {
    const createdAt = new Date();
    const ttl = new Date().setSeconds(
      createdAt.getSeconds() + IMAGE_AVAILABILITY_SECONDS
    );
    const resizedImage = await this.resizeFile(image);
    return { resizedImage: resizedImage, createdAt, ttl };
  }

  async resizeFile(image) {
    return await sharp(image).resize(300, 300).toBuffer();
  }

  async removeOldFiles() {
    const remove = new Date().setSeconds(
      new Date().getSeconds() + IMAGE_AVAILABILITY_SECONDS
    );
    return this.uploadRepo
      .createQueryBuilder()
      .delete()
      .from(UploadFile)
      .where({ ttl: LessThanOrEqual(remove) });
  }
}
