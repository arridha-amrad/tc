import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RefTokenModule } from './ref-token/ref-token.module';
import { TweetsModule } from './tweets/tweets.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AuthModule, RefTokenModule, TweetsModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
