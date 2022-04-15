export class LoggingService {
  logStatusChange(status: string) {
    console.log('Foi alterado status do usuário para ' + status);
  }
}
