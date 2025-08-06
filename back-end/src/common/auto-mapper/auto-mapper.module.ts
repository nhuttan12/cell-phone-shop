import { Module } from '@nestjs/common';
import { UserProfile } from './profiles/user/user.profile';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  providers: [UserProfile],
  exports: [AutomapperModule],
})
export class AutoMapperModule {}
