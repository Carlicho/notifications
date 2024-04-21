import { Controller, Get } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
    @Get()
    notifications() {
        return 'you have a lot of notifications, your awsome(?'
    }
    
}
