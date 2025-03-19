import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'https://test-task5-front.vercel.app', // URL вашого фронтенду на Vercel
    methods: 'GET,POST,PATCH,DELETE',
    credentials: true,
  };

  const configService = app.get(ConfigService);
  console.log('DATABASE_URL:', configService.get('DATABASE_URL'));

  app.enableCors(corsOptions);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
