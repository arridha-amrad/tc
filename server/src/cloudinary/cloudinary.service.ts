import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.v2.config({
      api_key: process.env.CLOUDINARY_KEY ?? '',
      api_secret: process.env.CLOUDINARY_SECRET ?? '',
      cloud_name: process.env.CLOUDINARY_NAME ?? '',
    });
  }
  async upload(file: Express.Multer.File) {
    try {
      const result = await cloudinary.v2.uploader.upload(
        file.path,
        {
          folder: 'twitter-clone',
          transformation: {
            quality: 85,
          },
        },
        (error, _) => {
          if (error) {
            throw error;
          }
        },
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async remove(url: string) {
    try {
      const publicId = url
        .slice(url.lastIndexOf('twitter-clone'))
        .split('.')[0];
      await cloudinary.v2.uploader.destroy(publicId);
    } catch (err) {
      throw err;
    }
  }
}
