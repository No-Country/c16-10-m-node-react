import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './application/account/account.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jioh19:jioh19@cluster0.3jxsbjs.mongodb.net/?retryWrites=true&w=majority',
    ),
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
