import { Controller, Body } from '@nestjs/common';
import { RowService } from '../row/row.service';
import { WebsocketGateway } from 'src/websocket.gateway';

@Controller('webhook')
export class WebhookController {
  constructor(
    private readonly rowService: RowService,
    private readonly websocketGateway: WebsocketGateway,
  ) {}

  async handleWebhook(@Body('data') data: any) {
    try {
      const { value } = data;

      const newRow = await this.rowService.createRow(value);

      this.websocketGateway.sendUpdate(newRow);

      return { success: true, row: newRow };
    } catch (error) {
      return {
        success: false,
        message: 'Error occurred while saving data',
        error: error.message,
      };
    }
  }
  //   @Post()
  //   async handleWebhook(@Body('data') data: string) {
  //     this.websocketGateway.sendUpdate(data);
  //     // logic
  //     try {
  //       const newRow = await this.rowService.createRow(data);
  //       return { success: true, row: newRow };
  //     } catch (error) {
  //       return {
  //         success: false,
  //         message: 'Error occurred while saving data',
  //         error: error.message,
  //       };
  //     }
  //   }
}
