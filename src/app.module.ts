import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
//import { PrismaService } from './prisma/prisma.service';



@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [AppController],
  //providers: [AppService, PrismaService],
  providers: [AppService],
})
export class AppModule {}
